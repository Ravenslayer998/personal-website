import React from "react";
import {Box, Flex} from "@chakra-ui/react";

function getCurrentYear(){
  const currentDate = new Date();
  return currentDate.getFullYear();

}

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Jack • © {getCurrentYear()}</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
