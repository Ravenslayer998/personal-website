import { Heading, HStack, Image, Text, VStack, Button, Divider} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, imageSrc, url}) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

return(
  <div >
    <a href= {url}><Image src={imageSrc} /></a>
    <Heading>{title}</Heading>
    <Text>{description}</Text>
    <Divider/>
  </div>
  );
};

export default Card;
