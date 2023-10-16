import React from "react";
import { Avatar, Heading, VStack, Image, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from '../images/IMG_2796.png';

// Introduction message for Full Scereen Section
const greeting = "Hello, I am Jack!";
const bio1 = "Aspiring Software Engineer";
const bio2 = "Specialise in React, Python ";
const Location ="Location: Kuala Lumpur, Malaysian"

// function for getting current age
var currentage = new Date().getFullYear() - 1998;

// // Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const LandingSection = () => (
  <FullScreenSection 
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="rgba(0,0,0,0.4)"
  >    
    <VStack spacing={8} paddingLeft={10} paddingRight={10}>
        <VStack spacing={4}>
          <Avatar src={profilePic} size='2xl' name="Jack Ooi" alt="Profile Picture of Creator"/>
          <Heading size="md">{greeting}</Heading>
        </VStack>

        <VStack spacing={4} paddingBottom={4}>
          <Heading size="2xl">{bio1}</Heading>
          <Heading size="xl">{bio2}</Heading>
          <HStack spacing={4}>  
          <Heading size="sm">{Location}</Heading>
          <Heading size="sm">Age: {currentage}</Heading>
          </HStack>
        </VStack>
    </VStack>    
  </FullScreenSection>
);

export default LandingSection;
