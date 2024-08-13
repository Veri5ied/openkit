import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
//import "./App.css";
import OpenKitModal from "./components/openkit-modal";
function App() {
    return (_jsx(_Fragment, { children: _jsx(OpenKitModal, { trigger: _jsx("button", { children: "Open Now" }) }) }));
}
export default App;
