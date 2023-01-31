const express = require('express');
const router = express.Router();

// Require controller modules.
const {getAllInstructors, getOneInstructor, addInstructor, modifyInstructor, deleteInstructor } = require('../controllers/instructors.js');

/// POSTS ROUTES ///

//GET request to fetch all Instructor. NOTE This must come before route for id.
router.get('/getAll',getAllInstructors );
// GET request for one Instructor.
router.get('/:instId', getOneInstructor);
// POST request for creating a new Instructor.
router.post('/add', addInstructor);
// PUT request for Modifying a Instructor.
router.put('/:instId',modifyInstructor)
// DELETE request for deleting a Instructor
router.delete('/:instId',deleteInstructor)

module.exports = router;