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
  chakra
} from "@chakra-ui/react";


 
export const Classes = () => {

    const [isMobile] = useMediaQuery("(max-width: 600px)");

    const ContentWrapper = chakra('div', {
            baseStyle:{
                w:"100%",
                h:{lg:"50rem",md:"75rem",sm:"77rem"},
                display:"flex",
                justifyContent:"center"
            },
    });

    const ContentMobileWrapper = chakra('div',{
        baseStyle:{
            w:"100%",
            h:"80rem",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
    })

    const Section = chakra('div', {
        baseStyle:{  
            w:{lg:"45%",md:"70%"},
            h:{lg:"40rem",md:"55rem"},
            bg:"#F9FAFB",
            display:"flex",
            justifyContent:"center"
        },
    });

    const SectionMobile = chakra('div',{
        baseStyle:{  
            w:"90%",
            h:"65rem",
            bg:"#F9FAFB",
            display:"flex",
        },
    })

    const TextWrapper =chakra('div',{
        baseStyle:{  
            w:{lg:"50%",md:"60%"},
            h:"30rem"
        }
    });

    const TextMobileWrapper =chakra('div',{
        baseStyle:{  
            w:"100%",
            h:"30rem",
            mt:"3rem",
         
        }
    });

    const HeadlineText= chakra('div',{
        baseStyle:{  
            fontFamily:'Castoro',
            fontWeight:'normal',
            fontSize:'25.74px',
            lineHeight:'32.18px',
            pl:'13rem',
            pt:'5rem',
            pb:'5rem'
        } 
    })

    const HeadlineMobileText= chakra('div',{
        baseStyle:{  
            fontFamily:'Castoro',
            fontWeight:'normal',
            fontSize:'25.74px',
            lineHeight:'32.18px',
            textAlign:'center'
        } 
    })

    

    const SimpleText = chakra('div',{
        baseStyle:{  
            fontFamily:'Loto',
            fontWeight:'normal',
            fontSize:'14px',
            lineHeight:'24px',
            pl:'12.8rem'
            
            
        } 
    });

    const SimpleMobileText = chakra('div',{
        baseStyle:{  
            fontFamily:'Loto',
            fontWeight:'normal',
            fontSize:'14px',
            lineHeight:'24px',
            pl:'10rem',
        } 
    });

    const ImageSection= chakra('div',{
        
        baseStyle:{  
            w:"50%",
            h:"30rem",
            
        }
          
    });

    const LearnMoreText = chakra('div',{
        baseStyle:{  
            fontFamily:'Loto',
            fontWeight:'medium',
            fontSize:'15.67px',
            lineHeight:'23.11px',
            pl:'13rem',
            pt:'2rem'
        }
    })

    const LearnMoreMobileText = chakra('div',{
        baseStyle:{  
            fontFamily:'Loto',
            fontWeight:'medium',
            fontSize:'15.67px',
            lineHeight:'23.11px',
            pl:'10rem',
            pt:'2rem'
        }
    })

   

    return (
      <>
        {!isMobile?<ContentWrapper>
             <Section>
                 <TextWrapper >
                      <HeadlineText>Try new classes</HeadlineText>
                      
                      <SimpleText>This is a template Figma file,</SimpleText>
                      <SimpleText>turned into code using Anima.</SimpleText>
                      <SimpleText>Learn more at AnimaApp.com</SimpleText>
                      <LearnMoreText>Learn More</LearnMoreText>
                      <Image ml='11.3rem' src="/images/Download cta.png" />
                 </TextWrapper>
                 <ImageSection>
                      <Image src="./images/iPhone 13.png"/>
                </ImageSection>
             </Section>
            

        </ContentWrapper>:
         (
            <ContentMobileWrapper>
                <SectionMobile>
                  <TextMobileWrapper >
                      <HeadlineMobileText>Try new classes</HeadlineMobileText>
                      
                      <SimpleMobileText>This is a template Figma file,</SimpleMobileText>
                      <SimpleMobileText>turned into code using Anima.</SimpleMobileText>
                      <SimpleMobileText>Learn more at AnimaApp.com</SimpleMobileText>
                      <LearnMoreMobileText>Learn More</LearnMoreMobileText>
                      <Image ml="8rem"  src="/images/Download cta.png" />
                     
                       <Image  src="./images/iPhone 13.png"/>
                     
                 </TextMobileWrapper>
                </SectionMobile>  
            </ContentMobileWrapper>
         )
        }
        </>
    )
}