# STATUS — mtd-site

Snapshot deste repositório em 2026-10-26. Não descreve a infra Coolify.

## Snapshot atual

- **Pasta:** `~/dev/sites/mtd-site`
- **O que é:** site institucional da Mind The Digital (Home, Sobre, Contato, Política de Privacidade) mais a vitrine dos seis temas.
- **Stack:** Astro 5 estático (`output: "static"`). `npm run build` gera `dist/` com HTML, CSS, fontes e imagens. Sem adapter e sem servidor.
- **Git:** `git@github.com:caccos/mtd-site.git`. Produção segue `main` (`b3373eb` no ar). Alterações passam pela branch `preview` antes do merge.
- **Vercel:** time `mtd-projects` (“mtd's projects”), projeto `mtd-site` (`prj_boatuD4omnFfUCNUvl5jbpF9M01r`). Framework Astro, Node 24.x, sem variáveis de ambiente. Produção `READY` a partir desse commit.
- **Produção:** `https://www.mindthedigital.com.br` (verificado 200 em 2026-10-26, mesmo commit). O ápice `https://mindthedigital.com.br` responde 308 para `www`. DNS na Cloudflare, sem erro de configuração na Vercel.
- **Alias de produção:** `https://mtd-site-mu.vercel.app` aponta para o mesmo deploy de `main`, junto com `mtd-site-mtd-projects.vercel.app` e `mtd-site-git-main-mtd-projects.vercel.app`.
- **Acesso:** Vercel Authentication ligada em todos os deploys, exceto domínio personalizado. `www` abre para qualquer visitante. Os hosts `*.vercel.app` pedem login da Vercel.
- **Plano:** Hobby por enquanto. O upgrade para o Pro, quando o site for público, fica com o operador.
- **Node local:** a máquina de dev não tinha Node no PATH. Há um binário oficial 22.23.4 em `~/.local/node`, com atalhos em `~/.local/bin`.

## O que está funcionando

- Páginas `/`, `/sobre`, `/contato`, `/politica-de-privacidade` e `404`.
- Serviços: sites, aplicativos, automação e integrações. Depoimentos e chamado para o próximo passo, a partir da cópia WordPress em `mtd-wp` (`http://172.16.40.20:8081/`). O tema Kadence/Elementor não foi copiado.
- A política de privacidade foi reescrita para este site estático. A página do WordPress era o texto padrão de comentários, login e Gravatar, que aqui não existem. Na branch `preview`, o texto cita `https://www.mindthedigital.com.br`. Em `main` isso ainda não entrou.
- Contato: WhatsApp `https://wa.me/5511968600272` em outra aba, e-mail `contato@mindthedigital.com.br`. Sem formulário.
- Redes: LinkedIn, Instagram e Facebook, como no rodapé do WordPress.
- Catálogo: seis temas, textos de `mtd-site-starter/src/lib/catalog.ts`, miniaturas em `public/catalog/*.webp`. Cartão mostra marca, título, resumo e módulos, com selo **Prévia**. Sem URL `tpl-*`.
- `npm run build` verificado em 2026-10-26: cinco páginas em `dist/`, sem entry de servidor.

## Fora deste site

- Directus de produção permanece em `https://dir.nodenode.net` (VPS). Este build não o consulta.
- Demos `tpl-*` continuam no lab `mtd-site-starter`. Não foram publicadas daqui.
- cPanel não entra no caminho.
