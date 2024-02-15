import { ChevronLeftIcon, ChevronRightIcon, HamburgerIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
    Box, Button, Heading, Text, chakra,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Calendar from "./Calendar";
import { EventsUI } from "./EventsUI";
import events from "../db";
import dayjs from "dayjs";

export default function Header({currentMonth,setCurrentMonth,selectedDate,setSelectedDate}) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const { isOpen, onOpen, onClose } = useDisclosure()

    // functio to get todays all day (24hrs) events
    const allDayEvnt = events.filter((el, ind) => {
        if (el.type === "all-day" && selectedDate.isSame(dayjs(el.start), "day")) {
          return el;
        }
      });

    // below tow functions are to change date on click button
    const increaseDate = () => {
        if (selectedDate.month() === 11 && selectedDate.date() === 31) {
            // If the next date is January 1st, return without updating the selected date
            return;
        }
        setSelectedDate(selectedDate.add(1, 'day'));
    };

    const decreaseDate = () => {
        if (selectedDate.month() === 0 && selectedDate.date() === 1) {
            // If the next date is January 1st, return without updating the selected date
            return;
        }
        setSelectedDate(selectedDate.subtract(1, 'day'));
    };

    return (
       <Box
       position={'sticky'}
            top={0}
            zIndex={1}
            bg={'white'}
       >
         <Box
            display={'flex'}
            alignItems={'center'}
            gap={20}
            pb={5}
            borderBottom={'1px solid gray'}
            p={5}
            
        >

            {/* header part  */}
            <Box
                display={['none','none','flex']}
                gap={5}
                justifyContent={'left'}
                alignItems={'center'}
            >
                <HamburgerIcon w={12} h={12} _hover={{ backgroundColor: 'gray.50' }}
                    cursor={'pointer'}
                    borderRadius={50} padding={3} />
                <Box borderTop={'6px solid blue'}
                    borderBottom={'6px solid green'}
                    borderLeft={'6px solid blue'}
                    borderRight={'6px solid yellow'}
                    borderRadius={3}
                    borderBottomRightRadius={'10px'}
                    w={8}
                    h={8}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >{day}</Box>
                <Text fontSize={'x-large'}>Calendar</Text>

            </Box>
            <Box display={'flex'} gap={7} alignItems={'center'}>
                {/* on clicking this button you can navigate to todays events */}
                <Button variant='outline' 
                onClick={()=>{
                    setSelectedDate(dayjs())
                }}
                >Today</Button>

                {/* on clicking these below tow icon you can navitgate to previous day event and upcoming day event  */}
                <ChevronLeftIcon w={7} h={7} borderRadius={50}
                    _hover={{ backgroundColor: 'gray.50' }}
                    onClick={decreaseDate}
                />
                <ChevronRightIcon w={7} h={7}
                    borderRadius={50}
                    _hover={{ backgroundColor: 'gray.50' }}
                    onClick={increaseDate}
                />

                {/* its showing todays day details and on clicking this you can view the month calandar */}

                <Text fontSize={['lg','lg','x-large']} p={2}
                    borderRadius={5}
                    cursor={'pointer'}
                    _hover={{ backgroundColor: 'gray.50' }}
                    onClick={onOpen}
                    position={"relative"}
                >
                    {`${selectedDate.format('MMMM D, YYYY')}`}
                    <chakra.span ml={2}><TriangleDownIcon w={3} h={3} /></chakra.span>
                </Text>
            </Box>
            {/* it is the calendar component showing in a modal  */}
<Calendar isOpen={isOpen} onClose={onClose} currentMonth={currentMonth} 
selectedDate={selectedDate}
setCurrentMonth={setCurrentMonth}
setSelectedDate={setSelectedDate}
/>

        </Box>

        {/* all day events of the day are showing here  */}
        <Box w={'100%'} borderBottom={'1px solid gray'} pb={5}>
        <Box display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        w={'100px'}
        >
        <Text color={'blue.400'}>{selectedDate.format('ddd')}</Text>
          <Heading display={'flex'} justifyContent={'center'}
           alignItems={'center'}
           borderRadius={50}
           fontSize={'lg'}
            w={10} h={10} color={'white'}
             bg={'blue'}>{selectedDate.format('D')}</Heading>
        </Box>
        <Box pl={5} pt={2} display={'flex'} gap={5}>
        <Text >GMT+5:30</Text>
        <Box flex={1} display={"grid"} gap={2}>
            {
                allDayEvnt.map((el,ind)=>{
                    return <Box w={'full'}
                    borderRadius={5}
                    pl={5} pr={5}
                    key={el.id} bg={el.holiday? "green" : "blue"}>
                        <Text color={'white'}>{el.title}</Text>
                    </Box>
                })
            }
        </Box>
        </Box>
        
        </Box>
       </Box>

    )
}