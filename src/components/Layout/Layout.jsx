import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import light_bg from '../../images/light_bg.png';
import dark_bg from '../../images/dark_bg.png';

const tg = window.Telegram.WebApp;

const Layout = ({ children, setItemTheme }) => {
  const [theme, setTheme] = useState(tg.themeParams.bg_color || '#ffffff');

  useEffect(() => {
    setItemTheme(theme);
  }, [theme]);

  useEffect(() => {
    tg.ready();

    // Устанавливаем начальную тему
    setTheme(tg.themeParams.bg_color);

    // Добавляем обработчик события для смены темы
    tg.onEvent('themeChanged', () => {
      setTheme(tg.themeParams.bg_color);
    });

    // Чистим обработчик при размонтировании
    return () => {
      tg.offEvent('themeChanged');
    };
  }, []);

  // Выбор фона на основе темы
  const backgroundImage =
    theme === '#ffffff' ? `url(${light_bg})` : `url(${dark_bg})`;

  return (
    <div
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <div style={{ flex: 1 }}>{children}</div> {/* Контент страницы */}
    </div>
  );
};

export default Layout;
