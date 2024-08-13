import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { createMyConfig } from "@/config/config";
import { ThemeProvider } from "@/context/theme";
import { GetConnectorProvider } from "@/context/connector";
const queryClient = new QueryClient();
const OpenKitWagmiProvider = ({ children, connectors, theme, }) => {
    const config = createMyConfig({ connectors });
    return (_jsx(WagmiProvider, { config: config, children: _jsx(QueryClientProvider, { client: queryClient, children: _jsx(ThemeProvider, { initialTheme: theme, children: _jsx(GetConnectorProvider, { children: children }) }) }) }));
};
export default OpenKitWagmiProvider;
