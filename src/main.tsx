import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {Authprovider} from "@/context/AuthContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </Authprovider>
  </StrictMode>
);
