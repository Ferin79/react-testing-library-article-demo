import { Flex, Avatar, Text } from "@chakra-ui/react";
import React from "react";

const UserCard = ({ user }) => {
  return (
    <Flex
      w="100%"
      bg="white"
      boxShadow="xl"
      my="3"
      p="5"
      borderRadius="2xl"
      justify="space-evenly"
      align="center"
    >
      <Flex width="25%" justify="center" align="center">
        <Avatar
          size="lg"
          name={user.name.first + " " + user.name.last}
          src={user.picture.large}
        />
      </Flex>
      <Flex width="75%" flexDirection="column">
        <Text fontSize="xl" fontWeight="bold">
          {user.name.first + " " + user.name.last}
        </Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
      </Flex>
    </Flex>
  );
};

export default UserCard;
