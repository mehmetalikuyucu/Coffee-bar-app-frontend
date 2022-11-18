import {
  Container,
  Box,
  Text,
  Link,
  VStack,
  Flex,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Tab,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import NavBar from "../../components/NavBar/index";
import BottomBar from "../../components/BottomNavBar/index";
import MenuItemsTea from "../../components/MenuItems/index";
import CoffeCard from "../../components/CoffeeCard/index";
import Annoucement from "../../components/Annoucement/index";
import { Backend } from "../../data/Backend";
import { useStorken } from "../../data/storken";

const index = () => {
  //TODO:Loading struct
  const [User, setUser, , loadingUser] = useStorken("user");

  useEffect(() => {
    console.log(User);
    console.log(loadingUser);
  }, [User, loadingUser]);

  return (
    <Box w={"100vw"} h={"190vh"} overflow={"hidden"} bgColor={"white"}>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <Box h={"80vh"} w={"100%"} bg={"#8DC1D0"} borderBottomLeftRadius={30}>
        <Box px={6}>
          <NavBar></NavBar>
          <Annoucement />
        </Box>

        <VStack px={4} pt={0} alignItems={"flex-start"}>
          <Text
            fontSize={"25px"}
            fontWeight={"bold"}
            fontFamily={"sans-serif"}
            color={"black"}
          >
            Best Coffee in Town
          </Text>
          <Tabs
            colorScheme={"white"}
            isFitted
            border={"none"}
            borderBottom={"none"}
            position={"relative"}
            py={0}
            px={0}
          >
            <TabList color={"white"} borderBottom={"none"} w={"90vw"}>
              <Tab
                fontSize={"15px"}
                fontWeight={500}
                _hover={{ color: "black", fontSize: 18 }}
                style={{ color: "black !important" }}
              >
                Tea
              </Tab>
              <Tab
                fontSize={"15px"}
                fontWeight={500}
                _hover={{ color: "black", fontSize: 18 }}
              >
                Coffee
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <HStack overflowX={"auto"} w={"100vw"}>
                  <CoffeCard />
                </HStack>
              </TabPanel>
              <TabPanel>
                <HStack overflowX={"auto"} w={"100vw"}>
                  <CoffeCard />
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Text
            fontSize={25}
            fontWeight={"bold"}
            fontFamily={"sans-serif"}
            overflow={"fixed"}
            color={"black"}
          >
            Most Popular
          </Text>
          <Box overflowY={"auto"} overflowX={"hidden"} maxHeight={"85vh"}>
            <MenuItemsTea category={0} />
          </Box>
        </VStack>
      </Box>
      <BottomBar />
    </Box>
  );
};

export default index;
