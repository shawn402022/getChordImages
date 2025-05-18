const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ limit: '10mb' })); // Increase limit for larger images

// Endpoint to save images
app.post('/api/save-image', (req, res) => {
    const { imageData, fileName } = req.body;

    // Create directory if it doesn't exist
    const dir = path.join(__dirname, 'chordImageApp/images');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Convert base64 to buffer and save
    const buffer = Buffer.from(imageData, 'base64');
    const filePath = path.join(dir, fileName);

    fs.writeFile(filePath, buffer, (err) => {
        if (err) {
            console.error('Error saving image:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }

        res.json({ success: true, path: filePath });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
