import { Box, IconButton, Stack, VStack, Text, HStack, Image, CSSReset, Icon, Center, Flex } from '@chakra-ui/react'
import { AddIcon, ChevronLeftIcon, SettingsIcon, StarIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from "react-icons/md"
import BottomNavBar from '../../components/BottomNavBar/index'
import { Router, useRouter } from 'next/router';
import { useStorken } from '../../data/storken';
import { Backend } from '../../data/Backend';

/*
    interface IUser{
        id: number;
        username: string;
        email: string;
        password: string;
        profile_image: string;
    }

*/
const index = () => {

    const [signerData, setSignerData] = useState<any>([{}]);



    useEffect(() => {
        const id = localStorage.getItem('user')


        Backend.getSignerUser(Number(id)).then((signer) => {
            setSignerData(signer);
            console.log("signer", signer[0].email)
            return signerData;

        }
        )
    }, []);
    console.log("signerData", signerData[0])



    const router = useRouter();
    return (
        <>
            <Box h={"100vh"} textAlign={"center"} overflow={"hidden"} bgColor={"white"}>
                <Box boxShadow={"lg"} w={"100vw"} h={"55vh"} backgroundColor={"#F4F9FA"} borderBottomRadius={"10vw"} mb={"1vh"} >
                    <VStack spacing={"2vh"}>
                        <HStack
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            w={"80vw"}
                            mt={"10vw"}>
                            <IconButton
                                aria-label='Go Back'
                                variant={"unstyled"}
                                icon={
                                    <ChevronLeftIcon
                                        boxSize={'40px'}
                                        color={"#5CA4B8"}>
                                    </ChevronLeftIcon>
                                }>
                            </IconButton>
                            <Text fontWeight={"bold"} fontSize={"5vw"} color={"black"}>
                                {
                                    signerData[0]?.username
                                }
                            </Text>
                            <IconButton
                                aria-label='Settings'
                                variant={"unstyled"}
                                onClick={() => { router.push('/SettingPage') }}
                                icon={
                                    <SettingsIcon
                                        boxSize={'20px'}
                                        color={"#5CA4B8"}>
                                    </SettingsIcon>
                                }>
                            </IconButton>
                        </HStack>
                        <Box

                            display={"flex"}
                            w={"100vw"}
                            justifyContent={"center"}
                            alignItems={"flex-end"}
                            position={"relative"} >
                            <Image
                                display={"flex"}
                                w={"40vw"}
                                h={"40vw"}
                                position={"absolute"}
                                objectFit={"cover"}
                                borderRadius={"90px"}
                                boxShadow={"dark-lg"}
                                src={signerData[0].profile_image}>
                            </Image>

                            <Image
                                src='/profile-background.svg' >
                            </Image>
                        </Box>
                        <HStack justifyContent={"space-between"} alignItems={"center"}>
                            <BoxBuilder boxTitle='Coffees' boxNumber={27} />
                            <BoxBuilder boxTitle='Dessert' boxNumber={12} />
                            <BoxBuilder boxTitle='Drink' boxNumber={18} />
                        </HStack>

                    </VStack>

                </Box>

                <Text fontWeight={"bold"} fontSize={"6vw"} pb={"1vh"} >
                    History
                </Text>
                <VStack maxHeight={"34vh"} overflowY={"auto"}>
                    <HistoryBoxBuilder imgUrl={"/images/coffees/Coffee-1.svg"} foodName={"Mocha"} date={"12/06/2022"} price={"12$"} />
                    <HistoryBoxBuilder imgUrl={"/images/coffees/Coffee-2.svg"} foodName={"Cafe Latte"} date={"19/05/2022"} price={"15$"} />
                    <HistoryBoxBuilder imgUrl={"/images/coffees/Coffee-4.svg"} foodName={"Caramel Macchiato"} date={"12/05/2022"} price={"25$"} />
                    <HistoryBoxBuilder imgUrl={"/images/coffees/Coffee-5.svg"} foodName={"Americano"} date={"07/04/2022"} price={"10$"} />
                    <HistoryBoxBuilder imgUrl={"/images/coffees/Coffee-6.svg"} foodName={"Filter Coffee"} date={"02/04/2022"} price={"5$"} />
                </VStack>

            </Box>

            <BottomNavBar />


        </>
    )
}

function BoxBuilder({ boxTitle, boxNumber }: { boxTitle: string, boxNumber: number }) {
    return (<VStack spacing={"-3px"} w={"25vw"} h={"10vh"} justifyContent={"center"} borderRadius={"30px"} >
        <Text fontSize={"4vw"} color={"black"} >{boxTitle}</Text>
        <Text fontSize={"6vw"} color={"black"} fontWeight={"bold"} >{boxNumber}</Text>
    </VStack>)
}

function HistoryBoxBuilder({ imgUrl, foodName, date, price }: { imgUrl: string, foodName: string, date: string, price: string }) {
    return (
        <Box borderRadius={"2vw"} display={"flex"} px={"3vw"} py={"5vw"} w={"80vw"} h={"10vh"} bgColor={"#8DC1D0"} boxShadow={"lg"}>
            <Box w={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Image h={"8vh"} src={imgUrl} />
                <VStack spacing={"0.50vh"} alignItems={"center"}>
                    <Text color={"black"} fontWeight={"bold"} >{foodName}</Text>
                    <Text color={"white"} >{date}</Text>
                </VStack>
                <Text px={"1vw"} color={"black"} fontWeight={"bold"} bgColor={"white"} borderRadius={"10"} >{price}</Text>
            </Box>
        </Box>
    )
}

export default index