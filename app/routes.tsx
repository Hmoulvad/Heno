import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import RootLayout from "./layout.tsx";
import HomePage from "./page.tsx";
import UIPage from "./ui/page.tsx";
import FormPage from "./form/page.tsx";
import { cache } from "hono/cache";

const appRoutes = new Hono();

appRoutes
  // Cache all routes
  .get(
    "*",
    cache({
      cacheName: "heno",
      cacheControl: "max-age=3600",
      wait: true,
    })
  )
  // Middleware to add the RootLayout to all routes
  .use(
    "*",
    jsxRenderer(({ children, ...rest }) => (
      <RootLayout {...rest}>{children}</RootLayout>
    ))
  )
  // Routes
  .get("/", (c) =>
    c.render(<HomePage />, {
      title: "Home Page",
      description: "This is the home page",
      path: "/",
    })
  )
  .get("/ui", (c) =>
    c.render(<UIPage />, {
      title: "UI Page",
      description: "This is the UI page",
      path: "/ui",
    })
  )
  .get("/form", (c) =>
    c.render(<FormPage />, {
      title: "Form Page",
      description: "This is the Form page",
      path: "/form",
    })
  );

export default appRoutes;
