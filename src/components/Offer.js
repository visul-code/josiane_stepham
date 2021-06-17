import styled from "styled-components";
import React, { useRef, useCallback } from "react";
import Container from "../components/Container";
import OfferArt from "../images/natur.svg";
import { mediaQueries } from "../utils/MediaQuerie";
import * as animationData from "../animation/offer.json";
import Lottie from "react-lottie";

import { useInView } from "react-intersection-observer";

const OfferWrapper = styled.div`
  width: 100%;

  padding-bottom: 10rem;
  padding-top: 10rem;
  ${mediaQueries.lessThan("tablet")`
  padding-bottom: 5rem;
  padding-top: 5rem;
`}
  section {
    :nth-child(1) {
      padding-bottom: 10rem;
      ${mediaQueries.lessThan("tablet")`
    padding-bottom: 5rem;

`}
    }

    flex-direction: row;
    ${mediaQueries.lessThan("tablet")`
    flex-direction: column;
`}
  }

  .svg-wrapper-d,
  .svg-wrapper-m {
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
    margin-left: 6rem;
    ${mediaQueries.lessThan("tablet")`
margin: 0;
`}
  }
`;

const Offer = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };

  const ref = useRef();
  const [inViewRef, inView] = useInView({ threshold: 0 });

  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <OfferWrapper>
      <Container>
        <div className="t-container" id="naturheilkunde">
          <h1>Naturheilkunde</h1>
          <p className="t-paragraph">
            Ein Blindtext sollte möglichst viele verschiedene Buchstaben
            enthalten und in der Originalsprache gesetzt sein.
          </p>
          <div ref={setRefs}>
            {/*    <OfferArt /> */}
            <Lottie
              isStopped={!inView}
              /*          isStopped={!inView}
            isClickToPauseDisabled={true} */
              options={defaultOptions}
            />
          </div>
        </div>
        <div className="content">
          <p className="paragraph">
            Ein Blindtext sollte möglichst viele verschiedene Buchstaben
            enthalten und in der Originalsprache gesetzt sein. Er muß keinen
            Sinn ergeben, sollte aber lesbar sein. Fremdsprachige Texte wie
            »Lorem ipsum« dienen nicht dem eigentlichen Zweck, da sie eine
            falsche Anmutung vermitteln. Dies hier ist ein Blindtext zum Testen
            von Textausgaben. Wer diesen Text liest, ist selbst schuld. Der Text
            gibt lediglich den Grauwert der Schrift an. Ist das wirklich so? Ist
            es gleichgültig ob ich schreibe: »Dies ist ein Blindtext« oder
            »Huardest gefburn«? Kjift – mitnichten! Ein Blindtext bietet mir
            wichtige Informationen. An ihm messe ich die Lesbarkeit einer
            Schrift, ihre Anmutung, wie harmonisch die Figuren zueinander stehen
            und prüfe, wie breit oder schmal sie läuft. Ein Blindtext sollte
            möglichst viele verschiedene Buchstaben enthalten und in der
            Originalsprache gesetzt sein.
          </p>
          <p className="paragraph">
            Er muss keinen Sinn ergeben, sollte aber lesbar sein. Fremdsprachige
            Texte wie »Lorem ipsum« dienen nicht dem eigentlichen Zweck, da sie
            eine falsche Anmutung vermitteln. Dies hier ist ein Blindtext zum
            Testen von Textausgaben. Wer diesen Text liest, ist selbst schuld.
            Der Text gibt lediglich den Grauwert der Schrift an. Ist das
            wirklich so? Ist es gleichgültig ob ich schreibe.
          </p>
          <p className="paragraph">
            Ein Blindtext sollte möglichst viele verschiedene Buchstaben
            enthalten und in der Originalsprache gesetzt sein. Er muss keinen
            Sinn ergeben, sollte aber lesbar sein. Fremdsprachige Texte wie
            »Lorem ipsum« dienen nicht dem eigentlichen Zweck, da sie eine
            falsche Anmutung vermitteln. Dies hier ist ein Blindtext zum Testen
            von Textausgaben. Wer diesen Text liest, ist selbst schuld. Der Text
            gibt lediglich den Grauwert der Schrift an. Ist das wirklich so? Ist
            es gleichgültig ob ich schreibe: »Dies ist ein Blindtext.
          </p>
        </div>
      </Container>
      <Container>
        <div className="t-container" id="alternativmedizin">
          <h1>Alternativmedizin</h1>
          <p className="t-paragraph">
            Ein Blindtext sollte möglichst viele verschiedene Buchstaben
            enthalten und in der Originalsprache gesetzt sein.
          </p>
        </div>
        <div className="content">
          <p className="paragraph">
            Ein Blindtext sollte möglichst viele verschiedene Buchstaben
            enthalten und in der Originalsprache gesetzt sein. Er muß keinen
            Sinn ergeben, sollte aber lesbar sein. Fremdsprachige Texte wie
            »Lorem ipsum« dienen nicht dem eigentlichen Zweck, da sie eine
            falsche Anmutung vermitteln. Dies hier ist ein Blindtext zum Testen
            von Textausgaben. Wer diesen Text liest, ist selbst schuld. Der Text
            gibt lediglich den Grauwert der Schrift an. Ist das wirklich so? Ist
            es gleichgültig ob ich schreibe: »Dies ist ein Blindtext« oder
            »Huardest gefburn«? Kjift – mitnichten! Ein Blindtext bietet mir
            wichtige Informationen. An ihm messe ich die Lesbarkeit einer
            Schrift, ihre Anmutung, wie harmonisch die Figuren zueinander stehen
            und prüfe, wie breit oder schmal sie läuft. Ein Blindtext sollte
            möglichst viele verschiedene Buchstaben enthalten und in der
            Originalsprache gesetzt sein.
          </p>
          <p className="paragraph">
            Er muss keinen Sinn ergeben, sollte aber lesbar sein. Fremdsprachige
            Texte wie »Lorem ipsum« dienen nicht dem eigentlichen Zweck, da sie
            eine falsche Anmutung vermitteln. Dies hier ist ein Blindtext zum
            Testen von Textausgaben. Wer diesen Text liest, ist selbst schuld.
            Der Text gibt lediglich den Grauwert der Schrift an. Ist das
            wirklich so? Ist es gleichgültig ob ich schreibe.
          </p>
        </div>
      </Container>
    </OfferWrapper>
  );
};

export default Offer;
