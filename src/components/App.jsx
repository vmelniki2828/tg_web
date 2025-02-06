import { useState } from 'react';
import Header from './Header/Header';

export const App = () => {
  const [asd, setAsd] = useState(false);

  return (
    <div>
      <Header />
      <button onClick={() => setAsd(!asd)}>Нажми</button>
      {asd === true ? <>Ты пидор</> : <></>}
    </div>
  );
};
