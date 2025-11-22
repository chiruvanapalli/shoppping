import api from "./axiosClient";

type LoginPayload = {
  email: string;
  password: string;
};

export const commonService = {
  products: () => api.get("/todos"),
  login: ({ email, password }: LoginPayload) =>
    api.post("/auth/login", { email, password }),
  register: (userDetails: any) => api.post("/auth/register", userDetails),
  popularProducts: () => api.get("/popular-products"),
};
