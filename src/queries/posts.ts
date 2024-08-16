import { queryOptions } from '@tanstack/react-query'
import { API_URL } from '@/config'
import axios from 'axios'

export type PostType = {
  id: string
  title: string
  body: string
}

const queryFn = async () => {
  // await new Promise((r) => setTimeout(r, 3000))
  console.log('REQUEST', { isServer: typeof window === 'undefined' })

  if (typeof window === 'undefined') {
    return axios.get<PostType[]>(`${API_URL}/products`).then(({ data }) => data)
  } else {
    console.log('CLIENT SIDE')
  }
}

export const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn,
})
