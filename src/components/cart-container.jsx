import { useDispatch, useSelector } from "react-redux"
import CartItem from "./cart-item"
import { clearCart,incrementAmount } from "../features/cart/cartSlice";


export default function CartContainer() {
  const dispatch = useDispatch();
  const {cartItems,total,amount} = useSelector((state) => state.cart)

  if(amount < 1){
    return ( <section>
        <h2>Your bag</h2>
        <h4>is currentyl empty</h4>
    </section>)
  }

  return (
    <section>
      <h2>Your bag</h2>

      {cartItems.map((item) => (
        <CartItem key={item.id} {...item}/>
      ))}

      <footer>
        <hr />
        <h4>Total: <span>$ {total}</span></h4>

        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
      </footer>

    </section>
  )
}
