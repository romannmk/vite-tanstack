import { queryOptions } from '@tanstack/react-query'
import { API_URL } from '../config'
import axios from 'axios'

export type PostType = {
  id: string
  title: string
  body: string
}

const fetch = async () => {
  // await new Promise((r) => setTimeout(r, 2000))
  return axios.get<PostType[]>(`${API_URL}/products`).then((r) => r.data)
}

export const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn: () => fetch(),
})
