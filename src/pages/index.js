import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import About from "../components/About";
import Praxis from "../components/Praxis";
import { graphql } from "gatsby";

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
  return (
    <IndexWrapper id="top">
      <Hero hero={home} />
      <Offer offer={home} />
      <About about={home} />
      <Praxis praxis={home} />
    </IndexWrapper>
  );
};

export default IndexPage;

export const homeQuery = graphql`
  {
    seo: datoCmsSite {
      globalSeo {
        fallbackSeo {
          description
          title
        }
      }
    }

    home: datoCmsHome {
      titel
      portrait {
        gatsbyImageData
        alt
      }
      bilderPraxis {
        gatsbyImageData
        alt
      }
      plzOrt
      name
      adresse
      eMail
      telefon
      untertitelAbout
      untertitelAlternativmedizin
      untertitelIntro
      untertitelNaturheilkunde
      untertitelPraxis
      textNaturheilkundeNode {
        childMarkdownRemark {
          html
        }
      }
      textAlternativmedizinNode {
        childMarkdownRemark {
          html
        }
      }
      textAboutNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
