import type { NextPage } from "next";
import Head from "next/head";
import {
  VStack,
  StackDivider,
  Heading,
  Container,
  Box,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  const shutdownHandler = async () => {
    await fetch("/api/control", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "shutdown" }),
    }).then((response) => {
      console.log(response);
    });
  };

  const restartHandler = async () => {
    await fetch("/api/control", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "restart" }),
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Container maxW="container.md">
      <Head>
        <title>Backup Server Controls</title>
        <meta
          name="description"
          content="Shutdown or restart your backup server"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
        <Box>
          <Heading>Backup Server Controls</Heading>
        </Box>
        <Box>
          <ButtonGroup>
            <Button onClick={shutdownHandler} colorScheme={"red"}>
              Shutdown
            </Button>
            <Button onClick={restartHandler} colorScheme={"yellow"}>
              Restart
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
