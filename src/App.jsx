import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import { useSelector } from 'react-redux'
import CartContainer from './components/cart-container'

function App() {
  const [count, setCount] = useState(0)

  const {cartItems} = useSelector((state) => state.cart)

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