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
        path: "/meistä",
        element: <AboutPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/käyttöehdot",
        element: <TermsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/ota-meihin-yhteyttä",
        element: <ContactPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/tietosuojakäytäntö",
        element: <PrivacyPage />,
        errorElement: <ErrorPage />
    }

  ];
  
  export const router = createBrowserRouter(routes, { basename: "/nettbonuksia" });
  
  export const useCurrentPath = () => {
    const location = useLocation();
    const [{ pathname }]: any = matchRoutes(routes, location);
    return pathname;
  };