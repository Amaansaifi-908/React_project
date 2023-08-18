import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

function App() {
  const [mode, setmode] = useState(`light`)    // wheather dark mode is enable or not 

  const toggleMode = () => {
    if (mode === `dark`) {
      setmode(`light`)
      document.body.style.backgroundColor = `white`
      document.title = `newszilla - LIGHT MODE`;     //this will help you to change the title on according to you like this time when you press light mode ot show light mode on the title.
    }
    else {
      setmode(`dark`)
      document.body.style.backgroundColor = `#043742`
      document.title = `newszilla - DARK MODE`;

    }
  }
  return (

    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <News pageSize={6} mode={mode} toggleMode={toggleMode} />

    </div>
  )
}

export default App;
