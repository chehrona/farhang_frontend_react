"use client";

import React from "react";
import "react-toastify/dist/ReactToastify.css";

// Routing
import { ErrorBoundary } from "react-error-boundary";
import Routes from "./routes/Routes";

// Contexts
import { GlobalDataProvider } from "./hooks/useGlobalData";

// Components
import ErrorPage from "./error/errorPage/PageNotFound";
// import CustomToastContainer from "./components/common/customToastContainer/CustomToastContainer";

function App(): React.JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <GlobalDataProvider>
        <Routes />
        {/* <CustomToastContainer /> */}
      </GlobalDataProvider>
    </ErrorBoundary>
  );
}

export default App;
