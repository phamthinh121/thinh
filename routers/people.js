const express = require('express');
const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'email.json'
);
const getEmail = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
          return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};
const router = express.Router();

router.get('/', (req, res ,next) => {
    res.render('gui-mail');
});
router.post('/people', async (req, res ,next) => {
    const emailData = req.body;
    fs.writeFile(p, JSON.stringify(emailData), () => {
        res.status(200).json(emailData);
    })
});

module.exports = router;