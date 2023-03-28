import React, { useState } from 'react';
import {  doc, deleteDoc, } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { UserAuth } from '../context/authContext'

function ListItem({listItem, listLabel, listId}) {
    const { user } = UserAuth();
  

    const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(listItem);
          console.log('Content copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
    }

    const editContent = () => {

    }

    const deleteItem = async (id) => {
        try {
            const item = doc(db, `users/${user.uid}/list`, id);
            await deleteDoc(item);
            console.log(`Item deleted: ${id}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <li className="list-none">
            <div className="flex flex-row justify-between border-2 border-solid border-gray-600 rounded-xl gap-2 p-6 min-w-fit h-36">
                <div className="flex flex-col justify-center gap-4">
                    <div className="flex flex-row justify-start items-center group">
                        <h2 className="font-bold text-xl pr-4">{listLabel}</h2>
                        <button className="bg-transparent border-none hidden group-hover:inline-block" onClick={editContent}><svg className="hover:fill-gray-400 hover:rotate-12" xmlns="http://www.w3.org/2000/svg" fill="#000000" version="1.1" width="13px" height="13px" viewBox="0 0 528.899 528.899"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"/></g></svg></button>
                    </div>
                    <div className="flex flex-row justify-start items-center group">
                        <p className="pr-4">{listItem}</p>
                        <button className="bg-transparent border-none hidden group-hover:inline-block" onClick={editContent}><svg className="hover:fill-gray-400 hover:rotate-12" xmlns="http://www.w3.org/2000/svg" fill="#000000" version="1.1" width="13px" height="13px" viewBox="0 0 528.899 528.899"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"/></g></svg></button>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-4">
                    <button className="bg-transparent p-2 border-none" onClick={copyContent}><svg className="hover:fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 467 512.22"><path d="M131.07 372.11c.37 1 .57 2.08.57 3.2 0 1.13-.2 2.21-.57 3.21v75.91c0 10.74 4.41 20.53 11.5 27.62s16.87 11.49 27.62 11.49h239.02c10.75 0 20.53-4.4 27.62-11.49s11.49-16.88 11.49-27.62V152.42c0-10.55-4.21-20.15-11.02-27.18l-.47-.43c-7.09-7.09-16.87-11.5-27.62-11.5H170.19c-10.75 0-20.53 4.41-27.62 11.5s-11.5 16.87-11.5 27.61v219.69zm-18.67 12.54H57.23c-15.82 0-30.1-6.58-40.45-17.11C6.41 356.97 0 342.4 0 326.52V57.79c0-15.86 6.5-30.3 16.97-40.78l.04-.04C27.51 6.49 41.94 0 57.79 0h243.63c15.87 0 30.3 6.51 40.77 16.98l.03.03c10.48 10.48 16.99 24.93 16.99 40.78v36.85h50c15.9 0 30.36 6.5 40.82 16.96l.54.58c10.15 10.44 16.43 24.66 16.43 40.24v302.01c0 15.9-6.5 30.36-16.96 40.82-10.47 10.47-24.93 16.97-40.83 16.97H170.19c-15.9 0-30.35-6.5-40.82-16.97-10.47-10.46-16.97-24.92-16.97-40.82v-69.78zM340.54 94.64V57.79c0-10.74-4.41-20.53-11.5-27.63-7.09-7.08-16.86-11.48-27.62-11.48H57.79c-10.78 0-20.56 4.38-27.62 11.45l-.04.04c-7.06 7.06-11.45 16.84-11.45 27.62v268.73c0 10.86 4.34 20.79 11.38 27.97 6.95 7.07 16.54 11.49 27.17 11.49h55.17V152.42c0-15.9 6.5-30.35 16.97-40.82 10.47-10.47 24.92-16.96 40.82-16.96h170.35z"/></svg></button>
                    <button className="bg-transparent p-2 border-2 border-solid border-red-500 rounded-lg font-bold" onClick={() => deleteItem(listId)}>Delete</button>
                </div>
            </div>
        </li>
    );
}

export default ListItem;


