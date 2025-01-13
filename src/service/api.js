// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://json-api.uz/api/project/fn1-fullstack/",
//   }),
//   endpoints: (builder) => ({
//     getArticles: builder.query({
//       query: () => "todos",
//     }),
//     deleteArticle: builder.mutation({
//       query: (id) => ({
//         url: `todos/${id}`,
//         method: "DELETE",
//       }),
//     }),
//     login: builder.mutation({
//       mutation: () => "",
//     }),
//   }),
// });

// export const {
//   useGetArticlesQuery,
//   useDeleteArticleMutation,
//   useLoginMutation,
// } = api;
// export default api;








import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://json-api.uz/api/project/fn1-fullstack",
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
        }),
        postTodos: builder.mutation({
            query: (data) => ({
                url: "/todos",
                method: "POST",
                body: data,
            }),
        }),
        updateTodos: builder.mutation({
            query: ({ id, data }) => ({
                url: `/todos/${id}`,
                method: "PUT",
                body: data,
            }),
        }),
        deleteTodos: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
        }),
        
    }),
});

export const {
    useGetTodosQuery,
    usePostTodosMutation,
    useDeleteTodosMutation,
    useUpdateTodosMutation,
} = api;
