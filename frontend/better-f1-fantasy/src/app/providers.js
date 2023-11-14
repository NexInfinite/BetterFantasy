'use client'

import { ChakraProvider, } from "@chakra-ui/provider";
import { CacheProvider } from "@chakra-ui/next-js";


export function Providers({children}) {
    return (
            <CacheProvider>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </CacheProvider>
    )
}