'use client'
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon
} from '@chakra-ui/react';
import { GoChevronRight } from 'react-icons/go';
import { GrContactInfo } from 'react-icons/gr';
import Partners from './partners/page';
import HeroSection from './components/Hero';
import GridListWith from './services/page';
import Projects from './projects/page';

export default function Home() {
  return (
   <>
    <HeroSection/>
    <Partners/>
    <GridListWith/>
    <Projects/>
    
   </>
);
};


 
     

