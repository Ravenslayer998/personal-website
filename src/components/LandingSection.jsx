import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from '../images/IMG_2796.png';
import  background from "../images/IMG_6841.heic";

// Introduction message for Full Scereen Section
const greeting = "Hello, I am Jack!";
const bio1 = "Aspiring Software Engineer";
const bio2 = "Specialise in React, Python ";
const bio3 ="Location: Malaysian"

function BackdropFilters() {
  const outerBoxStyles = {
    boxSize: '250px',
    p: '10',
    img:{background},
  }
}

//Create Box section for contrast
const innerBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  boxSize: 'full',
  color: 'white',
  textShadow: '0 0 20px black',
  fontWeight: 'bold',
  fontSize: '20px',
}

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
        <Avatar src={profilePic} size='2lg' name="Jack Ooi" alt="Profile Picture of Creator"/>
        <Heading size="lg" >{greeting}</Heading>
      </VStack>
      <VStack spacing={4}>
        <Heading size="2xl">{bio1}</Heading>
        <Heading size="xl">{bio2}</Heading>
        <Heading size="sm">{bio3}</Heading>
      </VStack>  
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
