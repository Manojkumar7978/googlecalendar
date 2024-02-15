import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Divider,
  ButtonGroup,
  chakra
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import dayjs from "dayjs";

const DetailsofEvent = ({ isOpen, onClose, event }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{event.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text noOfLines={2} fontSize={'x-large'}>{event.description}</Text>
            <Text>{`${dayjs(event.start).format('dddd, MMMM YY')} - ${dayjs(event.start).format('HH:mm')} - ${dayjs(event.end).format('HH:mm')} `}</Text>
            <>Lint to Join: </> <chakra.a href={event.url} color={'blue'} textDecoration={'underline'}>{" " + event.url}</chakra.a>
          </ModalBody>

          <ModalFooter display={'flex'} flexDir={'column'} >
            <Divider />
            <Box mt={5} display={'flex'} alignItems={'center'} gap={50} justifyContent={'space-between'}>
              <Button variant={'none'} justifyContent={'flex-end'} borderRadius={50}>Going ?</Button>
              <ButtonGroup gap={3} display={'flex'} alignItems={'center'}>
                <Button variant={'outline'} size={'sm'} borderRadius={50}>Yes</Button>
                <Button variant={'outline'} size={'sm'} borderRadius={50}>No</Button>
                <Button variant={'outline'} size={'sm'} borderRadius={50}>Maybe</Button>
                <ChevronDownIcon />
              </ButtonGroup>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailsofEvent;