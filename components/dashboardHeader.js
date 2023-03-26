import Link from "next/link";
import {signOut} from 'firebase/auth'
import { useRouter } from 'next/router';
import {auth} from '../firebase/clientApp';
import React, { useState } from "react";

function DashboardHeader() {
    const router = useRouter();
    const [user, setUser] = useState(null);
  
    const logOut = async () => {
      setUser({ email: null, uid: null });
      await signOut(auth);
    };
  
    const handleLogout = async () => {
      try {
        await logOut();
        router.push("/signIn");
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
        <div class="flex justify-between items-center py-12 px-10 font-mono">
            <h1 class="font-bold text-[34px]"><a href="/">CLIPSMATE</a></h1>
            <div class="flex items-center gap-16">
                <Link href="/">Home</Link>
                <Link href="/features">Features</Link>
                <Link href="/pricing">Pricing</Link>
            </div>
            <div class="flex items-center gap-8">
                <button class="border border-gray-600 border-solid bg-blue-300 rounded-3xl py-6 px-6 font-bold" onClick={handleLogout}>Logout</button>
            </div>
        </div>

    )
}

export default DashboardHeader;