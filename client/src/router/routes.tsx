import AboutUsPage from "@/app/about-us/page";
import HomePage from "@/featured/pages/Home";
import MainLayout from "@/layout";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import DoctorDetail from "@/app/about-us/doctors/DoctorDetail";

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

export const DoctorDetailRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-us/doctors/$doctorId",
  component: () => {
    return <DoctorDetail doctorId="" />;
  },
});

export const routeTree = rootRoute.addChildren([
  HomeRouter,
  AboutUsRouter,
  DoctorDetailRouter,
]);
