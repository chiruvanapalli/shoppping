import React from "react";
import useDynamicBreadcrumb from "../shared/useDynamicBreadcrumb";
import BreadCrumb from "../shared/BreadCrumb";

const About = () => {
  const crumbs = useDynamicBreadcrumb();
  return (
    <div>
      <BreadCrumb items={crumbs} />
      <p>About page</p>
    </div>
  );
};

export default About;
