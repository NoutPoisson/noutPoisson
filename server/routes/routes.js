const express = require('express');
const router = express.Router();

const axios = require('axios');

const PecheAPI = 'https://script.googleusercontent.com/macros/echo?user_content_key=DIjRihug0SJrj7yFulou6jdqAobkMxEmnAcnkmbz-lciVQXbQfBZrdNL5GXDUa_QxfB6WX2b2FQGCc6EtrNmG5dUcaUYcmmpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOUimS21FZo6D7sluF8pOkkSmRxfuFf0uVjW4ZXYJ7iW_stSOQScfqityz7t__V6ELhbSbv1AEW0&lib=MUGfYFarOSIdak15tqzuHwD4e4-6gCWR5';

//GET P0ST

router.get('/', (req, res) => {
    res.send('it works')
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