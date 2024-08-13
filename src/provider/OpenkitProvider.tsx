import {
  coinbaseWallet,
  injected,
  metaMask,
  walletConnect,
  safe,
} from "wagmi/connectors";
import OpenKitWagmiProvider, {
  type OpenKitWagmiProviderProps,
} from "./OpenKitWagmiProvider";

type OpenKitProviderProps = OpenKitWagmiProviderProps & {
  supportedWallets: string[];
  walletConnectId?: string | undefined;
};

const OpenKitProvider = ({
  children,
  theme,
  supportedWallets,
  walletConnectId,
}: OpenKitProviderProps) => {
  const connectors = supportedWallets
    .map((wallet) => {
      switch (wallet) {
        case "metamask":
          return metaMask();
        case "coinbase wallet":
          return coinbaseWallet();
        case "wallet connect":
          return walletConnect({ projectId: walletConnectId! });
        case "safe":
          return safe();
        default:
          return injected();
      }
    })
    .filter(Boolean);
  return (
    <OpenKitWagmiProvider connectors={connectors} theme={theme}>
      {children}
    </OpenKitWagmiProvider>
  );
};

export default OpenKitProvider;
