import React, { useState , useEffect} from 'react';
import { Container, Heading, Text, Box } from '@chakra-ui/react';
import videos from '../assets/videos/links.js';
import {useParams} from "react-router-dom";

const Freevideoview = () => {


    const {id} = useParams();
    console.log(id);

    const [video, setvideo] = useState({
    src: videos[0].sources,
    title: videos[0].title,
    description: videos[0].description,
    thumbnail: videos[0].thumb,
  });
  console.log(video.src[0]);
  useEffect(() => {
    
    setvideo( {
        src: videos[id].sources,
        title: videos[id].title,
        description: videos[id].description,
        thumbnail: videos[id].thumb
      } ) 
  }, [id]);
  
  
  return (
      <Box>
      <Container maxW={'container.xl'} my={'2rem'}>
        <video src={video.src[0]} controls controlsList="nodownload" style={{
            width: '100%'
          }}></video>
        <Heading my="2rem">{video.title}</Heading>
        <Text>{video.description}</Text>
      </Container>
    </Box>
  );
};

export default Freevideoview;
