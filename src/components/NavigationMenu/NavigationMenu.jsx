import { useNavigate, useLocation } from 'react-router-dom';
import {
  MenuContainer,
  CloseButton,
  HeaderNav,
  NavItem,
} from './NavigationMenu.styled';
import { FaRocket, FaBroom, FaChartBar } from 'react-icons/fa';
import { HiMiniSquares2X2 } from 'react-icons/hi2';

const NavigationMenu = ({ toggleMenu, isMenuOpen, theme }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Получаем текущий маршрут

  return (
    <MenuContainer
      isOpen={isMenuOpen}
      bgColor={theme === '#ffffff' ? '#f5f5f5' : '#080b11'}
    >
      <CloseButton onClick={toggleMenu}>×</CloseButton>
      <>
        <HeaderNav bgColor={theme === '#ffffff' ? '#000000' : '#ffffff'}>
          Navigation
        </HeaderNav>
      </>
      <NavItem
        active={location.pathname === '/'} // Проверяем, является ли текущий маршрут "/"
        onClick={() => {
          navigate('/');
          toggleMenu();
        }}
      >
        <HiMiniSquares2X2 />
        Dashboard
      </NavItem>
      <NavItem
        active={location.pathname === '/boost'} // Проверяем, является ли текущий маршрут "/boots"
        onClick={() => {
          navigate('/boost');
          toggleMenu();
        }}
      >
        <FaRocket />
        Boost
      </NavItem>
      <NavItem
        active={location.pathname === '/clearCache'} // Проверяем, является ли текущий маршрут "/clear-cache"
        onClick={() => {
          navigate('/clearCache');
          toggleMenu();
        }}
      >
        <FaBroom />
        Clear Cache
      </NavItem>
      <NavItem
        active={location.pathname === '/statistic'} // Проверяем, является ли текущий маршрут "/statistics"
        onClick={() => {
          navigate('/statistic');
          toggleMenu();
        }}
      >
        <FaChartBar />
        Statistics
      </NavItem>
    </MenuContainer>
  );
};

export default NavigationMenu;
