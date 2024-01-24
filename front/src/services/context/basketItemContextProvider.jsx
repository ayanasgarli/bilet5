import { createContext, useEffect, useState } from "react";

export const BasketItemContext = createContext("");


const BasketItemContextProvider = ({ children }) => {
    const [basketItem, setBasketItem] = useState(
      JSON.parse(localStorage.getItem("basket"))
        ? JSON.parse(localStorage.getItem("basket"))
        : []
    );
  
    const addItem = (item) => {
      const currentData = basketItem.find((x) => x._id === item._id);
      if (currentData) {
        currentData.quantity++;
        currentData.totalPrice = currentData.quantity * currentData.price;
        setBasketItem([...basketItem]);
      } else {
        setBasketItem([...basketItem, { ...item, quantity: 1, totalPrice: item.price }]);
      }
    };
  
    const handleIncrease = (item) => {
      const updatedData = basketItem.map((x) =>
        x._id === item._id
          ? { ...x, quantity: x.quantity + 1, totalPrice: (x.quantity + 1) * x.price }
          : x
      );
      setBasketItem(updatedData);
    };
  
    const handleDecrease = (item) => {
      if (item.quantity > 1) {
        const updatedData = basketItem.map((x) =>
          x._id === item._id
            ? { ...x, quantity: x.quantity - 1, totalPrice: (x.quantity - 1) * x.price }
            : x
        );
        setBasketItem(updatedData);
      }
    };

  const removeItem = (item) => {
    const updatedBasket = basketItem.filter((x) => x._id != item._id);
    setBasketItem(updatedBasket);
  };

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItem));
  }, [basketItem]);

  return (
    <BasketItemContext.Provider
      value={{
        basketItem,
        setBasketItem,
        handleDecrease,
        handleIncrease,
        addItem,
        removeItem,
      }}
    >
      {children}
    </BasketItemContext.Provider>
  );
};

export default BasketItemContextProvider;
