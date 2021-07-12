import { ThemeProvider } from "@material-ui/core/styles";

import { ProviderCommon } from "./contexts/common";
import Routes from "./routes/routes";
import "./styles/App.css";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProviderCommon>
        <Routes />
      </ProviderCommon>
    </ThemeProvider>
  );
}

export default App;
