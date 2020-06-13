import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { PageLayout } from "../components/PageLayout";
import { theme } from "../styled/theme";
import { Heading } from "../components/Heading";
import styled from "../styled";
import Head from "next/head";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 800px;
`;

export default function Home() {
  return (
    <PageLayout title="Home">
      <Content>
        <Heading as="h1" align="center" margin="0 0 m 0">
          👋
        </Heading>
        <p>
          Hello, I'm Louisa. I'm a Software Engineer based in London. In 2016, I
          Before learning to code at Makers Academy, I studied Film at
          university and worked as a Digital Producer. I'm now a Software
          Engineer at Echo by Lloyds Pharmacy, helping to simplify phamarcy and
          improve medical adherance through tech.
        </p>
      </Content>
    </PageLayout>
  );
}
