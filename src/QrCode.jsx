import React, { useState } from 'react'
import sampleQrImage from './assets/qr_code.svg'

const QrCode = () => {
    const [qrImage, setQrImage] = useState('');
    const [inputData, setInputData] = useState('');
    const [inputSize, setInputSize] = useState('');
    const [loading, setLoading] = useState(false);

    const generateQR = async () => {
        setLoading(true);
        try {
            const urlImg = `https://api.qrserver.com/v1/create-qr-code/?size=${inputSize}x${inputSize}&data=${encodeURIComponent(inputData)}`;
            setQrImage(urlImg);
        } catch (error) {
            console.log("generating QR error: ", error)
        } finally {
            setLoading(false)
        }
    }

    const downloadQR = () => {
        fetch(qrImage)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }).catch((error) => {
                console.log('Error in downloading QR image : ', error);
            });
    }

    return (
        <div className="app-container">
            <div className="card">
                <h1>QR Code Generator</h1>
                {loading && <p className='loading'>Please Wait... </p>}
                <div className='qr-code-image' style={{ display: qrImage ? 'block' : 'none' }}>
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
                        <button className='generate-btn' disabled={loading} onClick={generateQR}>{loading ? 'Generating...' : 'Generate QR'}</button>
                        <button className='download-btn' onClick={downloadQR}>Download</button>
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