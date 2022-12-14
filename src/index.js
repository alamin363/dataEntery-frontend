import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./Pages/Context/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
    <QueryClientProvider client={queryClient}>
    <App />
     </QueryClientProvider>
    </Context>
  </React.StrictMode>
);
