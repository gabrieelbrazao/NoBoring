import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MaterialThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </MaterialThemeProvider>
    </ThemeProvider>
  )
}

export default MyApp
