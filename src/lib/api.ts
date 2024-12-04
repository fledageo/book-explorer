import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AddBookData, IBook, IUpdateBookPayload } from "./types";

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ["books","book"],
    endpoints: builder => ({
        getBooks: builder.query<IBook[], void>({
            query: () => "/books",
            providesTags: ["books","book"]
        }),
        addBook: builder.mutation<IBook, AddBookData>({
            query: (param) => ({
                url: `/books`,
                method: 'POST',
                body: param,
            }),
            invalidatesTags: ["books"]
        }),
        getBookById: builder.query<IBook, string>({
            query: (id) => `books/${id}`,
            providesTags:["book"]
        }),

        updateBook: builder.mutation<IBook,IUpdateBookPayload>({
            query: (payload) => ({

                url: `/books/${payload.id}`,
                method: 'PUT',
                body: payload.data,
            }),
            invalidatesTags:["book"]
        })
    })
})

export const { useGetBooksQuery, useAddBookMutation, useGetBookByIdQuery,useUpdateBookMutation } = baseApi