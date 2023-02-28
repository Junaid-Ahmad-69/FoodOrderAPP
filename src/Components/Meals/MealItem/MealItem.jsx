import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../../Store/card-context";

const MealItem = (props) => {
    const mealPrice = `$${props.price.toFixed(2)}`
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{mealPrice}</div>
            </div>
            <div>
                <MealItemForm onAddToCard={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem
