import { defineField, defineType } from 'sanity';

const order = defineField({
  name: 'order',
  title: 'Ordem na página',
  type: 'number',
  initialValue: 0,
  validation: rule => rule.integer().min(0),
});

export const schemaTypes = [
  defineType({
    name: 'portalEvent', title: 'Eventos e flyers', type: 'document',
    fields: [
      defineField({ name: 'name', title: 'Nome do evento', type: 'string', validation: rule => rule.required() }),
      defineField({ name: 'genre', title: 'Estilos musicais', type: 'string', validation: rule => rule.required() }),
      defineField({ name: 'description', title: 'Descrição', type: 'text', validation: rule => rule.required() }),
      defineField({ name: 'date', title: 'Data', type: 'date', options: { dateFormat: 'DD/MM/YYYY' } }),
      defineField({ name: 'location', title: 'Local', type: 'string' }),
      defineField({ name: 'tickets', title: 'Link de ingressos', type: 'url', validation: rule => rule.uri({ scheme: ['https'] }) }),
      defineField({ name: 'flyer', title: 'Flyer', type: 'image', validation: rule => rule.required() }),
      order,
    ],
    preview: { select: { title: 'name', subtitle: 'date', media: 'flyer' } },
  }),
  defineType({
    name: 'portalSet', title: 'Sets', type: 'document',
    fields: [
      defineField({ name: 'title', title: 'Nome do set', type: 'string', validation: rule => rule.required() }),
      defineField({ name: 'dj', title: 'DJ', type: 'string', validation: rule => rule.required() }),
      defineField({ name: 'style', title: 'Estilo', type: 'string', validation: rule => rule.required() }),
      defineField({ name: 'cover', title: 'Capa', type: 'image' }),
      defineField({
        name: 'embed', title: 'URL do player do SoundCloud', type: 'url',
        description: 'Cole o valor de src do código Incorporar.',
        validation: rule => rule.required().custom(value => {
          if (!value) return true;
          try {
            const url = new URL(value);
            return (url.origin === 'https://w.soundcloud.com' && url.pathname === '/player/' && url.searchParams.has('url')) ||
              'Use a URL de incorporação do player do SoundCloud.';
          } catch {
            return 'Informe uma URL válida.';
          }
        }),
      }),
      order,
    ],
    preview: { select: { title: 'title', subtitle: 'dj', media: 'cover' } },
  }),
  defineType({
    name: 'portalPhoto', title: 'Galeria', type: 'document',
    fields: [
      defineField({ name: 'title', title: 'Legenda', type: 'string', validation: rule => rule.required() }),
      defineField({ name: 'alt', title: 'Descrição da imagem', type: 'string', validation: rule => rule.required() }),
      defineField({
        name: 'category', title: 'Categoria', type: 'string',
        options: { list: ['Pista & lasers', 'Amanhecer', 'Bastidores'] },
        validation: rule => rule.required(),
      }),
      defineField({ name: 'photo', title: 'Foto', type: 'image', validation: rule => rule.required() }),
      order,
    ],
    preview: { select: { title: 'title', subtitle: 'category', media: 'photo' } },
  }),
];
