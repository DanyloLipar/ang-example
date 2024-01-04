export interface CollectionResponse<T> {
    collection: T[];
    path: string;
    count: number;
    per_page: number;
    has_more_pages: boolean;
    next_cursor: string;
    prev_cursor: string;
}
