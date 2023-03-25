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
      <div className="flex flex-col justify-center items-center py-2 container mx-auto">
        <div className="text-gray-600 px-12 py-24 mt-24 overflow-y-hidden mx-auto">
          <h2 className="text-2xl font-semibold">Successful login!</h2>
        </div>
        <div>
          <a onClick={handleLogout} className="text-blue-800 hover:text-blue-900 transition cursor-pointer">Logout</a>
        </div>
      </div>
    );
  };
  
  export default Home;