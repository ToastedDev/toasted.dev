import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CFzGWuP-.mjs';
import { manifest } from './manifest_wk85qAZE.mjs';

const serverIslandMap = new Map([
	['VideosList', () => import('./chunks/VideosList_DaZ4UD9v.mjs')],
]);;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page3 = () => import('./pages/projects.astro.mjs');
const _page4 = () => import('./pages/rss.xml.astro.mjs');
const _page5 = () => import('./pages/videos.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/projects.astro", _page3],
    ["src/pages/rss.xml.ts", _page4],
    ["src/pages/videos.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "99f9148e-a8e8-4779-afb2-6015e18e192f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
