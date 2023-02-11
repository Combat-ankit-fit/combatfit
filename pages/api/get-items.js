import { result } from 'lodash';
import { number, string } from 'prop-types';

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Clother = require('../../models/clothing');
const Posters = require('../../models/posters');

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

mongoose
    .connect(
        'mongodb+srv://combatfitwears:988DlYG7egp5O0r3@cluster0.1poxtyc.mongodb.net/combat?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Error is:-', err);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE,PUT, OPTIONS'
    );
    next();
});

export default async function handler(req, res) {
    if (req.method === 'GET') {
        if (req?.query?.id === 'clothing') {
            try {
                const clothingItems = await Clother.find().then((documents) => {
                    return documents;
                });
                return res.json(clothingItems);
            } catch (e) {
                console.log('Error is:-', e);
            }
        }
        if (req?.query?.id === 'posters') {
            try {
                const posterItems = await Posters.find().then((documents) => {
                    return documents;
                });
                return res.json(posterItems);
            } catch (e) {
                console.log('Error is:-', e);
            }
        }
    }
}
