import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  title?: string;
  children: JSX.Element;
};
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="AdRiANerX" />
        <meta name="description" content="Pokedex" />
        <meta name="keywords" content="XXX pokemon, pokedex" />
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
