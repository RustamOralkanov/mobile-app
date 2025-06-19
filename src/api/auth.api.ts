import { wrapperApi } from "./api";

export const authApi = wrapperApi.injectEndpoints({
    endpoints: (builder) => ({
        postLogin: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { usePostLoginMutation } = authApi;
