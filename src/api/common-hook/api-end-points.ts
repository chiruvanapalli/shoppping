// import api from "./axiosClient";

// export const commonService = {
//   login: (payload: { email: string; password: string }) =>
//     api.post("/todos", payload),
//   users: (payload: { email: string; password: string }) =>
//     api.post("/todos", payload),

//   register: (payload: { username: string; email: string; passwrod: string }) =>
//     api.post("/auth/register", payload),
//   getProducts: () => api.get("/getAll"),
//   getProductsById: (id: string) => api.get(`/getAll/${id}`),
//   getProductsByNameAndId: (id: string, name: string) =>
//     api.get(`/getAll/name=${name}/id=${id}`),
// };

export const endPoints = {
  getTodos: "/todos",
  popularProducts: "/popular-products",
};
