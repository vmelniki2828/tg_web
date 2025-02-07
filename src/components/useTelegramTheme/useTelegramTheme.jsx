import { useState, useEffect } from 'react';

const useTelegramTheme = () => {
  const [themeParams, setThemeParams] = useState({
    colorScheme: 'light', // По умолчанию светлая
    bgColor: '#ffffff',
    textColor: '#000000',
    hintColor: '#808080',
    linkColor: '#0000ee',
    buttonColor: '#0088cc',
    buttonTextColor: '#ffffff',
    secondaryBgColor: '#f5f5f5',
  });

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const params = window.Telegram.WebApp.themeParams || {};
      const colorScheme = window.Telegram.WebApp.colorScheme || 'light';

      setThemeParams({
        colorScheme,
        bgColor: params.bg_color || '#ffffff',
        textColor: params.text_color || '#000000',
        hintColor: params.hint_color || '#808080',
        linkColor: params.link_color || '#0000ee',
        buttonColor: params.button_color || '#0088cc',
        buttonTextColor: params.button_text_color || '#ffffff',
        secondaryBgColor: params.secondary_bg_color || '#f5f5f5',
      });
    }
  }, []);

  return themeParams;
};

export default useTelegramTheme;
