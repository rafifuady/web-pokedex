/**
 * import depedencies
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * import pages
 */
import LandingPage from '../pages/LandingPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
