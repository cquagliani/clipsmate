import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import {  doc, deleteDoc, } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { UserAuth } from '../context/authContext'

function Task({task, description, taskId}) {
    const { user } = UserAuth();

    const editContent = () => {

    }

    const deleteItem = async (taskId) => {
        try {
            setTimeout(async () => {
                const item = doc(db, `users/${user.uid}/tasks`, taskId);
                await deleteDoc(item);
            }, 3000);
            console.log(`Task deleted: ${taskId}`);
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div className="flex flex-col border border-solid border-black bg-white px-2 py-2 w-full">
        <div className="flex flex-row justify-start items-center">
            <Checkbox size="medium" onChange={() => deleteItem(taskId)}></Checkbox>
            <h2 className="font-bold text-lg">{task}</h2>
        </div>
        <div className="flex flex-row justify-between items-center pl-10">
            <p className="font-light text-sm">{description}</p>
            <button className="bg-transparent p-1 border-2 border-solid rounded-md border-red-500 font-bold hover:shadow-lg hover:bg-red-500 hover:text-white" onClick={() => deleteItem(taskId)}>Delete</button>
        </div>
    </div>
  )
}

export default Task