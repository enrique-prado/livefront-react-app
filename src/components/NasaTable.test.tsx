import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import '@testing-library/jest-dom';

// Mock the Link component from @tanstack/react-router
vi.mock('@tanstack/react-router', () => ({
  Link: ({ children }: { children: React.ReactNode }) => <div data-testid="mocked-link">{children}</div>
}));

// Import after the mock is set up
import NasaTable from './NasaTable';

describe('NasaTable Component', () => {
  // Create a new QueryClient for each test
  let queryClient: QueryClient;
  let originalFetch: typeof global.fetch;
  
  beforeEach(() => {
    // Save the original fetch
    originalFetch = global.fetch;
    
    // Reset mocks and create fresh clients before each test
    vi.resetAllMocks();
    
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          // Turn off retries to make testing easier
          retry: false,
          // Don't cache responses between tests
          cacheTime: 0
        }
      }
    });
  });
  
  afterEach(() => {
    // Restore the original fetch
    global.fetch = originalFetch;
  });
  it('renders without errors', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <NasaTable />
      </QueryClientProvider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('fetches and displays data', async () => {
    // Mock the data returned by fetch
    const mockData = [
      {
        date: '2004-04-23',
        title: 'Comet C/2001 Q4 (NEAT)',
        url: 'https://apod.nasa.gov/apod/image/0404/neatQ4_tan_c1.jpg',
      },
      {
        date: '2021-06-12',
        title: 'Eclipse on the Water',
        url: 'https://apod.nasa.gov/apod/image/2106/JunSE_DSC_7477b_1024.jpg',
      },
    ];
    
    // Mock the global fetch function
    const mockFetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData)
    });
    global.fetch = mockFetchSpy as any;

    render(
      <QueryClientProvider client={queryClient}>
        <NasaTable />
      </QueryClientProvider>
    );

    // Wait for the data to load
    await waitFor(() => {
      expect(mockFetchSpy).toHaveBeenCalled();
      expect(screen.getByText('Comet C/2001 Q4 (NEAT)')).toBeInTheDocument();
      expect(screen.getByText('Eclipse on the Water')).toBeInTheDocument();
    });
  });
});
