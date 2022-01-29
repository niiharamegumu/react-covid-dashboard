import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Cards } from "./features/covid/Cards/Cards";

function App() {
  return (
    <ChakraProvider>
      <Box pt="20px">
        <Cards />
      </Box>
    </ChakraProvider>
  );
}

export default App;
