import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ContactRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyAddress: string;
  serviceRequired: string;
  projectDetails: string;
}

export interface Contact {
  id: number;
  full_name: string;
  email: string;
  phoneNumber: string;
  company_address: string;
  service_required: string;
  project_details: string;
  created_at: string;
  updated_at: string;
}

export interface ContactResponse {
  success: boolean;
  count: number;
  data: Contact[];
}

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
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