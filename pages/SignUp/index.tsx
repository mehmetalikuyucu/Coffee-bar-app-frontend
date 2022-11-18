
import React, { useState } from 'react'
import { Text, Box, IconButton, VStack, HStack, Icon, useToast, InputRightElement, Button, InputGroup, Input, } from '@chakra-ui/react';
import Link from 'next/link';
import { ChevronLeftIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import Form from "../../components/Form/index"
import { Backend } from '../../data/Backend';
import { useRouter } from 'next/router';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
const index = () => {

    const toast = useToast()


    const router = useRouter();
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [details, setDetails] = useState({ email: "", password: "", phonenumber: "" })
    const onChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        alert(JSON.stringify(details))
    }
    const SignUp = async () => {
        Backend.createUser(details.email, details.password)


        toast({
            title: 'Account is created.',
            description: "account is created.",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        router.push('/SignIn')
    }




    return (

        <Box bgColor={"white"} >
            <Box bgImage="/signUp-background.svg" w={"100vw"} h={"100vh"} bgPosition={"center"} >

                <Link href={"/WelcomePage"} ><IconButton
                    w={"50px"}
                    h={"50px"}
                    borderRadius={"90"}
                    ml={'20px'}
                    mt={"30px"}
                    variant={'unstyled'}
                    aria-label='Go Back'
                    icon={
                        <ChevronLeftIcon
                            boxSize={'40px'}
                            color={"white"} />}
                ></IconButton>
                </Link>
                <Box>
                    <Text
                        ml={"55px"}
                        mt={"95px"}
                        color={"white"}
                        fontSize={'4xl'}
                        lineHeight={"45px"}
                        fontWeight={"semibold"}>
                        Create<br /> Account
                    </Text>
                </Box>
                <VStack spacing={10}>
                    <Box pt={20}>

                        <VStack spacing={3}>

                            <Input
                                onSubmit={submitHandler}
                                w={"80vw"}
                                type='email'
                                name='email'
                                onChange={onChange}

                                value={details.email}
                                color={"white"}
                                placeholder='Email'
                                size={'lg'}
                                _placeholder={{ color: "white" }}

                                variant='flushed'></Input>

                            <InputGroup size='md' >
                                <Input
                                    onSubmit={submitHandler}
                                    w={"80vw"}
                                    type={show ? 'text' : 'password'}
                                    name='password'
                                    onChange={onChange}

                                    value={details.password}
                                    color={"white"}
                                    placeholder='Password'
                                    size={'lg'}
                                    _placeholder={{ color: "white" }}
                                    variant='flushed'></Input>
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onSubmit={submitHandler} color={"white"} onClick={handleClick}>
                                        {show ? <AiFillEyeInvisible size={25} /> : <AiFillEye size={25} />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                        </VStack>
                    </Box>
                    <Box w={"80vw"}  >
                        <HStack direction={['row', 'column']} mt={50} justifyContent={"space-between"}>

                            <Text color="white" fontSize={25} fontWeight={'bold'}>
                                Sign Up
                            </Text>
                            <IconButton
                                boxSize={'90'}
                                onClick={SignUp}
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

                        </HStack>
                    </Box>
                    <HStack justifyContent={"space-between"} alignItems={"center"} w="80vw">
                        <Text fontSize={"sm"} fontWeight={"bold"} color={"white"} as='u'><Link href={"/SignIn"}>Sign In </Link></Text>

                    </HStack>
                </VStack>
            </Box>

        </Box>

    )
}

export default index