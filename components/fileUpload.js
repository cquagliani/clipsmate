import React, { useState } from 'react';
import { storage, auth } from "../firebase/clientApp";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const currentUser = auth.currentUser;

  const handleChange = e => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (currentUser) {
      const userFolder = `user_files/${currentUser.uid}/`;
      const storageRef = ref(storage, `${userFolder}${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
          console.error("Upload failed:", error);
        }
      );
    } else {
      console.error("User must be logged in to upload files");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button className="flex items-center justify-center w-[120px] h-[30px] p-5 mt-6 border border-solid border-blue rounded-lg bg-blue hover:shadow-2xl font-bold text-light text-sm" onClick={handleUpload} disabled={!currentUser}>Upload</button>
    </div>
  );
};

export default FileUpload;

