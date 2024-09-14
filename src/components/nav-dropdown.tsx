import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import type { SVGProps } from "react";

interface Link {
  name: string;
  href: string;
  slug?: string;
}

const links: Link[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
    slug: "/blog",
  },
];

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path></svg>
  )
}

export function NavDropdown({ slug }: { slug: string }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-2 text-orange-500 hover:underline outline-none">
        <Menu className="w-8 h-8 hover:opacity-75 transition-opacity" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" className="bg-orange-950 rounded-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 overflow-hidden flex flex-col">
          {links.map((link) => (
            <DropdownMenu.Item key={link.href} asChild className={`pr-2 pl-4 py-1 text-right outline-none ${(link.slug ? slug.startsWith(link.slug) : (slug === link.href || slug === link.href + "/")) ? "bg-orange-700" : "bg-orange-900"} hover:opacity-75 transition-opacity`}>
              <a href={link.href}>{link.name}</a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
