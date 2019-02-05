const express = require('express');
const db = require('./db');

const app = express();
module.exports = app;

app.get('/', (req, res, next)=> {
  const user = req.users[0];
  res.redirect(`/users/${user.id}`);