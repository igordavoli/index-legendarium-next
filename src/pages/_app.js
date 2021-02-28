
import { ThemesContext } from '../contexts/ThemesContext';
import Theme from '../themes/Theme';
import { ThemeStore } from '../contexts/ThemesContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeStore>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeStore>
  )
}
