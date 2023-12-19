import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Sobre Nós" title="Nosso forte é a inovação">
        <p>
          Acreditamos que o destaque do nosso grupo é na abordagem colaborativa que coloca os nossos clientes no centro de tudo o que fazemos, 
          e isso inclui sempre trazer os recursos mais atuais e inovadores do mercado.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Alimentados por um desejo coletivo de preencher a lacuna entre criatividade e tecnologia, 
            fundamos a Alternativa com a intenção de trazer soluções personalizadas e impactantes para nossos clientes.
          </p>
          <p>
            Aqui na Alternativa, não criamos apenas software; nós projetamos experiências. 
            Nossa equipe apaixonada de desenvolvedores, designers e visionários colabora perfeitamente, 
            reunindo seus diversos talentos para lidar com projetos de todas as escalas. De veteranos experientes 
            a novos talentos, nossa força de trabalho é uma mistura vibrante de experiência e inovação, 
            unida por um objetivo comum: oferecer excelência com cada linha de código e pixel aperfeiçoado.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Projetos Finalizados" />
          <StatListItem value="71" label="Clientes Satisfeitos" />
          <StatListItem value="R$25.7M" label="Faturamento de clientes" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
