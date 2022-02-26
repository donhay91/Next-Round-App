import React from "react";
import { Container, Flex, Heading, Text, VStack} from "@chakra-ui/react";

function Footer(){

    const curentYear = new Date().getFullYear();

    return <Container bg="#17A7AD" maxW="full" centerContent>
                <Flex h="full" py={5} >
                    <VStack w="full" h="full" alignItems="center">
                        <Heading color="#F8DFBD" size="xs">Built with React and Chakra UI</Heading>
                        <Text color="#F8DFBD">By</Text>
                        <Heading color="#F8DFBD" size="xs">Donovan Hay</Heading>
                        <Text color="#E0BE65">Copyright © {curentYear}</Text>
                    </VStack>
                </Flex>
        </Container>  

           
}

export default Footer;



