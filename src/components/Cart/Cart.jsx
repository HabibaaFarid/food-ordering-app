import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItemsContext from "../../store/cart-items-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const itemsCtx = useContext(CartItemsContext);

  const totalAmount = `$${Math.abs(itemsCtx.totalAmount.toFixed(2))}`;
  const hasItems = itemsCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    itemsCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    itemsCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {itemsCtx.items.map((item) => (
        <CartItem
          name={item.name}
          price={+item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={cartCtx.onCloseCart}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
