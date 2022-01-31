import { extendTheme } from "@chakra-ui/react";

export const darkTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "Black",
        color: "White",
      },
    },
  },
});
