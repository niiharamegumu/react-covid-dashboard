import { ChakraProvider, Container } from "@chakra-ui/react";
import { DashBoard } from "./features/covid/DashBoard/DashBoard";
import { darkTheme } from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={darkTheme}>
      <Container maxW="container.xl" pt="50px" pb="80px">
        <DashBoard />
      </Container>
    </ChakraProvider>
  );
}

export default App;
