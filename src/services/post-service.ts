import { isAxiosError } from 'axios'
import { toQueryParamsClean } from '@/helpers/object'
import axiosClient from '@/common/api'

export async function getPosts(
  query?: PostFilter
): Promise<PaginatedResponse<Post> | null> {
  const searchParams = new URLSearchParams(toQueryParamsClean(query ?? {}))

  try {
    const response = await axiosClient.get(`/posts?${searchParams.toString()}`)
    const { data } = response

    return {
      data: data.data,
      meta: {
        page: Number(query?.page),
        per_page: data?.per_page,
        total: data?.total,
      }
    }
  } catch (error) {
    console.error(
      'FETCH posts failed:',
      isAxiosError(error) ? error?.response?.data : error
    )
    return null
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await axiosClient.get(`/posts/${slug}`)
    const { data } = response
    return data.data
  } catch (error) {
    console.error(
      'FETCH post failed:',
      isAxiosError(error) ? error?.response?.data : error
    )

    return null
  }
}
