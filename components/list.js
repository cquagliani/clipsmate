import React, { useState, useEffect } from 'react';
import ListItem from './listItem';
import GhostListItem from "./ghostListItem";
import {  query, collection, onSnapshot, updateDoc, getDocs, doc, addDoc, deleteDoc, } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import NewListItem from './newListItem';

function List() {
    const [list, setList] = useState([]);
    const colRef = collection(db, 'list');

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
                    <ListItem listLabel={item.label} listItem={item.text}/>
                ))}
                <NewListItem />
                <GhostListItem />
            </ul>
        </div>
    )
}

export default List