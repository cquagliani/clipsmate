import React, { useState } from 'react';

function FolderFilter() {
    

    return (
        <div className="flex flex-col items-center mt-2 lg:mt-12 py-8 px-2 bg-gray rounded-xl shadow-xl">
            <h2 className="font-bold text-blue text-2xl mb-8">Folder Filter</h2>
        </div>
    );
}

export default FolderFilter;


// // Program designed to take in the file path to a folder of exported site content. 
// // The program then removes .js, .css, and font files, and the Scripts folder.
// const fs = require('fs');
// const path = require('path');

// // Function to remove files with specified extensions
// function removeFilesWithExtensions(dirPath, extensionsToRemove) {
//     const files = fs.readdirSync(dirPath);
  
//     for (const file of files) {
//       const filePath = path.join(dirPath, file);
//       const stat = fs.statSync(filePath);
  
//       if (stat.isDirectory()) {
//         removeFilesWithExtensions(filePath, extensionsToRemove);
//       } else {
//         const fileExtension = path.extname(filePath).toLowerCase().slice(1);
  
//         if (extensionsToRemove.includes(fileExtension)) {
//           console.log(`Removing file: ${filePath}`);
//           fs.unlinkSync(filePath);
//         }
//       }
//     }
//   }

// // Function to remove folders with specified names recursively
// function removeFoldersWithNamesRecursively(dirPath, folderNamesToRemove) {
//     const folders = fs.readdirSync(dirPath);
  
//     for (const folder of folders) {
//       const folderPath = path.join(dirPath, folder);
//       const stat = fs.statSync(folderPath);
  
//       if (stat.isDirectory()) {
//         if (folderNamesToRemove.includes(folder)) {
//           console.log(`Removing folder: ${folderPath}`);
//           fs.rmdirSync(folderPath, { recursive: true });
//         } else {
//           removeFoldersWithNamesRecursively(folderPath, folderNamesToRemove);
//         }
//       }
//     }
//   }

// // Function to move contents from a grandchild folder to a child folder
// function moveContentsFromGrandchildToChild(parentFolderPath, childFolderName, grandchildFolderName) {
//     const childFolderPath = path.join(parentFolderPath, childFolderName);
//     const grandchildFolderPath = path.join(childFolderPath, grandchildFolderName);
  
//     if (fs.existsSync(grandchildFolderPath) && fs.existsSync(childFolderPath)) {
//       const grandchildContents = fs.readdirSync(grandchildFolderPath);
  
//       for (const item of grandchildContents) {
//         const itemPath = path.join(grandchildFolderPath, item);
//         const newFilePath = path.join(childFolderPath, item);
  
//         console.log(`Moving file/folder from ${itemPath} to ${newFilePath}`);
//         fs.renameSync(itemPath, newFilePath);
//       }
  
//       // After moving contents, remove the now empty grandchild folder
//       console.log(`Removing grandchild folder: ${grandchildFolderPath}`);
//       fs.rmdirSync(grandchildFolderPath);
//     } else {
//       console.log(`Either the grandchild folder ${grandchildFolderName} or the child folder ${childFolderName} does not exist.`);
//     }
//   }

// // Function to rename a child folder
// function renameChildFolder(parentFolderPath, childFolderName, newFolderName) {
//     const childFolderPath = path.join(parentFolderPath, childFolderName);
//     const newFolderPath = path.join(parentFolderPath, newFolderName);
  
//     if (fs.existsSync(childFolderPath)) {
//       fs.renameSync(childFolderPath, newFolderPath);
//       console.log(`Renamed folder from ${childFolderPath} to ${newFolderPath}`);
//     } else {
//       console.log(`The child folder ${childFolderName} does not exist in ${parentFolderPath}.`);
//     }
//   }

// // Main Program // 

// // Variables
// const folderPath = ''; // REPLACE PATH TO FOLDER
// const extensionsToRemove = ['js', 'css']; 
// const folderNamesToRemove = ['Scripts', 'Style', 'files', 'tablet', 'mobile']; 

// removeFilesWithExtensions(folderPath, extensionsToRemove);
// removeFoldersWithNamesRecursively(folderPath, folderNamesToRemove);
// moveContentsFromGrandchildToChild(folderPath, 'Pages', 'desktop');
// moveContentsFromGrandchildToChild(folderPath, 'Resources', 'images');
// renameChildFolder(folderPath, 'Resources', 'Images');
