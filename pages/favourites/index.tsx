import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import FavouritesPokemon from "../../components/pokemon/FavouritesPokemon";
import NoFavourites from "../../components/ui/NoFavourites";
import { geFavouritetPokemons } from "../../utils";

const FavouritesPage = () => {
  const [favouritePokemons, setFavouritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavouritePokemons(geFavouritetPokemons());
  }, []);

  return (
    <Layout title="Pagina de favoritos">
      {favouritePokemons.length === 0 ? (
        <NoFavourites />
      ) : (
        <FavouritesPokemon listOfFavourites={favouritePokemons} />
      )}
    </Layout>
  );
};

export default FavouritesPage;
