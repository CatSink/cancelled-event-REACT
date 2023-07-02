const express = require('express');
const { nonExecutableDefinitionMessage } = require('graphql/validation/rules/ExecutableDefinitions');

const stripe = require("stripe")("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")
const {v4: uuidv4 } = require('uuid'); 

const router =express.Router();

router.get('/', (req, res, next) => {
    console.log("GET response");
    res.json({ 
        message: 'success'
    });
});

