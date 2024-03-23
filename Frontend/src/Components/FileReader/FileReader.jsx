import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [query_ans, setQuery_ans] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:5001/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      setText(data.text);
      setSummary(data.summary);
      setQuery_ans(data.query_ans);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h1>LEGAL CASE ANALYSIS</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <hr />
      <h2>Extracted Text:</h2>
      <p>{text}</p>
      <h2>Summary:</h2>
      <p>{summary}</p>
      <h2>Query:</h2>
      <p>{query_ans}</p>
    </div>
  );
}

export default App;