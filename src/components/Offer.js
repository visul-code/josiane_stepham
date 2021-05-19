import styled from "styled-components";
import React from "react";
import Container from "../components/Container";
import OfferArt from "../images/natur.svg";

const OfferWrapper = styled.div`
  width: 100%;

  section {
    flex-direction: row;
  }

  .svg-wrapper {
    flex: 1;

    svg {
      width: 120%;
      height: auto;
    }
  }
  .t-container {
    flex: 1;
  }

  .content {
    margin-left: 6rem;
  }
`;

const Offer = () => {
  return (
    <OfferWrapper>
      <Container>
        <div className="t-container" id="naturheilkunde">
          <h1>Naturheilkunde</h1>
          <p className="t-paragraph">
            Ein Blindtext sollte möglichst viele verschiedene Buchstaben
            enthalten und in der Originalsprache gesetzt sein.
          </p>
          <div className="svg-wrapper">
            <OfferArt />
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
