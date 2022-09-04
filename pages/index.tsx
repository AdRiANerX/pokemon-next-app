import type { GetStaticProps, NextPage } from "next";
import { Grid } from "@nextui-org/react";
import { pokeAPI } from "../api";
import { Layout } from "../components/layouts";
import { SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }: Props) => {
  return (
    <Layout title="Lista de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data: SmallPokemon[] = [];
  await pokeAPI
    .then(function (response) {
      response.data.results.forEach((poke, i) => {
        let index = i + 1;
        data.push({
          ...poke,
          id: index.toString(),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`,
        });
      });
    })
    .catch(function (error) {
      console.error(error);
    });

  return {
    props: {
      pokemons: data,
    },
  };
};

export default Home;
