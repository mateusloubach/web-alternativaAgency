import React from "react";
import Section from "./Section";
import imageMeet from "@/images/presentation.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Entrega" image={{ src: imageMeet, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Com a etapa de construção concluída, testamos todos os 
          aspectos da solução digital para garantir que ela 
          atenda aos mais altos padrões de qualidade e funcionalidade.
        </p>
        <p>
          Nosso compromisso com a <strong className="font-semibold text-neutral-950"> excelência </strong> 
          se estende a um processo de implantação contínuo, 
          Ao longo desta fase, nossa equipe permanece dedicada 
          à transparência e à comunicação aberta, fornecendo 
          <strong className="font-semibold text-neutral-950"> insights </strong> 
          claros sobre o produto final.
        </p>
        <p>
          À medida que entregamos sua solução, vamos além do
          atendimento às expectativas; nós nos esforçamos para superá-los, 
          garantindo que seu projeto não seja apenas lançado, mas lançado
          com <strong className="font-semibold text-neutral-950"> precisão</strong>, 
          <strong className="font-semibold text-neutral-950"> confiabilidade</strong>, 
          e <strong className="font-semibold text-neutral-950"> potencial </strong>  
          para causar um impacto duradouro no mundo digital.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        O que está incluso nesta etapa
      </h3>
      <br></br>
      <List>
        <ListItem title="Testes">
          É o nosso compromisso em fornecer um produto impecável, avaliando 
          rigorosamente cada componente quanto à funcionalidade, segurança e 
          experiência do usuário.
        </ListItem>
        <ListItem title="Infraestrutura">
          A base robusta sobre a qual sua solução digital é construída, 
          garantindo escalabilidade, eficiência e resiliência.
        </ListItem>
        <ListItem title="Suporte">
          Resume nosso compromisso contínuo com o seu sucesso, fornecendo 
          assistência e manutenção contínuas  para garantir que seu ativo 
          digital opere com desempenho máximo.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
