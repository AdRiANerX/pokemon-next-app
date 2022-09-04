import { Card, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  id: number;
}
const FavouritePokemonCard = ({ id }: Props) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Card isHoverable isPressable onPress={onClick}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt=""
        width="100%"
        height={200}
        css={{ padding: " 10px" }}
      />
    </Card>
  );
};

export default FavouritePokemonCard;
