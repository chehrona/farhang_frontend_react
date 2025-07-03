import React, { lazy, Suspense } from "react";
import { Routes as ServerRoutes, Route, useLocation } from "react-router-dom";

// Landing pages
// const HomePage = lazy(() => import('../../../landingPages/home/Home'));
const PageNotFound = lazy(() => import("../error/errorPage/PageNotFound"));
const PrivacyPage = lazy(() => import("../pages/PrivacyPage"));

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServerRoutes location={location} key={location.pathname}>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="*" element={<PageNotFound />} />

        <Route path="/privacy" element={<PrivacyPage />} />
      </ServerRoutes>
    </Suspense>
  );
};

export default Routes;
