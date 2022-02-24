import { Box, Heading, Center, Text, VStack, Image, Flex} from "@chakra-ui/react";
import React from "react";
import Beer from "../assets/beer-mug.png";


function Header(){

    return <Center bg="#17A7AD">
                <Flex m={5} minWidth={['300', '400', '500']}>   
                    <Box bg="#E0BE65" borderRadius="20" w={440}>
                        <VStack spacing={5}>
                            <Heading color="#F8DFBD" size="3xl" padding={2} mt={5}>Next Round</Heading>
                            <Text color="#F8DFBD" fontSize="xl" pb={5}>Who's Paying The Next Round?</Text>
                            <Image
                            boxSize='150px'
                            src={Beer}
                            alt='Beer-mug'
                            />
                        </VStack>
                    </Box>
                </Flex>
            </Center>     
}

export default Header;