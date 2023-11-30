import { Box, Text, chakra,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsSpotify } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";


export default function Sidebar() {
    let [activemenu, setactivemenu] = useState(1)

    return (
        <Box w={'300px'}>
            <Box bg={'#121212'}
                borderRadius={10}
                p={5}
            >
                <chakra.a href={'/'} display={'flex'} gap={1}>
                    <BsSpotify color='white' size={25} />
                    <Text color={'white'} fontWeight={'600'}>Spotify</Text>
                </chakra.a>
                <chakra.ul >
                    <chakra.li className={`menu ${activemenu === 1 && 'active'}`}
                        onClick={() => { setactivemenu(1) }}
                        display={'flex'} alignItems={'center'} gap={5} pt={5} >
                        <GoHome size={25} />
                        <Text >Home</Text>
                    </chakra.li>
                    <chakra.li className={`menu ${activemenu === 2 && 'active'}`}
                        onClick={() => { setactivemenu(2) }}
                        display={'flex'} alignItems={'center'} gap={5} pt={5} >
                        <IoSearch size={25} />
                        <Text >Search</Text>
                    </chakra.li>
                </chakra.ul>
            </Box>
            <Box mt={2} bg={'#121212'}
                borderRadius={10}>
                <chakra.li p={5} listStyleType={'none'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    color='#d5d5d5' fontWeight={'700'}>
                    <Box display={'flex'} gap={3}
                        cursor={'pointer'} _hover={{ color: 'white' }}
                    >
                        <LuLibrary size={25} />
                        <Text>Your Library</Text>
                    </Box>
                    <FaPlus size={15} className='menu' />

                </chakra.li>

                <Box
                height={'140px'}
                overflowY={'scroll'}
                className='custom-scroll'
                >
                    <Box m={2} mb={7} h={'150px'} bg={'#242424'} borderRadius={10} p={3}>
                        <Text fontWeight={'700'}  color={'#fefefe'}>Create your first playlist</Text>
                        <Text fontWeight={'500'}
                        mt={1}
                        fontSize={'small'}
                        color={'#fefefe'}>It's easy, we'll help you</Text>
                        <Button
                        mt={5}
                        borderRadius={50}
                        size={'sm'}
                        fontWeight={'700'}
                        bg={'white'}
                        _hover={{transform:'scale(1.05)',
                        transition: 'all 0.1s ease-in-out'
                    }}
                        >Create playlist</Button>

                    </Box>
                    <Box m={2} h={'150px'} bg={'#242424'} borderRadius={10} p={3}>
                        <Text fontWeight={'700'}  color={'#fefefe'}>Let's find some podcasts to follow</Text>
                        <Text fontWeight={'500'}
                        mt={1}
                        fontSize={'small'}
                        color={'#fefefe'}>We'll keep you updated on new episods</Text>
                        <Button
                        mt={5}
                        borderRadius={50}
                        size={'sm'}
                        fontWeight={'700'}
                        bg={'white'}
                        _hover={{transform:'scale(1.05)',
                        transition: 'all 0.1s ease-in-out'
                    }}
                        >Create playlist</Button>

                    </Box>
                
                </Box>
                <Box p={5}>
                <chakra.ul listStyleType={'none'}
                color={'#929292'}
                fontSize={'11px'}
                fontWeight={'500'}
                columnGap={5}
                rowGap={3}
                display={'flex'} flexWrap={'wrap'}>
                    <chakra.li>Legal</chakra.li>
                    <chakra.li>Privacy Center</chakra.li>
                    <chakra.li>Privacy Policy</chakra.li>
                    <chakra.li>Cookies</chakra.li>
                    <chakra.li>About Ads</chakra.li>
                    <chakra.li>Accessibility</chakra.li>
                    <chakra.li>Cookies</chakra.li>
                </chakra.ul>
                <Button
                color={'white'}
                bg={'transparent'}
                border={'1px solid white'}
                fontSize={'small'}
                h={'35px'}
                _hover={{border:'2px solid white',
                        transform:'scale(1.1)'
            }}
            mt={10}
            mb={10}
                leftIcon={<TbWorld size={20} />}
                borderRadius={50}
                >English</Button>
            </Box>
            </Box>
         
        </Box>
    )
}
