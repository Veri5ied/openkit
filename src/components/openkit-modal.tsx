import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WalletOptions from "./wallet-options";
import { ReactNode } from "react";
import { useTheme } from "@/context/theme";
import { useAddress } from "@/hooks";
import { useLogout } from "@/hooks";
import { useGetConnector } from "@/context/connector";

interface OpenKitModalTriggerProps {
  trigger: ReactNode;
}

const OpenKitModal = ({ trigger }: OpenKitModalTriggerProps) => {
  const { theme } = useTheme();
  const account = useAddress();
  const { connector } = useGetConnector();
  const { address, isConnected, isConnecting } = account;
  const logout = useLogout();

  return (
    <div>
      {isConnecting && (
        <Dialog open={true}>
          <DialogTrigger />
          <DialogContent
            className={`${
              theme === "dark" ? "bg-[#0c0e13]" : "bg-[#fff]"
            } w-full md:w-[340px] min-h-[200px] outline-none`}
          >
            <div className="grid place-items-center gap-2 text-center py-4">
              <img
                src={
                  connector?.icon
                    ? connector?.icon
                    : connector?.name === "Coinbase Wallet"
                    ? "https://res.cloudinary.com/dfymeyybz/image/upload/v1723121507/openkit/xrflg2a28vfc36ovqrjh.png"
                    : connector?.name === "WalletConnect"
                    ? "https://res.cloudinary.com/dfymeyybz/image/upload/v1723121678/openkit/k3mhkjpghebz95gs6dea.png"
                    : ""
                }
                alt="_"
                className="w-[50px] h-[50px] rounded-md"
              />
              <h1 className="font-semibold text-lg">
                Opening {connector?.name}...{" "}
              </h1>
              <p className="text-base font-normal">
                Confirm connection in the extension
              </p>
              <div className="spinner w-[30px]" />
            </div>
          </DialogContent>
        </Dialog>
      )}
      {!isConnecting && !isConnected && (
        <div>
          <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent
              className={`${
                theme === "dark" ? "bg-[#0c0e13]" : "bg-[#fff]"
              } w-full md:w-[360px] min-h-[300px] outline-none`}
            >
              <DialogHeader className="mb-2">
                <DialogTitle>Log in or Sign up</DialogTitle>
              </DialogHeader>
              <p className="text-sm">
                Log in or sign up by selecting a wallet connection method below.
              </p>
              <div className="grid gap-2 mt-[20px]">
                <WalletOptions />
              </div>
              <div className="text-sm pt-4">
                Opensource project by{" "}
                <a
                  href="https://github.com/Veri5ied/openkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600"
                >
                  Openkit
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {address && (
        <button onClick={() => logout()}>
          {address} <br /> Logout
        </button>
      )}
    </div>
  );
};

export default OpenKitModal;
