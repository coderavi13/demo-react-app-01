import logo from './logo.svg';
import './App.css';
import MyButton from './Components/MyButton/MyButton';
import { useState, useCallback } from 'react';
import Home from './Components/Home/Home';
function App() {

  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
    console.log("Button CLiked");
  }
  return ( <>
    <div className="App-header">
      <MyButton
        name={show ? "Hide Div" : "Show Div"}
        handleClick={handleClick} />

      <MyButton
        name="Ravi"
        handleClick={() => console.log("Ravi")} />

      <Home />

      <div className='App-header'>
        {show && <div className='myDiv'>

          This div will Show or Hide when you click button

        </div>}
      </div>
    </div>
    </>
  );
}

export default App;
