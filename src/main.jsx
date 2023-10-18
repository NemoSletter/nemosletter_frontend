import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={window.location.pathname || ''}>
      <React.StrictMode>
        <GoogleOAuthProvider clientId="824401580868-9sut5toaadmedka5jfet8m2sr7l7tcsi.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </React.StrictMode>
  </BrowserRouter>
);
