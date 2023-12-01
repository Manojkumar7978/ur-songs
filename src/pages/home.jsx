import { Box, Button, IconButton,chakra } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/sidebar'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <Box display={'flex'} gap={2}>
      <Sidebar />
      <Box h={'560px'}
      overflowY={'scroll'}
      className='custom-scroll'
      bg={'#121212'} flex={1} borderRadius={10}>
        <Box 
        h={'70px'} bg={'#090909'}
          borderRadius={'10px 10px 0 0'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          p={2}
          position={'sticky'}
          top={0}
        >
          <Box display={'flex'}
            alignItems={'center'} gap={2}>
            <IconButton
              isRound={true}
              size={'sm'}
              bg={'black'}
              color={'gray'}
              isDisabled={'true'}
              _hover={{ color: 'white' }}
              icon={<MdKeyboardArrowLeft size={30}
              />}></IconButton>
            <IconButton
              isRound={true}
              color={'gray'}
              isDisabled={'true'}
              _hover={{ color: 'white' }}
              size={'sm'}
              bg={'black'} icon={<MdKeyboardArrowRight size={30}
              />}></IconButton></Box>
              <chakra.ul gap={5} display={'flex'}
              listStyleType={'none'}
              alignItems={'center'}
              color={'#868686'}
              fontWeight={'700'}
              >
              <chakra.li cursor={'pointer'} _hover={{color:'white'}}>Premium</chakra.li>
              <chakra.li cursor={'pointer'} _hover={{color:'white'}}>Support</chakra.li>
              <chakra.li cursor={'pointer'} _hover={{color:'white'}}>Download</chakra.li>
              <chakra.li>|</chakra.li>
              <chakra.li cursor={'pointer'} _hover={{color:'white'}}>Sign up</chakra.li>
              <chakra.li>
                <Button borderRadius={50}
                _hover={{transform:'scale(1.05)'}}
                color={'black'} size={'lg'}>Log in</Button>
              </chakra.li>
              </chakra.ul>

        </Box>
      </Box>

    </Box>
  )
}
