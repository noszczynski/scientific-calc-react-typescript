import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { CalculatorProvider } from "./providers/CalculatorProvider";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    background-color: #202124;
    color: #ffffff;
    font-family: Arial, sans-serif;
  }
  
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <CalculatorProvider>
        <App />
      </CalculatorProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export { Operator } from "./constants/Operators";
