# KRB · Landing Page (Café Kurubi)

React + Vite + TypeScript + Tailwind CSS v4. Pronto para GitHub Pages, sem edição de código.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos.
2. Nomeie o repositório como `KRB-final`.
3. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Faça um push na branch `main`. O workflow `.github/workflows/deploy.yml` builda e publica automaticamente.

O repositório deve se chamar **KRB-final** (`base: "/KRB-final/"` no `vite.config.ts`). Se usar outro nome, altere apenas essa linha.

## Rodar localmente

```bash
npm install
npm run dev
```

## Imagens

Ficam em `public/images/` e são referenciadas em `src/images.ts` via `import.meta.env.BASE_URL` — nunca com caminho absoluto.
