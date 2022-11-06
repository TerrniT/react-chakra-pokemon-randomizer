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

import { Pokemon, ProductSimple } from './components/Pokemon.js';
import { Scene } from './components/Sceen.js';

function App() {
  // Colormode style
  const modes = useColorModeValue('purple.400', 'orange.300');
  const color = useColorModeValue('gray.800', 'white');
  const scheme = useColorModeValue('purple', 'orange');

  return (
    <Box textAlign="center" fontSize="xl">
      <ColorModeSwitcher mt="5" />
      <Flex p={3} display="flex" flexDirection="column">
        <Scene />
        <Heading justifySelf="flex-start" color={color} fontWeight="700">
          Pokemon Generator
        </Heading>
        <Text>
          <Link
            justifySelf="center"
            href="https://github.com/TerrniT"
            isExternal
          >
            @terrnit <ExternalLinkIcon justifySelf="center" mb={1} />
          </Link>
        </Text>
        <Flex w="325px" h="100vh" alignSelf="center">
          <Flex w="325px" flexDir="column">
            <Pokemon />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
