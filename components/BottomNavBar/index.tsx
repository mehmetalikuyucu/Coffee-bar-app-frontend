import { BottomNavigationItem, BottomNavigation, BottomNavigationIcon, BottomNavigationLabel } from "chakra-ui-bottom-navigation";
import React from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Box, HStack } from "@chakra-ui/react";

import { MdOutlineHome, MdFavoriteBorder, MdPersonOutline, MdOutlineSearch, MdQrCodeScanner } from "react-icons/md";
const BottomNavBar = () => {
    const router = useRouter();

    const handleChange = useCallback(
        (path: any) => {
            router.push(path);
        },
        [router.push]
    );

    return (
        <BottomNavigation value={router.pathname} onChange={handleChange} >
            <HStack position={"fixed"} bottom={-3} gap={2} w={"100vw"} justifyContent={"space-around"} backgroundColor={"white"} >
                <BottomNavigationItem value="/HomePage">
                    <BottomNavigationIcon as={MdOutlineHome} boxSize={8} color="grey" />
                </BottomNavigationItem>
                <BottomNavigationItem value="/SurveyPage">
                    <BottomNavigationIcon as={MdFavoriteBorder} boxSize={8} color="grey" />
                </BottomNavigationItem>
                <Box h={20} w={90} bgColor={"#5ea4b7"} borderTopRadius={"50%"} alignItems={"center"} dropShadow={"2xl"} display={"flex"} justifyContent={"center"} zIndex={2}>
                    <BottomNavigationItem value="/QrScanPage" >

                        <BottomNavigationIcon as={MdQrCodeScanner} boxSize={10} color={"white"} />

                    </BottomNavigationItem></Box>
                <BottomNavigationItem value="/MenuPage">
                    <BottomNavigationIcon as={MdOutlineSearch} boxSize={8} color="grey" />
                </BottomNavigationItem>
                <BottomNavigationItem value="/ProfilePage">
                    <BottomNavigationIcon as={MdPersonOutline} boxSize={8} color="grey" />
                </BottomNavigationItem>
            </HStack>
        </BottomNavigation>
    );
};

export default BottomNavBar
