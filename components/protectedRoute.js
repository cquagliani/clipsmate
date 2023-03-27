import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import { UserAuth } from '../context/authContext';

function ProtectedRoute({ children }) {
    const {user} = UserAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [router, user]);

  return <div>{user ? children : null}</div>;
}

export default ProtectedRoute