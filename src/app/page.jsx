import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import logoCactoDark from "@/images/clients/cactolandia/logo-dark-alt.png";

export default function Home() {
  return (
    <main className="text-black"><br></br>
      <br></br>
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-4xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Torne a sua presença online, uma realidade conosco!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Somos uma equipe colaborativa de profissionais que funde perfeitamente os domínios do design e da tecnologia. Os membros da nossa equipe prosperam na agitação dinâmica, dando capacidade para entregar o projeto com êxito.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Cacto", logo: logoCactoDark }}
      >
        A equipe da Alternativa foi além com a nossa integração solucionando nossos maiores problemas, 
        e trouxe um mercado totalmente novo para nós ao nos introduzir à plataforma online.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
