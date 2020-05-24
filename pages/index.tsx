import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { PageLayout } from "../components/PageLayout";

const H1 = styled.h1`
  color: hotpink;
`;

export default function Home() {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <PageLayout title="Home">
        <H1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </H1>
      </PageLayout>
    </>
  );
}
