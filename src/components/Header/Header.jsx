import React, { useEffect, useState } from 'react';
import {
  BurgerIcon,
  HeaderContainer,
  PersonIcon,
  MenuContainer,
  CloseButton,
  DynamicImageLight,
  DynamicImageDark,
  DynamicImageLightContainer,
} from './Header.styled';
import fnode_light from '../../images/fnode-white.png';
import fnode_dark from '../../images/fnode-black.png';
const tg = window.Telegram.WebApp;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(tg.themeParams.bg_color || '#ffffff'); // Изначальное значение

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    tg.ready();

    // Устанавливаем начальную тему
    setTheme(tg.themeParams.bg_color);

    // Добавляем обработчик события для смены темы
    tg.onEvent('themeChanged', () => {
      setTheme(tg.themeParams.bg_color);
    });

    // Чистим обработчик при размонтировании
    return () => {
      tg.offEvent('themeChanged');
    };
  }, []);

  return (
    <>
      <HeaderContainer>
        <BurgerIcon onClick={toggleMenu} />
        {theme === '#ffffff' ? (
          <DynamicImageLight src={fnode_light} />
        ) : (
          <DynamicImageLightContainer>
            <DynamicImageDark src={fnode_dark} />
          </DynamicImageLightContainer>
        )}
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
