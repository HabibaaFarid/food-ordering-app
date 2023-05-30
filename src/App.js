import { useContext } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cart-context";
import  CartItemsProvider  from "./store/CartItemsProvider";

function App() {
  const ctx = useContext(CartContext);
  return (
    <CartItemsProvider>
      {ctx.cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartItemsProvider>
  );
}

export default App;
