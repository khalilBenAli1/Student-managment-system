const express = require('express');
const router = express.Router();

// Require controller modules.
const {getAllStudent, getOneStudent, addStudent, modifyStudent, deleteStudent } = require('../controllers/students.js');

/// POSTS ROUTES ///

//GET request to fetch all student. NOTE This must come before route for id.
router.get('/getAll', getAllStudent);
// GET request for one post.
router.get('/:studId', getOneStudent);
// POST request for creating a new student.
router.post('/add', addStudent);
// PUT request for Modifying a student.
router.put('/:studId',modifyStudent)
// DELETE request for deleting a student
router.delete('/:studId',deleteStudent)

module.exports = router; 