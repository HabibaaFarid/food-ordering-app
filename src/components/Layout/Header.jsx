import React, { useContext } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";

const Header = (props) => {
    const cartCtx = useContext(CartContext)
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={cartCtx.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="meal" />
      </div>
    </>
  );
};

export default Header;
