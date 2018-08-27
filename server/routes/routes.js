const express = require('express');
const router = express.Router();

const axios = require('axios');

const PecheAPI = 'https://script.google.com/macros/s/AKfycbx43AGdWtjiHEk5LydY3alNlHxXzT-AudQr0wKhALae4-ROliAf/exec';

//GET P0ST

router.get('/home', (req, res) => {
    res.send('it works');
});

router.get('/peches', (req, res) => {
    
    axios.get(PecheAPI,'/peches').then(peches => {
        // console.log(peches.data);
        res.status(200).json(peches.data);
    })

    .catch(error => {
        res.status(500).send(error);
    });

});

module.exports = router;