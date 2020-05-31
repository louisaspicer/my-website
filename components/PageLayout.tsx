import Head from "next/head";
import styled from "@emotion/styled";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Head>
        <title>Louisa | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>{children}</Main>
      <Footer>Created by Louisa Spicer</Footer>
    </Container>
  );
};
