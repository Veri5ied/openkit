import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import WalletOptions from "./wallet-options";
import { useTheme } from "@/context/theme";
import { useAddress } from "@/hooks";
import { useGetConnector } from "@/context/connector";
const OpenKitModal = ({ trigger }) => {
    const { theme } = useTheme();
    const account = useAddress();
    const { connector } = useGetConnector();
    const { isConnected, isConnecting } = account;
    return (_jsxs("div", { children: [isConnecting && (_jsxs(Dialog, { open: true, children: [_jsx(DialogTrigger, {}), _jsx(DialogContent, { className: `${theme === "dark" ? "bg-[#0c0e13]" : "bg-[#fff]"} w-full md:w-[340px] min-h-[200px] outline-none`, children: _jsxs("div", { className: "grid place-items-center gap-2 text-center py-4", children: [_jsx("img", { src: connector?.icon
                                        ? connector?.icon
                                        : connector?.name === "Coinbase Wallet"
                                            ? "https://res.cloudinary.com/dfymeyybz/image/upload/v1723121507/openkit/xrflg2a28vfc36ovqrjh.png"
                                            : connector?.name === "WalletConnect"
                                                ? "https://res.cloudinary.com/dfymeyybz/image/upload/v1723121678/openkit/k3mhkjpghebz95gs6dea.png"
                                                : "", alt: "_", className: "w-[50px] h-[50px] rounded-md" }), _jsxs("h1", { className: "font-semibold text-lg", children: ["Opening ", connector?.name, "...", " "] }), _jsx("p", { className: "text-base font-normal", children: "Confirm connection in the extension" }), _jsx("div", { className: "spinner w-[30px]" })] }) })] })), !isConnecting && !isConnected && (_jsx("div", { children: _jsxs(Dialog, { children: [_jsx(DialogTrigger, { children: trigger }), _jsxs(DialogContent, { className: `${theme === "dark" ? "bg-[#0c0e13]" : "bg-[#fff]"} w-full md:w-[360px] min-h-[300px] outline-none`, children: [_jsx(DialogHeader, { className: "mb-2", children: _jsx(DialogTitle, { children: "Log in or Sign up" }) }), _jsx("p", { className: "text-sm", children: "Log in or sign up by selecting a wallet connection method below." }), _jsx("div", { className: "grid gap-2 mt-[20px]", children: _jsx(WalletOptions, {}) }), _jsxs("div", { className: "text-sm pt-4", children: ["Opensource project by", " ", _jsx("a", { href: "https://github.com/Veri5ied/openkit", target: "_blank", rel: "noopener noreferrer", className: "text-orange-600", children: "Openkit" })] })] })] }) }))] }));
};
export default OpenKitModal;
