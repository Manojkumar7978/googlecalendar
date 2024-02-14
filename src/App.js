// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { getMonth } from './month';

function App() {
const[currentMonth,setCurrentMonth]=useState(getMonth())

  return (
    <div className="App">
      <Header/>
     
    </div>
  );
}

export default App;
