import { ListItem, Flex, IconButton, Spacer, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import React from "react";

function Person(props){
    return <Flex>
                <Box padding={8}>
                    <ListItem>{props.personName}</ListItem>
                </Box>
                <Spacer></Spacer>
                <Box padding={5}>
                    <IconButton isRound 
                    bg="#17A7AD" color="#F8DFBD" _hover={{ bg: "#F8DFBD", color: "#17A7AD" }} 
                    onClick={() => {
                        props.onRemove(props.id);
                    }}><FaTrash /></IconButton>
                </Box>
           </Flex>
}

export default Person;