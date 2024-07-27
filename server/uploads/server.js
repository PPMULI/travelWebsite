const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5000;

// Set up storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Appends the original extension of the file
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.send({
      status: true,
      message: 'File uploaded successfully',
      data: {
        name: req.file.filename,
        mimetype: req.file.mimetype,
        size: req.file.size
      }
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      message: 'File upload failed',
      error: err.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
