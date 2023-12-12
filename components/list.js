import React, { useState, useEffect } from 'react';
import {  collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import NewListItem from './newListItem';
import { UserAuth } from '../context/authContext'
import AccordionComponent from './accordion';

function List() {
    const [list, setList] = useState([]);
    const { user } = UserAuth();
    const colRef = collection(db, `users/${user.uid}/list`);
    const q = query(colRef, orderBy("timestamp"));
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    // Read list items from database in real time
    useEffect(() => {
        const getList = async () => {
            onSnapshot(q, (snapshot) => {
                setList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
        }
        getList();
    }, [q]);

    return (
        <div className="flex flex-col items-center mt-12 py-8 px-2 bg-gray rounded-xl shadow-xl">
            <h2 className="font-bold text-blue text-2xl mb-2">My Clips</h2>
            <div className="flex flex-row justify-end mb-2 w-full">
                {!isExpanded && (
                    <button className="flex items-center justify-center w-[95px] h-[30px] p-2 border border-solid border-blue rounded-lg bg-blue hover:shadow-2xl font-bold text-light text-sm" onClick={toggleExpand}>
                        Expand All
                    </button>
                )}
                {isExpanded && (
                    <button className="flex items-center justify-center w-[95px] h-[30px] p-2 border border-solid border-pink rounded-lg bg-pink hover:shadow-2xl font-bold text-light text-sm" onClick={toggleExpand}>
                        Close All
                    </button>
                )}
            </div>
            <div id="itemsList" className="flex flex-col gap-1 w-full h-full">
                {list.map((item) => (
                    <AccordionComponent listLabel={item.label} listItem={item.text} listId={item.id} key={item.id} expandAll={isExpanded} />
                ))}
                <NewListItem />
            </div>
        </div>
    )
}

export default List