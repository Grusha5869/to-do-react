import { useState } from 'react'
import './App.css'
import InfoBtn from './components/Info-btn'
function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="container">
        <div className="to-do-base to-do-head">
          <span className="to-do-title">To Do</span>
          <InfoBtn src='src/assets/information_1843058.png' alt='О проекте' onClick={() => setShowInfo(!showInfo)} />
        </div>
        {showInfo && (
          <div className="to-do-base to-do-info-proj">we</div>
        )}
      </div>

      
    </>
  )
}

export default App
