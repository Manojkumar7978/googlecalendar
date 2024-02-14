// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { getMonth } from './month';
import Header from './components/Header';
import { Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { EventsUI } from './components/EventsUI';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth()) //default month details about current month
  const [selectedDate, setSelectedDate] = useState(dayjs()) //default date is today
  return (
    <Box pt={5} className="App" >
      {/* header section component  */}
      <Header currentMonth={currentMonth} selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setCurrentMonth={setCurrentMonth} />
      <Box p={5} >
        <Box>
        <EventsUI selectedDate={selectedDate}/>
        </Box>

      </Box>
    </Box>
  );
}

export default App;
