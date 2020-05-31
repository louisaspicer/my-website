import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { PageLayout } from "../components/PageLayout";
import { theme } from "../styled/theme";
import { Heading } from "../components/Heading";

export default function Home() {
  return (
    <>
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

            * {
              box-sizing: border-box;
            }
          `}
        />
        <PageLayout title="Home">
          <Heading as="h1">Hello!</Heading>
        </PageLayout>
      </ThemeProvider>
    </>
  );
}
