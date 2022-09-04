import { FC } from "react";
import { Grid } from "@nextui-org/react";
import FavouritePokemonCard from "./FavouritePokemonCard";

interface Props {
  listOfFavourites: number[];
}

const FavouritesPokemon: FC<Props> = ({ listOfFavourites }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {listOfFavourites.map((id) => (
        <Grid xs={6} md={2} xl={1} key={id}>
          <FavouritePokemonCard id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default FavouritesPokemon;
