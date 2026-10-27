/**
 * Sites fechados por segmento, mostrados como trabalho entregue.
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
    excerpt: "Site da holding: escritório, atuação e equipe.",
    modules: ["páginas"],
    accent: "#1b4f8b",
    thumb: "/catalog/institucional.webp",
  },
  {
    id: "engenharia",
    brand: "Esquadro Engenharia",
    title: "Portfólio com galeria e vídeo",
    excerpt: "Portfólio de obras, com capa, galeria e um vídeo por projeto.",
    modules: ["portfólio"],
    accent: "#e2820f",
    thumb: "/catalog/engenharia.webp",
  },
  {
    id: "barbearia",
    brand: "Navalha Studio",
    title: "Carta de serviços",
    excerpt: "Carta de corte, barba e combo, com preço. O horário segue no WhatsApp.",
    modules: ["carta", "WhatsApp"],
    accent: "#b8872f",
    thumb: "/catalog/barbearia.webp",
  },
  {
    id: "confeitaria",
    brand: "Confeitaria Hortênsia",
    title: "Vitrine com orçamento",
    excerpt: "Vitrine com piso de preço. O pedido sai com o nome do item no WhatsApp.",
    modules: ["vitrine", "WhatsApp"],
    accent: "#b54a5a",
    thumb: "/catalog/confeitaria.webp",
  },
  {
    id: "contabilidade",
    brand: "Prumo Contadores",
    title: "Blog para o sócio",
    excerpt: "Artigos sobre obrigação, folha e regime, para a conversa com o sócio.",
    modules: ["blog"],
    accent: "#2a5a3d",
    thumb: "/catalog/contabilidade.webp",
  },
  {
    id: "clinica-estetica",
    brand: "Casa Nacre",
    title: "Carta e artigos da casa",
    excerpt:
      "Tratamentos com preço e duração, artigos da casa e agenda no WhatsApp.",
    modules: ["carta", "blog", "WhatsApp"],
    accent: "#8a3d58",
    thumb: "/catalog/clinica-estetica.webp",
  },
];
