import { useLocation } from "react-router-dom";

const useDynamicBreadcrumb = () => {
  const location = useLocation();

  const pathParts = location.pathname.split("/").filter(Boolean); // remove empty strings

  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...pathParts.map((part, i) => {
      const href = "/" + pathParts.slice(0, i + 1).join("/");

      return {
        label: part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        href,
      };
    }),
  ];

  return breadcrumbs;
};

export default useDynamicBreadcrumb;
