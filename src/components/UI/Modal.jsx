import ReactDOM from "react-dom";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const cartCtx = useContext(CartContext);
  return <div className={classes.backdrop} onClick={cartCtx.onCloseCart}></div>; //using context here will always make it close the modal not only thing
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
