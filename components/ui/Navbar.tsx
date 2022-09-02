import Image from "next/image";
import { Spacer, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray800.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        width={70}
        height={70}
        alt="Icono de app"
      />
      <Link href="/">
        <Text color="white" h3>
          Pokemon
        </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favourites">
        <Text color="white" h3>
          Favoritos
        </Text>
      </Link>
    </div>
  );
};
