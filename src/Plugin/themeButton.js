// Button.jsx
import { useTheme } from './useTheme';

export const ThemeButton = () => {
    const theme = useTheme(); 
  
    return (
      <button style={{ background: theme.bgColor }}>
        自定义按钮
      </button>
    )
}