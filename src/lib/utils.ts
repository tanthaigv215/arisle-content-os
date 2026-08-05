export function createModuleSlug(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}
