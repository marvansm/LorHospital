import { createRootRoute, createRoute } from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => <></>,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <></>,
});

export const routeTree = rootRoute.addChildren([indexRoute]);
