const HEAD = 1;
const TAIL = 0;

let coinFlip = Math.floor(Math.random() * 10) % 2;

if (HEAD == coinFlip) {
  console.log("THIS TIME HEAD ");
} else {
  console.log("THIS TIME TAIL ");
}
