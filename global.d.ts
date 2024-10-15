import type { Child } from "hono/jsx";

declare module "hono/jsx" {
  namespace JSX {
    interface HTMLAttributes {
      children?: Child;
    }
  }
}
declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: { title: string; description: string; path: string }
    ): Response;
  }
}

declare module "bun" {
  interface Env {}
}
