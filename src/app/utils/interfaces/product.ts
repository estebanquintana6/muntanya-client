export interface Product {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    photo_urls: string[];
    tags: string[];
    favorite: boolean;
    created_at: string;
}