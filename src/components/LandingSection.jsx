import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import img from '../images/IMG_2796.png'


const greeting = "Hello, I am Jack!";
const bio1 = "Aspiring Software Engineer";
const bio2 = "Specialise in React, Python ";
const bio3 ="Malaysian"
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#000134"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src={img} size='2xl' name="Jack Ooi" alt="Profile Picture of Creator"/>
        <Heading size="md" >{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
        <Heading size="sm">{bio3}</Heading>
      </VStack>  
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
