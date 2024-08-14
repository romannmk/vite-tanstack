import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/posts', label: 'Posts' },
]

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div className="flex flex-col p-4 max-w-2xl m-auto">
      <nav className="flex w-full justify-center w-48 mb-10">
        {nav.map(({ to, label }) => {
          return (
            <Link
              key={label}
              to={to}
              className="inline-block py-1 px-3 rounded mr-2 hover:bg-zinc-800"
              activeProps={{ className: 'bg-zinc-800' }}
            >
              {label}
            </Link>
          )
        })}
      </nav>
      <Outlet />
    </div>
  )
}
