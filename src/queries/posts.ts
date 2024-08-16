import { queryOptions } from '@tanstack/react-query'
import { API_URL } from '@/config'
import axios from 'axios'

export type PostType = {
  id: string
  title: string
  body: string
}

const queryFn = async () => {
  return axios.get<PostType[]>(`${API_URL}/products`).then(({ data }) => data)
}

export const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn,
})
