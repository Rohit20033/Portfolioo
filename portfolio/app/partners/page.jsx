'use client'

import React from 'react'
import { Box, Image, SimpleGrid, Text , Link as ChakraLink} from '@chakra-ui/react'
import Link from 'next/link';
import { motion } from 'framer-motion';
let data = [
    { name: "Saascing", link: "https://saaspricing.org/" },
    { name: "Airwalker", link: "https://unicornplatform.com/domain-not-supported/?domain=airwalker.co" },
    { name: "SketchifyAI", link: "https://sketchifyai.com/" },
    { name: "Let's Cruise", link: "https://sketchifyai.com/" },
    { name: "Yaylo", link: "https://yaylo.in/" }
  ];
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.5, 
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5, 
        ease: "easeOut", 
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.5, 
    },
    hover: {
        scale: 1.2,
      },
  };
  
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
    },
    
  }
  

function Partners() {
  return (
   <>
       <SimpleGrid  margin={"auto"}  paddingTop="50px" paddingLeft={"50px"} paddingRight={"50px"} justifyContent={"space-evenly"} bg="#0a0a0a" columns={[1, 2, 5]} gap="10px">
      {data.map((partner, index) => (
        <Link href={partner.link} key={partner.name}>
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
           <Text
           
            fontSize="20px"
            color="white"
            p="20px"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(500, 0, 0, 0.3) 0px 30px 60px -30px, rgba(100, 37, 64, 0.35) 0px -2px 6px 0px inset"
            m="10px"
            variants={itemVariants}
            whileHover="hover"
            >
            {partner.name}
            </Text>
          </motion.div>
        </Link>
      ))}
    </SimpleGrid>
   </>
  )
}

export default Partners