import { createContext, useEffect, useState } from "react";

export const BasketItemContext = createContext("");

const BasketItemContextProvider = ({children}) => {
    const [basketItem, setBasketItem] = useState(
        JSON.parse(localStorage.getItem("basketItem"))
        ? JSON.parse(localStorage.getItem("basketItem"))
        : []
    );

    const addBasket = (item) => {
        const currentItem = basketItem.find((x) => x._id === item._id);
        if (currentItem) {
            currentItem.quantity++;
            setBasketItem([...basketItem]);
        }
        else{
            setBasketItem([...basketItem, {...item, quantity:1}]);
        }
    };

    const handleIncrease = (item) => {
        const updatedData = basketItem.map((x) => 
        x._id === item._id ? { ...x, quantity: x.quantity + 1 } : x
        );
        setBasketItem(updatedData)
    };

    const handleDecrease = (item) => {
        if (item.quantity > 0 ) {
            const updatedData = basketItem.map((x) => 
            x._id === item._id ? { ...x, quantity: x.quantity - 1 } : x
            );
            setBasketItem(updatedData);
        };
    };

    useEffect(() => {
        localStorage.setItem("basketItem", JSON.stringify(basketItem));
    }, [basketItem]);

    return (
        <BasketItemContext.Provider
        value={{
            basketItem, 
            setBasketItem,
            addBasket,
            handleDecrease,
            handleIncrease
        }}
        >
            {children}
        </BasketItemContext.Provider>
    )
}

export default BasketItemContextProvider