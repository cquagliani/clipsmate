import React, { useState } from 'react'
import {  collection, addDoc, serverTimestamp, } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { UserAuth } from '../context/authContext'

function NewTask() {
    const { user } = UserAuth();
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const colRef = collection(db, `users/${user.uid}/tasks`);

    const createTask = async () => {
        if (task == '') {
            alert('Please enter a valid task')
        } else {
            clearFields();
            await addDoc(colRef, { task: task, description: description, timestamp: serverTimestamp() });
            showNewItemComponent();
        }
    }

    const [newItemToggle, setNewItemToggle] = useState(false);

    const showNewItemComponent = () => {
        setNewItemToggle(!newItemToggle);
    }

    const clearFields = () => {
        setTask("");
        setDescription("");
    }

    return (
        <div className='mt-6'>
            <li className="list-none mb-4">
                <div className="flex flex-row justify-between border-2 border-solid bg-white border-gray-600 gap-2 p-6 h-[120px]">
                    <div className="flex flex-col justify-center gap-4">
                        <input className="font-bold text-xl bg-transparent px-2 w-full" name="task" value={task} placeholder="Task" onChange={(e) => {setTask(e.target.value)}} />     
                        <input className="bg-transparent px-2 w-full" name="description" value={description} placeholder="Description" onChange={(e) => {setDescription(e.target.value)}} />    
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <button className="w-[90px] h-[50px] p-2 border border-solid border-gray-300 rounded-lg bg-slate-300 hover:bg-slate-400 font-bold text-black" onClick={clearFields}>Cancel</button>
                        <button className="w-[90px] h-[50px] p-2 border border-solid border-gray-300 rounded-lg bg-slate-800 hover:bg-slate-700 hover:shadow-2xl font-bold text-white" onClick={createTask}>Add task</button>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default NewTask