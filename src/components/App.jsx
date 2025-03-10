import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import BoostPage from '../pages/BoostPage/BoostPage';
import Layout from './Layout/Layout';
import ClearCachePage from 'pages/ClearCachePage/ClearCachePage';
import StatisticPage from 'pages/StatisticPage/StatisticPage';
import { useState } from 'react';

const tg = window.Telegram.WebApp;

export const App = () => {
  const [itemTheme, setItemTheme] = useState(
    tg.themeParams.bg_color || '#ffffff'
  );

  console.log(itemTheme);

  return (
    <Router>
      <Layout setItemTheme={setItemTheme}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/boost" element={<BoostPage itemTheme={itemTheme} />} />
          <Route path="/clearCache" element={<ClearCachePage />} />
          <Route
            path="/statistic"
            element={<StatisticPage itemTheme={itemTheme} />}
          />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};
