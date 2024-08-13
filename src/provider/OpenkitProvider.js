import { jsx as _jsx } from "react/jsx-runtime";
import { coinbaseWallet, injected, metaMask, walletConnect, safe, } from "wagmi/connectors";
import OpenKitWagmiProvider from "./OpenKitWagmiProvider";
const OpenKitProvider = ({ children, theme, supportedWallets, walletConnectId, }) => {
    const connectors = supportedWallets
        .map((wallet) => {
        switch (wallet) {
            case "metamask":
                return metaMask();
            case "coinbase wallet":
                return coinbaseWallet();
            case "wallet connect":
                return walletConnect({ projectId: walletConnectId });
            case "safe":
                return safe();
            default:
                return injected();
        }
    })
        .filter(Boolean);
    return (_jsx(OpenKitWagmiProvider, { connectors: connectors, theme: theme, children: children }));
};
export default OpenKitProvider;
