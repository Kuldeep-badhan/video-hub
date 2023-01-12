import { Container, Heading,Grid,GridItem,Button } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom';
const Freevideos = () => {
  return (
    <Container maxW={'container.xl'} h='fit-content' py={'5rem'}>
    <Heading textAlign={'center'}>
        These are demo free Videos 
    </Heading>
    <Grid templateColumns={'repeat(2,1fr)'} gap={'2rem'} py={'2rem'}>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/1">   <strong>Video 1</strong> </Link> </Button>  </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/2">   <strong>Video 2</strong> </Link> </Button>  </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/3">   <strong>Video 3</strong> </Link> </Button>  </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/4">   <strong>Video 4</strong> </Link> </Button>  </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/5">   <strong>Video 5</strong> </Link> </Button>  </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/6">   <strong>Video 6</strong>  </Link> </Button> </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/7">  <strong>Video 7</strong>  </Link> </Button> </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/8">   <strong>Video 8</strong> </Link> </Button>  </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/9">   <strong>Video 9</strong> </Link> </Button>  </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/10">  <strong>Video 10</strong>  </Link> </Button> </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/11">   <strong>Video 11</strong> </Link> </Button>  </GridItem>
        <GridItem p={'1rem'} justifySelf='center'>   <Button variant={'link'} colorScheme={'purple'}>  <Link   to="/videos/12">   <strong>Video 12</strong> </Link> </Button>  </GridItem>
    </Grid>
    </Container>
  )
}

export default Freevideos
