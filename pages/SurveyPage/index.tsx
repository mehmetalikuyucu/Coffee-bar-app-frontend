import { AddIcon, ChevronLeftIcon, InfoIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  ButtonGroup,
  color,
  Divider,
  HStack,
  IconButton,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { SettingsIcon } from "@chakra-ui/icons";
import BottomNavBar from "../../components/BottomNavBar";
import { useEffect, useState } from "react";
import { Backend } from "../../data/Backend";
import { useStorken } from "../../data/storken";

//TODO: SURVEY COMPONENT

const SurveyPage = () => {
  return (
    <Box overflow={"auto"} h={"100vh"} w={"100vw"} bgColor={"white"}>
      <Survey></Survey>
      <BottomNavBar />
    </Box>
  );
};
export default SurveyPage;

function Survey() {
  const [selected, setSelected] = useState(false);
  const [status, setStatus] = useState()
  const ChangeStatus = (id, key, status) => {
    setSelected(!selected)

    Backend.VoteSurvey((Number(id) + 1), Number(key))
    status = status + 5

    console.log("status:", status)
    setStatus(status)
  }


  const [survey, setsurvey] = useState([]);
  useEffect(() => {
    Backend.getSurvey()
      .then((sur) => {
        setsurvey(sur);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [status]);


  return (
    <>
      <Box>
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"100vw"}
          mt={"10vw"}
          mb={"10vw "}
        >
          <IconButton
            aria-label="Go Back"
            variant={"unstyled"}
            icon={
              <ChevronLeftIcon
                boxSize={"40px"}
                color={"#5CA4B8"}
              ></ChevronLeftIcon>
            }
          ></IconButton>
          <Text fontWeight={"bold"} fontSize={"5vw"} color={"#5CA4B8"}>
            Survey Page
          </Text>
          <IconButton
            aria-label="Settings"
            variant={"unstyled"}
            icon={<InfoIcon boxSize={"22.5px"} color={"#5CA4B8"}></InfoIcon>}
          ></IconButton>
        </HStack>
      </Box>
      <VStack spacing={4} overflowY={"auto"} overflowX={"hidden"} h={"76vh"}>
        {survey.map((sur, id) => (
          <Box px={10} mb={6} key={id}>
            <Box pb={2} pl={2}>
              <Text fontSize={"16"} fontWeight={"normal"} color={"black"}>
                {sur.description.title}
              </Text>
              <Text fontSize={"16"} fontWeight={"bold"} color={"black"}>
                {sur.description.questions}
              </Text>
            </Box>
            <VStack gap={1}>
              {Object.keys(sur.choices).map(key => {
                return (<Box onClick={() => ChangeStatus(id, key, sur.choices[key].status)}> <SurveyChoices status={sur.choices[key].status} choicesText={sur.choices[key].value} /></Box>
                )
              })}
            </VStack>
          </Box>
        ))}
      </VStack>
    </>
  );
}
/*        return (<Box>{sur.choices[key].value}</Box>)      
<Box onClick={() => ChangeStatus(id, sur.choices.A.status)}> <SurveyChoices status={sur.choices.A.status} choicesText={sur.choices.A.value} /></Box>
              <SurveyChoices status={sur.choices.B.Status} choicesText={sur.choices.B.value} />
              <SurveyChoices status={sur.choices.C.status} choicesText={sur.choices.C.value} />
              <SurveyChoices status={sur.choices.D.status} choicesText={sur.choices.D.value} /> */
//create function to render survey choices
interface SurveyChoicesProps {
  status: number;
  choicesText: string;
}

function SurveyChoices(props: SurveyChoicesProps) {
  const [statuss, setStatus] = useStorken<number>("statuss");
  return (
    <Box
      onClick={() => {
        setStatus(props.status + 5);
      }}
      borderRadius={"5vw"}
      w={"80vw"}
      h={"6vh"}
      bgColor={"white "}
      boxShadow={"lg"}
      display={"flex"}
      overflow={"visible"}
    >
      <Box
        id="process"
        width={props.status}
        bgColor={"#8DC1D0"}
        borderRadius={"3vw"}
        display={"flex"}
        alignItems={"center"}
        pl={3}
        overflow={"visible"}
        position={"relative"}
      >
        <Box w={"80vw"} position={"absolute"}>
          <Text color={"black"} fontWeight={"semibold"}>
            {props.choicesText}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
