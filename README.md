# SunRisepvt

Portal em português para um coletivo de quatro DJs. Construído com Astro, TypeScript e Tailwind CSS. A identidade Frequência usa quatro barras animadas em SVG e CSS.

## Desenvolvimento

```sh
npm ci
npm run dev
npm run build
```

No PowerShell, use `npm.cmd` caso o atalho `npm` esteja indisponível.

## Conteúdo e integrações

Atualize `src/data/portal.ts` com os dados oficiais. Os flyers, retratos, nomes de apresentação e fotos atuais são ilustrativos. Cada set pode receber uma URL oficial de incorporação no campo `embed`. O formulário simula o envio enquanto `bookingEmail` estiver vazio. Com o e-mail oficial, ele abre um rascunho no aplicativo de e-mail do visitante.

Na Vercel, importe o repositório com o preset Astro. O build produz `dist/`. A branch de revisão pode ser usada como Preview.

## Crédito de desenvolvimento

Coloque sua logo em `public/media/` e preencha `developerCredit.logo` em `src/data/portal.ts` com o caminho público, como `/media/logo-dev.png`. Preencha `developerCredit.url` para vincular o crédito ao seu portfólio.
