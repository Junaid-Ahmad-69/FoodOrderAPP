import React, {useState} from "react";
import Header from "./Components/Layouts/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
import CartProvide from "./Store/CartProvide";

const App = () => {

    const [isOpen, setIsOpen] = useState(false);

    const ShowCardHandler = () => {
        setIsOpen(true);
    }

    const hideCardHandler = () => {
        setIsOpen(false);
    }


    return (
        <CartProvide>
            {isOpen && <Cart onClose={hideCardHandler}/>}
            <Header onIsOpen={ShowCardHandler}/>
            <main>
                <Meal/>
            </main>
        </CartProvide>
    );
};

export default App;
