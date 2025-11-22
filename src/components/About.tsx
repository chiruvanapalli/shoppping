import React from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "./common/BreadCrumb";

const About = () => {
  const crumbs = useDynamicBreadcrumb();
  const list = useSelector((state: any) => state.products.list);
  console.log("redux", list);

  return (
    <div>
      <BreadCrumb items={crumbs} />
      <p>About page</p>
    </div>
  );
};

export default About;
function useDynamicBreadcrumb() {
  throw new Error("Function not implemented.");
}
