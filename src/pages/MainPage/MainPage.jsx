import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import light_bg from '../../images/light_bg.png';
import dark_bg from '../../images/dark_bg.png';
import { CircleStatus, MainContainer, StatusContainer } from './MainPage.styled';
const tg = window.Telegram.WebApp;

const MainPage = () => {
  const onClose = () => {
    window.Telegram.WebApp.close();
  };

  return (
    <MainContainer>
      <StatusContainer><CircleStatus />Connect</StatusContainer>
      <button onClick={onClose}>Закрыть</button>
    </MainContainer>
  );
};

export default MainPage;
