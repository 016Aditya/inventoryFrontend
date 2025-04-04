import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-d5j16gp7hi55r4yo.us.auth0.com"
      clientId="XfhgFvwwmW9M9pr9rc85s1ntc1RYgG1W"
      authorizationParams={{
        redirect_uri: "https://127.0.0.1:3000",
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
