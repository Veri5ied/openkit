import { http, createConfig } from "wagmi";
import { storage } from "./storage";
import { base, mainnet } from "wagmi/chains";
import { ConnectorProps } from "@/utils/connectors";
import { metaMask } from "wagmi/connectors";

export const createMyConfig = ({
  connectors = [metaMask()],
}: ConnectorProps) => {
  return createConfig({
    chains: [mainnet, base],
    connectors: connectors,
    storage,
    transports: {
      [mainnet.id]: http(),
      [base.id]: http(),
    },
  });
};
