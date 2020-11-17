import { FunctionComponent } from 'react';
import { ThemeProvider } from 'theme-ui';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { theme } from 'utils/theme';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  )
};

export default App;
