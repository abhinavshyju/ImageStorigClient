import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [Name , SetName] = useState('');
  const [Discription, SetDiscription] = useState('')
  const [tag , Settag] = useState('');
  const [Alert, SetAlert] = useState(true);
  const [notification, SetNotification]= useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if(Alert){
      SetAlert(false)

      if (!(file&&Name&&Discription) ) {
        console.error('No file selected');
        SetAlert(true)
        return;
      }else{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', Name);
        formData.append('discription', Discription);
        formData.append('tag', tag);
    
    
        try {
          await axios.post('https://image-api-h3en.onrender.com/upload', formData);
          console.log('File uploaded and processed successfully');
          SetNotification(true)
          setTimeout(()=>{ 
            SetNotification(false)},3000)
        
        } catch (error) {
          console.error('Error uploading and processing file:', error);
        }
        SetAlert(true)
      }
    }else{
      console.log("Wait...........")
    }
  };

  return (
    <>
    {notification ? (
        <div className="w-full absolute flex justify-center ">
        <div className="bg-white px-9 py-5 text-green-400 font-bold rounded-full">
            <h1>Image uploaded successfully !</h1>
        </div>
        </div>
    ):(
        <div className='p-4'>
        <h1 className='font-mono text-2xl mb-6'>Upload image !</h1>
        <input type="file" className='mr-2' onChange={handleFileChange}  accept="image/*" />
        <label className=' mr-2'>Image name</label>
        <input type="text"
        className='rounded-md mr-4'
        value={Name}
        onChange={e=> SetName(e.target.value)}
         />
          <label className=' mr-2'>Discription</label>
        <input type="text"
        className='rounded-md mr-4'
        value={Discription}
        onChange={e=> SetDiscription(e.target.value)}
         />
          <label className=' mr-2'>Tag</label>
        <input type="text"
        className='rounded-md mr-4'
        value={tag}
        onChange={e=> Settag(e.target.value)}
         />
         
         
        <button className='bg-green-500 px-4 rounded-md ml-4' onClick={handleFileUpload}>Upload and Process File</button>
      </div>
    )}
    
    
   
    </>
    
  );
};

export default UploadPage;
