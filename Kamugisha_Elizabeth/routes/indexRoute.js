const express = require('express');
const router = express.Router();

// Importing model schemas
const CovidTestReg = require('../models/CovidTestReg')

// Get & Post Methods for Covid Test Registration Page
router.get('/',(req,res)=>{
    res.render('covidTestReg')
});

// router.post('/covidTestRegistration', (req, res) => {
//   console.log(req.body)
//   res.render('covidTestReg')
// });

// Save covid test registration to database
router.post('/covidTestRegistration', async (req, res) => { 
    try { const newReg = new CovidTestReg(req.body);
        await newReg.save()
            console.log(req.body)
            res.redirect('/')
        } catch (err) { 
                res.status(400).send('Sorry! Something went wrong with Registration.')
                console.log(err)}
            });
            
module.exports = router;