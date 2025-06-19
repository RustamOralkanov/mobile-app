import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wrapperApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://dev.api.ab-capital.kz/api/v1/mobile" }),
    endpoints: () => ({}),
});
