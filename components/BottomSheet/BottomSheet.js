import React from "react";
import { IconButton, Stack, VStack, Text, HStack, Image, CSSReset, Icon, Slider, Slide, Link, Divider } from '@chakra-ui/react'
import {
  Center,
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  useDisclosure,
  Box
} from "@chakra-ui/react";

function BottomSheetModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center my="5">
        <Button variant={"unstyled"} onClick={onOpen} color={"black"}>(70 Reviews)</Button>
      </Center>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="outside"
        motionPreset="slideInBottom"
      
      >
        <ModalOverlay height="100vh" />
        <ModalContent
          position="fixed"
          bottom="0px"
          mb="0"
          borderRadius="1.75rem 1.75rem 0px 0px"
          maxW="lg"
          maxH={"45vh"}
        >
          <ModalHeader textAlign="center" fontSize="3xl">
            Comments
          </ModalHeader>
          <ModalCloseButton outline="none" _focus={{ outline: "none" }} />
          <ModalBody overflowY={"auto"}>
            <Box fontSize="xl" textAlign="center" letterSpacing="1.25px">

            </Box>
            <Center
              mt="-1"
              mb="4">
              <VStack
                spacing={"3vh"}
                position={"relative"}
              >
                <Comment />
                <Comment />
                <Comment />
                <Comment />

              </VStack>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function Comment() {
  return (
    <>
      <Box
        w={"80vw"}
        h={"15vh"}
        
        px={"7.5px"}
        py={"2.5px"}
        borderRadius={"10"}
        justifyContent={"flex-start"}
        overflow={"hidden"}>
        <Text
          fontWeight={"bold"}
          fontSize={"17.5px"}>
          Osman Kurnaz
        </Text>
        <Text
          fontSize={"15px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde deleniti vitae eveniet id provident at tenetur possimus necessitatibus incidunt.
        </Text>
      </Box>
      <Divider />
    </>
  );
}

export default BottomSheetModal;
