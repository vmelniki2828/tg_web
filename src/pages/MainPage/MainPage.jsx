import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import light_bg from '../../images/light_bg.png';
import dark_bg from '../../images/dark_bg.png';
import {
  BotCon,
  BottomContainer,
  CircleStatus,
  ClearCasheBottom,
  MainContainer,
  QuestionCon,
  StatusContainer,
  UpdateBottom,
} from './MainPage.styled';
const tg = window.Telegram.WebApp;

const MainPage = () => {
  const onClose = () => {
    window.Telegram.WebApp.close();
  };

  return (
    <MainContainer>
      <StatusContainer>
        <CircleStatus />
        Connect<QuestionCon>?</QuestionCon>
      </StatusContainer>
      <button onClick={onClose}>Закрыть</button>
      {/* <BottomContainer>
        <BotCon>
          <ClearCasheBottom>Clear cache 53%</ClearCasheBottom>
          <UpdateBottom>Update</UpdateBottom>
        </BotCon>
      </BottomContainer> */}
    </MainContainer>
  );
};

export default MainPage;
