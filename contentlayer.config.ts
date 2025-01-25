import {
  defineDocumentType,
  FieldDefs,
  makeSource,
} from "contentlayer/source-files";
import rehypeSlug from "rehype-slug"; // Optional: Add slugs to headings
import remarkGfm from "remark-gfm"; // Optional: Enable GitHub flavored markdown

const baseFields: FieldDefs = {
  title: { type: "string", required: true },
  ogTitle: { type: "string", required: true },
  description: { type: "string", required: true },
  image: { type: "string", required: true },
  published: { type: "date", required: true },
};

const productFields: FieldDefs = {
  ...baseFields,
  published: { type: "date", required: false },
};

const changelogFields: FieldDefs = {
  title: { type: "string", required: true },
  publishedAt: { type: "date", required: true },
  headerImage: { type: "string", required: true },
  authors: { type: "list", of: { type: "string" }, required: false },
  description: { type: "string", required: true },
};

interface DocumentTypeConfig {
  name: string;
  path: string;
  fields?: FieldDefs;
}

const contentTypeList: DocumentTypeConfig[] = [
  {
    name: "Blog",
    path: "blog",
    fields: {
      title: { type: "string", required: true },
      published: { type: "date", required: true },
      tags: {
        type: "list",
        of: { type: "string" },
        required: true,
      },
      readingTime: { type: "number", required: true },
      image: { type: "string", required: true },
      metaDesc: { type: "string", required: true },
      attribution: { type: "string" },
      writerImg: { type: "string" },
      writerName: { type: "string" },
    },
  },
  { name: "ContentGallery", path: "content-gallery" },
  {
    name: "UseCases",
    path: "use-cases",
    fields: productFields,
  },
  {
    name: "Product",
    path: "product",
    fields: productFields,
  },
  {
    name: "Changelog",
    path: "changelog",
    fields: changelogFields,
  },
];

const documentTypes = contentTypeList.map((contentType) => {
  const Content = defineDocumentType(() => {
    const pathName = contentType.path;
    const fields = contentType.fields || baseFields;

    return {
      name: contentType.name,
      filePathPattern: `{en,ja}/${pathName}/**/*.mdx`,
      contentType: "mdx",
      fields,
      computedFields: {
        url: {
          type: "string",
          resolve: (doc) => {
            const regex = new RegExp(`^${pathName}/`);
            return doc._raw.flattenedPath.replace(regex, "");
          },
        },
        locale: {
          type: "string",
          resolve: (doc) => doc._raw.sourceFilePath.split("/")[0],
        },
        slug: {
          type: "string",
          resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
        },
      },
    };
  });
  return Content;
});

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [...documentTypes],

  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});
