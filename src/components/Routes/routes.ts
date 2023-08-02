import { lazy } from "solid-js";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("@/components/Pages/MainDashboardPage")),
  },
  {
    path: "/signin",
    component: lazy(() => import("@/components/Pages/SignupSigninPage")),
  },
  {
    path: "*",
    component: lazy(() => import("@/components/Pages/FallbackRedirect")),
  },
];
