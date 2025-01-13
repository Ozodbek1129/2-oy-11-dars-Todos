// "use client";

// export default function Modal({closeModal}) {

//   return (
//     <div className="absolute w-[500px] h-[500px] bg-white border rounded-lg flex justify-center items-center ">
//       <div
//         id="popup-modal"
//         tabindex="-1"
//         // classNameName="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)]"
//       >
//         <div classNameName="relative p-4 w-full max-w-md max-h-full">
//           <input type="text" className="w-full border rounded-lg" />
//           <textarea
//             id="message"
//             rows="4"
//             className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Qisqacha yozing"
//           ></textarea>

//           <form class="max-w-sm mx-auto">
//             <label
//               for="countries"
//               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Select an option
//             </label>
//             <select
//               id="countries"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             >
//               <option selected>Undone</option>
//               <option value="done">Done</option>
//               <option value="pending">Pending</option>
//             </select>
//           </form>

//           <div classNameName="relative bg-white rounded-lg shadow dark:bg-gray-700">
//             <div classNameName="p-4 md:p-5 text-center">
//               <button
//                 data-modal-hide="popup-modal"
//                 type="button"
//                 classNameName="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
//               >
//                 Save
//               </button>
//               <button
//               onClick={closeModal}
//                 data-modal-hide="popup-modal"
//                 type="button"
//                 classNameName="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import {
  api,
  usePostTodosMutation,
  useUpdateTodosMutation,
} from "@/service/api";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Modal({ data, closeModal, editTodo = null }) {
  const [postTodos] = usePostTodosMutation();
  const [putTodos] = useUpdateTodosMutation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    status: "undone",
  });

  useEffect(() => {
    if (data === "tahrirlash" && editTodo) {
      setFormData({
        title: editTodo.title,
        body: editTodo.body,
        status: editTodo.status,
      });
    }
  }, [data, editTodo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (data === "qosh") {
        await postTodos(formData);
      } else if (data === "tahrirlash") {
        await putTodos({ id: editTodo.id, data: formData });
      }
      dispatch(api.util.resetApiState());
      closeModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div>
      <div className="fixed top-[10%] left-1/2 -translate-x-1/2 z-50">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 bg-red-600 py-4 px-3 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-center text-white pb-3">
            Todo {data}
          </h2>
          <input
            className="w-[300px] h-[45px] border border-black px-3 font-medium rounded-xl text-black"
            type="text"
            placeholder="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            className="w-[300px] h-[45px] border border-black px-3 font-medium rounded-xl text-black"
            type="text"
            placeholder="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
          <select
            className="w-[300px] h-[45px] border border-black px-3 font-medium rounded-xl text-black"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="undone">undone</option>
            <option value="pending">pending</option>
            <option value="done">done</option>
          </select>
          <div className="flex gap-10">
            <button
              data-modal-hide="popup-modal"
              type="submit"
              classNameName="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Save
            </button>
            <button
              onClick={closeModal}
              data-modal-hide="popup-modal"
              type="button"
              classNameName="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>

          {/* <button
            type="submit"
            className="mt-3 w-[300px] h-[45px] bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-600"
          >
            Saqlash
            {/* {data} */}
          {/* </button> */}
        </form>
      </div>
    </div>
  );
}
