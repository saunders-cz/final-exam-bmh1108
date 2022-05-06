import { createContext, useContext, useState } from "react";

const context = createContext({});

export const CartProvider = ({ children }) => {
  const [state, setState] = useState({
    items: [],
    hasItems: false,
    itemCount: 0,
  });

  const addItem = (pastryId) => {
    let items = [...state.items];
    const existingItem = items.find((i) => i.id === pastryId);
    if (existingItem !== undefined) {
      existingItem.qty++;
      setState({
        ...state,
        items,
        hasItems: true,
        itemCount: getItemCount(items),
      });
    } else {
      items = [...items, { id: pastryId, qty: 1 }];
      setState({
        ...state,
        items,
        hasItems: true,
        itemCount: getItemCount(items),
      });
    }
  };

  const updateItemQuantity = (pastryId, newQuantity) => {
    const items = [...state.items];
    const item = items.find((item) => item.id === pastryId);

    if (item === undefined) {
      console.error(
        `Pastry ID ${pastryId} not found when trying to update quantity.`
      );
      return;
    }

    if (newQuantity === 0) {
      items.splice(
        items.findIndex((i) => i.id === pastryId),
        1
      );
    } else {
      item.qty = newQuantity;
    }

    setState({
      ...state,
      items,
    });
  };

  const getItemCount = (items) => {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      count += item.qty;
    }
    return count;
  };

  return (
    <context.Provider
      value={{
        ...state,
        addItem,
        updateItemQuantity,
      }}
    >
      {children}
    </context.Provider>
  );
};
export const CartConsumer = context.Consumer;

export const useCart = () => useContext(context);
