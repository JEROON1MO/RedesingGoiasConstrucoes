import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { CatalogPage } from "./components/CatalogPage";
import { OffersPage } from "./components/OffersPage";
import { LocationPage } from "./components/LocationPage";
import { AboutPage } from "./components/AboutPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: HomePage },
        { path: "catalogo", Component: CatalogPage },
        { path: "ofertas", Component: OffersPage },
        { path: "localizacao", Component: LocationPage },
        { path: "sobre", Component: AboutPage },
      ],
    },
  ],
  {
    basename: "/RedesingGoiasConstrucoes",
  }
);
