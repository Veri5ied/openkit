import { http, createConfig } from "wagmi";
import { storage } from "./storage";
import { base, mainnet } from "wagmi/chains";
import { ConnectorProps } from "@/utils/connectors";
import { injected } from "wagmi/connectors";

export const createMyConfig = ({
  connectors = [injected()],
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
