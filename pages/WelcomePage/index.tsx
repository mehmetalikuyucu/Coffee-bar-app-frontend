import React from 'react'
import { Text, Image, Box, IconButton, VStack, HStack, Button, Link, } from '@chakra-ui/react';
import SignIn from '../SignIn';
const index = () => {
    return (

        <Box>
            <Box bgColor={"#F4F9FA"} bgRepeat={'no-repeat'} w={"100vw"} h={"100vh"} >


                <VStack display={"flex"} justifyContent={"center"} alignItems={"center"} h={"100vh"} >
                    <Button bgColor={"#5EA4B7"} color={"white"} w={"30vw"}>
                        <Link href='/SignIn' >Sign In</Link>
                    </Button>
                    <Button bgColor={"#5EA4B7"} color={"white"} w={"30vw"}>
                        <Link href='/SignUp' >Sign Up</Link>
                    </Button>
                </VStack>
            </Box>



        </Box>

    )
}

export default index