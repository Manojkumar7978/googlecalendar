import React, { useMemo, useState } from 'react';
import { Box, Divider, Flex, Heading, Text, chakra, useDisclosure } from "@chakra-ui/react";
import events from '../db';
import dayjs from 'dayjs';
import DetailsofEvent from './DetailsofEvent';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Define the time slots with a 15-minute gap
const timeSlots = [];
const startTime = 0; // Starting time in minutes (0 corresponds to 12:00 AM)
const endTime = 24 * 60; // Ending time in minutes (24 hours * 60 minutes)
const gap = 60; // Gap between each time slot in minutes

// too get out 24 hrs time slot and showing them in y axis 
for (let i = startTime; i < endTime; i += gap) {
  const hour = Math.floor(i / 60);
  const minute = i % 60;
  const hourFormatted = hour % 12 || 12; // adjust for am/pm
  const time = `${String(hourFormatted)} ${hour < 12 ? 'AM' : 'PM'}`;
  timeSlots.push(time);
}

// function to get currentTime in min format
const currentTime = () => {
  let day = new Date()
  let hours = day.getHours() * 60
  let min = day.getMinutes() + hours
  return min
}

// component to showing events in UI
const Event = ({ event, selectedDate, provided }) => {
  const { start, end, title, url } = event;
  let startTime = start.getHours() * 60
  let endTime = end.getHours() * 60
  let top = startTime;
  let height = (endTime - startTime)
  let startMin = start.getMinutes()
  let endMin = end.getMinutes()
  if (startMin > 0) {
    top += startMin
  }
  if (endMin > 0) {
    height += endMin
  }
  let startTimeString = start.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  let endTimeString = end.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box
      display={selectedDate.isSame(dayjs(start), "day") ? "block" : "none"}
      position="absolute"
      top={top}
      width="100%"
      height={`${height}px`}
      bg={event.type === "stretching" ? "blue.500" : 'gray.400'}
      color="white"
      borderRadius="md"
      boxShadow="md"
      p={2}
      onClick={onOpen}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Box display={'flex'} gap={5}>
        <Text fontSize={12}>{`${event.private ? "It's Private" : title}`}</Text>
        <Text fontSize={12}>{!event.private && `${startTimeString}-${endTimeString}`}</Text>
      </Box>
      <chakra.a fontSize={12} m={0} href={url}>{!event.private && url}</chakra.a>
      <DetailsofEvent isOpen={isOpen} onClose={onClose} event={event} />

    </Box>
  );
};

export const EventsUI = ({ selectedDate }) => {
  const [time, setTime] = useState(0)

  setInterval(() => {
    if (selectedDate.isSame(dayjs(), "day"))
      setTime(currentTime())
  }, 1000);




  return (
    <Box cursor={'pointer'}

    >

      <Flex mt={2} ml={2} position={'relative'}>
        {/* Y-axis */}
        <Box >
          {timeSlots.map((time, index) => (
            <Box paddingRight={2} key={index} h="60px" textAlign="center" >
              <Box >{time}</Box>
            </Box>
          ))}
        </Box>
        <Divider orientation='vertical' h='1440px' borderColor={'black'} />

        {/* X-axis */}
        <Box flex={1}>
          <DragDropContext >
            <Droppable droppableId="droppable">
              {(provided) => (
                <Box
                  flex="1"
                  position="relative"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {events.map((event, index) => (
                    event.type !== "all-day" && (
                      <Draggable
                        key={event.type}
                        draggableId={`draggable-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <Event
                            provided={provided}
                            key={index}
                            selectedDate={selectedDate}
                            event={event}
                          />
                        )}
                      </Draggable>
                    )
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>

          </DragDropContext>
          {
            selectedDate.isSame(dayjs(), "day") && <Divider border={'1px'} w={'95%'} borderColor={'red'} position={'absolute'} top={time} />

          }
        </Box>
      </Flex>
    </Box>
  );
};

