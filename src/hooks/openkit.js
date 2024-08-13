import { useAccount, useDisconnect } from "wagmi";
export const useAddress = () => {
    const { address, isConnected, isConnecting, connector } = useAccount();
    return {
        address,
        isConnected,
        isConnecting,
        connector,
    };
};
export const useLogout = () => {
    const { disconnect } = useDisconnect();
    return disconnect;
};
