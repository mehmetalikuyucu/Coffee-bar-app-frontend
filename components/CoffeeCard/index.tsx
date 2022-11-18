import {
  Container,
  HStack,
  Box,
  Text,
  Image,
  VStack,
  Grid,
  Badge,
  Stack,
  Button,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  MdOutlineStar,
  MdFavorite,
  MdOutlineCardGiftcard,
} from "react-icons/md";

import styles from "../../styles/Home.module.css";
import { StarIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Backend } from "../../data/Backend";

import { useStorken } from "../../data/storken";

const CoffeeCard = () => {
  return (
    <HStack mt={10}>
      <Cards />
    </HStack>
  );
};

export default CoffeeCard;

function Cards() {
  const router = useRouter();
  const [product, setproduct] = useState([]);
  const [productId, setproductId] = useStorken<number>("productId");


  useEffect(() => {
    Backend.getProduct().then((pro) => {
      setproduct(pro);
    });
  }, []);

  return (
    <>
      {product.map((products, id) =>
        products.hidden ? (
          false
        ) : (
          <Link href={"/DetailPage/" + products.id} key={products.id}>
            <Box
              key={id}
              w={"50vw"}
              h={"60vw"}
              bgColor={"#5EA4B7"}
              borderRadius={20}
              position={"relative"}
            >
              <Image
                src={"/images/coffees/Coffee-1.svg"}
                w={"27vw"}
                position={"absolute"}
                right={2}
                top={-5}
              ></Image>
              <Badge position={"absolute"} m={4}>
                <Text fontSize={15}>{"$" + products.price}</Text>
              </Badge>

              <VStack
                display={"flex"}
                position={"absolute"}
                bottom={5}
                ml={4}
                spacing={0}
                alignItems={"flex-start"}
              >
                <Text fontSize="2xl" fontWeight={"bold"} color={"white"}>
                  {products.name}
                </Text>

                <HStack justifyContent={"space-between"} w={"40"}>
                  <HStack spacing={0.3}>
                    <StarIcon color={"orange"} />
                    <StarIcon color={"orange"} />
                    <StarIcon color={"orange"} />
                    <StarIcon color={"orange"} />
                    <StarIcon color={"orange"} />
                  </HStack>
                  <IconButton
                    icon={<MdOutlineCardGiftcard />}
                    aria-label=""
                  ></IconButton>
                </HStack>
              </VStack>
            </Box>
          </Link>
        )
      )}
    </>
  );
}
