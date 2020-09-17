import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import Layout from "./Layout";

export default function Component(props) {
  const buttonProps = [
    [
      "SPOTIFY",
      "/img/spotify.png",
      "https://open.spotify.com/track/5GXDGIDBKExQB53nfWcBaz?si=u3pG2CDNQXuSDR2y_3VU3A",
    ],
    [
      "APPLE MUSIC",
      "/img/apple.png",
      "https://music.apple.com/us/album/llamameya-single/1527268347",
    ],
    // [
    //   "BANDCAMP",
    //   "/img/bandcamp-small.png",
    //   "https://buffer.com/resources/facebook-instagram-stories-ads/",
    // ],
    [
      "YOUTUBE",
      "/img/youtube-small.png",
      "https://www.youtube.com/watch?v=ZU9KGwSrkOggit add .",
    ],
    [
      "DEEZER",
      "/img/deezer-small.png",
      "https://www.deezer.com/fr/album/166378242",
    ],
  ];

  return (
    <Layout title={"iZem's favourite 100 Caetano Veloso Songs"}>
      <Container>
        <div className="picture-container">
          <img src="" alt="" />
        </div>
        <h1>iZem's</h1>
        <h2>100 BEST CAETANO VELOSO SONGS</h2>

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
    font-family: taki;
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
    max-width: 95%;
  }
  h1 {
    font-size: 2rem;
    letter-spacing: 7px;
    margin-top: 2rem;
  }
  h2 {
    font-size: 1.3rem;
    font-family: apercu;
    margin-bottom: 2rem;
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
  }
  img {
    height: 30rem;
    width: 30rem;
    max-width: 100%;
    object-fit: cover;
    border-radius: 5px;
    @media (max-height: 640px) {
      height: 18rem;
      width: 18rem;
    }
  }
`;
