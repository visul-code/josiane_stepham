import styled from "styled-components";
import React from "react";
import Container from "../components/Container";

const AboutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};

  section {
    flex-direction: row;
  }

  .t-container {
    flex: 1;
    h1 {
      color: ${({ theme }) => theme.colors.textAlt};
    }
  }

  .content {
    flex: 1;
    margin-left: 6rem;
    .paragraph {
      color: ${({ theme }) => theme.colors.textAlt};
    }
  }
`;

const Offer = () => {
  return (
    <AboutWrapper id="uebermich">
      <Container>
        <div className="t-container">
          <h1>Über mich</h1>
          <p className="t-paragraph">
            Ein Blindtext sollte möglichst viele verschiedene Buchstaben
            enthalten und in der Originalsprache gesetzt sein.
          </p>
          <div className="svg-wrapper"></div>
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
    </AboutWrapper>
  );
};

export default Offer;
