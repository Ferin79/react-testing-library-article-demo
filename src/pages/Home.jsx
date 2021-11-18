import { Flex, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/Header";
import UserCard from "../components/UserCard";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsersInfo = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=50");
      const data = await response.json();
      setUsers(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Flex
      w="100%"
      minH="100vh"
      backgroundImage="linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);"
      justify="center"
      align="center"
    >
      <Flex
        w={["95%", "95%", "50%", "35%"]}
        h="95vh"
        borderRadius="2xl"
        backgroundColor="rgba(255,255,255,0.5)"
        boxShadow="2xl"
        flexDirection="column"
      >
        <Header total={users.length} />

        {!users.length ? (
          <Flex w="100%" h="85vh" justify="center" align="center">
            <Button
              colorScheme="blue"
              onClick={fetchUsersInfo}
              isLoading={isLoading}
            >
              Load My Contacts
            </Button>
          </Flex>
        ) : (
          <Flex
            flexDirection="column"
            p="5"
            h="85vh"
            overflowY="scroll"
            className="data_list"
            mb="3"
          >
            {users.map((item) => {
              return <UserCard user={item} key={item.login.uuid} />;
            })}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Home;
