import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Box = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: themeContext.primary.main,
        color: themeContext.primary.text,
      }}
    >
      Theme context
    </div>
  );
};

export default Box;
