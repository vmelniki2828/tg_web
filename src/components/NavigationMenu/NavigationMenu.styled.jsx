import styled from 'styled-components';
import { BiSolidStar } from 'react-icons/bi';
import { BsFillLightningChargeFill } from 'react-icons/bs';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100vw;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor}; /* Динамический цвет фона */
  color: white;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: ${({ isOpen }) =>
    isOpen ? '2px 0 5px rgba(0,0,0,0.5)' : 'none'};

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

export const HeaderNav = styled.div`
  font-size: 30px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  line-height: 1.2;
`;

export const NavItem = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 35px;
  background-color: ${props => (props.active ? '#007bff' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#000')};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.active ? '#0056b3' : '#f1f1f1')};
  }

  svg {
    margin-right: 12px;
    font-size: 1.2rem;
  }
`;

export const TopConItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopConItemText = styled.p`
  font-size: 14px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);
  line-height: 1.2;
  text-align: left;
  -moz-transform: matrix(1.00033493357151, 0, 0, 1, 0, 0);
  -webkit-transform: matrix(1.00033493357151, 0, 0, 1, 0, 0);
  -ms-transform: matrix(1.00033493357151, 0, 0, 1, 0, 0);
  margin-bottom: 6px;
`;

export const TopConItemNum = styled.p`
  font-size: 20px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
  -moz-transform: matrix(1.00033493357151, 0, 0, 1, 0, 0);
  -webkit-transform: matrix(1.00033493357151, 0, 0, 1, 0, 0);
  -ms-transform: matrix(1.00033493357151, 0, 0, 1, 0, 0);
`;

export const TopConItemNumContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled(BiSolidStar)`
  width: 18px;
  height: 18px;
  margin-left: 5px;
  color: black;
`;

export const IconImg = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 12px;
`;

export const Lightning = styled(BsFillLightningChargeFill)`
  width: 18px;
  height: 18px;
  margin-left: 5px;
  color: black;
`;
