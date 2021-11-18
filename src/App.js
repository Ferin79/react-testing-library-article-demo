import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./pages/Home";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
};

export default App;
