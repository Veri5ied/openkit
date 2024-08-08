import { useConnect } from "wagmi";
import { Button } from "./ui/button";

const WalletOptions = () => {
  const { connectors, connect } = useConnect();
  const available_connectors = Array.from(
    new Map(connectors.map((connector) => [connector.name, connector])).values()
  );
  return available_connectors.map((connector) => (
    <Button
      key={connector.uid}
      variant="outline"
      onClick={() => connect({ connector })}
      className="px-2 min-h-[44px] flex gap-2 justify-between px-4 w-full font-medium"
    >
      <div className="flex items-center justify-start gap-2">
        <img
          src={
            connector.icon
              ? connector?.icon
              : connector?.name === "Coinbase Wallet"
              ? "https://res.cloudinary.com/dfymeyybz/image/upload/v1723121507/openkit/xrflg2a28vfc36ovqrjh.png"
              : connector?.name === "WalletConnect"
              ? "https://res.cloudinary.com/dfymeyybz/image/upload/v1723121678/openkit/k3mhkjpghebz95gs6dea.png"
              : ""
          }
          alt="_"
          className="w-[20px] h-[20px] rounded-md"
        />
        {connector.name}
      </div>
      <div>
        {connector.type === "injected" && (
          <span className="ml-2 px-2 py-1 bg-gray-200 rounded-full text-xs">
            Installed
          </span>
        )}
      </div>
    </Button>
  ));
};

export default WalletOptions;
