/*Submitted by: Tanya Rotman
Class 48/6
Exercise 4
/**
 * Program to create a "text" folder with 10 files.
 * It then reads the first n lines from the nth file and combines them into a single "output.txt" file, creating missing files automatically.
 */

const fs = require('fs');
const path = require('path');

// Define the directory for the text files
const dirPath = path.join(__dirname, 'text');

// Function to generate random number of lines
function getRandomLines(maxLines = 20) {
    return Math.floor(Math.random() * (maxLines + 1)); // Random number between 0 and maxLines
}

// Function to create files with random number of lines
function createRandomFiles(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath); // Create the directory if it doesn't exist
        console.log('Directory "text" created.');
    }

    for (let i = 1; i <= 10; i++) {
        const filePath = path.join(dirPath, `${i}.txt`);
        if (!fs.existsSync(filePath)) {
            // Generate a random number of lines for the file
            const lineCount = getRandomLines();
            let content = '';
            for (let j = 1; j <= lineCount; j++) {
                content += `Line ${j} from file ${i}.txt\n`;
            }
            fs.writeFileSync(filePath, content.trim(), 'utf-8');
            console.log(`File "${i}.txt" created with ${lineCount} lines.`);
        }
    }
}

// Function to process the files and create the output
function processFiles(dirPath) {
    let textOut = '';

    for (let i = 1; i <= 10; i++) {
        const filePath = path.join(dirPath, `${i}.txt`);
        try {
            const textIn = fs.readFileSync(filePath, 'utf-8');
            const lines = textIn.split(/\r?\n/);

            for (let j = 0; j < i && j < lines.length; j++) {
                textOut += lines[j] + '\n';
            }
        } catch (err) {
            console.error(`Error processing file ${filePath}: ${err.message}`);
        }
    }

    const outputFilePath = path.join(dirPath, 'output.txt');
    try {
        fs.writeFileSync(outputFilePath, textOut.trim(), 'utf-8');
        console.log(`Processed text written to: ${outputFilePath}`);
    } catch (err) {
        console.error(`Error writing output file: ${err.message}`);
    }
}

// Main Execution
createRandomFiles(dirPath); // Ensure all files exist with random content
processFiles(dirPath);      // Process the files and create the output
