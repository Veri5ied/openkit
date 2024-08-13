import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import OpenKitProvider from "@/provider/OpenkitProvider";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(OpenKitProvider, { theme: "light", supportedWallets: ["metamask", "coinbase wallet"], children: _jsx(App, {}) }) }));
