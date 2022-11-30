#!/usr/bin/env node

import { roll } from "./lib/roll.js";
import parseArgs from 'minimist';
import express from 'express';

const args = parseArgs(process.argv.slice(2));
const port = args.port || 5000;


let app = express();
app.use(express.urlencoded({extended:true}));

app.get('/app', function(req, res) {
  res.status(200).send("200 OK");
});

app.get('/app/roll', function(req, res) {
  const query = req.query;
  const sides = query.sides || 6;
  const dice = query.dice || 2;
  const rolls = query.rolls || 1;
  const response = roll(sides, dice, rolls);
  res.send(response);
});

app.post('/app/roll', function(req, res) {
  const body = req.body;
  const sides = body.sides;
  const rolls = body.rolls;
  const dice = body.dice;
  const response = roll(sides, dice, rolls); 
  res.send(response);
});

app.get('/app/roll/:sides', function (req, res) {
  const sides = req.params.sides;
  const response = roll(sides, 2, 1);
  res.send(response); 
});

app.get('/app/roll/:sides/:dice', function (req, res) {
  const sides = req.params.sides;
  const dice = req.params.dice;
  const response = roll(sides, dice, 1);
  res.send(response);
});

app.get('/app/roll/:sides/:dice/:rolls', function (req, res) {
  const sides = req.params.sides;
  const dice = req.params.dice;
  const rolls = req.params.rolls;
  const response = roll(sides, dice, rolls);
  res.send(response);
});

app.get('*', function(req, res) {
  res.status(404).send("404 NOT FOUND");
});

app.listen(port);
