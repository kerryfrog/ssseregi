// TODO: @mapbox/rehype-prism does not have typescript definition
// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism';
import html from 'rehype-stringify';
import gfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

function addResponsiveImageClass() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        // eslint-disable-next-line no-param-reassign
        node.properties.className = ['responsive-img'];
      }
    });
  };
}

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(gfm)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(addResponsiveImageClass)
    // @ts-ignore
    .use(html)
    .process(markdown);
  return result.toString().replace(/@@baseUrl@@/g, process.env.baseUrl || '');
}
