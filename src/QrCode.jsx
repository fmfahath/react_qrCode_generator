import React from 'react'
import qrImage from './assets/qr_code.svg'

const QrCode = () => {
    return (
        <div className="app-container">
            <h1>QR Code Generator</h1>
            <div className='qr-code-image'>
                <img src={qrImage} alt="qr-code-image" />
            </div>
            <div className='form'>
                <div>
                    <label htmlFor="dataInput" className='input-label'>Data for Code:</label>
                    <input type="text" id='dataInput' placeholder='Enter data for QR' />
                </div>
                <div>
                    <label htmlFor="sizeInput" className='input-label'>Image Size (e.g: 150px):</label>
                    <input type="text" id='sizeInput' placeholder='Enter image size' />
                </div>
                <div>
                    <button className='generate-btn'>Generate QR</button>
                    <button className='download-btn'>Download</button>
                </div>
                <div className='footer'>
                    <p>Designed By: <a href="#">FM. Fahath</a></p>
                </div>
            </div>
        </div>
    )
}

export default QrCode