import './App.css'
import React, {
  useState
} from "react";
import QrReader from "react-web-qr-reader";
import { useNavigate } from 'react-router-dom';

function Scanner({direccion}) {

    const navigate=useNavigate();

  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    
    if(result){
        navigate(`${direccion}`)
    }
    
  };

  const handleError = (error) => {
    console.log(error);
  };


  return (
    <>
    <QrReader
      delay={delay}
      style={previewStyle}
      onError={handleError}
      onScan={handleScan}
    />
    <p>{result}</p>
  </>
  )
}

export default Scanner
