import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/selector';

const routes = [
  { path: '/one', text: 'Module One' },
  { path: '/two', text: 'Module Two' },
  { path: '/todo', text: 'Module ToDo' },
  { path: '/gallery', text: 'Gallery' },
  { path: '/coctails', text: 'Coctails' },
  { path: '/searchcocktails', text: 'Search Cocktails' },
];

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <p>Welcome {user.name}</p>
      <ul style={{ display: 'flex', gap: '10px' }}>
        {routes.map(route => (
          <li key={route.path}>
            <Link to={route.path}>{route.text}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </>
  );
};
