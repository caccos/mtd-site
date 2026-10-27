# STATUS — mtd-site

Snapshot deste repositório em 2026-10-27. Não descreve a infra Coolify.

## Snapshot atual

- **Pasta:** `~/dev/sites/mtd-site`
- **O que é:** site institucional da Mind The Digital (Home, Sobre, Contato, Política de Privacidade), com trabalhos publicados e sites fechados por segmento.
- **Stack:** Astro 7.4.2 estático (`output: "static"`). Exige Node 22.23.4 ou mais recente. `npm run build` gera `dist/` com HTML, CSS, fontes e imagens. Sem adapter e sem servidor. Fontes `@fontsource-variable/fraunces` e `outfit`, ambas 5.3.0.
- **Git:** `git@github.com:caccos/mtd-site.git`. Produção segue `main`. Alterações passam pela branch `preview` antes do merge.
- **Vercel:** time `mtd-projects` (“mtd's projects”), projeto `mtd-site` (`prj_boatuD4omnFfUCNUvl5jbpF9M01r`). Framework Astro, Node 24.x, sem variáveis de ambiente. Produção `READY` a partir de `main`.
- **Produção:** `https://www.mindthedigital.com.br` (verificado 200 em 2026-10-26, mesmo commit). O ápice `https://mindthedigital.com.br` responde 308 para `www`. DNS na Cloudflare, sem erro de configuração na Vercel.
- **Alias de produção:** `https://mtd-site-mu.vercel.app` aponta para o mesmo deploy de `main`, junto com `mtd-site-mtd-projects.vercel.app` e `mtd-site-git-main-mtd-projects.vercel.app`.
- **Acesso:** Vercel Authentication ligada em todos os deploys, exceto domínio personalizado. `www` abre para qualquer visitante. Os hosts `*.vercel.app` pedem login da Vercel.
- **Plano:** Hobby por enquanto. O upgrade para o Pro, quando o site for público, fica com o operador.
- **Node local:** binário oficial 22.23.4 em `~/.local/node`, com atalhos em `~/.local/bin`. Atende o mínimo do Astro 7. A Vercel permanece em Node 24.x.

## O que está funcionando

- Páginas `/`, `/sobre`, `/contato`, `/politica-de-privacidade` e `404`.
- Serviços: sites, aplicativos, automação e integrações. Depoimentos e chamado para o próximo passo, a partir da cópia WordPress em `mtd-wp` (`http://172.16.40.20:8081/`). O tema Kadence/Elementor não foi copiado.
- A política de privacidade foi reescrita para este site estático. A página do WordPress era o texto padrão de comentários, login e Gravatar, que aqui não existem. O texto em `main` cita `https://www.mindthedigital.com.br` desde o merge de `preview` em 2026-10-26.
- Contato: WhatsApp `https://wa.me/5511968600272` em outra aba, e-mail `contato@mindthedigital.com.br`. Sem formulário.
- Redes: LinkedIn, Instagram e Facebook, como no rodapé do WordPress.
- Trabalhos: BASE Participações, RockTech e HVAC Engenharia, com link para o site no ar e miniatura em `public/work/`. A âncora é `#trabalhos`.
- Mais seis sites fechados por segmento, miniaturas em `public/catalog/*.webp`. O texto trata cada um como site entregue. Sem URL `tpl-*`. A engenharia no cartão é Esquadro Engenharia, como no Directus de produção *(2026-10-27)*.
- `npm run build` verificado em 2026-10-27, com Astro 7.4.2: cinco páginas em `dist/`, sem entry de servidor.

## Fora deste site

- Directus de produção dos templates está em `https://dir.nodenode.net`, na VPS `37.27.94.160`. Este site institucional não o consulta.
- O homelab (`tpl-*.apps.mtd.net.br`) é desenvolvimento dos templates. A publicação para o visitante sai da VPS.
- O índice está no ar em `https://templates.mindthedigital.com.br` (container `mtd-templates`, `SITE_KEY=templates`, Directus interno `directus-directus-1`). Verificado em 2026-10-27: `/`, `/contato`, `/metodo` e `/api/health` respondem 200, com `site` igual a `templates`.
- O Traefik publica esse host com TLS padrão, sem pedir certificado novo. O token DNS do Traefik só enxerga `mtd.net.br` e `nodenode.net`. O certificado que o visitante vê é o da Cloudflare.
- Os seis segmentos ainda não têm aplicativo nem DNS próprio nessa VPS. O índice ainda abre os cartões em `tpl-*.apps.mtd.net.br`. Este site institucional não liga esses cartões.
- cPanel não entra no caminho.
