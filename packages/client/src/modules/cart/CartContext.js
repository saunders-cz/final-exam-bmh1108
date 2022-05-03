import { createContext, useContext, useState } from "react";

const context = createContext({});

export const CartProvider = ({ children }) => {
  const [state, setState] = useState({
    items: [],
    hasItems: false,
    itemCount: 0,
  });

  const addPastry = (pastryId) => {
    let pastries = [...state.pastries];
    const existingPastry = pastries.find((i) => i.id === pastryId);
    if (existingPastry !== undefined) {
      existingPastry.qty++;
      setState({
        ...state,
        pastries,
        hasPastries: true,
        pastryCount: getPastryCount(pastries),
      });
    } else {
      pastries = [...pastries, { id: pastryId, qty: 1 }];
      setState({
        ...state,
        pastries,
        hasPastries: true,
        pastryCount: getPastryCount(pastries),
      });
    }
  };

  const updatePastryQuantity = (pastryId, newQuantity) => {
    const pastries = [...state.pastries];
    const pastry = pastries.find((pastry) => pastry.id === pastryId);

    if (pastry === undefined) {
      console.error(
        `Pastry id ${pastryId} not found when trying to update quantity.`
      );
      return;
    }

    if (newQuantity === 0) {
      pastries.splice(
        pastries.findIndex((i) => i.id === pastryId),
        1
      );
    } else {
      pastry.qty = newQuantity;
    }

    setState({
      ...state,
      pastries,
    });
  };

  const getPastryCount = (pastries) => {
    let count = 0;
    for (let i = 0; i < pastries.length; i++) {
      const pastry = pastries[i];
      count += pastry.qty;
    }
    return count;
  };

  return (
    <context.Provider
      value={{
        ...state,
        addPastry,
        updatePastryQuantity,
      }}
    >
      {children}
    </context.Provider>
  );
};
export const CartConsumer = context.Consumer;

export const useCart = () => useContext(context);
