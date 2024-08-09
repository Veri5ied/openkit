import { useAccount, useDisconnect, type Connector } from "wagmi";

interface AddressProps {
  address: string | undefined;
  isConnected?: boolean;
  isConnecting?: boolean;
  connector?: Connector | undefined;
}

export const useAddress = () => {
  const { address, isConnected, isConnecting, connector }: AddressProps =
    useAccount();
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
