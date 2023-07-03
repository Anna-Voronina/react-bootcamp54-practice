import { Link, Outlet } from 'react-router-dom';
const routes = [
  { path: '/', text: 'Home' },
  { path: '/one', text: 'Module One' },
  { path: '/two', text: 'Module Two' },
  { path: '/todo', text: 'Module ToDo' },
  { path: '/gallery', text: 'Gallery' },
];

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: 'flex', gap: '10px' }}>
            {routes.map(route => (
              <li key={route.path}>
                <Link to={route.path}>{route.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
