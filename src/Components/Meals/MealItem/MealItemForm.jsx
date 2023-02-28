import React, {useRef, useState} from 'react';
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";


const MealItemForm = (props) => {
    const [valid, setValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = Number(enteredAmount);

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setValid(false);
            return;
        }
        props.onAddToCard(enteredAmountNumber);
    };


    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input label="Amount"
            ref={amountInputRef}
                   input={{
                id: 'amount',
                type: 'number',
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1
            }}/>
            <button> + Add</button>
            {!valid && <span>Please enter valid amount (1-5)</span>}

        </form>
    )
}

export default MealItemForm
 