
import { useRef } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';

function App(){

  const inputRef = useRef(null)

  function handleClick(){
    console.log('clicked')
    inputRef.current.value = "";
  }

  return (
    <div className='App'>
      <Navbar></Navbar>
      <h2>Demo useRef</h2>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={() => handleClick()}> Reset input </button>
    </div>
  )
}

export default App;
