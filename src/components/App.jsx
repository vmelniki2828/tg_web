import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import BoostPage from '../pages/BoostPage/BoostPage';
import Layout from './Layout/Layout';
import ClearCachePage from 'pages/ClearCachePage/ClearCachePage';
import StatisticPage from 'pages/StatisticPage/StatisticPage';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/boost" element={<BoostPage />} />
          <Route path="/clearCache" element={<ClearCachePage />} />
          <Route path="/statistic" element={<StatisticPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};
