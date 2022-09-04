import React, { useState } from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Layout } from "../../../components/layouts";
import { Pokemon, SmallPokemon } from "../../../interfaces";
import { getPokemonInfo, pokeAPI } from "../../../api";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { isPokemonFavourite, toogleFavourite } from "../../../utils";
import confetti from "canvas-confetti";

interface Props {
  pokemon: Pokemon;
}

const PokemonPageByName: NextPage<Props> = ({ pokemon }: Props) => {
  const [isFavourite, setIsFavourite] = useState(
    isPokemonFavourite(pokemon.id)
  );

  const onToggleFavourite = () => {
    toogleFavourite(pokemon.id);
    setIsFavourite(!isFavourite);
    if (!isFavourite) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={5}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h2 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button color="gradient" ghost onPress={onToggleFavourite}>
                {isFavourite ? "Eliminar de favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  const allPokemons: SmallPokemon[] = [];
  await pokeAPI
    .then(function (response) {
      response.data.results.forEach((poke, i) => {
        let index = i + 1;
        allPokemons.push({
          ...poke,
          id: index.toString(),
        });
      });
    })
    .catch(function (error) {
      console.error(error);
    });

  return {
    paths: allPokemons.map((poke) => ({
      params: { name: poke.name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string };
  let thisPokemon = {};
  await getPokemonInfo(name).then((pokemon) => {
    thisPokemon = pokemon;
  });

  return {
    props: {
      pokemon: thisPokemon,
    },
  };
};

export default PokemonPageByName;
