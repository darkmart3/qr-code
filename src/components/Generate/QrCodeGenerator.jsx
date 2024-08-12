import { useState } from 'react';
import { QRCodeSVG} from 'qrcode.react';
import s from './cssQrCodeGenerator.module.css';
import {GENERATE_DATA} from  "../../constans";

export const QrCodeGenerator = () => {

const [value , setValue] = useState('');

const [result , setResult] = useState('');



const onClickHandler = () => {

  const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

  localStorage.setItem(
    GENERATE_DATA, 
    JSON.stringify([...prevData, value])
    );

  setResult(value);
  setValue('');

};

const onChangeHandler = (event) => {

  
  setValue(event.target.value);
  setResult('');
}
console.log(result);

  return (
    <div className={s.container} >
    


        <input 
        type="text" 
        placeholder="Enter text:"
        value={value} 
        onChange={onChangeHandler} 
        className={s.input}
        />

        <button  className={s.button}  type='button' onClick={onClickHandler}>Generate QR</button>
        
        <div className={s.qrWrapper}>
          {result && <QRCodeSVG value={result} size={200} /> }
        </div>

    </div>
  );
};

