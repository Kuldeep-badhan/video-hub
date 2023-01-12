import React from 'react';
import {
  Container,
  Button,
  Input,
  Text,
  Heading,
  VStack,
  Avatar
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <Container width={['100%','container.xl']} centerContent>
      <VStack justifyContent={'center'} h={['35rem','100vh']} spacing={'8'} w={['full','80']}>
        <Heading py={'3'}>VIDEO HUB</Heading>
        <Avatar />
        <Input
          type={'text'}
          focusBorderColor={'purple.500'}
          placeholder={'Name'}
        />
        <Input
          type={'email'}
          focusBorderColor={'purple.500'}
          placeholder={'Email'}
        />
        <Input
          type={'password'}
          focusBorderColor={'purple.500'}
          placeholder={'Enter Password'}
        />
      
        <Button type="submit" colorScheme={'purple'} alignSelf={'stretch'}>
        Sign Up
        </Button>
        <Text textAlign={'end'} w="full">
          Old User?{' '}
          <Button variant={'link'}  color={'purple.500'}>
          <Link to="/login" color={'purple.500'}>
            Log In
          </Link>{' '}
          </Button>
        </Text>
      </VStack>
    </Container>
  );
};



export default Signup;
