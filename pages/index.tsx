import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { PageLayout } from "../components/PageLayout";
import { theme } from "../styled/theme";
import { Heading } from "../components/Heading";
import styled from "../styled";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 800px;
`;

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
        <PageLayout title="Home">
          <Content>
            <Heading as="h1" align="center">
              Hello!
            </Heading>
          </Content>
        </PageLayout>
      </ThemeProvider>
    </>
  );
}
