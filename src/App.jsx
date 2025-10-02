import { useState } from 'react'
import './App.css'
import InfoBtn from './components/Info-btn'
import InfoBlock from './components/InfoBlock'

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="container">
        <div className="to-do-base to-do-head">
          <span className="to-do-title">To Do</span>
          <InfoBtn src='src/assets/information_1843058.png' alt='О проекте' onClick={() => setShowInfo(!showInfo)} title='О проекте' />
        </div>
        {showInfo && (
          <InfoBlock showInfo={showInfo} setShowInfo={setShowInfo}/>
        )}
      </div>

      
    </>
  )
}

export default App
