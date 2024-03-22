import React, { useState } from 'react';
// import axios from 'axios';
import axios from "axios";

export const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [ocrText, setOcrText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setErrorMessage('');
  };

  const handleSubmit = async () => {
    try {
      if (!file) {
        setErrorMessage('Please select a file.');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:8082/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setOcrText(response.data.ocr_text);
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrorMessage('An error occurred while uploading the file.');
    }
  };

  return (
    <div>
      <h1>helo00</h1>
      <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {ocrText && <p>OCR Text: {ocrText}</p>}
    </div>
  );

};