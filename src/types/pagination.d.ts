export {}

declare global {
  interface PaginatedResponse<T> {
    data: T[]
    meta: {
      page: number
      per_page: number
      total: number
    }
  }
}
