import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartItemsContext from "../../../store/cart-items-context";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartItems = useContext(CartItemsContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    let item ={
      id:props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    }
    cartItems.addItem(item);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
