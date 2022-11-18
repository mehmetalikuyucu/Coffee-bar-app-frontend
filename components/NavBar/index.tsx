import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    Button,
    Menu,
    MenuButton,
    useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

import React from 'react'
import { SearchIcon } from '@chakra-ui/icons';
import { MdShoppingCart } from "react-icons/md"
import NavbarFunc from "../Drawer/index"

const Links = ['Link', 'Link', 'Link'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link

        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <NavbarFunc />

                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <HStack gap={5}>
                                    <SearchIcon color={"white"} />
                                    <MdShoppingCart color={"white"} /></HStack>
                            </MenuButton>

                        </Menu>
                    </Flex>
                </Flex>


            </Box>


        </>
    );
}


