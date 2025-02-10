import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
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
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
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
