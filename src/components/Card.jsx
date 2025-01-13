"use client";
import { useDeleteTodosMutation} from "@/service/api";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";

export default function Card({ datas }) {
  const { title, body, status, id } = datas;
  console.log(title, body , status, datas.id);
  const [editopen, setEditOpen] = useState(false);
  const dispatch = useDispatch();
  console.log(datas?.data);

  const [editTodo, setEditTodo] = useState(null);

  const [deleteTodos] = useDeleteTodosMutation();

  async function handleDelete(id) {
      try {
          await deleteTodos(id);
          dispatch(api.util.resetApiState());
      } catch (error) {}
  }
  return (
    <div className="px-2 py-2">
      <div className="max-w-sm p-6 bg-white border-2 shadow-white shadow-lg border-red-600 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
        <span className="text-black">{status}</span>
        <div className="flex gap-3 py-2">
          <button
            onClick={() => handleDelete(id)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Delete
          </button>
          <button
            onClick={() => (setEditOpen(true), setEditTodo(datas))}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit
          </button>
          {editopen && (
            <Modal
              data="tahrirlash"
              setAddopen={setEditOpen}
              editTodo={editTodo}
            />
          )}
        </div>
      </div>
    </div>
  );
}
