export const site = {
  name: "Mind The Digital",
  url: "https://www.mindthedigital.com.br",
  email: "contato@mindthedigital.com.br",
  phoneDisplay: "(11) 96860-0272",
  whatsapp: "https://wa.me/5511968600272",
  whatsappHello:
    "https://wa.me/5511968600272?text=" +
    encodeURIComponent(
      "Olá, vim pelo site da Mind The Digital e quero falar sobre um projeto.",
    ),
  city: "São Paulo, Brasil",
  cnpj: "33.517.500/0001-54",
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/mindthedigital",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/mindthedigital",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/cuidedodigital",
    },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/#trabalhos", label: "Trabalhos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export const services = [
  {
    number: "01",
    title: "Criação de sites profissionais",
    text: "Desenvolvemos sites modernos, rápidos e otimizados para oferecer a melhor experiência ao usuário e gerar resultados para a empresa.",
  },
  {
    number: "02",
    title: "Desenvolvimento de aplicativos",
    text: "Criamos aplicativos funcionais e intuitivos, focados em performance e usabilidade, para atender às necessidades do negócio.",
  },
  {
    number: "03",
    title: "Automação e integrações",
    text: "Conectamos sistemas e automatizamos processos para que a operação seja mais eficiente e produtiva.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Nosso site ficou incrível! A equipe da Mind The Digital entregou exatamente o que precisávamos, com um design impecável e ótima usabilidade.",
    name: "Renato Rodrigues",
    role: "Empreendedor digital",
  },
  {
    quote:
      "Tivemos um aumento significativo no engajamento depois da reformulação do nosso site. Profissionais altamente qualificados e atenciosos!",
    name: "Ana Souza",
    role: "Gestora de marketing",
  },
  {
    quote:
      "Processo ágil, comunicação clara e resultado acima do esperado. Recomendo fortemente!",
    name: "Carlos Mendes",
    role: "CEO de startup",
  },
] as const;

export const values = [
  {
    title: "Inovação",
    text: "Aplicamos as melhores práticas do mercado para entregar soluções inteligentes.",
  },
  {
    title: "Resultados",
    text: "Foco em performance e conversões, com impacto real no negócio.",
  },
  {
    title: "Transparência",
    text: "Comunicação clara e parceria de longo prazo.",
  },
  {
    title: "Simplicidade e eficiência",
    text: "Tecnologia sem complicação, para você focar no que realmente importa.",
  },
] as const;

export const missionPoints = [
  {
    title: "Experiência do usuário",
    text: "Interfaces intuitivas e impactantes.",
  },
  {
    title: "SEO e performance",
    text: "Sites rápidos, responsivos e preparados para o Google.",
  },
  {
    title: "Automação e escalabilidade",
    text: "Soluções que crescem junto com o negócio.",
  },
] as const;
