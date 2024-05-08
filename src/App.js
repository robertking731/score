import * as React from "react";
import MainRoutes from "./routes";
import store from "./redux/store"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple, amber, grey, deepOrange, orange, blueGrey } from '@mui/material/colors';

function App() {

  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          // primary: amber,
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
        }
        : {
          primary: amber,
          background: {
            default: "#020B12",
            paper: "#061727",
            appbar:"#041421727"
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

  return (
    // <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
