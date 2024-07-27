import React, { useState } from 'react';
import axios from 'axios';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [filename, setFilename] = useState('')

  const handleFileChange = (event) => {
    console.log(event.target.name, event.target.value)
    setFile(event.target.files[0]);
    setFilename(event.target.value)
  };

  console.log(filename)
  const handleEmailChange = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.querySelector('form')
    const formData = new FormData(form);
    formData.append('file', file);
    formData.append('email', email);
    // formData.append('filename', filename)

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name='email' value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label>Upload PDF:</label>
        <input type="file" accept="application/pdf" onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUploadForm;