import { createFileRoute,  Outlet } from '@tanstack/react-router'

export type PostType = {
  id: string
  title: string
  body: string
}

export const Route = createFileRoute('/posts')({
  loader: async () => {
    console.info('Fetching posts...')
    await new Promise((r) =>
      setTimeout(r, 3000 + Math.round(Math.random() * 3000)),
    )
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((d) => d.json() as Promise<PostType[]>)
      .then((d) => d.slice(0, 10))
  },
  component: PostsComponent,
  pendingComponent: () => <div>Loading posts...</div>,
})

function PostsComponent() {
  const posts = Route.useLoaderData()

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {posts?.map((post) => {
          return (
            <li key={post.id} className="whitespace-nowrap">
              <div>{post.title.substring(0, 20)}</div>
            </li>
          )
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}