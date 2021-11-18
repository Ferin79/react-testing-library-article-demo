import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Header = ({ total = 0 }) => {
  return (
    <Flex
      w="100%"
      h="10vh"
      background="rgba(255,255,255,0.5)"
      borderTopRadius="2xl"
      px="6"
      justify="center"
      flexDirection="column"
    >
      <Heading fontSize="2xl">My Contacts</Heading>
      <Text color="green.500" fontWeight="semi-bold" data-testid="total-id">
        {total} {total > 1 ? "Contacts" : "Contact"}
      </Text>
    </Flex>
  );
};

export default Header;
