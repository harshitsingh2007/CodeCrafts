import react, { useState } from 'react'
import './App.css';
import SignUp from './signup/SignUp';
import './App.css'
import LoginPage from './login/LoginPage';

function App() {
  const [st,stt]=useState(false)
  function changepage(){
      stt(!st)
  }
  return (
    <div className="App">
      {st?<LoginPage />:<SignUp/>}
     <button onClick={changepage}>click here to change the page</button>
    </div>
  );
}

export default App;
