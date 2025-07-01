export type Pagination<T> = {actions: any
    pageIndex: number;
    pageSize: number;
    count: number;
    data: T[]
}