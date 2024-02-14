import { ChevronLeftIcon, ChevronRightIcon, HamburgerIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
    Box, Button, Text, chakra,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Calendar from "./Calendar";

export default function Header({currentMonth,setCurrentMonth}) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            gap={20}
        >

            {/* header part  */}
            <Box
                display={'flex'}
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
                <Button variant='outline'>Today</Button>

                {/* on clicking these below tow icon you can navitgate to previous day event and upcoming day event  */}
                <ChevronLeftIcon w={7} h={7} borderRadius={50}
                    _hover={{ backgroundColor: 'gray.50' }}
                />
                <ChevronRightIcon w={7} h={7}
                    borderRadius={50}
                    _hover={{ backgroundColor: 'gray.50' }}
                />

                {/* its showing todays day details and on clicking this you can view the month calandar */}

                <Text fontSize={'x-large'} p={2}
                    borderRadius={5}
                    cursor={'pointer'}
                    _hover={{ backgroundColor: 'gray.50' }}
                    onClick={onOpen}
                    position={"relative"}
                >
                    Febuary 14, 2024
                    <chakra.span ml={2}><TriangleDownIcon w={3} h={3} /></chakra.span>
                </Text>
            </Box>
            {/* it is the calendar showing in a modal  */}
<Calendar isOpen={isOpen} onClose={onClose} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>

        </Box>

    )
}