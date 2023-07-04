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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="one" element={<ModuleOne />} />
        <Route path="two" element={<ModuleTwo />} />
        <Route path="todo" element={<ModuleToDo />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="coctails" element={<Coctails />} />
        <Route path="searchcocktails" element={<SearchCocktails />} />
        <Route
          path="searchcocktails/:cocktailId"
          element={<CocktailsDetails />}
        />
      </Route>  
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
