import {auth} from '../firebase/clientApp';
import React, { useState } from "react";
import {signOut} from 'firebase/auth'
import { useRouter } from 'next/router';

const Home = () => {
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
      <div class="flex justify-center items-center h-screen w-screen bg-blue-100">
        <div className="flex flex-col justify-start items-center text-gray-600 px-12 py-24 mt-24 container mx-auto w-96 rounded-3xl border-2 border-gray-400 bg-white gap-8">
            <h2 className="text-2xl font-semibold">Successful login!</h2>
            <a onClick={handleLogout} className="transition cursor-pointer bg-blue-300 rounded-3xl px-10 py-6 font-bold text-gray-800 border border-solid border-black">Logout</a>
        </div>
      </div>
    );
  };
  
  export default Home;