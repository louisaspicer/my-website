import Head from "next/head";
import Link from "next/link";

import styled from "@emotion/styled";
import withMargin from "../styled/withMargin";
import { Heading } from "./Heading";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    160deg,
    #c9d3dc 20%,
    #f4f4f4 calc(20% + 1px)
  );

  @media screen and (min-width: 1100px) {
    background-image: linear-gradient(
      160deg,
      #c9d3dc 25%,
      #f4f4f4 calc(25% + 1px)
    );
  }
`;

const Main = styled.main`
  display: flex;
  flex: 1;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
  height: 8rem;
  width: 8rem;
  border-radius: 9999px;
  ${withMargin}
`;

const Navigation = styled.nav`
  ${withMargin}
`;

const Links = styled.ul`
  display: flex;
  flex-direction: row;
`;

const LinkItem = styled.li`
  ${withMargin}
`;

const SocialIcon = styled.img`
  height: 2rem;
  width: 2rem;
  ${withMargin}
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
        <meta name="title" content="Louisa Spicer: Software Engineer" />
        <meta name="description" content="Portfolio website" />
      </Head>
      <Header>
        <ProfileImg
          margin="l 0 m 0"
          src="/images/profile.jpg"
          alt="Profile Picture"
        />
        <Navigation margin="0 0 l 0">
          <Links>
            <LinkItem margin="0 m 0 0">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </LinkItem>
          </Links>
        </Navigation>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <a
          href="https://www.linkedin.com/in/louisa-spicer-b7037261/"
          target="_blank"
        >
          <SocialIcon src="/images/linkedin.png" margin="0 m 0 0" />
        </a>
        <a href="https://twitter.com/louisaspicer" target="_blank">
          <SocialIcon src="/images/twitter.png" />
        </a>
      </Footer>
    </Container>
  );
};
