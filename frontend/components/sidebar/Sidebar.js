import Link from 'next/link'
import { useRouter } from 'next/router'
import { NAV_ITEMS } from '.'

export const Sidebar = () => {
  const { pathname } = useRouter()

  return (
    <nav className="sidebar">
      {NAV_ITEMS.map(({ route, label, icon }) => (
        <Link href={route} key={route}>
          <p className={`sidebar__item ${pathname === route ? 'bg-transparent' : ''}`}>
            <i className={`fa-solid sidebar__icon ${icon}`} />
            <span className="absolute left-14 w-max">{label}</span>
          </p>
        </Link>
      ))}
    </nav>
  )
}
