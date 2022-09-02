import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { getPokeById } from "../../api";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }: Props) => {
  console.log("🚀 ~ file: [id].tsx ~ line 13 ~ pokemon", pokemon);
  const router = useRouter();
  return (
    <Layout title="Pagina del pokemon XXX">
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
              <Button color="gradient" ghost>
                Guardar en favoritos
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
  const allPokemons = [
    ...Array(151)
      .fill(0)
      .map((val, i) => `${i + 1}`),
  ];

  return {
    paths: allPokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };
  let thisPokemon: Pokemon = {} as Pokemon;
  await getPokeById(id).then((resp) => {
    thisPokemon = resp.data;
  });

  return {
    props: {
      pokemon: thisPokemon,
    },
  };
};

export default PokemonPage;
