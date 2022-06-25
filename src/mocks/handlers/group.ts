// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { Bookmark, Group } from '~/@types/domain';

const group = [
  // Add group
  rest.post(`${import.meta.env.VITE_API_SERVER_URI}/groups`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ ok: true })),
  ),
  // Patch group
  rest.patch(
    `${import.meta.env.VITE_API_SERVER_URI}/groups/:groupId`,
    (_, res, ctx) => res(ctx.status(200), ctx.json({ ok: true })),
  ),
  // Delete group
  rest.delete(
    `${import.meta.env.VITE_API_SERVER_URI}/groups/:groupId`,
    (_, res, ctx) => res(ctx.status(200), ctx.json({ ok: true })),
  ),
  // Get groups
  rest.get(`${import.meta.env.VITE_API_SERVER_URI}/groups`, (_, res, ctx) => {
    const groups: Group[] = [
      {
        groupId: 'ade9dec7-b60b-4561-a067-ee882cb1385d',
        name: 'My Group',
        visibility: 'public',
      },
      {
        groupId: '0d01b19b-556f-47e7-b307-d6a61082febd',
        name: 'bbodeuk',
        visibility: 'private',
      },
      {
        groupId: 'bd5239fd-1c0a-4ce8-87f5-5b8251cd7926',
        name: 'And we may need a group with a pretty long name to check the design',
        visibility: 'public',
      },
      {
        groupId: '921d98f1-b617-44fd-91d0-a74463d0ef5a',
        name: "Girls' Generation",
        visibility: 'private',
      },
      {
        groupId: 'c03f8591-f180-4d43-b5ac-5eb4f7ca0a78',
        name: 'AESPA',
        visibility: 'public',
      },
      {
        groupId: '1fe059a7-1f8c-4f42-bb49-6841e968b302',
        name: 'Red Velvet',
        visibility: 'private',
      },
      {
        groupId: '4b5916f7-5eaa-4e20-a7a7-c554ac0dbe11',
        name: 'fromis_9',
        visibility: 'public',
      },
      {
        groupId: 'ad79ab08-530f-450e-b308-c87a8860a585',
        name: 'STAYC',
        visibility: 'private',
      },
      {
        groupId: 'b450658d-7716-4e3b-b10d-6b904ab80664',
        name: 'Black Pink',
        visibility: 'private',
      },
      {
        groupId: '0b5eafde-c33b-41a5-9bdc-bdd385cc64cb',
        name: 'f(x)',
        visibility: 'private',
      },
    ];

    return res(ctx.status(200), ctx.json({ ok: true, data: { groups } }));
  }),
  // Get group by Id
  rest.get(
    `${import.meta.env.VITE_API_SERVER_URI}/groups/:groupId`,
    (req, res, ctx) => {
      const perPage = 20;
      const page = +(req.url.searchParams.get('page') || '1');
      const bookmarks: Bookmark[] = [...new Array(perPage)].map((_, i) => ({
        title: 'My awesome bookmark',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id sollicitudin ligula. Quisque vitae nibh arcu. Aliquam tempor nisl nulla, sed tempus lectus sodales eu.',
        link: `https://example.com/${perPage * (page - 1) + i}`,
        image: 'https://picsum.photos/400/300',
        tags: ['react', 'typescript'],
      }));

      return res(
        ctx.status(200),
        ctx.json({
          ok: true,
          data: {
            bookmarks,
            pagination: {
              page,
              nextPage: true,
            },
          },
        }),
      );
    },
  ),
];

export default group;
