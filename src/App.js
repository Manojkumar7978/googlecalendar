// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { getMonth } from './month';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';

function App() {
const[currentMonth,setCurrentMonth]=useState(getMonth())

  return (
    <Box p={5}  className="App" >
      <Header currentMonth={currentMonth}  setCurrentMonth={setCurrentMonth}/>
     
    </Box>
  );
}

export default App;
