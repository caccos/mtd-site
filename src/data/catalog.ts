/**
 * Vitrine estática. Textos copiados do catálogo do laboratório de templates.
 * Sem href: as demos internas não entram neste site até existir endereço público.
 */
export type CatalogTheme = {
  id: string;
  brand: string;
  title: string;
  excerpt: string;
  modules: string[];
  accent: string;
  thumb: string;
};

export const catalogThemes: CatalogTheme[] = [
  {
    id: "institucional",
    brand: "Leme Participações",
    title: "Holding sóbria",
    excerpt: "Escritório, atuação e equipe. Sem portfólio, sem carta, sem blog.",
    modules: ["páginas"],
    accent: "#1b4f8b",
    thumb: "/catalog/institucional.webp",
  },
  {
    id: "engenharia",
    brand: "Exemplo Engenharia",
    title: "Portfólio com galeria e vídeo",
    excerpt: "Obras publicadas no CMS: capa, galeria e no máximo um vídeo por projeto.",
    modules: ["portfólio"],
    accent: "#e2820f",
    thumb: "/catalog/engenharia.webp",
  },
  {
    id: "barbearia",
    brand: "Navalha Studio",
    title: "Carta de serviços",
    excerpt: "Corte, barba e combo com preço na ficha. Horário fecha no WhatsApp.",
    modules: ["carta", "WhatsApp"],
    accent: "#b8872f",
    thumb: "/catalog/barbearia.webp",
  },
  {
    id: "confeitaria",
    brand: "Confeitaria Hortênsia",
    title: "Vitrine com orçamento",
    excerpt: "Piso de preço no cartão. O clique leva o nome do item no WhatsApp.",
    modules: ["vitrine", "WhatsApp"],
    accent: "#b54a5a",
    thumb: "/catalog/confeitaria.webp",
  },
  {
    id: "contabilidade",
    brand: "Prumo Contadores",
    title: "Blog para o sócio",
    excerpt: "Obrigação, folha e regime. A conversa seguinte é no formulário.",
    modules: ["blog"],
    accent: "#2a5a3d",
    thumb: "/catalog/contabilidade.webp",
  },
  {
    id: "clinica-estetica",
    brand: "Casa Nacre",
    title: "Carta e artigos da casa",
    excerpt:
      "Tratamentos com preço e duração, mais três artigos de rotina. WhatsApp agenda.",
    modules: ["carta", "blog", "WhatsApp"],
    accent: "#8a3d58",
    thumb: "/catalog/clinica-estetica.webp",
  },
];
