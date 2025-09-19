import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

  export function Footer () {
    const year= new Date().getFullYear();
  return (
    <footer className = "bg-gray-400 grid grid-cols-1 md:px-8 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:px-5 lg:bg-black ">
        <div>
          <p className="text-2xl text-blue-500 font-bold">SmartClass</p>
          <p className="text-xs text-gray-100"> &copy; {year} Student Assignment Tracker</p>
        </div>
        <div>
          <p className="text-md text-gray-700">Head Office</p>
          <p className="text-md text-gray-700">Gana Street, Maitama</p>
        </div>
        <div>
          <ul className="flex lg:justify-end items-center gap-8">
            <li><Link href="#"><FaFacebookF className="text-3xl text-blue-500"/></Link></li>
            <li><Link href="#"><FaLinkedinIn className="text-3xl text-blue-500"/></Link></li>
            <li><Link href="#"><FaGithubSquare className="text-3xl text-blue-500"/></Link></li>
          </ul>

          <ul className="flex lg:justify-end itemes-center gap-4">
            <li><Link href="#" className="text-sm text-gray-100">Glossary</Link></li>
            <li><Link href="#" className="text-sm text-gray-100">Cookies</Link></li>
            <li><Link href="#" className="text-sm text-gray-100">Privacy Policy</Link></li>
          </ul>
        </div>

    </footer>
  )
}