interface Link {
  name: string;
  href: string;
  slug?: string;
}

export const links: Link[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Videos",
    href: "/videos",
  },
  {
    name: "Blog",
    href: "/blog",
    slug: "/blog",
  },
];