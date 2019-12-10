import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./configureStore";

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
     
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./components/App", renderApp);
}

renderApp();
