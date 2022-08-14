/**
 * import depedencies
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * import pages
 */
import LandingPage from '../pages/LandingPage';
import { PokedexListPage } from '../pages/pokedex';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LandingPage />} />
        <Route path='pokedex' element={<PokedexListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
