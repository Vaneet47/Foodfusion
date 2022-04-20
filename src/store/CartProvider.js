import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: totalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const itemToBeRemoved = state.items[existingCartItemIndex];
    const totalAmount = state.totalAmount - itemToBeRemoved.price;

    let updatedItem;
    let updatedItems;

    if (itemToBeRemoved.amount > 1) {
      updatedItem = {
        ...itemToBeRemoved,
        amount: itemToBeRemoved.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items];
      updatedItems.splice(existingCartItemIndex, 1);
    }

    return {
      items: updatedItems,
      totalAmount: totalAmount,
    };
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cart, dispatchAction] = useReducer(cartReducer, defaultCart);

  const addItemToCartHandler = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
