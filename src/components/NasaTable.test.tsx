import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import '@testing-library/jest-dom';

// Mock the Link component from @tanstack/react-router
vi.mock('@tanstack/react-router', () => ({
  Link: ({ children }: { children: React.ReactNode }) => <div data-testid="mocked-link">{children}</div>
}));

import NasaTable from './NasaTable';

describe('NasaTable Component', () => {
  let queryClient: QueryClient;
  let originalFetch: typeof window.fetch;
  
  beforeEach(() => {
    // Save the original fetch
    originalFetch = window.fetch;
    
    vi.resetAllMocks();
    
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false
        }
      }
    });
  });
  
  afterEach(() => {
    window.fetch = originalFetch;
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
    window.fetch = mockFetchSpy as typeof window.fetch;

    render(
      <QueryClientProvider client={queryClient}>
        <NasaTable />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(mockFetchSpy).toHaveBeenCalled();
      expect(screen.getByText('Comet C/2001 Q4 (NEAT)')).toBeInTheDocument();
      expect(screen.getByText('Eclipse on the Water')).toBeInTheDocument();
    });
  });
});
