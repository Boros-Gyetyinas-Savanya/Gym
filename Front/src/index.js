import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
