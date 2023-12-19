import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Nossa Cultura"
        title="Equilibre sua paixão com a sua empresa."
        invert
      >
        <p>
          Na Alternativa, nós temos orgulho de provomer uma cultura de equipe enraizada na lealdade, confiança, e compaixão.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Lealdade" invert>
            Apoiamos  uns aos outros em todos os momentos, cultivando um senso 
            de lealdade que constitui a espinha dorsal de nossa equipe.
          </GridListItem>
          <GridListItem title="Confiança" invert>
            A base da nossa colaboração. Acreditamos no poder da confiança para 
            alimentar a inovação e permitir que cada membro da equipe contribua com o seu melhor.
          </GridListItem>
          <GridListItem title="Compaixão" invert>
            O coração da nossa equipe. Reconhecemos a humanidade de cada membro, 
            entendendo que cada um traz um conjunto único de experiências e desafios.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
