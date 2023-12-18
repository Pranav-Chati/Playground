import Image from "next/image";
// import Sidebar from "./sidebarExpenz";
import Sidebar from "./sidebarNelt";
import MainPageNelt from "./mainpageNelt";

// async function getData() {
//   const res = await fetch("http://localhost:8000/api/newsletter/");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return await res.json();
// }

export default async function Home() {
  return <MainPageNelt />;
}
