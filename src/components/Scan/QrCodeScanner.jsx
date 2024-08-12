import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from "./cssQrCodeScanner.module.css";
import {SCAN_DATA} from  "../../constans";
export const QrCodeScanner = () => {

 const [scanned , setScanned]=useState(null); 

  const scanHandler = (result) => {
    setScanned([result[0].rawValue]);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(
      SCAN_DATA, 
      JSON.stringify([...prevData, result[0].rawValue]));

  };

  const settings = {
      audio: false,
      finder: false,
  };

  const stylesSettings = {
     container: { 
      width: 350
     }
  };

  return (
    <div className={s.container}>
      <Scanner 
        // allowMultiple 
        onScan={scanHandler}
        components={settings} 
        styles={stylesSettings} 
      />
      
      <p className={s.result}>{scanned}</p>

    </div>
  );
};