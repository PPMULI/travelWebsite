const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const functions = require('firebase-functions');
const fs = require("fs");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const email = req.body.email;
    console.log(email)
    const dir = `uploads/${email}/`;

    fs.mkdirSync(dir, { recursive: true }); // Create the directory if it doesn't exist

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    // cb(null, Date.now() + path.extname(file.originalname));
    return cb(null, `${file.originalname}`);
  },
});

// console.log(storage.diskStorage)

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  try {
    res.send({
      status: true,
      message: "File uploaded successfully",
      data: {
        // name: req.file.filename,
        name: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path,
        email: req.body.email,
      },
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      message: "File upload failed",
      error: err.message,
    });
  }
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
