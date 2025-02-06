import { useState } from 'react';
import Header from './Header/Header';
import useTelegramTheme from './useTelegramTheme/useTelegramTheme';

export const App = () => {
  const [asd, setAsd] = useState(false);
  const theme = useTelegramTheme();

  const appStyles = {
    backgroundColor: theme.bgColor,
    color: theme.textColor,
    minHeight: '100vh',
  };

  console.log(appStyles)

  return (
    <div style={appStyles}>
      <Header />
      <button onClick={() => setAsd(!asd)}>Нажми</button>
      {asd === true ? <>Ты пидор</> : <></>}
      {appStyles.backgroundColor}
    </div>
  );
};
