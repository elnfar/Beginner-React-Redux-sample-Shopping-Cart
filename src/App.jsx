import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/cart-container'
import { calculateTotals,getCartItems } from './features/cart/cartSlice'
import Modal from './components/model'




function App() {
  const [count, setCount] = useState(0)

  const {cartItems,isLoading} = useSelector((store) => store.cart)
  const {isOpen} = useSelector((store) => store.modal)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  },[])

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <main>
      { isOpen && <Modal/>}
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