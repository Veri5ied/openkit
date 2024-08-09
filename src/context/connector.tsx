import { createContext, ReactNode, useContext, useState } from "react";
import { type Connector } from "wagmi";

interface ConnectorContextType {
  connector: Connector | undefined;
  setConnector: React.Dispatch<React.SetStateAction<Connector | undefined>>;
}

export const ConnectorContext = createContext<ConnectorContextType | undefined>(
  undefined
);

export const useGetConnector = () => {
  const context = useContext(ConnectorContext);
  if (context === undefined) {
    throw new Error(
      "useGetConnector must be used within a GetConnectorProvider"
    );
  }
  return context;
};

export const GetConnectorProvider = ({ children }: { children: ReactNode }) => {
  const [connector, setConnector] = useState<Connector | undefined>(undefined);

  return (
    <ConnectorContext.Provider value={{ connector, setConnector }}>
      {children}
    </ConnectorContext.Provider>
  );
};
