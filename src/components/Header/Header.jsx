import React, { useState } from 'react';
import { 
  BurgerIcon, 
  HeaderContainer, 
  PersonIcon, 
  MenuContainer, 
  CloseButton 
} from './Header.styled';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderContainer>
        <BurgerIcon onClick={toggleMenu} />
        <PersonIcon />
      </HeaderContainer>
      <MenuContainer isOpen={isMenuOpen}>
        <CloseButton onClick={toggleMenu}>×</CloseButton>
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
        <div>Menu Item 3</div>
      </MenuContainer>
    </>
  );
};

export default Header;
