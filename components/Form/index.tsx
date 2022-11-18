import {
    Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Input, Box, Text, VStack, InputGroup, InputRightElement, Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Formik } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
type Values = {
    email: string;
    password: string;
};

/**
 * LoginForm Component
 */
function Form() {
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


    return (

        <Flex>

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
                        <Button h='1.75rem' size='sm' onClick={() => console.log(details.email)} onSubmit={submitHandler} color={"black"}>
                            {show ? <AiFillEyeInvisible size={25} /> : <AiFillEye size={25} />}
                        </Button>
                    </InputRightElement>
                </InputGroup>

            </VStack>




        </Flex >
    );
};
export default Form;

