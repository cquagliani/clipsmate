import Link from "next/link";
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
            <h1 className="font-bold text-[34px]"><a href="/">CLIPSMATE</a></h1>
            <div className="flex items-center gap-8">
                <button className="border border-gray-600 border-solid bg-blue-900 text-white hover:shadow-2xl rounded-2xl py-4 px-6 font-bold" onClick={handleLogout}>Logout</button>
                <p>Signed in as: {user ? user.email : "You are not signed in."}</p>
            </div>
        </div>
    )
}

export default DashboardHeader;