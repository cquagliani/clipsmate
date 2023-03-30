import React, { useState, useEffect } from 'react'
import Task from './task'
import NewTask from './newTask';
import {  collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { UserAuth } from '../context/authContext'

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const { user } = UserAuth();
    const colRef = collection(db, `users/${user.uid}/tasks`);
    const q = query(colRef, orderBy("timestamp"));

    // Read list items from database in real time
    useEffect(() => {
        const getList = async () => {
            onSnapshot(q, (snapshot) => {
                setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
        }
        getList();
    }, []);

    return (
        <div className="flex flex-col items-center mt-12 py-8 px-2 bg-slate-100 rounded-xl">
            <h2 className="font-bold text-2xl mb-8">My Tasks</h2>
            <div id="itemsList" className="flex flex-col gap-2 w-full h-full">
                {tasks.map((item) => (
                    <Task task={item.task} description={item.description} taskId={item.id} key={item.id} />
                ))}
                <NewTask />
            </div>
        </div>
    )
}

export default TaskList