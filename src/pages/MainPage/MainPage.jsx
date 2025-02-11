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
  TopCon,
  UpdateBottom,
} from './MainPage.styled';
import {
  IconImg,
  Lightning,
  Star,
  TopConItemContainer,
  TopConItemNum,
  TopConItemNumContainer,
  TopConItemText,
} from 'components/NavigationMenu/NavigationMenu.styled';
import icon from '../../images/icon.png';

const tg = window.Telegram.WebApp;

const MainPage = () => {
  // const onClose = () => {
  //   window.Telegram.WebApp.close();
  // };

  return (
    <MainContainer>
      <StatusContainer>
        <CircleStatus />
        Connect<QuestionCon>?</QuestionCon>
      </StatusContainer>
      {/* <button onClick={onClose}>Закрыть</button> */}
      <BottomContainer>
        <TopCon>
          <TopConItemContainer>
            <TopConItemText>Today</TopConItemText>
            <TopConItemNumContainer>
              <TopConItemNum>1350</TopConItemNum>
              <Star />
            </TopConItemNumContainer>
          </TopConItemContainer>
          <TopConItemContainer>
            <TopConItemText>Total VDS</TopConItemText>
            <TopConItemNumContainer>
              <TopConItemNum>850</TopConItemNum>
              <IconImg src={icon} alt="icon" />
            </TopConItemNumContainer>
          </TopConItemContainer>
          <TopConItemContainer>
            <TopConItemText>hPower</TopConItemText>
            <TopConItemNumContainer>
              <TopConItemNum>85</TopConItemNum>
              <Lightning />
            </TopConItemNumContainer>
          </TopConItemContainer>
        </TopCon>
        <BotCon>
          <ClearCasheBottom>Clear cache 53%</ClearCasheBottom>
          <UpdateBottom>Update</UpdateBottom>
        </BotCon>
      </BottomContainer>
    </MainContainer>
  );
};

export default MainPage;
