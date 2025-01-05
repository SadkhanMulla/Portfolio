import React, { lazy, Suspense } from "react";
import "font-awesome/css/font-awesome.min.css";

const Layout = lazy(() => import("./components/Layout")); // Lazy load Layout component

function App() {
  return (
    <Suspense fallback={<div>Loading Layout...</div>}>
      <Layout />
    </Suspense>
  );
}

export default App;
