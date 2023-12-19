import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage, auth } from "../firebase/clientApp";
import FileUpload from './fileUpload';
import Link from 'next/link';
import { CheckBoxOutlineBlank } from '@mui/icons-material';

const Files = () => {
    const [files, setFiles] = useState([]);
    const currentUser = auth.currentUser;

    useEffect(() => {
        const fetchFiles = async () => {
            if (currentUser) {
                const userFolderRef = ref(storage, `user_files/${currentUser.uid}/`);
                try {
                    const res = await listAll(userFolderRef);
                    const filePromises = res.items.map(async (itemRef) => {
                        const downloadURL = await getDownloadURL(itemRef);
                        return {
                            name: itemRef.name,
                            fullPath: itemRef.fullPath,
                            downloadURL: downloadURL
                        };
                    });
                    const fileList = await Promise.all(filePromises);
                    setFiles(fileList);
                } catch (error) {
                    console.error("Error fetching file list: ", error);
                }
            }
        };

        fetchFiles();
    }, [currentUser]); // Effect dependencies, re-run if currentUser changes

    return (
        <div className="flex flex-col items-center mt-2 lg:mt-12 py-8 px-2 bg-gray rounded-xl shadow-xl">
            <h2 className="font-bold text-blue text-2xl mb-8">My Files</h2>
            <div id="filesList" className="flex flex-col gap-2 w-full h-full">
                <div className="my-2">
                    {files.map((file, index) => (
                        <div key={index}>
                            <div className="flex flex-row gap-3 p-1" > 
                                <CheckBoxOutlineBlank /> {/* Placeholder */}
                                <Link href={file.downloadURL} target="_blank" rel="noopener noreferrer">{file.name}</Link>
                            </div>
                        </div>
 
                    ))}
                </div>
                <div>
                    <FileUpload />
                </div>
            </div>
        </div>
    );
}

export default Files;

