import React, { useContext } from 'react';
import TrybeerContext from '../context/TrybeerContext';
import '../css/darkmodeBtn.css';

function DarkModeBtn() {
  const { theme, setTheme } = useContext(TrybeerContext);

  const darkOnOff = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
    // else setTheme('light');
  };

  return (
    <div>
      {/* {theme === 'light' && <p>LightMode</p>}
      {theme === 'dark' && <p>DarkMode</p>} */}
      <label class="switch">
        <input type="checkbox" onClick={() => darkOnOff()} />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default DarkModeBtn;
