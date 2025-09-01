import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./store/auth.jsx";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";




createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
        <Toaster  position="top-right"
          toastOptions={{
            className: 'custom-toast',
            duration: 3000,}} reverseOrder={false} />
      </StrictMode>
    </BrowserRouter>
  </AuthProvider>
);
