const hq = 42;
function distanceFromHqInBlocks(block) {
  //return the number of blocks given a value
  if (block < 42) {
    return hq - block;
  }
  if (block > 42) {
    return block - hq;
  }
}
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
  //passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}
function distanceTravelledInFeet(a, b) {
  if (b > a) {
    return (b - a) * 264;
  } else return (a - b) * 264;
}
function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  }
  if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance >= 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
