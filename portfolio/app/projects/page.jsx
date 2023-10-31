'use client'

import { Box, Center, Heading, Image, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { motion } from 'framer-motion';

let data = [
    { img:"https://res.cloudinary.com/rangle/image/upload/v1675728295/samd_motion_doctor.gif", title: "Saascing", disc: "Lorem ipsum dolor sit amet catetur, adipisicing elit" },
    { img:"https://res.cloudinary.com/rangle/image/upload/v1675728295/samd_motion_doctor.gif",title: "Saascing", disc: "Lorem ipsum dolor sit amet catetur, adipisicing elit" },
    { img:"https://res.cloudinary.com/rangle/image/upload/v1675728295/samd_motion_doctor.gif",title: "Saascing", disc: "Lorem ipsum dolor sit amet catetur, adipisicing elit" },
    { img:"https://res.cloudinary.com/rangle/image/upload/v1675728295/samd_motion_doctor.gif",title: "Saascing", disc: "Lorem ipsum dolor sit amet catetur, adipisicing elit" },
    { img:"https://res.cloudinary.com/rangle/image/upload/v1675728295/samd_motion_doctor.gif",title: "Saascing", disc: "Lorem ipsum dolor sit amet catetur, adipisicing elit" },
    { img:"https://res.cloudinary.com/rangle/image/upload/v1675728295/samd_motion_doctor.gif",title: "Saascing", disc: "Lorem ipsum dolor sit amet catetur, adipisicing elit" }
  ];

function Projects() {
    const containerVariants = {
        initial: {
          opacity: 0,
          x: -100,
          scale: 0.8,
          rotate: -15,
          transition: { duration: 0.5, type: "spring", stiffness: 120, damping: 10 },
        },
        animate: {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          transition: { duration: 0.5, type: "spring", stiffness: 120, damping: 10 },
        },
        exit: {
          opacity: 0,
          x: 100,
          scale: 0.8,
          rotate: 15,
          transition: { duration: 0.5, type: "spring", stiffness: 120, damping: 10 },
        },
        hover: {
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3, type: "spring", stiffness: 200, damping: 10 },
        },
      };
      
  return (
    <>
    <Text>
        Latest Work
    </Text>
     <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SimpleGrid paddingTop={"50px"} bg={"#0a0a0a"} columns={[1, 2, 3]} gap={"20px"}>
        {data.map((ele) => (
          <Center key={ele.title} py={12}>
            <motion.div
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            >
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={'#0a0a0a'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  pos={'relative'}
                  height={'230px'}
                  zIndex={-1}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={ele.img}
                    alt="Project Image"
                  />
                </Box>
                <Stack pt={5} align={'center'}>
                  <Heading color={"white"} fontSize={'2xl'} fontWeight={500}>
                    {ele.title}
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      {ele.disc}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </motion.div>
          </Center>
        ))}
      </SimpleGrid>
    </motion.div>
    </>
  )
}

export default Projects