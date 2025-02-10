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
  HeaderNav,
  NavItem,
} from './Header.styled';
import fnode_light from '../../images/fnode-white.png';
import fnode_dark from '../../images/fnode-black.png';
import { useNavigate } from 'react-router-dom';
import NavigationMenu from 'components/NavigationMenu/NavigationMenu';

const tg = window.Telegram.WebApp;

const Header = () => {
  const [theme, setTheme] = useState(tg.themeParams.bg_color || '#ffffff');
  const [oppositeColor, setOppositeColor] = useState('#000000'); // Изначально противоположный цвет
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
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
            <DynamicText className="light">fNode</DynamicText>
          </HeaderCenterContainer>
        ) : (
          <HeaderCenterContainer>
            <DynamicImageContainer className="dark">
              <DynamicImage src={fnode_dark} />
            </DynamicImageContainer>
            <DynamicText className="dark">fNode</DynamicText>
          </HeaderCenterContainer>
        )}
        <PersonIcon color={oppositeColor} />
      </HeaderContainer>
      <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} theme={theme}/>
    </>
  );
};

export default Header;
