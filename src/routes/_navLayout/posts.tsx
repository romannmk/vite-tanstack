import { postsQueryOptions } from '@/queries/posts'
import { createFileRoute } from '@tanstack/react-router'

export type PostType = {
  id: string
  title: string
  body: string
}

export const Route = createFileRoute('/_navLayout/posts')({
  loader: ({ context: { queryClient } }) =>
    queryClient.fetchQuery(postsQueryOptions),
  component: PostsComponent,
  errorComponent: () => <div>Error loading posts</div>,
  pendingComponent: () => <div>Loading...</div>,
  notFoundComponent: () => <div>Not Found</div>,
})

function PostsComponent() {
  const data = Route.useLoaderData()

  return (
    <div className="p-2 flex gap-2 flex-col">
      <ul className="list-disc pl-4">
        {data?.map((post) => {
          return (
            <li key={post.id} className="whitespace-nowrap">
              <div>{post.title.substring(0, 20)}</div>
            </li>
          )
        })}
      </ul>
      <br />
    </div>
  )
}
