const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAll, getstudInst, addcohort, modifyCohort, deleteCohort } = require('../controllers/cohorts.js');

/// POSTS ROUTES ///

//GET request to fetch all Instructor. NOTE This must come before route for id.
router.get('/getAll',getAll );
// GET request for one Instructor.
router.get('/:cohId',getstudInst );
// POST request for creating a new Instructor.
router.post('/add', addcohort);
// PUT request for Modifying a Instructor.
router.put('/:cohId',modifyCohort)
// DELETE request for deleting a Instructor
router.delete('/:cohId',deleteCohort)

module.exports = router;