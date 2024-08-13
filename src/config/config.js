import { http, createConfig } from "wagmi";
import { storage } from "./storage";
import { base, mainnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";
export const createMyConfig = ({ connectors = [injected()], }) => {
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
