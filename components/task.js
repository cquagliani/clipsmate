import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import {  doc, deleteDoc, } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { UserAuth } from '../context/authContext'
import { Modal, Box, Typography } from '@mui/material';

function Task({task, description, taskId}) {
    const { user } = UserAuth();
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => setOpenModal(!openModal);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
      };

    const editContent = () => {

    }

    const deleteItem = async (taskId) => {
        try {
            toggleModal();
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
            <Modal
                open={openModal}
                onClose={toggleModal}
            >
                <Box sx={modalStyle}>
                    <Typography sx={{ textAlign: 'center' }} variant="h5" component="h2">
                        Are you sure you want to delete this task?
                    </Typography>
                    <Typography sx={{ mt: 2, textAlign: 'center' }}>
                        This action cannot be undone.
                    </Typography>
                    <div className="flex flex-row items-center justify-center gap-2 w-full py-2 mt-4">
                        <button className="flex items-center justify-center w-[85px] h-[38px] px-2 border border-solid border-blue rounded-lg bg-light hover:shadow-2xl font-bold text-sm text-blue" onClick={toggleModal}>Cancel</button>
                        <button className="flex items-center justify-center w-[85px] h-[38px] px-2 border border-solid border-pink rounded-lg bg-pink hover:shadow-2xl font-bold text-sm text-light" onClick={() => deleteItem(taskId)}>Delete</button>
                    </div>
                </Box>
            </Modal>
        </div>
    </div>
  )
}

export default Task