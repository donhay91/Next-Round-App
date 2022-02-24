import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/fonts";
import "@fontsource/rock-salt"
import "@fontsource/rocknroll-one"

ReactDOM.render(
  
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);



