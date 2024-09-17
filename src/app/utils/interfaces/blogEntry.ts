export interface BlogEntry {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    photo_urls: string[];
    tags: string[];
    created_at: string;
}