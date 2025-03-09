import React, { useState } from 'react'
import QRCode from 'react-qr-code';

export default function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    // const [qrCodeUrl, setQrCodeUrl] = useState(null);
    const [input, setInput] = useState('');

    const handleGenerateQrCode = () => {
        setQrCode(input);
        setInput('');
    };

    const handleKeyDown=(e)=>{
        if(e.key === 'Enter'){
            handleGenerateQrCode();
        }
    }
    return (
        <div className='w-fit mx-auto mt-20'>
            <h1 className="text-3xl font-semibold text-center my-4">
                QR Code Generator
            </h1>
            <div className=" flex gap-4 items-center my-2">
                <input type="text" className='px-4 py-1 focus:outline-none border  rounded-lg' value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={handleKeyDown} />
                <button className='p-2 rounded-lg bg-gray-200  ' onClick={handleGenerateQrCode} disabled={input && input.trim() != '' ? false : true}>Generate QR Code</button>
            </div>
            <div className="">
                <QRCode value={qrCode} size={400} />
            </div>
        </div>
    )
}
