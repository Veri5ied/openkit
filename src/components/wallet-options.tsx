import { useConnect } from "wagmi";

const WalletOptions = () => {
  const { connectors, connect } = useConnect();
  console.log(connectors);
  const available_connectors = Array.from(
    new Map(connectors.map((connector) => [connector.name, connector])).values()
  );
  return available_connectors.map((connector) => (
    <button
      key={connector.uid}
      onClick={() => connect({ connector })}
      className="grid gap-2 px-4"
    >
      {connector.name}
    </button>
  ));
};

export default WalletOptions;
