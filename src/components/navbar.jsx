import { useSelector } from 'react-redux'
import {CartIcon} from '../icons'

export default function Navbar() {

    const {amount} = useSelector((state) => state.cart)
    //so we have cartSlice ( which is some sort of cart functionality/all slice means a functionality of our app) useSelector is accessing to our store and inside of our reducer object, we have cart ( cart name is optional we can change it to dog for example. ) and gets cartReducer (which is in /features/cartSlices and initial state), Not that we are exporting reducer from the cartSlice and we are using it in order to mutate initialState.


  return (
    <nav>
        <div className='nav-center'>
            <h3>Nav</h3>
            <p>{amount}</p>
        </div>
    </nav>
  )
}
