import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BasketItemContextProvider from "./services/context/basketItemContextProvider.jsx";
import WishlistItemContextProvider from "./services/context/wishlistItemContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketItemContextProvider>
      <WishlistItemContextProvider>
      <App />
      </WishlistItemContextProvider>
    </BasketItemContextProvider>
  </React.StrictMode>
);
