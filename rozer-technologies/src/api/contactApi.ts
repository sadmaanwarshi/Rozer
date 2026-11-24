import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ContactRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyAddress: string;
  serviceRequired: string;
  projectDetails: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  reference: number;
}

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    createContact: builder.mutation<ContactResponse, ContactRequest>({
      query: (body) => ({
        url: "/api/contacts",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;