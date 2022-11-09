import {
  Flex,
  Text,
  Button,
  Image,
  Spinner,
  Center,
  Box,
} from '@chakra-ui/react';
import { Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export const Pokemon = () => {
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [types, setTypes] = useState('');

  const bg = useColorModeValue('purple.300', 'yellow.100');
  const color = useColorModeValue('white', 'black');

  const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6',
  };

  const fetchRandomPokemon = () => {
    const controller = new AbortController();
    let random = Math.floor(Math.random() * 792);
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`, {
      signal: controller.signal,
    })
      .then(async response => {
        const poke = await response.json();
        setId(poke.id);
        setImage(poke.sprites.front_default);
        setName(poke.name);
        setTypes(poke.types[0].type.name);
      })
      .catch(err => console.log(err));
    return () => {
      controller.abort();
    };
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <Flex alignItems="center" flexDir="column">
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'210px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            {!image ? (
              <Spinner />
            ) : (
              <Image
                rounded={'lg'}
                height={300}
                width={282}
                objectFit={'cover'}
                src={image}
              />
            )}
          </Box>
          <Stack pt={10} align={'center'}>
            <Text
              color={'gray.500'}
              fontSize={'lg'}
              textTransform={'uppercase'}
            >
              # {id}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Box
                style={{
                  backgroundColor: `#${TYPE_COLORS[types]}`,
                  color: 'white',
                }}
                pr={4}
                pl={4}
                rounded={'lg'}
              >
                <Text fontWeight={800}>{types}</Text>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Center>

      <Button bg={bg} color={color} onClick={fetchRandomPokemon}>
        Generate Pokemon
      </Button>
    </Flex>
  );
};

export default Pokemon;
