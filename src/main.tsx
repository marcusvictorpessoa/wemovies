import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./presentation/App";

import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
