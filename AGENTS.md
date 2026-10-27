# Instruções para agentes de IA (Cursor)

**mtd-site** — site institucional estático da Mind The Digital. Astro gera HTML em `dist/`. Deploy previsto na Vercel (Hobby agora; Pro quando for público). Não é o laboratório `mtd-site-starter`.

Infra Coolify, VMs e Directus de lab ficam no repo `mindthedigital/coolify` (`~/dev`). Não duplicar inventory aqui e não transformar este site em app Coolify, skin ou `SITE_KEY`.

## Ao iniciar um novo chat (sempre)

1. Ler [`docs/README.md`](docs/README.md).
2. Ler [`docs/STATUS.md`](docs/STATUS.md).
3. Ler [`docs/backlog.md`](docs/backlog.md).
4. Não assumir memória de conversas anteriores.

## Ao alterar código ou comportamento (sempre)

| O quê mudou | Onde atualizar |
|-------------|----------------|
| Páginas, catálogo, contato, build | [`docs/STATUS.md`](docs/STATUS.md) |
| Pendência nova ou concluída | [`docs/backlog.md`](docs/backlog.md) |
| Decisão de produto deste site | [`docs/DECISIONS.md`](docs/DECISIONS.md) (criar se ainda não existir) |

Não editar `~/dev/docs` só porque este site existe. Uma linha na infra só quando houver deploy ou DNS de fato.

## Recorte

- Build estático. Sem `@astrojs/node`, sem `@astrojs/vercel` em modo servidor, sem rota de API.
- Textos e a vitrine entram no build (`src/data/`). A visita não consulta o Directus.
- Catálogo: cartão em prévia. Sem link para `tpl-*.apps.mtd.net.br` até existir endereço público.
- Contato: WhatsApp em outra aba. Sem formulário com backend nesta versão.
- Não fazer deploy na Vercel nem criar o remoto GitHub sem pedido explícito.
