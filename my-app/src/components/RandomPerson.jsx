import React from "react";
import {Center, Flex, Box, VStack, Heading, Text} from "@chakra-ui/react";

function randomPerson(props){
    return <Center>
                <Flex m={5}>   
                    <Box bg="#E0BE65" borderRadius="20" w={440}>
                        <VStack spacing={5}>
                            <Heading color="#F8DFBD" size="4xl" p={4}>{props.person}</Heading>
                            <Text color="#F8DFBD" fontSize="2xl" pb={5}>Is Paying For The Next Round!</Text>
                        </VStack>
                    </Box>
                </Flex>
            </Center>     
}

export default randomPerson;