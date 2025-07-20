import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 dark:text-text hover:bg-slate-200 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-text"
    >
      {children}
    </Link>
  )
}
