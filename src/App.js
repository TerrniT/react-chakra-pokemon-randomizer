import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { ColorModeSwitcher } from './ColorModeSwitcher';

import { Pokemon } from './components/Pokemon.js';
import { Scene } from './components/Sceen.js';

function App() {
  // Colormode style
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box textAlign="center" fontSize="xl">
      <ColorModeSwitcher mt="5" />
      <Flex p={3} display="flex" flexDirection="column">
        <Scene />
        <Heading color={color} fontWeight="600">
          Pokemon Randomizer
        </Heading>
        <Text>
          <Link
            fontWeight="700"
            justifySelf="center"
            href="https://github.com/TerrniT"
            isExternal
          >
            @terrnit <ExternalLinkIcon justifySelf="center" mb={1} />
          </Link>
        </Text>
        <Flex alignSelf="center">
          <Flex flexDir="row">
            <Pokemon />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
