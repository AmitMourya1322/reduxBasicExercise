import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import App from "./App";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
