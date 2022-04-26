import { NavLink } from 'react-router-dom'
import { useInput } from 'rooks'
import { routes } from '../routes'

export const NavBar = () => {
  const search = useInput('')
  const menuList = routes.map((item) => item.path)
  let showMenuList = menuList
  if (search.value !== '') {
    showMenuList = menuList.filter((menu) => menu.includes(search.value))
  }
  return (
    <aside className="bg-base-200 w-80 p-4">
      <a className="btn btn-ghost normal-case text-xl">React-UI</a>
      <input
        type="text"
        placeholder="Search..."
        className="input w-full max-w-xs"
        {...search}
      />
      <ul className="menu mt-4">
        {showMenuList.map((menu) => (
          <li className="w-full" key={menu}>
            <NavLink to={menu}>{menu}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}
