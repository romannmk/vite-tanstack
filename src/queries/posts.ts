import { queryOptions } from '@tanstack/react-query'
import { API_URL } from '@/config'

export type ProductsType = {
  id: string
  title: string
  body: string
}

const delay = (n = 500) => new Promise((r) => setTimeout(r, n))

const queryFn = async () => {
  await delay(2000)
  try {
    const res = await fetch(`${API_URL}/products`)
    const data = await res.json()

    return data
  } catch (err) {
    console.error(err)
  }
}

export const productsQueryOptions = queryOptions({
  queryKey: ['products'],
  queryFn,
})
