import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Buttonnn from './Button/Button';
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

  const [theme, setTheme] = useState();

  useEffect(()=>{setTheme(tg.themeParams.bg_color)},[tg.themeParams.bg_color])

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      <Header />
      <Buttonnn />
      work<button onClick={onClose}>Закрыть</button>
      <>{theme}</>
    </div>
  );
};
