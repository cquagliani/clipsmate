import React, { useState, useEffect } from 'react';
import {  collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import NewListItem from './newListItem';
import { UserAuth } from '../context/authContext'
import AccordionComponent from './accordion';

function List({title}) {
    const [list, setList] = useState([]);
    const { user } = UserAuth();
    const colRef = collection(db, `users/${user.uid}/list`);
    const q = query(colRef, orderBy("timestamp"));

    // Read list items from database in real time
    useEffect(() => {
        const getList = async () => {
            onSnapshot(q, (snapshot) => {
                setList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
        }
        getList();
    }, []);

    return (
        <div className="flex flex-col items-center mt-12 py-8 px-2 bg-blue rounded-xl">
            <h2 className="font-bold text-light text-2xl mb-8">{title}</h2>
            <div id="itemsList" className="flex flex-col gap-2 w-full h-full min-w-fit">
                {list.map((item) => (
                    <AccordionComponent listLabel={item.label} listItem={item.text} listId={item.id} key={item.id} />
                ))}
                <NewListItem />
            </div>
        </div>
    )
}

export default List