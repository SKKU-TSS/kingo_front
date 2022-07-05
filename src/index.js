import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./library";
import { createStore } from "redux";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <ChakraProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ChakraProvider>
        </Web3ReactProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
