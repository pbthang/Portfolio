import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, h as deserializeManifest } from './chunks/astro.9d15025c.mjs';
import { _ as _page0 } from './chunks/pages/all.7e0ee045.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 */import 'contentful';

const pageMap = new Map([["src/pages/index.astro", _page0],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/index.2cfc6d3b.css"],"scripts":[{"type":"external","value":"_astro/hoisted.f0c4b319.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://pbthang.netlify.app","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/pbthang/pbthang-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.f0c4b319.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.2cfc6d3b.css","/favicon.svg","/google28701873b5619571.html","/metalicMap.jpg","/nx.png","/ny.png","/nz.png","/px.png","/py.png","/pz.png","/_astro/hoisted.f0c4b319.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
