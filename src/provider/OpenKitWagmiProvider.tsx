import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { createMyConfig } from "@/config/config";
import { type ReactNode } from "react";
import { ConnectorProps } from "@/utils/connectors";

const queryClient = new QueryClient();

export type OpenKitWagmiProviderProps = ConnectorProps & {
  children: ReactNode;
};

const OpenKitWagmiProvider = ({
  children,
  connectors,
}: OpenKitWagmiProviderProps) => {
  const config = createMyConfig({ connectors });
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default OpenKitWagmiProvider;
