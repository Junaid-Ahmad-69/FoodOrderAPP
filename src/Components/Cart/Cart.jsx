import classes from "./Cart.module.css"
import Modal from "../UI/Modal";

const Cart = ({onClose}) => {

    const cardItem = <ul className={classes["cart-items"]}>
        {[{id: 1, name: "Sushi", amount: 2, price: 12.99}].map(item =>
            <li>{item.name}</li>
        )} </ul>
    return (
        <Modal onClose={onClose} >
            {cardItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.66</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={onClose} >Close</button>
                <button className={classes.button} >Order</button>
            </div>
        </Modal>
    )
}

export default Cart
