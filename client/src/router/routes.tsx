import AboutUsPage from "@/app/about-us/page";
import HomePage from "@/featured/pages/Home";
import MainLayout from "@/layout";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";

const RootComponent = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const rootRoute = createRootRoute({
  component: RootComponent,
});

export const HomeRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
export const AboutUsRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-us",
  component: AboutUsPage,
});

export const routeTree = rootRoute.addChildren([HomeRouter, AboutUsRouter]);
