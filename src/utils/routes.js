import {
    createBrowserRouter,
    matchRoutes,
    Navigate,
    useLocation
  } from "react-router-dom";
  import { HomePage, AboutPage, TermsPage, ContactPage, PrivacyPage,  ErrorPage } from '../containers';
  const routes = [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
        path: "/meista",
        element: <AboutPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/kayttoehdot",
        element: <TermsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/ota-meihin-yhteytta",
        element: <ContactPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/tietosuojakaytanto",
        element: <PrivacyPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "*",
        element: <ErrorPage />
    }

  ];
  
  export const router = createBrowserRouter(routes, { basename: "/nettbonuksia" });
  
  export const useCurrentPath = () => {
    const location = useLocation();
    const [{ pathname }]: any = matchRoutes(routes, location);
    return pathname;
  };