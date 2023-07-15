import { useDispatch } from "react-redux"
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

export default function Modal() {

  const dispatch = useDispatch();

  return (
    <aside className="" style={{width:"400px",height:"400px", position:"absolute", background:"#000",color:"white"}}>
        <div>
            <h4>Remove all items you mean ?</h4>
            <div>
                <button type="button" onClick={() => dispatch(closeModal())}>Cancel</button>
                <button type="button" onClick={() => {
                  dispatch(clearCart())
                  dispatch(closeModal())
                }
                }>Confirm</button>
            </div>
        </div>
    </aside>
  )
}
