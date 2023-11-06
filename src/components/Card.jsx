import { Heading, HStack, Image, Text, VStack, Button, Divider} from "@chakra-ui/react";
import React from "react";


// OnClick function for Car
const Card = ({ title, description, imageSrc, url}) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

return(
  <div>
    <a href= {url}><Image src={imageSrc} /></a>
    <Heading
    textAlign="center"
    >
      {title}
    </Heading>
    
    <Text 
    textAlign="center"
    >
      {description}
    </Text>
  </div>
  );
};

export default Card;
