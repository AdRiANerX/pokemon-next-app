import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  title?: string;
  children: JSX.Element;
};
export const Layout: FC<Props> = ({ children, title }) => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="AdRiANerX" />
        <meta name="description" content="Pokedex" />
        <meta name="keywords" content="XXX pokemon, pokedex" />

        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={`Descripción e imagenes de ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/pokemon.jpg`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
