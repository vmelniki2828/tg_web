import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Buttonnn from '../components/Button/Button';
import light_bg from '../images/light_bg.png';
import dark_bg from '../images/dark_bg.png';
const tg = window.Telegram.WebApp;

const MainPage = () => {
  const onClose = () => {
    window.Telegram.WebApp.close();
  };

  return (
    <>
      <Buttonnn />
      <button onClick={onClose}>Закрыть</button>
    </>
  );
};

export default MainPage;
