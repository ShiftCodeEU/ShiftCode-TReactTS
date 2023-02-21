import {
    Outlet,
    ReactRouter,
    RootRoute,
    Route,
    RouterProvider,
} from "@tanstack/react-router";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";

const Root = () => {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
};

// Create a root route
const rootRoute = new RootRoute({
    component: Root,
});

const HomeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([HomeRoute]);

// Create the router using your route tree
const router = new ReactRouter({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const MainRouter = () => {
    return <RouterProvider router={router} />;
};
export default MainRouter;
