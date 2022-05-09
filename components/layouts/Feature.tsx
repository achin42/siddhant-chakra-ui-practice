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

export const Feature = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  
  
  return (
   <> 
  {!isMobile?  
  <Box w="100%" h="80rem" display="flex" justifyContent="center">
      <Box w={{lg:"40%",md:"60%",sm:"80%"}}  h="60rem" mt="10rem">
        <Box w="100%" h="30rem" display="flex">
          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="./images/firstImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Image pl="1rem" src="./images/leftarrow.png" />
            </Box>
          </Box>

          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="./images/secondImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Image pl="1rem" src="./images/leftarrow.png" />
            </Box>
          </Box>
        </Box>

        <Box w="100%" h="30rem" display="flex" mt="10rem">
          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="./images/exerciseImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Image pl="1rem" src="./images/leftarrow.png" />
            </Box>
          </Box>

          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="./images/cloudImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Image pl="1rem" src="./images/leftarrow.png" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>:
      <Box w="100%" h="130rem" display="flex"  flexDirection="column">
           <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            pt="15rem"
          >
            <Image src="./images/firstImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Image pl="1rem" src="./images/leftarrow.png" />
            </Box>
          </Box>

          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            pt="15rem"
          >
            <Image src="./images/secondImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Image pl="1rem" src="./images/leftarrow.png" />
            </Box>
          </Box>

          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            pt="15rem"
          >
            <Image src="./images/exerciseImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Image pl="1rem" src="./images/leftarrow.png" />
            </Box>
          </Box>

          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            pt="15rem"
          >
            <Image src="./images/cloudImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Image pl="1rem" src="./images/leftarrow.png" />
            </Box>
          </Box>
          
      </Box>}
    </>
  );
};
