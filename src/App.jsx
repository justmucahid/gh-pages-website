import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'
import {AiFillInstagram} from 'react-icons/ai'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <AiFillInstagram size="50px" />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mücahit GÖKÇE</h1>
      <h2>React + Babylon + Vite</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='senet'>
        'when the axe came into the forest the trees said the handle is one of us'_a Turkish proverb.
        </p>
        <a href="https://www.linkedin.com/in/justmucahid/" target="_blank">
        <AiFillLinkedin size="50px" />
        </a>
        <a href="https://twitter.com/teyitorg" target="_blank">
        <FaXTwitter size="50px" />
        </a>
        <a href="https://www.instagram.com/justmucahid/" target="_blank">
        <AiFillInstagram size="50px" />
        </a>
      </div>
      <p className="senet">
        Follaw To More About Us
      </p>
    </>
  )
}

export default App
