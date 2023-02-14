import React, {useState} from "react";
import Header from "./Components/Layouts/Header";
import Meal from "./Components/Meals/Meal";
import Card from "./Components/UI/Card";
import Cart from "./Components/Cart/Cart";

const App = () => {

    const [isOpen, setIsOpen] = useState(false);

    const ShowCardHandler = () => {
        setIsOpen(true);
    }

    const hideCardHandler = () => {
        setIsOpen(false);
    }


    return (
        <>
            {isOpen && <Cart onClose={hideCardHandler}/>}
            <Header onIsOpen={ShowCardHandler}/>
            <main>
                <Meal/>
            </main>
        </>
    );
};

export default App;
