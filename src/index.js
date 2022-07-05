import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./library";
import { createStore } from "redux";
import reducer from "./redux/reducer";

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <ChakraProvider store={store}>
                <App />
            </ChakraProvider>
        </Web3ReactProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
