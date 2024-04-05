import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import FeedbackContextProvider from "./store/feedback-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FeedbackContextProvider>
      <App />
    </FeedbackContextProvider>
  </React.StrictMode>
);
