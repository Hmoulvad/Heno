import apiRoutes from "api/routes.tsx";
import appRoutes from "app/routes.tsx";
import { Hono } from "hono";

const app = new Hono();

app.route("/", appRoutes).route("/api", apiRoutes);

Deno.serve(app.fetch);
