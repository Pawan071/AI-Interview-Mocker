"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";


function Header() {

  const router=useRouter();
  const upgrade=()=>{
    router.push('/dashboard/upgrade')
  }

  const dashboard=()=>{
    router.push('/dashboard')
  }

  const HowWork=()=>{
    router.push('/dashboard/Howwork')
  }

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.svg"} width={70} height={30} alt="logo"/>
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path == "/dashboard" && "text-primary font-bold"}`}
          onClick={dashboard}
        >
         Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path == "/dashboard/questions" && "text-primary font-bold"}`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path == "/dashboard/upgrade" && "text-primary font-bold"}`}
          onClick={upgrade}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path == "/dashboard/how" && "text-primary font-bold"}`}
          onClick={HowWork}
        >
          How it Works?
        </li>
      </ul>
      <UserButton />

    </div>
  );
}

export default Header;
