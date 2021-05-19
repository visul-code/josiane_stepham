import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import About from "../components/About";
const IndexWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  .placeholder {
    height: 100vh;
  }
`;

const IndexPage = () => {
  return (
    <IndexWrapper>
      <Hero />
      <Offer />
      <About />
      <div className="placeholder"></div>
    </IndexWrapper>
  );
};

export default IndexPage;
