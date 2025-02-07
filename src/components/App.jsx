import { useEffect, useState } from 'react';
import Header from './Header/Header';
const tg = window.Telegram.WebApp;

export const App = () => {
  // const [asd, setAsd] = useState(false);
  // return (
  //   <div>
  //     <Header />
  //     <button onClick={() => setAsd(!asd)}>Нажми</button>
  //     {asd === true ? <>Ты пидор</> : <></>}
  //   </div>
  // );

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      work<button onClick={onClose}>Закрыть</button>
      {/* =======
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
>>>>>>> 499029d41b237a70b0b96f73d02835d52b08880f */}
    </div>
  );
};
