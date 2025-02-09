import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Buttonnn from './Button/Button';
import light_bg from '../images/light_bg.png';
import dark_bg from '../images/dark_bg.png';
const tg = window.Telegram.WebApp;

export const App = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(tg.themeParams.bg_color);
  }, [tg.themeParams.bg_color]);

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  // Выбор фона на основе темы
  const backgroundImage = theme === '#ffffff' ? `url(${light_bg})` : `url(${dark_bg})`;

  return (
    <div
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover', // Растянуть фон на весь экран
        backgroundPosition: 'center', // Центрирование фона
        backgroundRepeat: 'no-repeat', // Отключить повторение
        minHeight: '100vh', // Минимальная высота экрана
        display: 'flex', // Для позиционирования контента внутри
        flexDirection: 'column',
      }}
    >
      <Header />
      <Buttonnn />
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};
