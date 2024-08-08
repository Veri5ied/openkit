import OpenKitWagmiProvider, {
  type OpenKitWagmiProviderProps,
} from "./OpenKitWagmiProvider";

type OpenKitProviderProps = OpenKitWagmiProviderProps;

const OpenKitProvider = ({
  children,
  connectors,
  theme,
}: OpenKitProviderProps) => {
  return (
    <OpenKitWagmiProvider connectors={connectors} theme={theme}>
      {children}
    </OpenKitWagmiProvider>
  );
};

export default OpenKitProvider;
