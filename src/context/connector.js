import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
export const ConnectorContext = createContext(undefined);
export const useGetConnector = () => {
    const context = useContext(ConnectorContext);
    if (context === undefined) {
        throw new Error("useGetConnector must be used within a GetConnectorProvider");
    }
    return context;
};
export const GetConnectorProvider = ({ children }) => {
    const [connector, setConnector] = useState(undefined);
    return (_jsx(ConnectorContext.Provider, { value: { connector, setConnector }, children: children }));
};
