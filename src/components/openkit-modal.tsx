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
import { useAddress, useLogout } from "@/hooks";
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

  console.log(address);
  console.log(connector);

  return (
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
  );
};

export default OpenKitModal;
