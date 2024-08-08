import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { createMyConfig } from "@/config/config";
import { type ReactNode } from "react";
import { ConnectorProps } from "@/utils/connectors";
import { ThemeProvider } from "@/context/theme";

const queryClient = new QueryClient();

export type OpenKitWagmiProviderProps = ConnectorProps & {
  children: ReactNode;
  theme: string;
};

const OpenKitWagmiProvider = ({
  children,
  connectors,
  theme,
}: OpenKitWagmiProviderProps) => {
  const config = createMyConfig({ connectors });
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default OpenKitWagmiProvider;
