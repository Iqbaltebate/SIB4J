import { JetBrains_Mono } from "next/font/google";
import Jenis from "./componen/jenis";
import Image from "next/image";
import Card from "./componen/card";
export default function SideBar() {
  return (
  <div className="bg-white h-screen w-110 ">
    <img src="" alt="" />
    <h1>acme inc</h1>
    <h1>platform</h1>
    <div className="ml-2">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>

    </div>
  </div>


  );
}
