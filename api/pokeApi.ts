import axios, { AxiosResponse } from "axios";
import { Pokemon, PokemonListResponse } from "../interfaces";

const options = {
  method: "GET",
  url: "https://pokeapi.co/api/v2/pokemon",
  params: { limit: "151" },
};

export const pokeAPI: Promise<AxiosResponse<PokemonListResponse>> =
  axios.request(options);

export const getPokeById = (id: string): Promise<AxiosResponse<Pokemon>> => {
  return axios.request({
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  });
};
