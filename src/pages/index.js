import React, { Fragment } from "react"
import styled from 'styled-components';
const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;




const IndexPage = () => {
  return (
    <IndexWrapper>
      <h1>THIS IS MY GATSBY BOILERPLATE</h1>
      <h3>time to build something 🏗️</h3>

    </IndexWrapper>
  )
}

export default IndexPage
