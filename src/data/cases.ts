export interface CaseItem {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
}

const slugs = [
  ["nobel-2025", "nobel"],
  ["grecia-antiga", "grecia"],
  ["olimpiadas-2024", "olimpiadas"],
  ["shogun-disney", "shogun"],
  ["revista-instagram", "revista"],
] as const;

export function getCases(t: (key: string) => string): CaseItem[] {
  return slugs.map(([slug, key]) => ({
    slug,
    title: t(`case.${key}.title`),
    client: t(`case.${key}.client`),
    category: t(`case.${key}.category`),
    description: t(`case.${key}.desc`),
  }));
}
