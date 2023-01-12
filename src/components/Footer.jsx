import {
  Box,
  Stack,
  VStack,
  Input,Text,
  Heading,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={['60','40']} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} px={'4px'} w={'full'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={['center','left ']}>
            Subscribe To Get Updates
          </Heading>
          <HStack
          borderBottom={'2px solid white'} py="2"
          >
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              focusBorderColor={'none'}
            />
            <Button
              color={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'} 
        borderRight={['none','2px solid white']}
        borderLeft={['none','2px solid white']}
        p={['10','0']}
        >
            <Heading size={'lg'}>VIDEO HUB</Heading>
            <Text>
    All Rights Reserved
            </Text>
        </VStack>
        <VStack
        w={'full'}
        >
    <Heading size={'md'}>SOCIAL MEDIA</Heading>
    <Button colorScheme={'white'} variant={'link'} > 
    <a href="https://www.youtube.com/" target={'blank'}>YouTube</a>

    </Button>
    <Button colorScheme={'white'} variant={'link'} > 
    <a href="https://www.instagram.com/" target={'blank'}>Instagram</a>

    </Button>
    <Button colorScheme={'white'} variant={'link'} > 
    <a href="https://www.GitHub.com/" target={'blank'}>GitHub</a>

    </Button>

        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
