import React, { useState } from 'react'
import { Modal, Box, Typography } from '@mui/material';

function ConfirmationModal({title, subtitle, openModal, toggleModal, deleteAction}) {
    
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

    return (
        <Modal
            open={openModal}
            onClose={toggleModal}
        >
            <Box sx={modalStyle}>
                <Typography sx={{ textAlign: 'center' }} variant="h5" component="h2">{title}</Typography>
                <Typography sx={{ mt: 2, textAlign: 'center' }}>{subtitle}</Typography>
                <div className="flex flex-row items-center justify-center gap-2 w-full py-2 mt-4">
                    <button className="flex items-center justify-center w-[85px] h-[38px] px-2 border border-solid border-blue rounded-lg bg-light hover:shadow-2xl font-bold text-sm text-blue" onClick={toggleModal}>Cancel</button>
                    <button className="flex items-center justify-center w-[85px] h-[38px] px-2 border border-solid border-pink rounded-lg bg-pink hover:shadow-2xl font-bold text-sm text-light" onClick={deleteAction}>Delete</button>
                </div>
            </Box>
        </Modal>
    )
}

export default ConfirmationModal