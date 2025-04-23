const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');

mongoose.connect('mongodb+srv://leschaevejimmy:FreeDoMind1996fdm!@cluster.h0j3cus.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion réussie à la library !'))
    .catch(() => console.log('Connexion échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);

module.exports = app;