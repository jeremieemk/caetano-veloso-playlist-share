import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import PlaylistPage from "./components/PlaylistPage";
import Layout from "./components/Layout";

export default function Index() {
  return (
    <Layout>
      <PlaylistPage />
    </Layout>
  );
}

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Cerebris-Sans;
  src: url("fonts/cerebris/CerebriSans-Regular.ttf");
  };
  @font-face {
  font-family: apercu;
  src: url("fonts/apercu/apercu-pro-mono.otf");
  };
  @font-face {
  font-family: apercu-bold;
  src: url("fonts/apercu/bold.otf");
  };
  body {
    margin: 0;
    background: black;
    font-family: taki;
    width: 100%;
    margin: 0px;
  }
`;
