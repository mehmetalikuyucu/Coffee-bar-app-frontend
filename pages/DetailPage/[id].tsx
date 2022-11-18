import {
  Box,
  IconButton,
  Stack,
  VStack,
  Text,
  HStack,
  Image,
  Button,
} from "@chakra-ui/react";
import { AddIcon, ChevronLeftIcon, StarIcon } from "@chakra-ui/icons";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import BottomNavBar from "../../components/BottomNavBar";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:11000/allProduct");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((product) => {
    return {
      params: { id: product.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:11000/allProduct/" + id);

  const data = await res.json();
  console.log("data", data);
  return {
    props: { product: data },
  };
};

const Details = ({ product }) => {
  const router = useRouter();
  console.log("InData");
  return (
    <div>
      <Box w={"100vw"} h={"100vh"} backgroundColor={"#8DC1D0"}>
        <Box // Upper Component
          w={"100vw"}
          h={"41vh"}
          position={"relative"}
        >
          <VStack>
            <HStack
              mb={"2.5vh"}
              justifyContent={"space-between"}
              w={"80vw"}
              mt={"10vw"}
            >
              <IconButton
                onClick={() => router.back()}
                aria-label="Go Back"
                variant={"unstyled"}
                icon={
                  <ChevronLeftIcon
                    borderRadius={"5px"}
                    boxSize={"40px"}
                    color={"white"}
                  ></ChevronLeftIcon>
                }
              ></IconButton>
              <IconButton
                aria-label="Go Shopping Cart"
                variant={"unstyled"}
                icon={
                  <MdShoppingCart
                    size={"25px"}
                    color={"white"}
                  ></MdShoppingCart>
                }
              ></IconButton>
            </HStack>
            <Image
              src="/images/coffees/Coffee-1.svg"
              h={"30vh"}
              position={"absolute"}
              bottom={"-2vh"}
              zIndex={2}
            ></Image>
          </VStack>
        </Box>
        <Box // Bottom Component
          w={"100vw"}
          h={"60vh"}
          pt={"10vw"}
          pl={"10vw"}
          pr={"10vw"}
          bottom={0}
          position={"absolute"}
          backgroundColor={"#F4F9FA"}
          borderTopRadius={"35px"}
        >
          <HStack
            mb={"1vh"}
            w={"80vw"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text fontWeight={"semibold"} fontSize={"20px"} color={"black"}>
              {product[0].name}
            </Text>
            <IconButton
              boxSize={"30px"}
              borderRadius={"180px"}
              aria-label="Send Gift"
              backgroundColor={"#5CA4B8"}
              _hover={{
                backgroundColor: "transparent",
                border: "2px",
                borderColor: "#5CA4B8",
              }}
            >
              <StarIcon
                borderRadius={"50px"}
                boxSize={"15px"}
                color={"white"}
                _hover={{
                  color: "#5CA4B8",
                }}
              ></StarIcon>
            </IconButton>
          </HStack>
          <HStack justifyContent={"start"} alignItems={"center"} mb={"1vh"}>
            <StarIcon color={"orange"} boxSize={"15px"} />
            <StarIcon color={"orange"} boxSize={"15px"} />
            <StarIcon color={"orange"} boxSize={"15px"} />
            <StarIcon color={"orange"} boxSize={"15px"} />
            <StarIcon color={"orange"} boxSize={"15px"} />
            <BottomSheet />
          </HStack>
          <Box>
            <Text
              fontSize={"15px"}
              fontWeight={"thin"}
              mb={"2vh"}
              color={"black"}
            >
              {product[0].description}
            </Text>
          </Box>
          <Text fontSize={"15px"} fontWeight={"Bold"} color={"black"}>
            Add Extra
          </Text>
          <HStack mt={4} mb={3}>
            <ExtraBuilder />
            <ExtraBuilder />
            <ExtraBuilder />
          </HStack>
          <Box
            backgroundColor={"white"}
            p={"7.5px"}
            borderRadius={"10px"}
            border={"1px"}
            borderColor={"#E7F0F1"}
          >
            <HStack justifyContent={"space-between"}>
              <Button
                w={"40vw"}
                backgroundColor={"#5CA4B8"}
                _hover={{
                  backgroundColor: "transparent",
                  border: "2px",
                  borderColor: "#5CA4B8",
                }}
              >
                <Box
                  w={"40vw"}
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                  display={"flex"}
                  color={"white"}
                  _hover={{ color: "#5CA4B8" }}
                >
                  <Text color={"black"}>{"$" + product[0].price}</Text>
                  <Text>|</Text>
                  <MdShoppingCart size={"20px"}></MdShoppingCart>
                </Box>
              </Button>
              <Button
                w={"40vw"}
                backgroundColor={"#5CA4B8"}
                _hover={{
                  backgroundColor: "transparent",
                  border: "2px",
                  borderColor: "#5CA4B8",
                }}
              >
                <Text
                  color={"white"}
                  _hover={{
                    color: "#5CA4B8",
                  }}
                >
                  Order Now
                </Text>
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
      <BottomNavBar />
    </div>
  );
};

export default Details;
function ExtraBuilder() {
  return (
    <Box
      justifyContent={"flex-end"} // yatay
      alignItems={"flex-end"} // dikey
      position={"relative"}
      w={"25vw"}
      h={"25vw"}
      backgroundColor={"white"}
      borderRadius={"15px"}
    >
      <Image
        src="/images/extras/chocolate.png"
        w={"20vw"}
        position={"absolute"}
        top={"-3vh"}
        right={"-1vw"}
      />
      <VStack
        spacing={-1}
        ml={2}
        mb={3}
        alignItems={"flex-start"}
        bottom={1}
        position={"absolute"}
      >
        <Text color={"black"} fontWeight={"semibold"} fontSize={12.5}>
          Chocolate
        </Text>
        <Text fontWeight={"semibold"} color={"black"} fontSize={12.5}>
          $10
        </Text>
      </VStack>
      <IconButton
        position={"absolute"}
        bottom={-1}
        right={-1}
        color={"white"}
        backgroundColor={"#8DC1D0"}
        aria-label={"Add Item"}
        size={"xs"}
        borderRadius={90}
        _hover={{
          color: "#5CA4B8",
          backgroundColor: "transparent",
          border: "2px",
          borderColor: "#5CA4B8",
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
