import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom";

import App from "./App";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>,
  rootElement
);
