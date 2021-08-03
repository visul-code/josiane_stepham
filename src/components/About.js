import styled from "styled-components";
import React from "react";
import Container from "../components/Container";
import { mediaQueries } from "../utils/MediaQuerie";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutWrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};

  padding-bottom: 10rem;
  padding-top: 10rem;
  ${mediaQueries.lessThan("tablet")`
  padding-bottom: 5rem;
  padding-top: 5rem;
`}

  section {
    flex-direction: row;
    ${mediaQueries.lessThan("tablet")`
flex-direction: column;
`}
  }

  .t-container {
    flex: 1;

    h1 {
      color: ${({ theme }) => theme.colors.textAlt};
    }
  }
  .t-paragraph {
    color: ${({ theme }) => theme.colors.textAlt};
  }
  .content {
    color: ${({ theme }) => theme.colors.textAlt};
    flex: 1;
    margin-left: 6rem;
    ${mediaQueries.lessThan("tablet")`
margin-left: 0;
`}

    .paragraph {
      color: ${({ theme }) => theme.colors.textAlt};
    }
  }
`;

const About = ({ about }) => {
  console.log(about);
  const image = getImage(about.portrait.gatsbyImageData);

  return (
    <AboutWrapper id="uebermich">
      <Container>
        <div className="t-container">
          <h1>Über mich</h1>
          <p className="t-paragraph">{about.untertitelAbout}</p>
          <GatsbyImage image={image} alt={about.portrait.alt} />
        </div>
        <div
          className="content paragraph"
          dangerouslySetInnerHTML={{
            __html: about.textAboutNode.childMarkdownRemark.html,
          }}
        ></div>
      </Container>
    </AboutWrapper>
  );
};

export default About;
