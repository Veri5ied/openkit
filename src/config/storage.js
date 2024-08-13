import { createStorage, serialize } from "wagmi";
export const storage = createStorage({
    key: "openkit",
    serialize,
    storage: localStorage,
});
