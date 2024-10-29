import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, a as renderComponent } from './astro/server_BiBKPtZ5.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$3 = createAstro("https://toasted.dev");
const $$Camera = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Camera;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"${spreadAttributes(props)}><path fill="currentColor" d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M192 184H32V72h160zm48-22.95l-32-21.33v-23.44L240 95Z"></path></svg>`;
}, "/home/toasted/dev/personal/toasted.dev/src/icons/camera.astro", void 0);

const $$Astro$2 = createAstro("https://toasted.dev");
const $$Live = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Live;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}><path fill="currentColor" d="M6.343 4.938a1 1 0 0 1 0 1.415a8.003 8.003 0 0 0 0 11.317a1 1 0 1 1-1.414 1.414c-3.907-3.906-3.907-10.24 0-14.146a1 1 0 0 1 1.414 0m12.732 0c3.906 3.907 3.906 10.24 0 14.146a1 1 0 0 1-1.415-1.414a8.003 8.003 0 0 0 0-11.317a1 1 0 0 1 1.415-1.415M9.31 7.812a1 1 0 0 1 0 1.414a3.92 3.92 0 0 0 0 5.544a1 1 0 1 1-1.415 1.414a5.92 5.92 0 0 1 0-8.372a1 1 0 0 1 1.415 0m6.958 0a5.92 5.92 0 0 1 0 8.372a1 1 0 0 1-1.414-1.414a3.92 3.92 0 0 0 0-5.544a1 1 0 0 1 1.414-1.414m-4.186 2.77a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path></svg>`;
}, "/home/toasted/dev/personal/toasted.dev/src/icons/live.astro", void 0);

const $$Astro$1 = createAstro("https://toasted.dev");
const $$Star = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Star;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}><path fill="currentColor" d="m12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45zM12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"></path></svg>`;
}, "/home/toasted/dev/personal/toasted.dev/src/icons/star.astro", void 0);

const $$Astro = createAstro("https://toasted.dev");
const $$VideosList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VideosList;
  const links = ["All channels", "ToastedToast", "MinMax"];
  const channel = Astro2.url.searchParams.get("channel");
  function splitByMonth(data) {
    return data.reduce(
      (acc, item) => {
        const date = new Date(item.published_at);
        const month = date.toLocaleDateString("en-US", { month: "long" }) + " " + date.getFullYear();
        if (!acc[month]) {
          acc[month] = [];
        }
        acc[month].push(item);
        return acc;
      },
      {}
    );
  }
  const res = await fetch(
    `https://videos.toasted.dev/videos${channel ? `?channel=${channel}` : ""}`
  );
  const { videos } = await res.json();
  const separatedVideos = splitByMonth(videos);
  function formatNumber(num) {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "m";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "k";
    }
    return num.toString();
  }
  Astro2.response.headers.set(
    "Cache-Control",
    "public, max-age=300, s-maxage=3600"
  );
  return renderTemplate`${maybeRenderHead()}<div class="mt-2 flex flex-col gap-3 md:flex-row"> <aside class="flex shrink-0 flex-col gap-1 md:w-48"> ${links.map((link) => renderTemplate`<a${addAttribute(link.includes("All") ? "/videos" : `/videos?channel=${link}`, "href")}${addAttribute([
    "flex items-center gap-3 rounded-lg px-3 py-1.5 transition-all hover:bg-orange-900/50",
    (link.includes("All") ? Astro2.url.searchParams.get("channel") === null : Astro2.url.searchParams.get("channel") === link) ? "bg-orange-900" : ""
  ], "class:list")}> <p class="font-bold">${link}</p> </a>`)} </aside> <div class="flex flex-1 flex-grow flex-col gap-3"> <div class="flex flex-col gap-1"> <div class="flex items-center gap-1.5 text-sm uppercase tracking-widest text-orange-500"> <div class="w-[13px] border-b border-orange-700"></div> <p>Spotlight</p> ${renderComponent($$result, "Star", $$Star, { "class": "h-5 w-5" })} <div class="w-full border-b border-orange-700"></div> </div> <ul class="flex flex-col"> ${videos.filter((video) => video.is_spotlight).map((video) => renderTemplate`<li> <a${addAttribute(video.url ?? `https://youtube.com/watch?v=${video.id}`, "href")} target="_blank" class="flex items-start space-x-3 rounded-lg px-4 py-3 transition-all hover:bg-orange-900/50"> <div class="shrink-0"> ${video.is_live ? renderTemplate`${renderComponent($$result, "Live", $$Live, { "class": "mt-1 text-orange-500" })}` : renderTemplate`${renderComponent($$result, "Camera", $$Camera, { "class": "mt-1 text-orange-500" })}`} </div> <div class="flex-1"> <div class="flex items-center justify-between gap-1"> <div> <div> <p class="font-bold md:inline"> ${video.title} </p><p class="hidden text-xs text-neutral-300 md:inline-block"> ${formatNumber(video.views)} views
</p>  <p class="text-xs text-neutral-300 md:hidden"> ${formatNumber(video.views)} views
</p> </div> <p class="inline text-xs text-orange-500"> ${video.channel_name} &middot;${" "} ${new Date(video.published_at).toLocaleDateString()} </p> </div> ${video.is_spotlight && renderTemplate`<div class="shrink-0"> ${renderComponent($$result, "Star", $$Star, { "class": "mt-1 h-6 w-6 text-orange-500" })} </div>`} </div> </div> </a> </li>`)} </ul> </div> ${Object.keys(separatedVideos).map((month) => renderTemplate`<div class="flex flex-col gap-1"> <div class="flex items-center gap-1.5 text-sm uppercase tracking-widest text-orange-500"> <div class="w-[13px] border-b border-orange-700"></div> <p class="shrink-0">${month}</p> <div class="w-full border-b border-orange-700"></div> </div> <ul class="flex flex-col"> ${separatedVideos[month].map((video) => renderTemplate`<li> <a${addAttribute(video.url ?? `https://youtube.com/watch?v=${video.id}`, "href")} target="_blank" class="flex items-start space-x-3 rounded-lg px-4 py-3 transition-all hover:bg-orange-900/50"> <div class="shrink-0"> ${video.is_live ? renderTemplate`${renderComponent($$result, "Live", $$Live, { "class": "mt-1 text-orange-500" })}` : renderTemplate`${renderComponent($$result, "Camera", $$Camera, { "class": "mt-1 text-orange-500" })}`} </div> <div class="flex-1"> <div class="flex items-center justify-between gap-1"> <div> <div> <p class="font-bold md:inline"> ${video.title} </p><p class="hidden text-xs text-neutral-300 md:inline-block"> ${formatNumber(video.views)} views
</p>  <p class="text-xs text-neutral-300 md:hidden"> ${formatNumber(video.views)} views
</p> </div> <p class="inline text-xs text-orange-500"> ${video.channel_name} &middot;${" "} ${new Date(video.published_at).toLocaleDateString()} </p> </div> ${video.is_spotlight && renderTemplate`<div class="shrink-0"> ${renderComponent($$result, "Star", $$Star, { "class": "mt-1 h-6 w-6 text-orange-500" })} </div>`} </div> </div> </a> </li>`)} </ul> </div>`)} </div> </div>`;
}, "/home/toasted/dev/personal/toasted.dev/src/components/videos-list.astro", void 0);

const $$file = "/home/toasted/dev/personal/toasted.dev/src/components/videos-list.astro";
const $$url = undefined;

export { $$VideosList as default, $$file as file, $$url as url };
