import styled from "styled-components";
import React from "react";
import Container from "../components/Container";
import HeroArt from "../images/hero.svg";
import { mediaQueries } from "../utils/MediaQuerie";

const HeroWrapper = styled.div`
  width: 100%;
  margin-bottom: 10rem;

  section {
    flex-direction: row;

    ${mediaQueries.lessThan("tablet")`

flex-direction: column-reverse;


`}
  }

  .svg-wrapper {
    flex: 1;

    svg {
      width: 100%;
    }
  }
  .t-container {
    flex: 1;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Container>
        <div className="svg-wrapper">
          <HeroArt />
        </div>
        <div className="t-container">
          <h1>
            Mit dem Blick <br />
            für Menschen
          </h1>
          <p className="t-paragraph">
            Ein Blindtext bietet mir wichtige Informationen. An ihm messe ich
            die Lesbarkeit einer Schrift, ihre Anmutung, wie harmonisch die
            Figuren zueinander stehen und prüfe, wie breit oder schmal sie
            läuft. Ein Blindtext sollte möglichst viele verschiedene Buchstaben
            enthalten und in der Originalsprache gesetzt sein.
          </p>
        </div>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
