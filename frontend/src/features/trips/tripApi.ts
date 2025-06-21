import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tripApi = createApi({
  reducerPath: 'tripApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    bookTrip: builder.mutation({
      query: (trip) => ({
        url: '/trips',
        method: 'POST',
        body: trip,
      }),
    }),
    getUserTrips: builder.query({
      query: () => '/trips/user',
    }),
  }),
});

export const { useBookTripMutation, useGetUserTripsQuery } = tripApi;