import styled from "styled-components";
import React from "react";
import Container from "../components/Container";

import { mediaQueries } from "../utils/MediaQuerie";
import Lottie from "react-lottie";
import * as animationData from "../animation/hero.json";
import { useInView } from "react-intersection-observer";

const HeroWrapper = styled.div`
  width: 100%;
  padding-bottom: 10rem;
  padding-top: 10rem;

  ${mediaQueries.lessThan("tablet")`
  padding-bottom: 5rem;
  padding-top: 5rem;
`}

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

const Hero = ({ hero }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <HeroWrapper>
      <Container>
        <div ref={ref} className="svg-wrapper">
          {/*      <HeroArt /> */}
          <Lottie
            isStopped={!inView}
            /*          isStopped={!inView}
            isClickToPauseDisabled={true} */
            options={defaultOptions}
          />
        </div>
        <div className="t-container">
          <h1>{hero.titel}</h1>
          <p className="t-paragraph">{hero.untertitelIntro}</p>
        </div>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
