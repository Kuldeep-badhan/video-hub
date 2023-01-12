import React, { useState } from 'react';
import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import videos from '../assets/videos/links.js';

const Videos = () => {

  const [video, setvideo] = useState({
    src: videos[0].sources,
    title: videos[0].title,
    description: videos[0].description,
    thumbnail: videos[0].thumb,
  });
  return (
    <Stack direction={['column', 'row']} h={['fit-content','fit-content']} mb={'2rem'}>
      <VStack px={'2rem'} my={['2rem','0']} >
        <video
          poster={video.thumbnail}
          controls
          controlsList="nodownload"
          style={{
            width: '100%',
          }}
          src={video.src}
        ></video>

        <VStack
          alignItems={'flex-start'}
          p={'0 8px'}
          w={'full'}
          overflowX={'auto'}
        >
          <Heading>{video.title}</Heading>
          <Text>{video.description}</Text>
        </VStack>
      </VStack>
      <Stack  width={['full', 'xl']} alignItems={'stretch'} direction={['row','column']} flexWrap={'wrap'} justifyContent={'space-evenly'} gap={'2rem'}>
        {videos.map((item, index) => {
          return (
            <Button
              variant={'ghost'}
              colorScheme={'purple'}
              onClick={() => {

                setvideo({
                  src: item.sources,
                  title: item.title,
                  description: item.description,
                  thumbnail: item.thumb
                });
              }}
            >
              video {index + 1}
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Videos;
