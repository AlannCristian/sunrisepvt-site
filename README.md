# SunRisepvt

**Onde a noite se encontra com o amanhecer.**

![Palco de música eletrônica com um sol luminoso ao fundo e a pista em primeiro plano](public/media/stage.webp)

Portal do **SunRisepvt**, coletivo de quatro DJs. O site reúne agenda, flyers, perfis dos artistas, sets, registros da pista e um canal para propostas de contratação.

## O portal

- **Agenda e flyers** com cartões de eventos e cartazes que podem ser ampliados.
- **Os DJs** com os perfis e estilos dos quatro integrantes.
- **Sets** com seleção de sessões e suporte ao player incorporado do SoundCloud.
- **Galeria** com filtros por categoria e visualização ampliada das fotos.
- **Contratação** para DJ set individual, line-up completo ou parceria de produção.

## Identidade visual

O símbolo **Frequência** reúne um sol nascente e quatro barras de equalizador, uma para cada DJ. A marca usa barras animadas na página e uma versão simplificada no favicon.

| Papel | Cor |
| --- | --- |
| Fundo noturno | `#0B0813` |
| Superfície dos cartões | `#150E24` |
| Destaques do amanhecer | `#FF704E` e `#FFB800` |
| Acento violeta | `#9D4EDD` |
| Indicador turquesa | `#00F5D4` |

**Chakra Petch** dá forma aos títulos e **Inter** é usada nos textos e controles. O layout é responsivo e respeita a preferência por movimento reduzido.

## Rodando o projeto

A versão mínima declarada no projeto é **Node.js 22.23.4**. Use Git e npm para baixar e iniciar o portal:

```bash
git clone https://github.com/AlannCristian/sunrisepvt-site.git
cd sunrisepvt-site
npm ci
npm run dev
```

No PowerShell, use `npm.cmd ci` e `npm.cmd run dev` se o comando `npm` estiver indisponível. Abra o endereço exibido no terminal, normalmente `http://localhost:4321`.

Para conferir o build da versão de produção:

```bash
npm run build
```

## Estrutura

| Arquivo | Responsabilidade |
| --- | --- |
| [`src/pages/index.astro`](src/pages/index.astro) | Página principal, links sociais e interações |
| [`src/data/portal.ts`](src/data/portal.ts) | Agenda, DJs, sets, galeria, e-mail de contratação e crédito |
| [`src/components/Brand.astro`](src/components/Brand.astro) | Marca Frequência |
| [`src/components/Flyer.astro`](src/components/Flyer.astro) | Cartazes dos eventos |
| [`src/styles/global.css`](src/styles/global.css) | Paleta, layout, animações e adaptação para telas menores |
| [`public/media/`](public/media/) | Imagens públicas do portal |

A base é **Astro, TypeScript e Tailwind CSS**. O Astro renderiza o HTML no servidor, o CSS cuida das animações e o JavaScript executado no navegador controla menu, filtros, modais, seleção de sets e formulário.

## Atualizando o conteúdo

**Agenda, DJs e galeria.** Edite `events`, `djs` e `gallery` em `src/data/portal.ts`. Os retratos dos DJs são associados pela ordem do array aos arquivos `dj-1.webp` a `dj-4.webp` em `public/media/`. A versão atual traz nomes, flyers e imagens ilustrativos.

**Sets do SoundCloud.** Abra o set, vá a **Compartilhar → Incorporar** e copie a URL do atributo `src` do iframe. Adicione um item em `sets` e cole a URL no campo `embed`. Se a URL contiver `auto_play=true`, altere para `auto_play=false` para aguardar o Play do visitante.

```ts
{
  title: 'Nome do set',
  dj: 'Nome artístico',
  style: 'Trance',
  cover: '/media/stage.webp',
  embed: 'URL_DO_SRC_DO_PLAYER',
}
```

**Redes sociais.** Preencha `url` na lista `socialLinks` em `src/pages/index.astro` com os endereços oficiais do Instagram, TikTok, SoundCloud e YouTube.

**Contratação.** Preencha `bookingEmail` em `src/data/portal.ts` para que o formulário abra um rascunho no aplicativo de e-mail do visitante. Com o campo vazio, o formulário funciona em modo demonstrativo.

**Crédito no rodapé.** Coloque a logo em `public/media/` e aponte `developerCredit.logo` para o caminho público, como `/media/logo-dev.png`. Use `developerCredit.url` para vincular o crédito ao portfólio.

## Publicação na Vercel

Importe o repositório com o preset **Astro**, use `npm run build` como comando de build e mantenha a pasta de saída padrão do preset. A branch principal deste repositório é a **`master`**. Use-a como branch de produção do projeto na Vercel.

---

Desenvolvimento por **AO Dev**.

## Painel de conteúdo com Sanity

O Studio em `studio/` permite cadastrar **Eventos e flyers**, **Sets** e
**Galeria** no projeto `zfvjvh1j`, dataset público `production`. Copie
`studio/.env.example` para `studio/.env`, informe o ID do projeto e execute:

```powershell
npm.cmd --prefix studio ci
npm.cmd --prefix studio run dev
```

Abra o endereço exibido, entre no Sanity e clique em **Publicar** ao concluir
um cadastro. Na próxima visita ou ao recarregar o portal, a página consulta
o conteúdo publicado. Se uma seção estiver vazia, exibe uma mensagem.

### Publicação do portal

O adaptador `@astrojs/vercel` gera `.vercel/output` com a função que renderiza
a página. Use o preset **Astro**, o comando `npm run build` e o diretório de
saída padrão do preset. Remova uma eventual configuração manual de saída
`dist`. O Project ID e o dataset podem ser sobrescritos com
`SANITY_PROJECT_ID` e `SANITY_DATASET`. O portal consulta a API pública do
Sanity no servidor, sem token ou webhook.
