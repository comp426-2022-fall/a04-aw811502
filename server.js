#!/usr/bin/env node

import { roll } from "./lib/roll.js";
import parseArgs from 'minimist';
import express from 'express';

const args = parseArgs(process.argv.slice(2));
const port = args.port || 5000;

const header = {'Content-Type': 'application/json'};

let app = express();
app.use(express.json());

app.get('/app', function(req, res) {
  console.log("Add /app path");
  res.send("200 OK");
});

app.get('/app/roll', function(req, res) {
  const query = req.query;
  const sides = query.sides || 6;
  const dice = query.dice || 2;
  const rolls = query.rolls || 1;
  const results = roll(sides, dice, rolls); 
  const response = {"sides": sides, "dice": dice, "rolls": rolls, "results": results};
  res.json(response);
});

app.post('/app/roll', function(req, res) {
  const body = req.body;
  const sides = body.sides;
  const rolls = body.rolls;
  const dice = body.dice;
  const results = roll(sides, dice, rolls);
  const response = {"sides": sides, "dice": dice, "rolls": rolls, "results": results};
  res.json(response);
});

app.get('/app/roll/:sides', function (req, res) {
  const sides = req.params.sides;
  const results = roll(sides, 2, 1);
  const response = {"sides": sides, "dice": 2, "rolls": 1, "results": results};
  res.json(response); 
});

app.get('/app/roll/:sides/:dice', function (req, res) {
  const sides = req.params.sides;
  const dice = req.params.dice;
  const results = roll(sides, dice, 1);
  const response = {"sides": sides, "dice": dice, "rolls": 1, "results": results};
  res.json(response);
});

app.get('/app/roll/:sides/:dice/:rolls', function (req, res) {
  const sides = req.params.sides;
  const dice = req.params.dice;
  const rolls = req.params.rolls;
  const results = roll(sides, dice, rolls);
  const response = {"sides": sides, "dice": dice, "rolls": rolls, "results": results};
  res.json(response);
});


app.listen(port);
