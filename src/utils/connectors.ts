import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

type Connector =
  | ReturnType<typeof injected>
  | ReturnType<typeof walletConnect>
  | ReturnType<typeof metaMask>
  | ReturnType<typeof safe>;

export type ConnectorProps = {
  connectors?: Connector[];
  walletConnectId?: string;
};
