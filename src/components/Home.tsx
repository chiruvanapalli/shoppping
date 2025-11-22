import React, { useEffect } from "react";
import Slider from "./Slider";
import { useApi } from "../api/common-hook/useApi";
import { endPoints } from "../api/common-hook/api-end-points";

const Home = () => {
  const { data, request } = useApi();

  useEffect(() => {
    request("get", endPoints.popularProducts, null, null);
  }, [request]);

  console.log(data);

  return <Slider />;
};

export default Home;
