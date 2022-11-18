import {
    Stack,
    Flex,
    Heading,
    Box,
    Text,
    Avatar,
    Badge,
    Divider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Backend } from "../../data/Backend";

type Props = {};

const index = (props: Props) => {
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
    return (
        <div>
            <Box

                borderColor={"blue.light"}
                boxShadow={"xl"}
                backgroundRepeat='repeat-x'
                p={1}
                border={1}
                backgroundColor={"white "}
                borderRadius={10}>
                <Flex
                    w={"100%"}
                    justify={"space-between"}
                    direction={"column"}
                    alignItems={"center"}
                    textColor={"black.light"}>
                    <Stack direction={"row"}>
                        <Avatar src={signerData[0].profile_image} size={"md"}></Avatar>
                        <Stack direction={'column'}>
                            <Heading size={"sm"} fontWeight={"normal"} color={"Black"}>
                                Balance
                            </Heading>
                            <Text fontSize={"lg"} fontWeight={"bold"} color={"Black"}>
                                $100.50
                            </Text>
                        </Stack>
                    </Stack>
                    <Divider my={1}></Divider>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Heading size={"sm"} fontWeight={"semibold"} color={"Black"}>
                            Gifts:
                        </Heading>
                        <Divider ></Divider>
                        <Stack
                            direction='row'
                            alignItems={"center"}
                            justifyContent={"center"}
                        >
                            <Box>
                                <Badge color={"Black"}>1 Coffee</Badge>
                            </Box>
                            <Box>
                                <Badge color={"Black"}>1 Dessert</Badge>
                            </Box></Stack>
                    </Stack>
                </Flex>
            </Box>
        </div>
    );
};

export default index

