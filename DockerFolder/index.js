const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    res.send({ "id": 11, "name": "KUCP23CC013" });
});

app.listen(5000, () => {
    console.log('Express Server is Running at Port No 5000..');
});
