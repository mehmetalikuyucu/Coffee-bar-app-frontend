import React, { useEffect, useState } from 'react'
import {
  Box,
  IconButton,
  Image,
  Stack,
  Text,
  HStack,
  Center,
  Stat,
  StatLabel,
  StatNumber,
  Button,
  ButtonSpinner,
  VStack,
  color,
  StackDivider,
  Divider,
  Switch,
  extendTheme
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, InfoIcon } from '@chakra-ui/icons'
import BottomNavBar from '../../components/BottomNavBar'
import { Backend } from '../../data/Backend'
import Router from 'next/router'
import router from 'next/router'


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
  const SignOut = async () => {

    const isSucces = await Backend.signout(localStorage.getItem("token"))
    if (isSucces) {
      router.push('/WelcomePage')
      console.log(" Çıkış yapıldı")
    }
  }

  return (
    <Box w={'100vw'} h={'100vh'} bgColor={'whiteAlpha.800'} >

      <HStack
        py={10}
        px={6}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100vw"}

        position={"relative"}
        bgColor={'#8DC1D0'}

      >
        <IconButton
          onClick={() => {
            router.back()
          }}
          aria-label="Go Back"
          variant={"unstyled"}
          icon={
            <ChevronLeftIcon

              boxSize={"40px"}
              color={"white"}
            ></ChevronLeftIcon>
          }
        ></IconButton>
        <Text fontWeight={"bold"} fontSize={"5vw"}>
          Settings Page
        </Text>
        <IconButton
          aria-label="Settings"
          variant={"unstyled"}
          icon={<InfoIcon boxSize={"22.5px"} color={"white "}></InfoIcon>}
        ></IconButton>
      </HStack>
      <Box w={'100vw'} h={'30vh'} bgColor={'#8DC1D0'} borderBottomLeftRadius={20} borderBottomRightRadius={20} display={"flex"} justifyContent={"center"} >

        <Box w={'86vw'} h={'48vh'} bgColor={"white"} mt={90} borderRadius={10} boxShadow={"xl"} px={"8vw"} pt={"5vw"}>

          <HStack w={"100%"} pb={5} boxShadow={"md"} >
            <Image
              w={"12vw"}
              h={"12vw"}
              objectFit={"cover"}
              borderRadius={"90px"}

              src={signerData[0].profile_image}>
            </Image>
            <Text fontFamily={"sans-serif"} fontSize={18} color={"black"} fontWeight={"medium"}>{signerData[0].username}</Text>

          </HStack>
          <VStack w={"100%"} pt={"5"} gap={3}>
            <Box textAlign={"left"} w={"100%"}>
              <Text fontWeight={"light"} fontSize={15} color={"black"}>Account</Text></Box>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Text color={"black"}>Profile</Text>
              <ChevronRightIcon color={"black"} boxSize={6} />
            </HStack>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Text color={"black"}>Change Password</Text>
              <ChevronRightIcon color={"black"} boxSize={6} />
            </HStack>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Text color={"black"}>Add a Payment Methods</Text>
              <ChevronRightIcon color={"black"} boxSize={6} />
            </HStack>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Text color={"black"}>Push notifications</Text>
              <Switch colorScheme={"blue"} background={"gray"} borderRadius={20} />
            </HStack>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Text color={"black"} fontFamily={"sans-serif"}>Dark mode</Text>
              <Switch colorScheme={"blue"} background={"gray"} borderRadius={20} />
            </HStack>
            <Box mt={10} textAlign={"center"} display={"flex"} w={"70%"} h={"6vh"} borderRadius={20} bgColor={'#8DC1D0'} alignItems={"center"} position={"relative"} justifyContent={"center"}
              onClick={SignOut}>
              <Text fontSize={20} fontWeight={"bold"} fontFamily={"sans-serif"}>
                Sign out
              </Text></Box>

          </VStack>


        </Box>

      </Box>

      <BottomNavBar />
    </Box>
  )
}

export default index
