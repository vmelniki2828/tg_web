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

export const BurgerIcon = styled(CgMenuLeftAlt)`
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: relative;

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
  width: 30px;
  height: 30px;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100vw;
  height: 100vh;
  background-color: #444;
  color: white;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: ${({ isOpen }) => (isOpen ? '2px 0 5px rgba(0,0,0,0.5)' : 'none')};

  div {
    margin: 15px 0;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  font-size: 24px;
  cursor: pointer;
  color: white;
`;

export const DynamicImageLight = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 0 10px;
  background: black;
  border-radius: 50%;
`;

export const DynamicImageDark = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 0 10px;
  background: white;
  border-radius: 50%;
`;

