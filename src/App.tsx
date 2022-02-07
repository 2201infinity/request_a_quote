import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}
export default App;
