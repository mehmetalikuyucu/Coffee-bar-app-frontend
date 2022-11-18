import {
    border,
    Box,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import React from "react";
import MenuItemsTea from "../../components/MenuItems/index";
import NavBar from "../../components/NavBar/index";
import BottomBar from "../../components/BottomNavBar/index";

const index = () => {
    return (
        <Box w={"100vw"} h={"100vh"} bgColor={"white"} overflow={"auto"}>
            <Box
                py={6}
                h={"100vh"}
                style={{
                    background: `linear-gradient(190deg, #8DC1D0 30%, rgba(0, 0, 0, 0)30%)`,
                }}
            >
                <Box px={6}>
                    <NavBar />
                </Box>
                <Tabs
                    colorScheme={"white"}
                    isFitted
                    border={"none"}
                    borderBottom={"none"}
                    position={"relative"}
                    overflow={"hidden"}
                    py={8}
                    px={1}
                >
                    <TabList mb="1em" color={"white"} borderBottom={"none"}>
                        <Tab
                            fontSize={"20px"}
                            fontWeight={450}
                            _hover={{ color: "black", fontSize: 24 }}
                        >
                            Tea
                        </Tab>
                        <Tab
                            fontSize={"20px"}
                            fontWeight={450}
                            _hover={{ color: "black", fontSize: 24 }}
                        >
                            Milkshake
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <MenuItemsTea category={2} />
                        </TabPanel>
                        <TabPanel>
                            <MenuItemsTea category={1} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <BottomBar />
            </Box>
        </Box>
    );
};

export default index;
