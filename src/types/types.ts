export interface UnsplashImage {
    id: string;
    alt_description: string;
    urls: {
        small: string;
        regular: string;
    };
    likes?: number,
    user?: {
        name: string
    }
}


export interface UnsplashApiResponse {
    total: number;
    total_pages: number;
    results: UnsplashImage[];
}