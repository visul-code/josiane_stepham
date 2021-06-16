import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import About from "../components/About";
import Praxis from "../components/Praxis";
import { graphql } from "gatsby";
import Lottie from "react-lottie";
import * as animationData from "../animation/hero.json";

const IndexWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  .placeholder {
    height: 100vh;
  }
`;

const IndexPage = ({ data: { home } }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <IndexWrapper id="top">
      <Hero />
      <Offer />
      <About about={home} />
      <Praxis praxis={home} />
    </IndexWrapper>
  );
};

export default IndexPage;

export const homeQuery = graphql`
  {
    home: datoCmsHome {
      portrait {
        gatsbyImageData
        alt
      }

      bilderPraxis {
        gatsbyImageData
        alt
      }
    }
  }
`;
