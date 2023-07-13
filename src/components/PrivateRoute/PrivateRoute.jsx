import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogged, selectRefresh } from 'redux/auth/selector';

export const PrivateRoute = ({ component: Component, restrictetTo = '/' }) => {
  const isRefreshing = useSelector(selectRefresh);
  const isLoggedIn = useSelector(selectIsLogged);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={restrictetTo} /> : Component;
};
