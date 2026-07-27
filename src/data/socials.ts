export interface SocialLink {
  name: string;
  icon: string;
  darkIcon?: string;
  href: string;
}

export const socials: SocialLink[] = [
  {
    name: "Github",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
    href: "https://github.com/KHMILA-Rania",
  },
 
  {
    name: "WhatsApp",
    icon: "/social/whats.png",
    darkIcon: "/social/whats.png",
    href:  "https://wa.me/21629884530",
  },
  {
    name: "Gmail",
    icon: "/social/gmail.svg",
    href: "mailto:rania.khmila@gmail.com",
  },
 

];
