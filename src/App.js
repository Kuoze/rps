import React, { useReducer, useEffect } from 'react';
import { ThemeContext } from './context/themeContext';
import { themeReducer } from './reducers/themeReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('theme')) || { theme: 'light' };
}

const App = () => {
  const [ theme, dispatch ] = useReducer(themeReducer, {}, init);

  useEffect(() => {
    if (!theme) return;

    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      <AppRouter />
    </ThemeContext.Provider>
  );
};

export default App;