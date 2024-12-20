const contentGallery = ['air360-ebook-3', 'air360-ebook-2', 'air360-ebook-1', 'mystery-case', 'mystery-case2', 'cro-checklist-campaign', 'cro-roadmap-campaign'];

const languages = ['en', 'ja'];

export const contentGalleryRedirects = languages.flatMap((lang) =>
  contentGallery.map((content) => {
    return {
      source: `/${lang}/${content}`,
      destination: `/${lang}/content-gallery/${content}/`,
      permanent: true
    };
  })
);

const contentProduct = ['data-integrations'];

export const contentProductRedirects = languages.flatMap((lang) =>
  contentProduct.map((content) => {
    return {
      source: `/${lang}/${content}`,
      destination: `/${lang}/product/${content}/`,
      permanent: true
    };
  })
);

export const contentRedirect = [...contentProductRedirects, ...contentGalleryRedirects];
