import React from "react";
import { Flex, VStack, Heading, Text} from "@chakra-ui/react";

function randomPerson(props){
    return  <Flex  py={5}>   
                <VStack borderRadius={15} w="full" h="full" p={{base: "5", sm: "1" }} bg="#E0BE65" alignItems="center">
                    <Heading color="#F8DFBD" size="3xl">{props.person}</Heading>
                    <Text color="#F8DFBD" fontSize={{base: "sm", sm: "md", md: "2xl"}} pb={5}>Is Paying For The Next Round!</Text>
                </VStack>
            </Flex>  
}

export default randomPerson;