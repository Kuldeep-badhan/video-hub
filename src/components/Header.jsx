import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button pos={'fixed'} top="4" left="4" onClick={onOpen} zIndex={'overlay'}>
        <BiMenuAltLeft />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement={'left'} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Link to="/">
                
                <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                  Home
                </Button>
              </Link>
              <Link to="/videos">
                
                <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                  Videos
                </Button>
              </Link>
              <Link to="/freevideos">
               
                <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                  Free Videos
                </Button>
              </Link>
              <Link to="/uploadvideos">
                
                <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                  Upload Videos
                </Button>
              </Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter
            w="100"
            display={'flex'}
            justifyContent={'space-evenly'}
          >
            <Link to="/login">
              
              <Button variant="solid" colorScheme={'purple'} onClick={onClose}>
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              
              <Button variant={'outline'} colorScheme="purple" onClick={onClose}>
                
                Sign Up
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
