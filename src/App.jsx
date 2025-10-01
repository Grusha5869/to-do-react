import { useState } from 'react'
import './App.css'
import InfoBtn from './components/Info-btn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="to-do-base to-do-head">
          <span className="to-do-title">To Do</span>
          <InfoBtn src='src/assets/information_1843058.png' alt='О проекте' />
        </div>
      </div>

    </>
  )
}

export default App
