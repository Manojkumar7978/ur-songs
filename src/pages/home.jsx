import { Box } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <Box display={'flex'} gap={2}>
      <Sidebar />
      <Box flex={1} borderRadius={10} border={'1px solid green'}>
        <Box h={'80px'} >

        </Box>
      </Box>

    </Box>
  )
}
