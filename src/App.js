// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { getMonth } from './month';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';
import dayjs from 'dayjs';

function App() {
const[currentMonth,setCurrentMonth]=useState(getMonth()) //default month details about current month
const[selectedDate,setSelectedDate]=useState(dayjs()) //default date is today
console.log(selectedDate)
  return (
    <Box p={5}  className="App" >
      <Header currentMonth={currentMonth} selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      setCurrentMonth={setCurrentMonth}/>
     
    </Box>
  );
}

export default App;
