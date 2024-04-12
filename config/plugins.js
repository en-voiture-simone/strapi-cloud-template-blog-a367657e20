module.exports = ({env}) => ({
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::homepage.homepage',
          published: {
            url: `${env( 'STRAPI_PREVIEW_PUBLISHED_URL' )}`,
          },
        },
        {
          uid: 'api::page.page',
          draft: {
            url: env( 'STRAPI_PREVIEW_DRAFT_URL' ),
            query: {
              type: 'page',
              slug: '{slug}',
            },
          },
          published: {
            url: `${env( 'STRAPI_PREVIEW_PUBLISHED_URL' )}/{slug}`,
          },
        }
      ],
    },
  },
});
