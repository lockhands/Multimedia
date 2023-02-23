
import React, {
  useState
} from "react";
import QrReader from "react-web-qr-reader";
import { useNavigate } from 'react-router-dom';
import '../styles/origin.css';

function Scanner({direccion}) {

    const navigate=useNavigate();

  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    
    
        navigate(`/info`);
    
    
  };

  const handleError = (error) => {
    console.log(error);
  };


  return (
    <div className="Principiol">
    <QrReader
      delay={delay}
      style={previewStyle}
      onError={handleError}
      onScan={handleScan}
    />
  </div >
  )
}

export default Scanner
