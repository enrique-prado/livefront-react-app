export interface ImageData {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
    thumbnail_url: string;
}

// Use the API key from environment variables
export const API_KEY = import.meta.env.VITE_NASA_API_KEY;
