"use client";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import {useGetTodosQuery} from "@/service/api";

export default function Home() {
  const { data } = useGetTodosQuery();

  console.log(data);
  // async function getFetch(){
  //   const respons = await fetch("https://json-api.uz/api/project/fn1-fullstack/todos");
  //   const data = await respons.json();
  //   console.log(data);
  //   return data;
  // }
  // getFetch()
  // const [dar, {isLoading}] = useDeleteArticleMutation();
  // async function a () {
  //   const res = await dar(id)
  // }
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 px-2 py-2">
        {data && data.data.map((e)=> <Card datas={e} />)}
      </div>
      
      
    </div>
  );
}
