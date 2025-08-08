import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://beyondbar.in'
  const routes = ['', '/about', '/people', '/practices', '/insights', '/careers', '/contact']
  return routes.map((r) => ({ url: `${base}${r}`, changeFrequency: 'weekly', priority: r === '' ? 1 : 0.7 }))
}