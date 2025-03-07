import { useNavigate, useLocation } from 'react-router-dom';
import {
  MenuContainer,
  CloseButton,
  HeaderNav,
  NavItem,
  NavIcon,
} from './NavigationMenu.styled';
import { FaRocket, FaBroom, FaChartBar } from 'react-icons/fa';
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import boosticon from '../../images/boost-icon.png';
import boosticon_dark from '../../images/boost-dark.png';
import { useState } from 'react';

const NavigationMenu = ({ toggleMenu, isMenuOpen, theme }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Получаем текущий маршрут
  const [iconDarkMode, setIconDarkMode] = useState(false);

  const toggleNavItem = item => {
    setIconDarkMode(item);
  };

  return (
    <MenuContainer
      isOpen={isMenuOpen}
      bgColor={theme === '#ffffff' ? '#f5f5f5' : '#080b11'}
    >
      <CloseButton
        color={theme === '#ffffff' ? '#000000' : '#ffffff'}
        onClick={toggleMenu}
      >
        ×
      </CloseButton>
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
          toggleNavItem(false);
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
          toggleNavItem(true);
        }}
      >
        {iconDarkMode ? (
          <NavIcon src={boosticon} alt="boosticon" />
        ) : (
          <NavIcon src={boosticon_dark} alt="boosticon" />
        )}
        Boost
      </NavItem>
      <NavItem
        active={location.pathname === '/clearCache'} // Проверяем, является ли текущий маршрут "/clear-cache"
        onClick={() => {
          navigate('/clearCache');
          toggleMenu();
          toggleNavItem(false);
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
          toggleNavItem(false);
        }}
      >
        <FaChartBar />
        Statistics
      </NavItem>
    </MenuContainer>
  );
};

export default NavigationMenu;
