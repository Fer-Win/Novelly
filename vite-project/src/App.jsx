
import './App.css'
import Header from './Header.jsx'
import Body from './Body.jsx'
import html2canvas from 'html2canvas';
import { useState, useEffect } from 'react';

function App() {
  const createDownload = async () => {
    setTimeout(() => {
      const elementToCapture = document.querySelector('.code-element');
      html2canvas(elementToCapture).then(canvas => {
        const imageDataURL = canvas.toDataURL('image/jpeg');

        const downloadLink = document.createElement('a');
        downloadLink.href = imageDataURL;
        downloadLink.download = 'captured_image.png';

        downloadLink.click();
      });
    }, 0); 
  };

  useEffect(() => {
   createDownload();
  }, []);

  return (
    <div className='h-screen m-0'>
      <Header />
      <h2>Paste Your Code below</h2>
      <Body />
      <button className=" bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-indigo-500"onClick={createDownload}>Download Code</button>
    </div>
  );
}



export default App
