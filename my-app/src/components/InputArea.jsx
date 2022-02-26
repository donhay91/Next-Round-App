import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HStack, Input, Box, IconButton, Container} from "@chakra-ui/react";

function InputArea(props){

    const [name, setName] = useState("");

    const isError = name === ""

    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event){
        const newVal = event.target.value;

        setName(newVal);
    }

    function expanded(){
        setIsExpanded(true);
    }

    return <Box padding={2} mb={2}>
            <Input onClick={expanded} bg="#F7F7F7" 
               focusBorderColor="#ED1B2E" 
               name="fName"
               type="text"
               placeholder="Add Your Name"
               autoComplete="off"
               onChange={handleChange}
               value={name}>
            </Input>
            {isExpanded && 
            <Container centerContent>
                <HStack padding={5}>
                    <IconButton isDisabled={isError} isRound size="lg" bg="#17A7AD" color="#F8DFBD" _hover={{ bg: "#F8DFBD", color: "#17A7AD" }} 
                        onClick={(event) => {
                            props.onAdd(name);
                            setName("");
                            event.preventDefault();
                        }}><FaPlus /></IconButton>    
                </HStack>
            </Container>}
            </Box>
}

export default InputArea;