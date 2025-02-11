import styled from 'styled-components';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { BsFillPersonFill } from 'react-icons/bs';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  color: white;
`;

export const DynamicSmallText = styled.p`
  font-size: 30px;
  font-family: 'ProductSans', sans-serif;
  font-weight: bold;
  line-height: 1.2;

  &.light {
    color: rgb(0, 0, 0);
  }

  /* Стили для тёмной темы */
  &.dark {
    color: rgb(255, 255, 255);
  }
`;

export const BurgerIcon = styled(CgMenuLeftAlt)`
  width: 24px;
  height: 26px;
  cursor: pointer;
  position: relative;
  color: ${({ color }) => color || '#000'};

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

export const PersonIcon = styled(BsFillPersonFill)`
  width: 24px;
  height: 26px;
  color: ${({ color }) => color || '#000'};
`;

export const DynamicImage = styled.img`
  width: 33px;
  height: 33px;
  cursor: pointer;
`;

export const DynamicImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  margin-right: 12px;

  /* Стили для светлой темы */
  &.light {
    background-color: rgb(0, 0, 0);
  }

  /* Стили для тёмной темы */
  &.dark {
    background-color: rgb(255, 255, 255);
  }
`;

export const DynamicText = styled.p`
  margin: 0;

  font-size: 45px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  line-height: 1.2;
  text-align: left;

  /* Стили для светлой темы */
  &.light {
    color: rgb(0, 0, 0);
  }

  /* Стили для тёмной темы */
  &.dark {
    color: rgb(255, 255, 255);
  }
`;

export const HeaderCenterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
