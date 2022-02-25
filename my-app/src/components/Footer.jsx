import React from "react";
import { Container, Flex, Heading, Text, VStack} from "@chakra-ui/react";

function Footer(){

    const curentYear = new Date().getFullYear();

    return <Container bg="#17A7AD" maxW="full" centerContent>
                <Flex h="35.5vh" py={5} >
                    <VStack w="full" h="full" alignItems="center">
                        <Heading color="#F8DFBD" size="sm">Built with React and Chakra UI</Heading>
                        <Text color="#F8DFBD">By</Text>
                        <Heading color="#F8DFBD" size="sm">Donovan Hay</Heading>
                        <Text color="#E0BE65">Copyright © {curentYear}</Text>
                    </VStack>
                </Flex>
        </Container>  

           
}

export default Footer;



