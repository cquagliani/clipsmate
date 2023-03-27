import React, { useState, useEffect } from 'react';
import ListItem from './listItem';
import {  collection, updateDoc, getDocs, deleteDoc, } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import NewListItem from './newListItem';
import { UserAuth } from '../context/authContext'

function List() {
    const [list, setList] = useState([]);
    const { user } = UserAuth();
    const colRef = collection(db, 'users' + user.uid + 'list');

    // Read list items from database
    useEffect(() => {
        const getList = async () => {
            const data = await getDocs(colRef);
            setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getList();
    }, []);

    return (
        <div className="flex items-center">
            <ul id="itemsList" className="flex flex-col gap-4 border border-solid border-black rounded-3xl p-10 w-full h-full mt-12 bg-gray-100 bg-opacity-60 min-w-fit">
                {list.map((item) => (
                    <ListItem listLabel={item.label} listItem={item.text} listId={item.id}/>
                ))}
                <NewListItem />
            </ul>
        </div>
    )
}

export default List