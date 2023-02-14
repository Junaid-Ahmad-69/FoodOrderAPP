import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onIsOpen}) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={onIsOpen}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealImage} alt="food banner"/>
            </div>
        </>
    );
};

export default Header;
