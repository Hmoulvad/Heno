import apiRoutes from "./api/routes.ts";
import appRoutes from "app/routes.tsx";
import { Hono } from "hono";

const app = new Hono();

app.route("/", appRoutes).route("/api", apiRoutes);

export default app;
