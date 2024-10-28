import { Router } from "./Router";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { CombinedContextProvider } from "./contexts/CombinedContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CombinedContextProvider>
        <Router />
      </CombinedContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
