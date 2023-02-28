import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {useContext} from "react";
import CartContext from "../../Store/card-context";

const HeaderCartButton = ({onClick}) => {

    const cartCtx = useContext(CartContext);
    const numberOfCardItem = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)
    return (
        <>
            <button className={classes.button} onClick={onClick}>
        <span className={classes.icon}>
          <CartIcon/>
        </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCardItem}</span>
            </button>
        </>
    );
};

export default HeaderCartButton;
