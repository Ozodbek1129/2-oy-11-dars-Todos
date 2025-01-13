"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function Navbar() {
const [modal, setModal] = useState(false);
function openModal(){
    setModal(true);
}    
function closeModal(){
    setModal(false);
}    
  return (
    <div>
      <nav className="bg-white border-gray-200 shadow-red-600 shadow-md dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className=" text-black self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Todos
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
            onClick={openModal}
              type="button"
              className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              + Yangi Todo qo'shish
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="">
            {modal && <Modal data={"qosh"} closeModal={closeModal} />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
