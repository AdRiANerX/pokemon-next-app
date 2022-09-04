import axios, { AxiosResponse } from "axios";
import { PokemonListResponse } from "../interfaces";

const options = {
  method: "GET",
  url: "https://pokeapi.co/api/v2/pokemon",
  params: { limit: "151" },
};

export const pokeAPI: Promise<AxiosResponse<PokemonListResponse>> =
  axios.request(options);

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await axios.request({
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${nameOrId}`,
  });

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
