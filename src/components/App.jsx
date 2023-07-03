import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home';
import ModuleOne from 'pages/ModuleOne';
import ModuleTwo from 'pages/ModuleTwo';
import ModuleToDo from 'pages/ModuleToDo';
import Gallery from 'pages/Gallery';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="one" element={<ModuleOne />} />
        <Route path="two" element={<ModuleTwo />} />
        <Route path="todo" element={<ModuleToDo />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
