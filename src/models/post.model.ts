export interface Post {
    id?: number;
    user_id: number;
    title: string;
    cover_url: string;
    content: string;
    created_at?: string;
}