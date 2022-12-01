export function roll(sides, dice, rolls) {
  let roll_list = [];
  for (let i=0; i<rolls; i++) {
    roll_list.push(roll_dice(sides, dice));
  }
  return {"sides": sides, "dice": dice, "rolls": rolls, "results": roll_list};
}

function roll_dice(sides, dice) {
  let sum = 0;
  for (let i=0; i<dice; i++) {
    sum += roll_die(sides);
  }
  return sum;
}

function roll_die(sides) {
  return Math.floor(Math.random()*sides) + 1;
}
