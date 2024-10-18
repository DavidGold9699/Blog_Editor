import { configureStore } from "@reduxjs/toolkit";
import blogs, { blogMiddleware } from "./blogApi";
import authApi, { authApiMiddleware } from "./authApi";

const store = configureStore({
  reducer: {
    [blogs.reducerPath]: blogs.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([blogMiddleware, authApiMiddleware]),
});

export default store;
