"use client"
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";


export function Navbar(){
  const [dropDown,setDropDown] = useState(false);
  
  const toggleDropDown = () =>{
    setDropDown(!dropDown)

  }

  return (
    <main className="bg-white shadow shadow-gray-300 w-full sticky top-0">
      <div className="flex justify-between h-[50px] pt-3 px-5">
        <p className="text-blue-500 font-bold text-2xl">SmartClass</p>
        <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
          <Link href="/"><li>Home</li></Link>
          <Link href="/dashboard/add-assignment"><li>Add-Assignment</li></Link>
          <Link href="/dashboard/assignment-list"><li>Assignment-list</li></Link>
        </ul>
        <div className="hidden md:flex gap-3">
          <Link href="/auth/login"><p className="w-[60px] h-[30px] bg-blue-500 text-white flex justify-center items-center rounded">Login</p></Link>
          <Link href="/dashboard/profile"><CgProfile className="text-3xl"/></Link>
        </div>
        <div className="block md:hidden">
        <RxHamburgerMenu onClick={toggleDropDown} className="text-blue-500 text-3xl"/>
        </div>
      </div>
   {dropDown &&(
      <div className="px-5 pb-1 flex flex-col gap-2 md:hidden">
          <ul>
            <li>Home</li>
            <li>Add-Assignment</li>
            <li>Assignment-List</li>
          </ul>
          <p className="w-[60px] h-[30px] bg-blue-500 text-white flex justify-center items-center rounded">Login</p>
          <CgProfile className="text-2xl"/>
      </div>
    )}
    </main>
  )
}