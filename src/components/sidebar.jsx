import { Box, Text, chakra } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsSpotify } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";


export default function Sidebar() {
    let [activemenu, setactivemenu] = useState(1)

    return (
        <Box>
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
                borderRadius={10}
                p={5}>

            </Box>
        </Box>
    )
}
