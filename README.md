# Mind The Digital — site institucional

Site estático da empresa. Astro gera HTML, CSS e imagens em `dist/`. A visita publicada não consulta o Directus. Este repositório não é o `mtd-site-starter` (laboratório de templates no homelab).

## Rodar na máquina

É preciso Node.js 22.23.4 ou mais recente, o mínimo do Astro 7.4.2. Nesta máquina de desenvolvimento o binário ficou em `~/.local` (22.23.4), e `~/.profile` já inclui `~/.local/bin` nos shells de login. Se `node` não aparecer:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

Na pasta do projeto:

```bash
cd ~/dev/sites/mtd-site
npm install
npm run dev
```

Abre [http://127.0.0.1:4321](http://127.0.0.1:4321).

Para gerar a pasta que a Vercel publica:

```bash
npm run build
npm run preview
```

`npm run build` grava `dist/` (HTML, CSS, fontes e imagens). Não há servidor Node no resultado. `preview` só serve essa pasta na máquina, para olhar o build.

## O que este projeto não faz

- Não é uma skin nem um `SITE_KEY` do `mtd-site-starter`.
- Não chama `https://dir.nodenode.net` em runtime.
- Não publica as demos `tpl-*.apps.mtd.net.br`. Os seis sites de segmento não têm link de demonstração. BASE Participações, RockTech e HVAC Engenharia apontam para os sites já no ar.
- Não tem formulário com backend. O contato é o WhatsApp, em outra aba, e o e-mail.

## Repositório no GitHub

Remoto atual: `git@github.com:caccos/mtd-site.git`. `main` é produção. Alterações seguem na branch `preview` e só entram no ar depois do merge.

A chave SSH que os outros repos desta máquina usam é `~/.ssh/id_ed25519_github` (host `github.com` no `~/.ssh/config`). Não troque a chave do workspace. Não inclua `.env` — este projeto não precisa de segredo.

## Projeto na Vercel

Já existe, no time `mtd-projects`, importado de `caccos/mtd-site`. Produção: [https://www.mindthedigital.com.br](https://www.mindthedigital.com.br). A branch `preview` publica em [https://mtd-site-git-preview-mtd-projects.vercel.app](https://mtd-site-git-preview-mtd-projects.vercel.app). A Vercel Authentication está ligada nos endereços `*.vercel.app`. `https://mtd-site-mu.vercel.app` acompanha `main`, o mesmo deploy do domínio.

Configuração que o painel já usa: Framework Astro, raiz `./`, build `npm run build`, saída `dist`, Node 24.x, sem variáveis de ambiente. Não crie `DIRECTUS_URL` nem instale adapter de servidor. O plano Hobby segue até o site ser público; o upgrade para o Pro fica com você.

A Vercel executa o build e publica os arquivos de `dist/`. A hospedagem do site não precisa de Node em execução. O Directus de produção continua em `https://dir.nodenode.net`, na VPS.
