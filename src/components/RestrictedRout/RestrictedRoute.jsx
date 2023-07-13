import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogged } from 'redux/auth/selector';

export const RestrictedRoute = ({
  component: Component,
  restrictetTo = '/',
}) => {
  const isLoggedIn = useSelector(selectIsLogged);
  return isLoggedIn ? <Navigate to={restrictetTo} /> : Component;
};
