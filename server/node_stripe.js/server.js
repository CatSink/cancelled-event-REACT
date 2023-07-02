const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.listen(5000, () => {
    console.log("Listening on port 5000", 5000);
});