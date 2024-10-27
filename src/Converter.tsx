import React, { useState } from 'react';
import heic2any from 'heic2any';

const HeicToJpgConverter = () => {
    const [jpgUrl, setJpgUrl] = useState(null);
    const [error, setError] = useState(null);

    const convertHeicToJpg = async (heicFile) => {
        try {
            const jpgBlob = await heic2any({
                blob: heicFile, // The HEIC file as a Blob
                toType: 'image/jpeg', // Desired output format
                quality: 0.8, // Quality of the output JPG (0 to 1)
            });

            // Create a URL for the JPG Blob
            const jpgUrl = URL.createObjectURL(jpgBlob);
            setJpgUrl(jpgUrl); // Store the JPG URL in state
            setError(null); // Clear any previous errors
        } catch (err) {
            console.error('Error converting HEIC to JPG:', err);
            setError('Failed to convert HEIC to JPG. Please try again.');
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file && file.type === 'image/heic') {
            convertHeicToJpg(file);
        } else {
            setError('Please select a valid HEIC file.');
        }
    };

    return (
        <div>
            <input
                type="file"
                accept=".heic"
                onChange={handleFileChange}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {jpgUrl && (
                <div>
                    <h3>Converted JPG:</h3>
                    <img src={jpgUrl} alt="Converted JPG" />
                </div>
            )}
        </div>
    );
};

export default HeicToJpgConverter;
