import OpenKitWagmiProvider, {
  type OpenKitWagmiProviderProps,
} from "./OpenKitWagmiProvider";

type OpenKitProviderProps = OpenKitWagmiProviderProps;

const OpenKitProvider = ({ children, connectors }: OpenKitProviderProps) => {
  return (
    <OpenKitWagmiProvider connectors={connectors}>
      {children}
    </OpenKitWagmiProvider>
  );
};

export default OpenKitProvider;
