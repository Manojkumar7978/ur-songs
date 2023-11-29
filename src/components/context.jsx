import { useBoolean } from '@chakra-ui/react'
import React, { createContext } from 'react'
export const Mycontext = createContext()

export default function Context({ children }) {
    let [logedin,setlogedin]=useBoolean()
    return (
        <Mycontext.Provider value={{logedin,setlogedin}}>
            {children}
        </Mycontext.Provider>
    )
}
