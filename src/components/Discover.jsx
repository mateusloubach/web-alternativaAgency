import React from "react";
import Section from "./Section";
import imageOffice from "@/images/imageOffice.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Pesquisa" image={{ src: imageOffice, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Tudo começa com uma fase de descoberta abrangente, 
          onde nos aprofundamos nos seus {" "} <strong className="font-semibold text-neutral-950">objetivos</strong>, {" "}
          <strong className="font-semibold text-neutral-950">desafios</strong> e {" "}
          <strong className="font-semibold text-neutral-950">aspirações</strong>.
        </p>
        <p>
          Em sequência, nossa equipe planeja meticulosamente o processo de 
          desenvolvimento, dividindo-o em etapas claras com cronogramas transparentes.
          À medida que embarcamos na jornada de {" "} <strong className="font-semibold text-neutral-950">implementação</strong>, 
          a colaboração constante e os ciclos de feedback garantem que o produto final 
          se alinhe perfeitamente com a sua visão.
        </p>
        <p>
          Testes rigorosos e garantia de qualidade são partes integrantes do 
          nosso processo, garantindo um produto que não apenas atende, 
          mas também {" "} <strong className="font-semibold text-neutral-950">excede </strong> 
           os padrões da indústria.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        O que está incluso nesta etapa
      </h3>
      <TagList className="mt-4">
        <TagListItem>Pesquisa de Funcionários</TagListItem>
        <TagListItem>Análise de Risco</TagListItem>
        <TagListItem>Provas de Conceito</TagListItem>
        <TagListItem>Questionários </TagListItem>
        <TagListItem>Análise de Requisitos</TagListItem>
        <TagListItem>Estudos de Viabilidade</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
