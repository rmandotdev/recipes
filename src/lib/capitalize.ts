export function capitalize(s: string): string {
  const c = s[0];
  if (!c) return "";
  return c.toUpperCase() + s.slice(1);
}
