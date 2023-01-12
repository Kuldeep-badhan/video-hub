import React from 'react';
import {
  Container,
  Button,
  Input,
  Text,
  Heading,
  VStack,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <Container width={['100%','container.xl']} centerContent>
      <VStack justifyContent={'center'} h={["35rem",'100vh']} spacing={'8'} w={['full','80']}>
        <Heading py={'3'}>Welcome Back!</Heading>
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
        <Button variant={'link'} alignSelf={'flex-end'} color={'purple.500'}>
        <Link to="/forgotpassword" >
          Forgot Password?
        </Link>

        </Button>
        <Button type="submit" colorScheme={'purple'} alignSelf={'stretch'}>
          Log In
        </Button>
        <Text textAlign={'end'} w="full">
          New User?{' '}
          <Button variant={'link'}  color={'purple.500'}>
          <Link to="/signup" color={'purple.500'}>
            Sign Up
          </Link>{' '}
          </Button>
        </Text>
      </VStack>
    </Container>
  );
};

export default Login;
