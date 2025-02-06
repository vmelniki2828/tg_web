import { useState } from "react";

export const App = () => {
  const [asd, setAsd] = useState(false)

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <button onClick={()=>setAsd(!asd)}>Нажми</button>
      {asd === true ? <>Ты пидор</> : <></>}
    </div>
  );
};
