export {}

declare global {
  interface Post {
    title: string
    slug: string
    featured_image: string
    summary: string
    link: string
    content: string
    published_at: string
    category: Pick<Category, 'name' | 'link'>
    tags: Tag[]
    channel: Channel
  }

  interface Channel {
    title: string
    thumbnail: string
  }

  interface Tag {
    name: string
    link: string
  }

  export interface PostFilter {
    category_id?: number
    category_slug?: string
    per_page: number
    page: number
    q?: string
    sort_by?: string
    order?: 'asc' | 'desc'
  }
}
