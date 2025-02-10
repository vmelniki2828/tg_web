import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BoostPage from './pages/BoostPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/boots" element={<BoostPage />} />
      </Routes>
    </Router>
  );
};
