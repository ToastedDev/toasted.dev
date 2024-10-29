import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DePnEUBt.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_BiBKPtZ5.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/toasted/dev/personal/toasted.dev/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"videos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/videos","isIndex":false,"type":"page","pattern":"^\\/videos\\/?$","segments":[[{"content":"videos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/videos.astro","pathname":"/videos","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://toasted.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/toasted/dev/personal/toasted.dev/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/toasted/dev/personal/toasted.dev/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/toasted/dev/personal/toasted.dev/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/toasted/dev/personal/toasted.dev/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/home/toasted/dev/personal/toasted.dev/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/toasted/dev/personal/toasted.dev/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/home/toasted/dev/personal/toasted.dev/src/pages/videos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/videos@_@astro":"pages/videos.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/home/toasted/dev/personal/toasted.dev/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/toasted/dev/personal/toasted.dev/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CikwOMWD.mjs","/home/toasted/dev/personal/toasted.dev/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B1eWSPdU.mjs","\u0000@astrojs-manifest":"manifest_wk85qAZE.mjs","/home/toasted/dev/personal/toasted.dev/src/components/videos-list.astro":"chunks/VideosList_DaZ4UD9v.mjs","/home/toasted/dev/personal/toasted.dev/.astro/content-assets.mjs":"chunks/content-assets_0ilSJs7z.mjs","/home/toasted/dev/personal/toasted.dev/src/components/navbar/dropdown":"_astro/dropdown.zgqAwEYR.js","@astrojs/react/client.js":"_astro/client.CcsSYoR3.js","/home/toasted/dev/personal/toasted.dev/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/toasted.BpTiVQ1B.jpg","/_astro/update-1-taking-a-break.BZ_KTC2v.png","/_astro/update-1-lies.D4W5cHC-.png","/_astro/update-2-comeback.CbJd7MA1.png","/_astro/update-2-evilify.U0hfL3kH.png","/_astro/update-2-blackmail.D158x-a4.png","/_astro/update-2-apology.B37c8YF-.png","/_astro/begging-to-know.D3SpIlN7.png","/_astro/tell-me-also-in-dms-you-yab.Lu_UldFm.png","/_astro/i-am-more-mature.DStv4qEK.png","/_astro/if-you-tell-me-i-gonna-stop-hating-on-yabc.DSZZzjkA.png","/_astro/please-stop.DwV-jeuo.png","/_astro/doubling-down-on-hating-on-yabc.FgNQbHMd.png","/_astro/i-do-not-care.CMWGbS9D.png","/_astro/im-a-narcissist.eghWVI0C.png","/_astro/matheus-admitting-to-blackmailing-me.B9IxC-9O.png","/_astro/i-can-end-your-2-streams.DOqkF2bW.png","/_astro/update-2-kys.DATne6We.png","/_astro/i-have-no-plan-on-apologizing.C-cvUg6A.png","/_astro/question-marks.B6Bq8yFm.png","/_astro/i-believe-i-am-not-in-the-wrong.DCIcCm2C.png","/_astro/things-are-not-how-they-seem.eQzurbf0.png","/_astro/blackmail-is-okay-for-me.BiEPax3S.png","/_astro/i-can-blackmail-my-own-best-friend.BeGNRKAz.png","/_astro/im-a-narcissist-2.9uechd2n.png","/_astro/you-saw-him-cry-and-you-continued.Bds9z1YG.png","/_astro/i-was-curious-af.CwRFHYay.png","/_astro/im-the-only-one-with-manager-now.r7TGSSr8.png","/_astro/toast-is-stupid-if-he-thinks-ill-let-him-have-access-to-graphify.8VPey59c.png","/_astro/it-was-all-a-character.Bd4NDqEK.png","/_astro/blocked.Bbpn3iiO.png","/_astro/og.BL5dve51.jpg","/_astro/blocked-1.B8XkZ051.png","/_astro/blocked-2.BJ5TlU_q.png","/_astro/amy-1.rlhDl5lG.png","/_astro/amy-2.BagR-QkS.png","/_astro/i-can-just-say-its-all-lies.DWIxpZ7X.png","/_astro/bro-finally-became-a-good-person.DTR9vNPG.png","/_astro/amy-3.CnkjUHKJ.png","/_astro/amy-4.CuJwN5Zx.png","/_astro/og.BOL7IDWW.jpg","/_astro/former-trans-1.CBRIz1dY.png","/_astro/former-trans-2.DZhj1RxS.png","/_astro/former-trans-3.BcM6IlP5.png","/_astro/pleading-1.Cc2iyD-0.png","/_astro/pleading-2.CLKVxJGq.png","/_astro/pleading-3.C6DbUtjS.png","/_astro/pleading-4.Defq5jh1.png","/_astro/og.C9EheUkX.jpg","/_astro/nunito-sans-cyrillic-wght-normal.CwlCx3uU.woff2","/_astro/nunito-sans-latin-ext-wght-normal.pFeyoCiG.woff2","/_astro/nunito-sans-vietnamese-wght-normal.CA_Ew_Q_.woff2","/_astro/nunito-sans-cyrillic-ext-wght-normal.Dsij8Y2R.woff2","/_astro/nunito-sans-latin-wght-normal.McYlyt2m.woff2","/_astro/_slug_.kyIUsKIV.css","/favicon.svg","/logo.png","/robots.txt","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.2daoxv0f.js","/_astro/client.CcsSYoR3.js","/_astro/dropdown.zgqAwEYR.js","/_astro/index.I3bF3y5c.js","/rss/styles.xsl","/404.html","/blog/index.html","/projects/index.html","/rss.xml","/videos/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["src/components/videos-list.astro","VideosList"]],"key":"Z772oV7Lq5XlxcOhj4qRxWP8Dj0+dOD/XpZKHSelvDI=","envGetSecretEnabled":true});

export { manifest };
