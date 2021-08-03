import styled from "styled-components";
import React from "react";
import Container from "../components/Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { mediaQueries } from "../utils/MediaQuerie";

const PraxisWrapper = styled.div`
  width: 100%;
  padding-bottom: 10rem;
  padding-top: 10rem;

  ${mediaQueries.lessThan("tablet")`

padding-bottom: 5rem;
  padding-top: 5rem;

`}

  section {
    flex-direction: column;
  }

  .svg-wrapper {
    flex: 1;

    svg {
      width: 100%;
      height: auto;
    }
  }
  .t-container {
    flex: 1;
  }

  .content {
    flex: 1;
  }

  address {
    a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: underline red 2px;
      text-underline-offset: 4px;
    }
    #name {
      font-weight: 500;
    }
    font-weight: 300;
    font-size: 3rem;
    font-style: normal;
  }

  .image-container {
    margin: 10rem 0;
    display: flex;
    justify-content: space-around;
    ${mediaQueries.lessThan("tablet")`
flex-direction: column;

`};
  }
`;

const Praxis = ({ praxis, ...props }) => {
  console.log(praxis);
  return (
    <PraxisWrapper id="praxis">
      <Container>
        <div className="t-container">
          <h1>Praxis</h1>
          <p className="t-paragraph">{praxis.untertitelPraxis}</p>
        </div>
        <div className="content">
          <address>
            <span id="name">{praxis.name}</span>
            <br />
            {praxis.adresse}
            <br />
            {praxis.plzOrt}
            <br />
            {praxis.telefon}
            <br />

            <a href={`mailto:${praxis.eMail}`}>{praxis.eMail}</a>
          </address>
        </div>
      </Container>
      <div className="image-container">
        {praxis.bilderPraxis.map((e, index) => {
          const image = getImage(e);
          return <GatsbyImage key={index} image={image} alt={e.alt} />;
        })}
      </div>
    </PraxisWrapper>
  );
};

export default Praxis;
