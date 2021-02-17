import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#8257e6'
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.7)'
    },
    background: {
      default: '#121214'
    }
  },
  typography: {
    h3: {
      fontWeight: 'bold',
      color: '#8257e6'
    }
  }
})

export default theme
