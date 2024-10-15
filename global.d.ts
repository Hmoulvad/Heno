import type { Child } from "hono/jsx";
import "typed-htmx";

declare module "hono/jsx" {
  namespace JSX {
    interface HTMLAttributes extends HtmxAttributes {
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
