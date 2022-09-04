import { Container, Text, Image } from "@nextui-org/react";
import React from "react";

const NoFavourites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text size={50}>No hay favoritos</Text>
      <Image
        src="https://c.tenor.com/WUEKqaYhVsUAAAAC/pokemon-sad.gif"
        css={{ opacity: 0.1 }}
        alt="Sin Favoritos"
      />
    </Container>
  );
};

export default NoFavourites;
