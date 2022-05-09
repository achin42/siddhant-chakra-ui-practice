import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  Image,
  Button,
  BoxProps,
  useMediaQuery,
  Link,
  useBoolean,
} from "@chakra-ui/react";

export const LogoImage = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {!isMobile ? (
        <Box
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="4rem"
        >
          <Box
            w="90%"
            py="3.5rem"
            borderTop="2px solid #E5E7EB"
            borderBottom="2px solid #E5E7EB"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image ml="4rem" src="/images/Apple.png" />
            <Image ml="4rem" src="/images/Nike.png" />
            <Image ml="4rem" src="/images/Samsung.png" />
            <Image ml="4rem" src="/images/Google.png" />
            <Image ml="4rem" src="/images/Adidas.png" />
            <Image ml="4rem" src="/images/Amazon.png" />
          </Box>
        </Box>
      ) : (
        <Box
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="4rem"
        >
          <Box
            w="90%"
            py="8rem"
            borderTop="2px solid #E5E7EB"
            borderBottom="2px solid #E5E7EB"
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
          >
            <Box w="90%" display="flex" justifyContent="space-evenly">
              <Image src="/images/Apple.png" />
              <Image src="/images/Nike.png" />
              <Image src="/images/Samsung.png" />
            </Box>

            <Box
              w="90%"
              display="flex"
              justifyContent="space-evenly"
              pt="10rem"
            >
              <Image src="/images/Google.png" />
              <Image src="/images/Adidas.png" />
              <Image src="/images/Amazon.png" />
            </Box>
            {/* <Image ml="4rem" src="/images/Apple.png" />
            <Image ml="4rem" src="/images/Nike.png" />
            <Image ml="4rem" src="/images/Samsung.png" />
            <Image ml="4rem" src="/images/Google.png" />
            <Image ml="4rem" src="/images/Adidas.png" />
            <Image ml="4rem" src="/images/Amazon.png" /> */}
          </Box>
        </Box>
      )}
    </>
  );
};
