import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/cart-container'
import { calculateTotals } from './features/cart/cartSlice'




function App() {
  const [count, setCount] = useState(0)

  const {cartItems} = useSelector((store) => store.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])

  return (
    <main>
      <Navbar/>

        <div>
          <CartContainer/>
        </div>

    </main>
  )
}

export default App
// {cartItems.map((item)=> (
//   <div key={item.id}>{item.title}</div>
// ))}