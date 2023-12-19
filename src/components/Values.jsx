import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Nossos Valores"
        title="Equilibrando Confiabilidade e Inovação"
      >
        <p>
          Temos a ambição de permanecer na vanguarda das tendências e 
          tecnologias emergentes, vendo a inovação como a pedra angular da nossa abordagem.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
        <GridListItem title="Adaptação">
            Navegamos no cenário tecnológico dinâmico com agilidade, 
            abraçando a mudança como uma oportunidade para inovar.
          </GridListItem>
          <GridListItem title="Meticulosidade">
            Não é apenas uma virtude; é um padrão incorporado em 
            cada linha de código, cada pixel aperfeiçoado.
          </GridListItem>
          <GridListItem title="Eficiência">
            É a marca dregistrada da nossa empresa. Simplificamos 
            processos, otimizamos fluxos de trabalho, e fornecemos 
            soluções com eficiência contínua.
          </GridListItem>
          <GridListItem title="Lealdade">
            Enraizada no DNA da nossa empresa; estamos dedicados 
            ao sucesso duradouro de nossos clientes, promovendo 
            relacionamentos de longo prazo por meio de compromisso.
          </GridListItem>
          <GridListItem title="Honestidade">
            Priorizamos a comunicação transparente, práticas, 
            éticas e parcerias genuínas, promovendo a confiança 
            com nossos clientes e partes interessadas.
          </GridListItem>
          <GridListItem title="Inovação">
            O coração da nossa empresa; Prosperamos ao ultrapassar 
            limites, abraçar a criatividade e ser pioneiros em soluções 
            de ponta que redefinem as possibilidades no cenário tecnológico.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
