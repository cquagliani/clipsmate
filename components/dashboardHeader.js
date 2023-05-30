import Link from "next/link";
import SolidButton from "./solidButton";
import { useRouter } from 'next/router';
import { UserAuth } from '../context/authContext'
import React, { useState } from "react";

function DashboardHeader() {
    const router = useRouter();
    const { user, logout } = UserAuth();
  
    const handleLogout = async () => {
      try {
        await logout();
        router.push("/login");
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
        <div className="flex justify-between items-center p-8 font-mono">
            <h1 className="font-bold text-[34px]"><Link href="/">CLIPSMATE</Link></h1>
            <div className="flex items-center gap-8">
              <button className="border-2 bg-pink border-pink rounded-2xl w-32 h-16 py-4 px-6 font-bold text-light" onClick={handleLogout}>Logout</button>          
            </div>
        </div>
    )
}

export default DashboardHeader;