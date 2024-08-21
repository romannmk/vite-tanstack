import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_navLayout/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <div className="p-2 flex flex-col items-center text-center">
      <img className="w-20 h-20 mb-10" src="/vite.svg" alt="viteLogo" />
      <h3 className="text-3xl mb-4">Vite SSR with TanStack</h3>
      <p className="text-zinc-400">
        This project demonstrates how to set up server-side rendering (SSR) with
        Vite and TanStack Router. It provides a minimal setup to get you started
        with SSR in a React application.
      </p>
    </div>
  )
}
