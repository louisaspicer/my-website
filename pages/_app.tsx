import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../styled/theme";
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-size: ${theme.typography.size.m};
            line-height: ${theme.typography.lineHeight.m};
            font-family: ${theme.typography.fontFamily};
          }

          li {
            list-style: none;
          }

          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
        `}
      />
      <Head>
        <title>Louisa | Home</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <meta name="title" content="Louisa Spicer: Software Engineer" />
        <meta name="description" content="Portfolio website" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
