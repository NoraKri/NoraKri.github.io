export function slugify(name: string): string {
  return name.toLowerCase()
    .replace(/å/g, 'a').replace(/æ/g, 'ae').replace(/ø/g, 'o')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}
