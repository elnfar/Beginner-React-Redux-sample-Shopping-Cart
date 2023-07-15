import { useDispatch } from "react-redux"
import { ChevronDown,ChevronUp } from "../icons"
import { decreaseAmount, incrementAmount, removeItem } from "../features/cart/cartSlice"

export default function CartItem({id,img,title,price,amount}) {

  const dispatch = useDispatch()

return (
  <article style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
    <div>
      <img style={{width:"200px", objectFit:"cover"}} src={img} alt="" />
    </div>

        <div>
        <h3>{title}</h3>
        <h4>${price}</h4>
        <button onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>

      <div>
      <p>{amount}</p>
          <button onClick={() => dispatch(incrementAmount(id))}>
            Increment
          </button>

          <button onClick={
            
            () => 
              {
                
                if(amount === 1) {
                  dispatch(removeItem(id))
                  return
                }
                dispatch(decreaseAmount(id))
              }
            }>
            Decrement
          </button>

    
      </div>
  </article>
  )
}
