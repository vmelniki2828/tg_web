import React, { useState } from 'react';
import {
  BurgerIcon,
  HeaderContainer,
  PersonIcon,
  MenuContainer,
  CloseButton,
  DynamicImage,
} from './Header.styled';
import fnode_light from '../../images/fnode-white.png';
import fnode_dark from '../../images/fnode-black.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFirstImage, setShowFirstImage] = useState(true); // Для переключения картинки

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleImage = () => {
    setShowFirstImage(!showFirstImage); // Меняем картинку при клике
  };

  return (
    <>
      <HeaderContainer>
        <BurgerIcon onClick={toggleMenu} />
        <DynamicImage
          src={showFirstImage ? fnode_light : fnode_dark}
          alt="Dynamic Image"
          onClick={toggleImage} // Переключение картинки по клику
        />
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
