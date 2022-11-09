#!/usr/bin/env node

import { random, floor } from 'mathjs';

export function roll(sides, dice, rolls) {
  let roll_list = [];
  for (let i=0; i<rolls; i++) {
    roll_list.push(roll_dice(sides, dice));
  }
  return roll_list;
}

function roll_dice(sides, dice) {
  let sum = 0;
  for (let i=0; i<dice; i++) {
    sum += roll_die(sides);
  }
  return sum;
}

function roll_die(sides) {
  return floor(random()*sides) + 1;
}
