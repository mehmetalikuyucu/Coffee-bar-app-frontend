import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Link,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Button, Input, Box, Text, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BiBarChartAlt, BiGift, BiUser } from "react-icons/bi";
import Balance from "../Balance/index";


function DraweComp() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  return (
    <>
      <IconButton
        bgColor={"transparent"}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        icon={<HamburgerIcon />}
        color={"white"}
      >
        Open
      </IconButton>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={sizes[0]}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={"bold"} bgColor={"white"}>
            <Balance />
          </DrawerHeader>

          <DrawerBody bgColor={"white"}>
            <VStack gap={2}>
              <HStack w={"100%"}>
                <BiUser color={"black"} size={"30"} />
                <Link href="/ProfilePage">
                  <Text fontSize={"20"} fontWeight={"semibold"} color={"black"}>
                    Account
                  </Text>
                </Link>
              </HStack>
              <HStack w={"100%"}>
                <BiBarChartAlt color={"black"} size={"30"} />
                <Link href="/SurveyPage">
                  <Text fontSize={"20"} fontWeight={"semibold"} color={"black"}>
                    Surveys
                  </Text>
                </Link>
              </HStack>
              <HStack w={"100%"}>
                <BiGift color={"black"} size={"30"} />
                <Link href="/SurveyPage">
                  <Text fontSize={"20"} fontWeight={"semibold"} color={"black"}>
                    Gifts
                  </Text>
                </Link>
              </HStack>
              <HStack w={"100%"}>
                <BiGift color={"black"} size={"30"} />
                <Link href="/SettingPage">
                  <Text fontSize={"20"} fontWeight={"semibold"} color={"black"}>
                    Setting
                  </Text>
                </Link>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DraweComp;
