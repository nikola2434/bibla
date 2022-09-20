import { ISlide } from "./../app/components/Slider/slider-interface";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
export const sliderApi = createApi({
  reducerPath: "sliderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/sliders" }),
  endpoints: (build) => ({
    getSlide: build.query<ISlide[], { limit: number }>({
      query: ({ limit }) => ({
        url: "",
        params: {
          limit,
        },
      }),
    }),
  }),
});

export const { useGetSlideQuery } = sliderApi;
