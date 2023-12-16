import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Checkbox from '@mui/material/Checkbox';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { UserAuth } from '../context/authContext';
import ConfirmationModal from './confirmationModal';
import { HiPencilAlt } from "react-icons/hi";

function Task({ task, description, taskId }) {
    const { user } = UserAuth();
    const [openModal, setOpenModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedTask, setEditedTask] = useState(task);
    const [editedDescription, setEditedDescription] = useState(description);

    const toggleModal = () => setOpenModal(!openModal);

    const handleEdit = () => {
        setIsEditMode(true);
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    const handleSave = async () => {
        setIsEditMode(false);
        try {
            const item = doc(db, `users/${user.uid}/tasks`, taskId);
            await updateDoc(item, { task: editedTask, description: editedDescription });
            console.log(`Task updated: ${taskId}`);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleTaskChange = (event) => {
        setEditedTask(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setEditedDescription(event.target.value);
    };

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
            {isEditMode ? (
                <div className="flex flex-col">
                    <input
                        value={editedTask}
                        onChange={handleTaskChange}
                        className="font-bold text-blue bg-transparent text-lg p-1 no-border" 
                    />
                    <textarea
                        value={editedDescription}
                        onChange={handleDescriptionChange}
                        className="font-light text-blue bg-transparent text-sm p-1 no-border resize-none"
                    />
                    <div className="flex flex-row items-center justify-end gap-2 w-full py-2">
                        <button className="flex items-center justify-center w-[85px] h-[38px] px-2 border border-solid border-blue rounded-lg bg-light hover:shadow-2xl font-bold text-sm text-blue" onClick={handleCancel}>Cancel</button>
                        <button className="flex items-center justify-center w-[85px] h-[38px] px-2 border border-solid border-pink rounded-lg bg-pink hover:shadow-2xl font-bold text-sm text-light" onClick={handleSave}>Save</button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex flex-row justify-start items-center">
                        <Checkbox sx={{ color: '#0F3460' }} size="medium" onChange={() => deleteItem(taskId)}></Checkbox>
                        <div className="flex flex-row items-center justify-between gap-2 w-full py-2">
                            <h2 className="font-bold text-blue text-lg">{task}</h2>
                            {/* <Link href="" target="_blank"><Image src={editIcon} alt="youtube Logo" /></Link> */}
                            <button className="flex items-center justify-center  p-1 rounded-lg hover:shadow-2xl font-bold text-sm text-light"  onClick={handleEdit}><HiPencilAlt className="text-black text-xl" /></button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center pl-10">
                        <p className="font-light text-blue text-sm">{description}</p>
                        <button className="bg-transparent p-1 border-2 border-solid rounded-md border-error text-blue text-sm font-bold hover:shadow-lg hover:text-error" onClick={toggleModal}>Delete</button>
                        <ConfirmationModal title={"Are you sure you want to delete this task?"} subtitle={"This action cannot be undone."} openModal={openModal} toggleModal={toggleModal} deleteAction={() => deleteItem(taskId)} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Task;