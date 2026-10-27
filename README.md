# Mind The Digital — site institucional

Site estático da empresa. Astro gera HTML, CSS e imagens em `dist/`. A visita publicada não consulta o Directus. Este repositório não é o `mtd-site-starter` (laboratório de templates no homelab).

## Rodar na máquina

É preciso Node.js 20.18 ou mais recente. Nesta máquina de desenvolvimento o binário ficou em `~/.local` (v22), e `~/.profile` já inclui `~/.local/bin` nos shells de login. Se `node` não aparecer:

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
- Não publica as demos `tpl-*.apps.mtd.net.br`. Os cartões do catálogo ficam em prévia.
- Não tem formulário com backend. O contato é o WhatsApp, em outra aba, e o e-mail.

## Repositório no GitHub

Org já usada pelos outros repos: `mindthedigital`. Crie um repositório **vazio** (sem README, sem `.gitignore`, sem licença), de preferência privado enquanto o site não for público. Nome sugerido: `mtd-site`.

No GitHub: **New repository** → owner `mindthedigital` → nome `mtd-site` → Private → não marque “Add a README”.

Depois, nesta pasta:

```bash
cd ~/dev/sites/mtd-site
git init
git add .
git commit -m "Abre o site institucional estático da Mind The Digital."
git branch -M main
git remote add origin git@github.com:mindthedigital/mtd-site.git
git push -u origin main
```

A chave SSH que os outros repos desta máquina usam é `~/.ssh/id_ed25519_github` (host `github.com` no `~/.ssh/config`). Não troque a chave do workspace. Não inclua `.env` — este projeto não precisa de segredo.

## Projeto na Vercel

Ainda não há deploy. Quando for criar o projeto:

1. [vercel.com/new](https://vercel.com/new) → **Import** do repositório `mindthedigital/mtd-site`.
2. Framework Preset: **Astro**.
3. Root Directory: `./`.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Install Command: `npm install`.
7. Node.js: **22.x**.
8. Sem variáveis de ambiente. Não crie `DIRECTUS_URL` nem instale adapter de servidor.
9. Plano **Hobby** por enquanto. O upgrade para o Pro, quando o site for público, fica com você.

A Vercel executa o build e publica os arquivos de `dist/`. A hospedagem do site não precisa de Node em execução. O Directus de produção continua em `https://dir.nodenode.net`, na VPS.

Pela CLI, o equivalente (só quando você pedir o deploy) é `npx vercel link` e depois `npx vercel`. O painel acima é o caminho mais claro para o primeiro projeto.
