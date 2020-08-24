import { createMuiTheme } from '@material-ui/core';

export function getTheme() {
  return createMuiTheme({
    palette: {
      primary: { main: '#02647A' },
      secondary: { main: '#23A5B9', contrastText: '#FFF' },
      success: { main: '#319E37' },
      error: { main: '#E11523' },
      warning: { main: '#F57C00' },
      default: { main: '#E0E0E0', contrastText: '#02647A'  },
      background: { default: '#EFF1F7' },
    },
    overrides: {
      MuiGrid: {
        root: {
          '& div[class^="Carousel-indicators"]': {
            marginTop: -30,
          },
        }
      }
    },
  });
}
