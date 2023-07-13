import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home';
import ModuleOne from 'pages/ModuleOne';
import ModuleTwo from 'pages/ModuleTwo';
import ModuleToDo from 'pages/ModuleToDo';
import Gallery from 'pages/Gallery';
import Coctails from 'pages/Coctails';
import SearchCocktails from 'pages/SearchCocktails';
import CocktailsDetails from 'pages/CocktailsDetails';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import { refreshThunk } from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRout/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { selectRefresh } from 'redux/auth/selector';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Refreshing...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="register"
          element={
            <RestrictedRoute
              restrictetTo="/todo"
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute restrictetTo="/todo" component={<LoginPage />} />
          }
        />

        <Route
          path="one"
          element={
            <PrivateRoute restrictetTo="/login" component={<ModuleOne />} />
          }
        />
        <Route
          path="two"
          element={
            <PrivateRoute restrictetTo="/login" component={<ModuleTwo />} />
          }
        />
        <Route
          path="todo"
          element={
            <PrivateRoute restrictetTo="/login" component={<ModuleToDo />} />
          }
        />
        <Route
          path="gallery"
          element={
            <PrivateRoute restrictetTo="/login" component={<Gallery />} />
          }
        />
        <Route
          path="coctails"
          element={
            <PrivateRoute restrictetTo="/login" component={<Coctails />} />
          }
        />
        <Route
          path="searchcocktails"
          element={
            <PrivateRoute
              restrictetTo="/login"
              component={<SearchCocktails />}
            />
          }
        />
        <Route
          path="searchcocktails/:cocktailId"
          element={
            <PrivateRoute
              restrictetTo="/login"
              component={<CocktailsDetails />}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
