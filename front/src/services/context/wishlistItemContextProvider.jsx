import { createContext, useEffect, useState } from "react";

export const WishlistItemContext = createContext("");

const WishlistItemContextProvider = ({ children }) => {
  const [wishlistItem, setWishlistItem] = useState(
    JSON.parse(localStorage.getItem("like"))
      ? JSON.parse(localStorage.getItem("like"))
      : []
  );

  const likeItem = (item) => {
    const currentData = wishlistItem.find((x) => x._id == item.id);
    if (currentData) {
      currentData.quanity++;
      setWishlistItem([...wishlistItem]);
    } else {
      setWishlistItem([...wishlistItem, { ...item, quanity: 1 }]);
    }
  };

  const deleteItem = (item) => {
    const updatedBasket = wishlistItem.filter((x) => x._id != item._id);
    setWishlistItem(updatedBasket);
  };

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(wishlistItem));
  }, [wishlistItem]);

  return (
    <WishlistItemContext.Provider
      value={{ wishlistItem, setWishlistItem, likeItem, deleteItem }}
    >
      {children}
    </WishlistItemContext.Provider>
  );
};

export default WishlistItemContextProvider;
