import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import client from "./modules/apollo";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </>,
);
