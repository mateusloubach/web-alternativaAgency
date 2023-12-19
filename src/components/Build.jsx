import React from "react";
import Section from "./Section";
import imageDesign from "@/images/designer.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Construção" image={{ src: imageDesign, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Guiados pelos {" "} <strong className="font-semibold text-neutral-950">insights </strong>  
          obtidos nos estudos iniciais, nossa equipe de 
          desenvolvedores e designers colabora para  dar vida 
          à visão do projeto. Esta fase envolve codificação, design e 
          construção de estrutura de sua solução digital.
        </p>
        <p>
          Check-ins regulares e atualizações de progresso garantem que 
          o desenvolvimento se alinhe perfeitamente às suas expectativas 
          permitindo ajustes em tempo real. Testes rigorosos são integrados 
          em toda a construção, abordando prontamente quaisquer bugs ou problemas.
        </p>
        <p>
          Nosso compromisso com a transparência e a comunicação 
          aberta garante que você seja parte {" "} <strong className="font-semibold text-neutral-950">integrante </strong>  
          da jornada de construção, testemunhando a evolução do 
          seu projeto desde a conceituação até a realidade tangível.
        </p>
      </div>
      <Blockquote
        author={{ name: "Stephanie Bettencourt", role: "CEO @ Unseal" }}
        className="mt-12"
      >
        We were very excited about the transformative impact Alternativa created 
        and we are confident will continue to yield groundbreaking results.
      </Blockquote>
    </Section>
  );
};

export default Build;
