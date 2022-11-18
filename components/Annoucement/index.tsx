import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import { Backend } from "../../data/Backend";

type Props = {
  name: string;

  detail: string;
};

const color = [
  "blue.light",
  "black.light",
  "blue.dark",
  "orange.normal",
  "blue.soft",
];

//create interface for annoucement

const index = () => {
  const [annoucement, setannoucement] = useState([]);

  useEffect(() => {
    Backend.getAnnoucment().then((annoucements) => {
      setannoucement(annoucements);
    });
  }, []);


  return (
    <>
      <Carousel
        autoPlay
        centerMode
        centerSlidePercentage={100}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        infiniteLoop
      >
        {annoucement.map((annoucement, id) => (
          <Annoucement
            key={id}
            name={annoucement.title}
            detail={annoucement.description}
          />
        ))}
      </Carousel>
    </>
  );
};
const Annoucement = ({ name, detail }: Props) => {
  return (
    <>
      <Box
        py={20}
        borderRadius={10}
        backgroundImage={"coffee.jpg"}
        backgroundPosition={"center"}
        bgSize={"cover"}
      >
        <Flex justify={"center"} alignItems={"center"}>
          <Stack dir="column" spacing={3} textColor={"white"}>
            <Flex
              justify={"space-between"}
              alignItems={"center"}
              textColor={"white"}
            >
              <Box>
                <Heading fontSize={"3xl"}> {name}</Heading>
              </Box>
            </Flex>
            <Box textAlign={"center"}>
              <Text>{detail}</Text>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default index;
