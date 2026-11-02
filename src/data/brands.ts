export interface Brand {
  name: string;
  /** Path under /public/logos, rendered as a single-color mask */
  logo: string;
  /** Logo box size inside its cell, as Tailwind classes, to balance wide vs. compact marks */
  size: string;
  /** The video or case where the partnership shows up */
  href?: string;
  internal?: boolean;
}

export const brands: Brand[] = [
  { name: "Disney+", logo: "/logos/disneyplus.svg", size: "w-[62%] h-[60%]", href: "/cases/shogun-disney", internal: true },
  { name: "Globo Esporte", logo: "/logos/ge.svg", size: "w-[44%] h-[56%]", href: "/cases/olimpiadas-2024", internal: true },
  { name: "Opera", logo: "/logos/opera-wordmark.svg", size: "w-[68%] h-[42%]", href: "https://youtu.be/j_BSyCFzxuM?t=119" },
  { name: "Insider", logo: "/logos/insider.svg", size: "w-[70%] h-[26%]", href: "https://youtu.be/XDOWW7CQmhg?t=243" },
  { name: "Alura", logo: "/logos/alura.svg", size: "w-[60%] h-[40%]", href: "https://www.youtube.com/watch?v=MBwGOxEoJgQ" },
  { name: "CyberGhost", logo: "/logos/cyberghost.png", size: "w-[78%] h-[36%]", href: "https://youtu.be/BpuNlQ_x2AA?t=99" },
  { name: "Uninassau", logo: "/logos/uninassau.png", size: "w-[78%] h-[34%]", href: "https://youtu.be/lcpzeK1-Ulg?t=76" },
  { name: "Promova", logo: "/logos/promova.svg", size: "w-[72%] h-[36%]", href: "https://youtu.be/97ozWnsSq0A?t=109" },
  { name: "Manual", logo: "/logos/manual.svg", size: "w-[66%] h-[24%]", href: "https://youtu.be/ttkt5pdArZY?t=145" },
  { name: "NordVPN", logo: "/logos/nordvpn.svg", size: "w-[74%] h-[34%]", href: "https://www.youtube.com/watch?v=BpuNlQ_x2AA" },
];
