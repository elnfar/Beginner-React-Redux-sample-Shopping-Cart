import { useDispatch, useSelector } from "react-redux"
import CartItem from "./cart-item"
import { openModal } from "../features/modal/modalSlice";


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
        <h4>Total: <span>$ {total.toFixed(2)}</span></h4>

        <button onClick={() => dispatch(openModal())}>Clear cart</button>
      </footer>

    </section>
  )
}
