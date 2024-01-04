export interface Filters {
    search: string;
    relation: {
        [key: string]: string[];
    };
    order: {
        [key: string]: string;
    };
    cursor: string;
}
