export type RecipeStep = { action: "custom"; text: string };

export function text(str: string): RecipeStep {
  return { action: "custom", text: str };
}
