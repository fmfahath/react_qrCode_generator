import React, { useState } from 'react'
import sampleQrImage from './assets/qr_code.svg'

const QrCode = () => {
    const [qrImage, setImage] = useState(sampleQrImage);
    const [inputData, setInputData] = useState('');
    const [inputSize, setInputSize] = useState('');

    const generateQR = () => {

    }

    return (
        <div className="app-container">
            <div className="card">
                <h1>QR Code Generator</h1>
                <div className='qr-code-image'>
                    <img src={qrImage} alt="qr-code-image" />
                </div>
                <div className='form'>
                    <div className='form-element'>
                        <label htmlFor="dataInput" className='input-label'>Data for Code:</label>
                        <input type="text" id='dataInput' placeholder='Enter data for QR' onChange={(e) => setInputData(e.target.value)} />
                    </div>
                    <div className='form-element'>
                        <label htmlFor="sizeInput" className='input-label'>Image Size (e.g: 150px):</label>
                        <input type="text" id='sizeInput' placeholder='Enter image size' onChange={(e) => setInputSize(e.target.value)} />
                    </div>
                    <div className='form-btn'>
                        <button className='generate-btn' disabled={false} onClick={generateQR}>Generate QR</button>
                        <button className='download-btn' >Download</button>
                    </div>
                    <div className='footer'>
                        <p>Designed By: <a href="#">FM. Fahath</a></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default QrCode