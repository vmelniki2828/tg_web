import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import BoostPage from '../pages/BoostPage';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/boots" element={<BoostPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};
