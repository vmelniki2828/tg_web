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
  DynamicImageDarkContainer,
  DynamicImageContainer,
  DynamicImage,
  DynamicText,
  HeaderCenterContainer,
} from './Header.styled';
import fnode_light from '../../images/fnode-white.png';
import fnode_dark from '../../images/fnode-black.png';

const tg = window.Telegram.WebApp;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(tg.themeParams.bg_color || '#ffffff');
  const [oppositeColor, setOppositeColor] = useState('#000000'); // Изначально противоположный цвет

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Функция для вычисления противоположного цвета
    const calculateOppositeColor = color =>
      color === '#ffffff' ? '#000000' : '#ffffff';

    // Устанавливаем противоположный цвет при изменении темы
    setOppositeColor(calculateOppositeColor(theme));
  }, [theme]); // Срабатывает при изменении theme

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
        <BurgerIcon onClick={toggleMenu} color={oppositeColor} />
        {theme === '#ffffff' ? (
          <HeaderCenterContainer>
            <DynamicImageContainer className="light">
              <DynamicImage src={fnode_light} />
            </DynamicImageContainer>
            <DynamicText>fNode</DynamicText>
          </HeaderCenterContainer>
        ) : (
          <HeaderCenterContainer>
            <DynamicImageContainer className="dark">
              <DynamicImage src={fnode_dark} />
            </DynamicImageContainer>
            <DynamicText>fNode</DynamicText>
          </HeaderCenterContainer>
        )}
        <PersonIcon color={oppositeColor} />
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
