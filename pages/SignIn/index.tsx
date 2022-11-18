import React, { useEffect, useState } from 'react'
import { Text, Box, IconButton, VStack, HStack, InputRightElement, Button, InputGroup, Input, Flex, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, useDisclosure, useToast, } from '@chakra-ui/react';
import Link from 'next/link';
import { ChevronLeftIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import { useRouter } from 'next/router';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Backend } from '../../data/Backend';
import { useStorken } from '../../data/storken';


function App() {
    const [SignerUser, setSignerUser] = useStorken(null);
    const toast = useToast()
    const router = useRouter();
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [details, setDetails] = useState({ email: "", password: "" })
    const onChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        alert(JSON.stringify(details))
    }

    const pushUsersData = async () => {

        const istrue = await Backend.signin(details.email, details.password)
        console.log("istrue:", istrue)
        if (istrue) {
            

            router.push('/HomePage')
        }
        else {

            toast({
                title: 'Account is not found.',
                description: "Pls check your email and password. Or create an account.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

        }



    }

    //signout 

    return (

        <Box bgColor={"white"}>
            <Box bgImage="/signIn-background.svg" bgRepeat={"no-repeat"} w={"100vw"} h={"55vh"} >
                <IconButton
                    w={"50px"}
                    h={"50px"}
                    borderRadius={"90"}
                    ml={'20px'}
                    mt={"30px"}
                    variant={'unstyled'}
                    aria-label='Go Back'
                    icon={
                        <ChevronLeftIcon
                            boxSize={'50px'}
                            color={"white"} />}
                >
                </IconButton>

                <Box>
                    <Text
                        ml={"55px"}
                        mt={"95px"}
                        color={"white"}
                        fontSize={'4xl'}
                        lineHeight={"45px"}
                        fontWeight={"semibold"}>
                        Welcome<br /> Back
                    </Text>
                </Box>

            </Box>
            <VStack spacing={10}>
                <Flex h={"20vh"}>

                    <VStack spacing={3}>

                        <Input
                            onSubmit={submitHandler}
                            w={"80vw"}
                            type='email'
                            name='email'
                            onChange={onChange}

                            value={details.email}
                            color={"black"}
                            placeholder='Email'
                            size={'lg'}
                            _placeholder={{ color: 'gray.500' }}
                            bgColor={"white"}
                            variant='flushed'></Input>

                        <InputGroup size='md' >
                            <Input
                                onSubmit={submitHandler}
                                w={"80vw"}
                                type={show ? 'text' : 'password'}
                                name='password'
                                onChange={onChange}

                                value={details.password}
                                color={"black"}
                                placeholder='Password'
                                size={'lg'}
                                _placeholder={{ color: 'gray.500' }}
                                variant='flushed'></Input>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onSubmit={submitHandler} color={"black"} onClick={handleClick}>
                                    {show ? <AiFillEyeInvisible size={25} /> : <AiFillEye size={25} />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>

                    </VStack>




                </Flex >
                <Box w={"80vw"}  >
                    <HStack direction={['row', 'column']} justifyContent={"space-between"}>

                        <Text color="#4a5059" fontSize={25} fontWeight={'bold'}>
                            Sign In
                        </Text>
                        <Box>


                            <IconButton
                                boxSize={'90'}
                                onClick={pushUsersData}
                                borderRadius={"100"}
                                background="#4a5059"
                                aria-label='Sign In'
                                size='lg'
                                icon={
                                    <ArrowForwardIcon color="white" boxSize={8}
                                    />}
                                _hover={{
                                    background: "#ffae47"
                                }}>
                            </IconButton>
                        </Box>




                    </HStack>

                </Box>
                <HStack justifyContent={"space-between"} alignItems={"center"} w="80vw">
                    <Text fontSize={"sm"} fontWeight={"bold"} as='u'><Link href={"#"}>Sign Up </Link></Text>
                    <Text fontSize={"sm"} fontWeight={"bold"} as='u'><Link href={"#"} >Forget Passwords</Link></Text>
                </HStack>
            </VStack>
        </Box >

    )
}


export default App;