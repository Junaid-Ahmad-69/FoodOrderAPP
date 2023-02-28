import CartContext from "./card-context";
import {useReducer} from "react";


const cartInitialArg = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemAmount = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingCartItemAmount];
        let updateItems;

        if (existingCartItem) {
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItemAmount.amount + action.item.amount,
            }
            updateItems = [...state.items];
            updateItems[existingCartItem] = updateItem;
        } else {
            updateItems = state.items.concat(action.item)
        }
        return {
            items: updateItems,
            totalAmount: updateTotalAmount,
        }
    }
    if (action.type === "REMOVE") {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingItemIndex];
        const updateTotal = state.totalAmount - existingItem.price;
        let updated;
        if (existingItem.amount === 1) {
            updated = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updated = [...state.items];
            updated[existingItemIndex] = updatedItem;
        }
        return {
            items: updated,
            totalAmount: updateTotal,
        }
    }

    return cartInitialArg;
}

const CartProvide = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, cartInitialArg);

    const addItemsToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }
    const removeItemToCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemsToCartHandler,
        removeItem: removeItemToCartHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvide
