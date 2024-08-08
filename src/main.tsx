import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import OpenKitProvider from "@/provider/OpenkitProvider";
import { coinbaseWallet, metaMask, walletConnect } from "wagmi/connectors";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OpenKitProvider
      connectors={[
        metaMask(),
        coinbaseWallet(),
        walletConnect({ projectId: "" }),
      ]}
      theme="light"
    >
      <App />
    </OpenKitProvider>
  </React.StrictMode>
);
