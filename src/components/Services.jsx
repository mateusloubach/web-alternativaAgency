import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/web-main.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Serviços"
        title="Ajudamos você a identificar, explorar e responder à novas oportunidades."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          O cenário digital oferece uma plataforma dinâmica onde as empresas podem se conectar, 
          interagir e prosperar de maneiras antes inimagináveis.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Desenvolvimento Web">
              Somos especializados na arte e ciência do desenvolvimento. 
              Nossa equipe dedicada de profissionais qualificados se esforça 
              para transformar conceitos em experiências online cativantes.
            </ListItem>
            <ListItem title="E-Commerce">
              Com um profundo conhecimento do mercado digital, nossa equipe 
              dedicada projeta e desenvolve meticulosamente soluções de 
              comércio eletrônico que transcendem as fronteiras comerciais.
            </ListItem>
            <ListItem title="Banco de Dados">
              Desde o projeto de arquiteturas de BD robustos até o ajuste fino 
              do desempenho e a implementação de processos eficientes de recuperação 
              de dados, nos destacamos na criação e manutenção da espinha dorsal de aplicativos orientados a dados.
            </ListItem>
            <ListItem title="Análise de Segurança">
              Nossa equipe dedicada de analistas de segurança está comprometida 
              em identificar e mitigar possíveis vulnerabilidades em 
              infraestruturas digitais.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
