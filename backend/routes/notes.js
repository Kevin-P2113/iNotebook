const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// ROUTE - 1: get the notes of a user using  GET: /api/notes/fetchallnotes . login required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  console.log(req.user.id);
  if (!notes) {
    res
      .status(400)
      .json({ error: "some error has occured while fetching ntoes" });
  }
  res.json(notes);
});

// ROUTE - 2: add a new note POST: /api/notes/addnote . login required

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "enter a valid title").isLength({ min: 3 }),
    body("description", "enter a valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { title, description, tag } = req.body;
      const note = new Notes({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "error has occured" });
    }
  }
);

// ROUTE - 3: delete a note POST: /api/notes/deletenote/:noteId . login required

router.delete("/deletenote/:noteId",fetchuser,async(req,res)=>{
try {
  const userId = req.user.id;
  const noteId = req.params.noteId;
  const note = await Notes.findOne({_id:noteId,user:userId});
  if(!note){
    return res.status(400).json({message:"Note not found or does not belong to the user"})
  }
  await Notes.findByIdAndDelete(noteId);
  return res.status(200).json({message:"note was delete successfully"});
  
} catch (error) {
  console.log(error);
  res.status(500).json({message:"internal server error"});
}

})


// ROUTE - 4: update an existing note PUT : /api/notes/updatenote/:noteId . login required

// router.put("/updatenote/:noteId",fetchuser,async (req,res)=>{
// try {
//   const noteId = req.params.noteId;
//   const userId = req.user.id;
//   const oldNote = await Notes.findOne({_id:noteId,user:userId})
//   if(!oldNote){
//     return res.status(400).json({message:"Note not found or does not belong to the user"})
//   }
//   const {title,description,tag} = req.body;
//   const newNote = {};
//   if(title){newNote.title = title};
//   if(description){newNote.description = description};
//   if(tag){newNote.tag = tag};
//   await Notes.findByIdAndUpdate(noteId,newNote);
//   res.status(200).json({message:"note was updated successfully",newNote});
// } catch (error) {
//   console.log(error);
//   return res.status(500).json({message:"server error"});
// }
// })

module.exports = router;
// findOne returns the first object that matches the query, returns null if none are found
// find returns an array of all the objects that match that query. returns an empty array if none are found
// findById
