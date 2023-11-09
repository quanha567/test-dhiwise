import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SignUpActive = React.lazy(() => import("pages/SignUpActive"));
const SignUpEmpty = React.lazy(() => import("pages/SignUpEmpty"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signupempty" element={<SignUpEmpty />} />
          <Route path="/signupactive" element={<SignUpActive />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
