/** Sites já publicados para clientes. Não saíram dos templates do laboratório. */
export type PublishedSite = {
  id: string;
  brand: string;
  title: string;
  excerpt: string;
  href: string;
  thumb: string;
  accent: string;
};

export const publishedSites: PublishedSite[] = [
  {
    id: "base",
    brand: "BASE Participações",
    title: "Holding do grupo",
    excerpt:
      "Site institucional da holding: governança, as verticais e a visão de expansão do grupo.",
    href: "https://baseparticipacoes.com.br/",
    thumb: "/work/base.webp",
    accent: "#c4b08a",
  },
  {
    id: "rocktech",
    brand: "RockTech",
    title: "Infraestrutura e segurança",
    excerpt:
      "Consultoria de tecnologia. O site reúne serviços, loja e a área do cliente.",
    href: "https://rocktech.com.br/",
    thumb: "/work/rocktech.webp",
    accent: "#c4342d",
  },
  {
    id: "hvac",
    brand: "HVAC Engenharia",
    title: "Engenharia e facilities",
    excerpt:
      "Engenharia, manutenção e operação. O site apresenta os serviços e o portfólio de obras.",
    href: "https://hvac-eng.com.br/",
    thumb: "/work/hvac.webp",
    accent: "#1f4d32",
  },
];
