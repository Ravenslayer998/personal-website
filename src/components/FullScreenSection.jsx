import * as React from "react";
import { VStack } from "@chakra-ui/react";
import Green_background from "../images/IMG_5160.png"

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      backgroundImage={Green_background}
    >
      <VStack maxWidth="auto" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
