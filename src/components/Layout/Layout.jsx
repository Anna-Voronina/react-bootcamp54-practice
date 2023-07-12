import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectIsLogged } from 'redux/auth/selector';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      <Outlet />
    </>
  );
};
