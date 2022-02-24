import {
  Center,
  Container,
  FormControl,
  FormLabel,
  Stack,
  Box,
  UnorderedList,
  Divider,
  Button,
  HStack,
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

  return (
    <form>
      <Center bg='#17A7AD'>
        <Stack mb={5}>
          <Box bg='#E0BE65'  Width={['380', '500', '600']} borderRadius='20' p={5}>
            {isSubmitted ? (
              <RandomPerson person={randomPerson} />
            ) : (
              <FormControl>
                <Container centerContent>
                  <FormLabel htmlFor='name' centerContent color='#17A7AD'>
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
                <Divider></Divider>
                <Container centerContent>
                  <HStack padding={5}>
                    <Button
                      isDisabled={isEmpty}
                      bg='#17A7AD'
                      color='#F8DFBD'
                      _hover={{ bg: '#F8DFBD', color: '#17A7AD' }}
                      onClick={onSubmit}
                    >
                      Submit
                    </Button>
                  </HStack>
                </Container>
              </FormControl>
            )}
          </Box>
        </Stack>
      </Center>
    </form>
  );
}
export default Form;
