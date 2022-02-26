import { Container, Heading, Text, VStack, Image, Flex} from "@chakra-ui/react";
import React from "react";
import Beer from "../assets/beer-mug.png";


function Header(){

    return <Container bg="#17A7AD" maxW="full" centerContent>
                <Flex py={5}>   
                        <VStack borderRadius={15} w="full" h="full" p={3} bg="#E0BE65" alignItems="center">
                            <Heading color="#F8DFBD" size="2xl" padding={2} mt={5}>Next Round</Heading>
                            <Text color="#F8DFBD" fontSize={{base: "sm", sm: "md", md: "2xl"}} pb={5}>Who's Paying The Next Round?</Text>
                            <Image
                            boxSize='150px'
                            src={Beer}
                            alt='Beer-mug'
                            />
                        </VStack>
                </Flex>
            </Container>    
}

export default Header;

