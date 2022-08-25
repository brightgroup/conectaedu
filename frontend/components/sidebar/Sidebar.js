import Link from 'next/link'
import { NAV_ITEMS } from '.'

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      {NAV_ITEMS.map(({ route, label, icon }) => (
        <Link href={route} key={route}>
          <p className="sidebar__item">
            <i className={`fa-solid sidebar__icon ${icon}`} />
            <span className="absolute left-14 w-max">{label}</span>
          </p>
        </Link>
      ))}
    </nav>
  )
}
