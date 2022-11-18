import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  HStack,
  VStack,
  Badge,
  SimpleGrid,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";

import "../../styles/Home.module.css";
import { Backend } from "../../data/Backend";

function Card({ category }) {
  console.log(category);
  return <MenuBuilder category={category} />;
}

export function MenuBuilder({ category }) {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    Backend.getProduct().then((pro) => {
      if (category != 0) {
        setproduct(pro.filter((p) => p.categoryid == category));
        console.log("products:" + pro.name);
        console.log("category:" + category);
      }
      else {
        setproduct(pro);
      }
    });
  }, []);
  console.log(product)
  return (
    <Grid
      w={"92vw"}
      h={"100vh"}

      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      {product.map((products, id) =>
        products.hidden ? (
          false
        ) : (
          <Link href={"/DetailPage/" + products.id} key={products.id}>
            <GridItem
              colSpan={2}
              w={"44vw"}
              justifyContent={"center"}
              bgColor={"#F4F9FA"}

              h={"24vw"}
              borderRadius={10}
            >
              <Box >
                <Box className="row">
                  <Box className="col-md-4 ">
                    <Box>
                      <Box justifyContent={"center"}>
                        <VStack alignItems={"center"}>
                          <Box>
                            <Image
                              src="/images/coffees/Coffee-1.svg"
                              className="card-img-top"
                              alt=""
                              h={140}
                              p={3}
                            />
                          </Box>

                          <HStack spacing={2} pb={"10px"}>
                            <Badge colorScheme="title" fontSize="1em">
                              {products.name}
                            </Badge>
                            <Badge
                              bgColor="#5EA4B7"
                              color={"white"}
                              fontSize="1em"
                              borderRadius={8}
                            >
                              {"$" + products.price}
                            </Badge>
                          </HStack>
                        </VStack>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </GridItem>
          </Link>
        )
      )}
    </Grid>
  );
}

export default Card;
