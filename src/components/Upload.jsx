import React from 'react';
import { Container, Input, Button, VStack, HStack } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h="100vh" p={'8'}>
      <VStack color={'purple.500'} justifyContent={'center'} h="full">
        <AiOutlineCloudUpload size={'10rem'} />
        <form>
          <HStack>
            <Input
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc( 100% + 36px )',
                  color: 'purple',
                  height: '100%',
                  marginLeft: '-18px',
                  background: 'white',
                },
              }}
            />
            <Button colorScheme={'purple'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
