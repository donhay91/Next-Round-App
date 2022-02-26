import {
  Container,
  FormControl,
  FormLabel,
  UnorderedList,
  Divider,
  Button,
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Person from './Person';
import InputArea from './InputArea';
import RandomPerson from './RandomPerson';

function Form() {
  const [listName, setListName] = useState([]);

  const [randomPerson, setRandomPerson] = useState();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const isEmpty = listName < 1;

  function addNames(name) {
    setListName((prevListName) => {
      return [...prevListName, name];
    });
  }

  function onSubmit() {
    const randomPerson = listName[Math.floor(Math.random() * listName.length)];

    setRandomPerson(randomPerson);

    setIsSubmitted(true);
  }

  function deleteName(id) {
    setListName((prevListName) => {
      return prevListName.filter((listedPerson, index) => {
        return index !== id;
      });
    });
  }

  return <Container bg="#17A7AD" maxW="full" centerContent>
            <Flex py={5} borderRadius={15} bg="#E0BE65" w={{base: "285px", md:"410px"}} p={{base: "2", sm: "3", md: "5"}}>
            {isSubmitted ? (
              <RandomPerson person={randomPerson} />
            ) : (
              <FormControl>
                <Container centerContent>
                <FormLabel htmlFor='name' color='#17A7AD'>
                    Please Enter Your Names:
                </FormLabel>
                </Container> 
                <InputArea onAdd={addNames} />
                <Divider></Divider>
                <UnorderedList>
                  {listName.map((listedPerson, index) => {
                    return (
                      <Person
                        key={index}
                        id={index}
                        personName={listedPerson}
                        onRemove={deleteName}
                      />
                    );
                  })}
                </UnorderedList>

                <Container centerContent>
                  <Flex py={3}>
                    <Button
                      isDisabled={isEmpty}
                      bg='#17A7AD'
                      color='#F8DFBD'
                      _hover={{ bg: '#F8DFBD', color: '#17A7AD' }}
                      onClick={onSubmit}
                    >
                      Submit
                    </Button>
                    </Flex>
                </Container>
              </FormControl>
            )}
            </Flex>
    </Container>
}
export default Form;
