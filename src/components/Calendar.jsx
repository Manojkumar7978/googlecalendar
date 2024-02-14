import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    chakra,Text, ButtonGroup, Box
} from '@chakra-ui/react'
import dayjs from "dayjs";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { getMonth } from "../month";

export default function Calendar({isOpen,onClose,currentMonth,setCurrentMonth}){
    const dayMatrix=currentMonth.dayMatrix
    const today = dayjs();

    // function to get next Month Calendar 
    
    function nextMonth(){
        if(currentMonth.month==11)
        return
        setCurrentMonth(getMonth(currentMonth.month+1))
    }

        //function to get previous Month Calendar 

    function prvMonth(){
        if(currentMonth.month==0)
        return
        setCurrentMonth(getMonth(currentMonth.month-1))
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="bottom">
        <ModalOverlay />
        <ModalContent
            // width="276px"
            padding="0px 14px 16px 19px"
            position="absolute"
            // top=""
            // right="0"
        >
            <ModalHeader p={0}>
                <chakra.div   pt={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                    <Text
                    fontSize={12}
                    fontWeight={500}
                    >{`${dayjs().month(currentMonth.month).format('MMMM')} ${currentMonth.year}`}</Text>
                    <ButtonGroup>
                    <ChevronLeftIcon w={4} h={4} borderRadius={50}
                    cursor={'pointer'}
                    _hover={{ backgroundColor: 'gray.50' }}
                    onClick={prvMonth}
                />
                <ChevronRightIcon w={4} h={4}
                    borderRadius={50}
                    cursor={'pointer'}
                    _hover={{ backgroundColor: 'gray.50' }}
                    onClick={nextMonth}
                />
                    </ButtonGroup>
                </chakra.div>
                
            </ModalHeader>
           
            <ModalBody paddingTop={3} pr={0} pl={0} pb={0}>
            <chakra.table w={'100%'} borderWidth="1px" borderColor="gray.200">
            <thead>
                <chakra.tr>
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                        <chakra.th key={index} fontSize={12} color={"gray.400"} textAlign="center" p={2}>
                            {day}
                        </chakra.th>
                    ))}
                </chakra.tr>
            </thead>
            <tbody>
                {dayMatrix.map((week, index) => (
                    <chakra.tr key={index}>
                        {week.map((day, dayIndex) => (
                            <chakra.td key={dayIndex} fontSize={12} textAlign="center" p={2}>
                                <Box  cursor={'pointer'} w={7} h={7} borderRadius="50%" display="inline-block"
                                    color={day.month() === currentMonth.month ? (day.isSame(today, 'day') ? "blue" : "black") : "gray.400"}
                                    >
                                    {day.format('D')}
                                </Box>
                            </chakra.td>
                        ))}
                    </chakra.tr >
                ))}
            </tbody>
        </chakra.table>
            </ModalBody>
        </ModalContent>
    </Modal>
    )
}