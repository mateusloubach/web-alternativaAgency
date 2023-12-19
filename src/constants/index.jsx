import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Trabalho",
    links: [
      { title: "Em Breve", href: "/" },
      // { title: "Em Breve", href: "/work/bazar" },
      // { title: "Em Breve", href: "/work/blog101" },
      // { title: "Em Breve", href: "/work/blog101" },
      {
        title: (
          <>
            Mais <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Empresa",
    links: [
      { title: "Sobre Nós", href: "/about" },
      { title: "Processos", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contato", href: "/contact" },
    ],
  },
  {
    title: "Social",
    links: SocialMediaProfiles,
  },
];
