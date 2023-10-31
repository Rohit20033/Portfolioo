'use client'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {FaBrain,FaDharmachakra,FaRegImages,FaHeadset}from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'
import {FiSmartphone} from "react-icons/fi"

import { motion } from 'framer-motion';
import React from 'react';



const Card = ({ heading, description, icon, href }) => {
  return (
    <chakra.div
      maxW={{ base: 'full', md: '300px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      _hover={{
        bg: useColorModeValue('gray.700', 'gray.900'), 
        // borderRadius: 'full', 
      }}
      h="100%" 
      display="flex"
      flexDirection="column"
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading color={'white'} size="md">
            {heading}
          </Heading>
          <Text color={'gray.500'} mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </chakra.div>
  )
}

export default function GridListWith() {
  return (
    <Box bg={'#0a0a0a'} p={6}>
      <Container maxW={'7xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              heading={'Custom Tailored Solution'}
              icon={<Icon as={FaBrain} w={12} h={12} />}
              description={'Unlock your business full potential with our personalized solution tailored to your unique needs.Elevate effciency and innovation like never before'}
              href={'#'}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              heading={'LLM Fine Tuning'}
              icon={<Icon as={FaDharmachakra} w={10} h={10} />}
              description={'Optimize your AI model with precision .Our LLM fine-tuning expertise enhance performance ensuring  your AI system operate at peek effciency'}
              href={'#'}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              heading={'AI Image Generation'}
              icon={<Icon as={FaRegImages} w={10} h={10} />}
              description={'Experience the power of AI-driven creativity.Our image generation solutions bring your visual  concepts to life with stunning  realism and creativity'}
              href={'#'}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              heading={'AI Chat-Box'}
              icon={<Icon as={FaHeadset} w={10} h={10} />}
              description={'Elevate customer interaction with our  AI chatbox .Deliver expectional  support  and engagement while streamlining operations effortlessely.Power you business with Ai-Chatbox'}
              href={'#'}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              heading={'Web Development'}
              icon={<Icon as={CgWebsite} w={10} h={10} />}
              description={'Crafting digital experience that resonate .Our web development service combine aesthetics  with functionality,ensuring your online presence leaves a lasting impression.'}
              href={'#'}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              heading={'App Development'}
              icon={<Icon as={FiSmartphone} w={10} h={10} />}
              description={'Turn your ideas into powerfull applications.Our app  development team transform your vision into user-friendly ,feature-rich mobile solutions'}
              href={'#'}
            />
          </motion.div>
        </Flex>
      </Container>
    </Box>
  )
}