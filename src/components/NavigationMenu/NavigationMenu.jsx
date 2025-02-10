import { useNavigate } from 'react-router-dom';
import {
  MenuContainer,
  CloseButton,
  HeaderNav,
  NavItem,
} from './NavigationMenu.styled';
import { FaTachometerAlt, FaRocket, FaBroom, FaChartBar } from 'react-icons/fa';

const NavigationMenu = ({ toggleMenu, isMenuOpen }) => {
  const navigate = useNavigate();

  return (
    <MenuContainer isOpen={isMenuOpen}>
      <CloseButton onClick={toggleMenu}>×</CloseButton>
      <>
        <HeaderNav>Navigation</HeaderNav>
      </>
      <NavItem active onClick={() => navigate('/')}>
        <FaTachometerAlt />
        Dashboard
      </NavItem>
      <NavItem onClick={() => navigate('/boots')}>
        <FaRocket />
        Boost
      </NavItem>
      <NavItem onClick={() => navigate('/clear-cache')}>
        <FaBroom />
        Clear Cache
      </NavItem>
      <NavItem onClick={() => navigate('/statistics')}>
        <FaChartBar />
        Statistics
      </NavItem>
    </MenuContainer>
  );
};

export default NavigationMenu;
