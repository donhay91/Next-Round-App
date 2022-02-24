import React from "react";
import {Center, Heading, Spacer, Text, VStack} from "@chakra-ui/react";

function Footer(){

    const curentYear = new Date().getFullYear();

    return <Center bg="#17A7AD" h="190">
                <VStack minWidth={['300', '400', '500']}>
                    <Spacer></Spacer>
                    <Heading color="#F8DFBD" size="sm">Built with React and Chakra UI</Heading>
                    <Text color="#F8DFBD">By</Text>
                    <Heading color="#F8DFBD" size="sm">Donovan Hay</Heading>
                    <Spacer></Spacer>
                    <Text color="#E0BE65">Copyright © {curentYear}</Text>
                </VStack>
           </Center>     
}

export default Footer;