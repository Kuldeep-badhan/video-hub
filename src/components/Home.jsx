import React from 'react';
import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.lg'} minH={'100vh'}>
        <Heading
          textTransform={'uppercase'}
          pt="10"
          w="fit-content"
          borderBottom={'2px solid '}
          m="auto"
        >
          Services
        </Heading>
        <Stack h="full" p={["0","4"]} alignItems="center" direction={'column'}>
          <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} my={'2rem'} />
          <Text
            letterSpacing={["0",'2px']}
            lineHeight={'150%'}
            textAlign={['start','center']}
            p={['2', '16']}
            fontSize={'1.2rem'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            totam cum libero culpa hic dolorem quidem exercitationem iusto
            aliquam, optio in expedita nemo consectetur. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Deserunt dolores voluptates ex
            suscipit velit a minus assumenda rerum quas fugiat illum asperiores
            magni corporis tenetur nesciunt consequuntur, perferendis et ipsa
            nisi reprehenderit eum ratione. Odit veritatis delectus quas
            cupiditate mollitia quam incidunt eaque earum consequatur, sed
            tempore exercitationem corrupti aliquam!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      
    >
      <Box w="full" h= {["70vh","100vh"]} >
        <Image
          src={img1}
          pos="relative"
          top="-10vh"
          h={['90vh', '110vh']}
          objectFit={'cover'}
        />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w="full" h= {["70vh","100vh"]} >
        <Image
          src={img2}
          pos="relative"
          top="-10vh"
          h={['90vh', '110vh']}
          objectFit={'cover'}
        />
        <Heading bgColor={'whiteAlpha.400'} color={'black'} {...headingOptions}>
          Future of Gaming
        </Heading>
      </Box>
      <Box w="full" h= {["70vh","100vh"]} >
        <Image
          src={img3}
          pos="relative"
          top="-10vh"
          h={['90vh', '110vh']}
          objectFit={'cover'}
        />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          XBox
        </Heading>
      </Box>
      <Box w="full" h= {["70vh","100vh"]} >
        <Image
          src={img4}
          pos="relative"
          top="-10vh"
          h={['90vh', '110vh']}
          objectFit={'cover'}
        />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night Life Is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
