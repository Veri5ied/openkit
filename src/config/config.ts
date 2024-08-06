import { http, createConfig } from "wagmi";
import { storage } from "./storage";
import { base, mainnet } from "wagmi/chains";
import { ConnectorProps } from "@/utils/connectors";
import { metaMask, walletConnect } from "wagmi/connectors";

const createMyConfig = ({
  connectors = [metaMask()],
  walletConnectId,
}: ConnectorProps) => {
  const walletConnectors = connectors?.map((connect) => {
    if (connect?.name === "WalletConnect") {
      return walletConnect({ projectId: walletConnectId! });
    }
    return connect;
  });
  return createConfig({
    chains: [mainnet, base],
    connectors: walletConnectors,
    storage,
    transports: {
      [mainnet.id]: http(),
      [base.id]: http(),
    },
  });
};

export const config = createMyConfig({});
