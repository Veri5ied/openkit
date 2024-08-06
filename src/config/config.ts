import { http, createConfig } from "wagmi";
import { storage } from "./storage";
import { base, mainnet } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [],
  storage,
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
