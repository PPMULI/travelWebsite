const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../modules/Notes");
const { body, validationResult } = require("express-validator");

// Route 1: Get all notes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});

// add a note
// router.post(
//   "/addnotes",
//   fetchuser,
//   [
//     body("title", "Enter valid title").isLength({ min: 3 }),
//     body("description", "Enter valid description").isLength({ min: 3 }),
//   ],
//   async (req, res) => {
//     try {
//       const { title, description } = req.body;
//       // const {description} = req.body

//       const error = validationResult(req);

//       console.log(description)

//       if (!error.isEmpty()) {
//         return res.status(400).json({ error: error.array() });
//       }

//       const note = new Notes({
//         title,
//         description,
//         user: req.user.id,
//       });

//       console.log(note)

//       const savenote = await note.save();
//       res.json(savenote);
//     } catch (error) {
//       console.log("Error");
//     }
//   }
// );


// new code 
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter valid title").isLength({ min: 3 }),
    body("description", "Enter valid description").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      const { title, description } = req.body;

      // console.log(req.body); // move this line here

      const error = validationResult(req);

      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }

      const note = new Notes({
        title,
        description,
        user: req.user.id,
      });

      const savenote = await note.save();
      res.json(savenote);

      // console.log(res.json(savenote))
    } catch (error) {
      console.log("Error");
    }
  }
);


// Route 3 update note
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  const { title, description } = req.body;
  const newNote = {};

  if (title) {
    newNote.title = title;
  }

  if (description) {
    newNote.description = description;
  }

  // find the note to be updated
  let note = await Notes.findById(req.params.id);

  if (!note) {
    console.log("note is not present");
  }

  if (note.user.toString() !== req.user.id) {
    return res.status(401).json("Not allowed0");
  }

  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );

  res.json(note);
});

// delete the note
router.delete("/deletenotes/:id", fetchuser, async (req, res) => {
    const { title, description } = req.body;
   
    // find the note to be updated
    let note = await Notes.findById(req.params.id);
  
    if (!note) {
      console.log("note is not present");
    }
  

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json("Not allowed0");
    }
  
    note = await Notes.findByIdAndDelete(
      req.params.id,
    );
  
    res.json({"Success": "Note has been deleted"});
  });
  
module.exports = router;
