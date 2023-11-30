import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/home'
import { Text } from '@chakra-ui/react'

export default function Router() {
  return (
    <Routes>
      <Route path='/*' element={<Home/>}/>

      
    </Routes>
  )
}
