import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import {  doc, deleteDoc, } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { UserAuth } from '../context/authContext';
import ConfirmationModal from './confirmationModal';

function Task({task, description, taskId}) {
    const { user } = UserAuth();
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => setOpenModal(!openModal);

    const editContent = () => {

    }

    const deleteItem = async (taskId) => {
        try {
            setOpenModal(false);
            setTimeout(async () => {
                const item = doc(db, `users/${user.uid}/tasks`, taskId);
                await deleteDoc(item);
            }, 1000);
            console.log(`Task deleted: ${taskId}`);
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div className="flex flex-col border border-solid border-blue bg-light px-2 py-2 w-full">
        <div className="flex flex-row justify-start items-center">
            <Checkbox sx={{color:'#0F3460'}} size="medium" onChange={() => deleteItem(taskId)}></Checkbox>
            <h2 className="font-bold text-blue text-lg">{task}</h2>
        </div>
        <div className="flex flex-row justify-between items-center pl-10">
            <p className="font-light text-blue text-sm">{description}</p>
            <button className="bg-transparent p-1 border-2 border-solid rounded-md border-error text-blue text-sm font-bold hover:shadow-lg hover:text-error" onClick={toggleModal}>Delete</button>
            <ConfirmationModal title={"Are you sure you want to delete this task?"} subtitle={"This action cannot be undone."} openModal={openModal} toggleModal={toggleModal} deleteAction={() => deleteItem(taskId)} />
        </div>
    </div>
  )
}

export default Task