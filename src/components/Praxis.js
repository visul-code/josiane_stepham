import styled from "styled-components";
import React from "react";
import Container from "../components/Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PraxisWrapper = styled.div`
  width: 100%;
  padding: 20rem 0;

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
`;

const Praxis = ({ praxis, ...props }) => {
  console.log(props);
  return (
    <PraxisWrapper id="praxis">
      <Container>
        <div className="t-container">
          <h1>Praxis</h1>
          <p className="t-paragraph">
            Ein Blindtext sollte möglichst viele verschiedene Buchstaben
            enthalten und in der Originalsprache gesetzt sein.
          </p>
        </div>
        <div className="content">
          <address>
            <span id="name">Josiane Stepham</span>
            <br />
            Chapfwiesenstrasse 12 <br />
            8712 Stäfa <br />
            <a href="tel:+4100000000">000 000 00 00</a> <br />
            <a href="mailto:js@josiane-stepham.ch">js@josiane-stepham.ch</a>
          </address>
        </div>
      </Container>
    </PraxisWrapper>
  );
};

export default Praxis;
