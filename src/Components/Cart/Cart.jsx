import {useContext} from "react";
import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import CartContext from "../../Store/card-context";
import CartItem from "./CartItem";


const Cart = ({onClose}) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = ` $${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cardItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cardItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount:1 })
    }
    const
        cardItem = <ul className={classes["cart-items"]}>
            {cartCtx.items.map(item =>
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
                          onRemove={cardItemRemoveHandler.bind(null, item.id)}
                          onAdd={cardItemAddHandler.bind(null, item)}

                />
            )} </ul>
    return (
        <Modal onClose={onClose}>
            {cardItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
