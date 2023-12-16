import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { UserAuth } from '../context/authContext';
import ConfirmationModal from './confirmationModal';
import { HiPencilAlt } from "react-icons/hi";
import { HiClipboard } from "react-icons/hi";

function AccordionComponent({ listItem, listLabel, listId, expandAll }) {
    const { user } = UserAuth();
    const [expandItem, setExpandItem] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedItem, setEditedItem] = useState(listItem);
    const [editedLabel, setEditedLabel] = useState(listLabel);

    const toggleModal = () => setOpenModal(!openModal);

    const handleExpand = () => {
        setExpandItem(!expandItem);
    }

    const handleEdit = () => {
        setIsEditMode(true);
        setEditedLabel(listLabel);
        setEditedItem(listItem);
    };

    const handleCancel = () => {
        setIsEditMode(false);
        setEditedLabel(listLabel);
        setEditedItem(listItem);
    };

    const handleSave = async () => {
        setIsEditMode(false);
        try {
            const item = doc(db, `users/${user.uid}/list`, listId);
            await updateDoc(item, { label: editedLabel, text: editedItem });
            console.log(`Item updated: ${listId}`);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleLabelChange = (event) => {
        setEditedLabel(event.target.value);
    };

    const handleItemChange = (event) => {
        setEditedItem(event.target.value);
    };

    const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(listItem);
          console.log('Content copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
    }

    const deleteItem = async (id) => {
        try {
            setOpenModal(false);
            const item = doc(db, `users/${user.uid}/list`, id);
            await deleteDoc(item);
            console.log(`Item deleted: ${id}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Accordion sx={{ border: '1px solid', marginTop: '0px' }} expanded={expandAll || expandItem} disableGutters={true}>
            {isEditMode ? (
                <div className="px-3.5 pt-2">
                    <input
                        value={editedLabel}
                        onChange={handleLabelChange}
                        className="font-bold text-blue bg-transparent text-lg p-1 w-full no-border" 
                    />
                </div>
            ) : (
                <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={handleExpand} sx={{}}>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.125rem', lineHeight: '1.75rem', color: '#0F3460' }}>{listLabel}</Typography>
                </AccordionSummary>
            )}
            <AccordionDetails>
                {isEditMode ? (
                    <div>
                        <textarea
                            value={editedItem}
                            onChange={handleItemChange}
                            className="font-light text-blue text-md p-1 w-full resize-none"
                        />
                        <div className="flex flex-row justify-end items-center gap-4">
                            <button className="bg-transparent p-1 text-blue" onClick={handleCancel}>Cancel</button>
                            <button className="bg-transparent p-1 text-blue" onClick={handleSave}>Save</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Typography className="font-light text-blue text-sm">{listItem}</Typography>
                        <div className="flex flex-row justify-end items-center gap-8">
                            <div className="flex flex-row justify-end items-center gap-1">
                                <button className="bg-transparent p-2 border-none" onClick={copyContent}><HiClipboard className="text-black text-xl" /></button>
                                <button className="bg-transparent p-1 text-blue" onClick={handleEdit}><HiPencilAlt className="text-black text-xl" /></button>
                            </div>
                            <button className="bg-transparent p-1 border-2 border-solid rounded-md border-error text-blue text-sm font-bold hover:shadow-lg hover:text-error" onClick={toggleModal}>Delete</button>
                            <ConfirmationModal title={"Are you sure you want to delete this clip?"} subtitle={"This action cannot be undone."} openModal={openModal} toggleModal={toggleModal} deleteAction={() => deleteItem(listId)} />
                        </div>
                    </div>
                )}
            </AccordionDetails>
        </Accordion>
    );
}

export default AccordionComponent;

