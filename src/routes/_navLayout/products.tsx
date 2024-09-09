import { productsQueryOptions } from '@/queries/posts'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export type ProductsType = {
  id: string
  title: string
  body: string
}

export const Route = createFileRoute('/_navLayout/products')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(productsQueryOptions),
  component: ProductsComponent,
  errorComponent: () => <div>Error loading posts</div>,
  pendingComponent: () => <div>Loading Posts...</div>,
  notFoundComponent: () => <div>Not Found</div>,
})

function ProductsComponent() {
  const { data } = useSuspenseQuery(productsQueryOptions)

  return (
    <div className="p-2 flex gap-2 flex-col">
      <ul className="list-disc pl-4">
        {data?.map((post: ProductsType) => (
          <li key={post.id} className="whitespace-nowrap">
            <div>{post.title.substring(0, 20)}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
