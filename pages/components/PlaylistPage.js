import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import Layout from "./Layout";

export default function Component(props) {
  const buttonProps = [
    [
      "SPOTIFY",
      "/img/spotify.png",
      "https://open.spotify.com/playlist/44maE5rXx5wT9qFntoW88V?si=IAM1lnCSS1yMdeqatbHCyQ",
    ],
    [
      "APPLE MUSIC",
      "/img/apple.png",
      "https://music.apple.com/ie/playlist/izems-100-best-caetano-veloso-songs/pl.u-KVXBk16s2meyKA",
    ],
    // [
    //   "BANDCAMP",
    //   "/img/bandcamp-small.png",
    //   "https://buffer.com/resources/facebook-instagram-stories-ads/",
    // ],
    [
      "YOUTUBE",
      "/img/youtube-small.png",
      "https://www.youtube.com/playlist?list=PLyQdDVZR1ieZ7DnhWzht-gxYRbRh3jGY5",
    ],
    // [
    //   "DEEZER",
    //   "/img/deezer-small.png",
    //   "https://www.deezer.com/fr/album/166378242",
    // ],
  ];

  return (
    <Layout title={"iZem's favourite 100 Caetano Veloso Songs"}>
      <Container>
        <div className="picture-container">
          <img src="/img/caetanocover.png" className="release-picture" />
        </div>
        {/* <h2>iZem's</h2>
        <h1>100 BEST CAETANO VELOSO SONGS</h1> */}

        <div className="streaming-buttons">
          {buttonProps.map((buttonProps) => (
            <LinkButton
              streamingService={buttonProps[0]}
              streamingServiceLogo={buttonProps[1]}
              streamingServiceLink={buttonProps[2]}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  h1,
  h2 {
    color: white;

    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
    max-width: 95%;
  }
  h1 {
    font-family: benton-black;
    font-size: 1.2rem;
    line-height: 130%;

    margin-bottom: 1rem;
  }
  h2 {
    margin-top: 1rem;
    font-size: 1rem;
    font-family: benton-regular;
    margin-bottom: 0.5rem;
  }
  width: 100%;
  height: 100vh;
  @media (max-height: 640px) {
    height: 100%;
    padding-top: 2rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  .picture-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .release-picture {
    height: 30rem;
    width: 30rem;
    border: 0.2px solid white;
    max-width: 100%;
    object-fit: cover;
    @media (max-height: 640px) {
      height: 18rem;
      width: 18rem;
    }
  }
`;
