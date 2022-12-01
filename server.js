#!/usr/bin/env node

// console.log("starting server.js");
import { roll } from "./lib/roll.js";
import parseArgs from 'minimist';
import express from 'express';

// console.log("imported libraries");
const args = parseArgs(process.argv.slice(2));
const port = args.port || 5000;

// console.log("parsed args");
// console.log(roll(3,2,4));
let app = express();
app.use(express.urlencoded({extended:true}));

// console.log("made app");

// app.get('/app/', (req, res) => {
//   // console.log("1start");
//   res.status(200).send("200 OK");
//   // console.log("1end");
// });

// app.get('/app/roll/', (req, res) => {
//   console.log("start2");
//   const response = roll(6,2,1);
//   console.log(response);
//   res.status(200).send(response);
//   console.log("2end");
// });

// app.post('/app/roll/', (req, res) => {
//   console.log("3start");
//   const body = req.body;
//   const sides = parseInt(body.sides);
//   const rolls = parseInt(body.rolls);
//   const dice = parseInt(body.dice);
//   const response = roll(sides, dice, rolls); 
//   res.status(200).send(response);
//   console.log("3end");
// });

// app.get('/app/roll/:sides/', (req, res) => {
//   console.log("4start");
//   const sides = parseInt(req.params.sides);
//   const response = roll(sides, 2, 1);
//   res.status(200).send(response);
//   console.log("4end"); 
// });

// app.get('/app/roll/:sides/:dice/', (req, res) => {
//   console.log("5start");
//   const sides = parseInt(req.params.sides);
//   const dice = parseInt(req.params.dice);
//   const response = roll(sides, dice, 1);
//   res.status(200).send(response);
//   console.log("5end");
// });

// app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
//   console.log("6start");
//   const sides = parseInt(req.params.sides);
//   const dice = parseInt(req.params.dice);
//   const rolls = parseInt(req.params.rolls);
//   const response = roll(sides, dice, rolls);
//   res.status(200).send(response);
//   console.log("6end");
// });

app.use((req, res) => {
  res.status(404).send("404 NOT FOUND");
});

app.listen(port);
