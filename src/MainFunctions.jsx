import axios from "axios";
import { useState } from "react";

export const fetchImage = async()=>{
    const [data, SetData] = useState();
    try {
        const response = await axios.get('https://image-api-h3en.onrender.com/');
        SetData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
      return data
}