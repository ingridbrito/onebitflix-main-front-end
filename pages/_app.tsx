import "../styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

//depois quando formos iniciar o backend, nós vamos parar esse servidor, pois o backend vai rodar sempre na porta 3000, e se você iniciar apenas o front, ele vai pegar a porta 3000. Então vamos parar o front, rodar o back e depois rodar o front de novo, para ficar na parta 3001.