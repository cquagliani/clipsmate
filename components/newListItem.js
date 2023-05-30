import React, { useState } from 'react';
import {  collection, addDoc, serverTimestamp, } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { UserAuth } from '../context/authContext'
import { Divider } from '@mui/material';

function NewListItem() {
    const [itemLabel, setItemLabel] = useState('');
    const [itemText, setItemText] = useState('');
    const { user } = UserAuth();
    const colRef = collection(db, `users/${user.uid}/list`);

    const createListItem = async () => {
        if (itemLabel == '') {
            alert('Please enter a valid label')
        } else if (itemText == '') {
            alert('Please enter a valid clip')
        } else {
            await addDoc(colRef, { label: itemLabel, text: itemText, timestamp: serverTimestamp() });
            showNewItemComponent();
        }
    }

    const [newItemToggle, setNewItemToggle] = useState(false);

    const showNewItemComponent = () => {
        setNewItemToggle(!newItemToggle);
    }

    return (
        <div className='mt-1'>
            {newItemToggle && (
                <li className="list-none mb-4">
                    <div className="flex flex-row justify-between border border-solid border-blue gap-2 p-4 bg-light">
                        <div className="flex flex-col justify-center gap-2 w-full px-2">
                            <div className="flex flex-col justify-center gap-2 w-full py-2">
                                <input className="font-bold text-xl px-2 bg-light w-full" placeholder="Label" onChange={(e) => {setItemLabel(e.target.value)}} />     
                                <input className="px-2 bg-light w-full" placeholder="Your Clip goes here!" onChange={(e) => {setItemText(e.target.value)}} />    
                            </div>
                            <Divider />
                            <div className="flex flex-row items-center justify-end gap-2 w-full py-2">
                                <button className="w-[85px] h-[38px] px-2 border border-solid border-blue rounded-lg bg-light hover:shadow-2xl font-bold text-sm text-blue" onClick={showNewItemComponent}>Cancel</button>
                                <button className="w-[85px] h-[38px] px-2 border border-solid border-pink rounded-lg bg-pink hover:shadow-2xl font-bold text-sm text-light" onClick={createListItem}>Add clip</button>
                            </div>
                        </div>
                    </div>
                </li>
            )}
            {!newItemToggle && (
                <div className="pl-2 mt-1 group">
                    <button className="flex flex-row items-center justify-start mt-0 gap-4" onClick={showNewItemComponent}>
                        <div className="p-1 group-hover:bg-blue group-hover:rounded-full">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            id="Layer_1"
                            x="0px"
                            y="0px"
                            width="13px"
                            height="13px"
                            viewBox="0 0 122.881 122.88"
                            >
                                <g>
                                    <path className="fill-blue group-hover:fill-light" d="M56.573,4.868c0-0.655,0.132-1.283,0.37-1.859c0.249-0.6,0.61-1.137,1.056-1.583C58.879,0.545,60.097,0,61.44,0 c0.658,0,1.287,0.132,1.863,0.371c0.012,0.005,0.023,0.011,0.037,0.017c0.584,0.248,1.107,0.603,1.543,1.039 c0.881,0.88,1.426,2.098,1.426,3.442c0,0.03-0.002,0.06-0.006,0.089v51.62l51.619,0c0.029-0.003,0.061-0.006,0.09-0.006 c0.656,0,1.285,0.132,1.861,0.371c0.014,0.005,0.025,0.011,0.037,0.017c0.584,0.248,1.107,0.603,1.543,1.039 c0.881,0.88,1.428,2.098,1.428,3.441c0,0.654-0.133,1.283-0.371,1.859c-0.248,0.6-0.609,1.137-1.057,1.583 c-0.445,0.445-0.98,0.806-1.58,1.055v0.001c-0.576,0.238-1.205,0.37-1.861,0.37c-0.029,0-0.061-0.002-0.09-0.006l-51.619,0.001 v51.619c0.004,0.029,0.006,0.06,0.006,0.09c0,0.656-0.133,1.286-0.371,1.861c-0.006,0.014-0.012,0.025-0.018,0.037 c-0.248,0.584-0.602,1.107-1.037,1.543c-0.883,0.882-2.1,1.427-3.443,1.427c-0.654,0-1.283-0.132-1.859-0.371 c-0.6-0.248-1.137-0.609-1.583-1.056c-0.445-0.444-0.806-0.98-1.055-1.58h-0.001c-0.239-0.575-0.371-1.205-0.371-1.861 c0-0.03,0.002-0.061,0.006-0.09V66.303H4.958c-0.029,0.004-0.059,0.006-0.09,0.006c-0.654,0-1.283-0.132-1.859-0.371 c-0.6-0.248-1.137-0.609-1.583-1.056c-0.445-0.445-0.806-0.98-1.055-1.58H0.371C0.132,62.726,0,62.097,0,61.44 c0-0.655,0.132-1.283,0.371-1.859c0.249-0.6,0.61-1.137,1.056-1.583c0.881-0.881,2.098-1.426,3.442-1.426 c0.031,0,0.061,0.002,0.09,0.006l51.62,0l0-51.62C56.575,4.928,56.573,4.898,56.573,4.868L56.573,4.868z" />
                                </g>
                            </svg>
                        </div>
                        <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-900">Add clip</p>
                    </button>
                </div>
            )}
        </div>
    );
}

export default NewListItem;
