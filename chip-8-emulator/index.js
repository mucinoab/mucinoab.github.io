// You can get the full source code of the WASM at: https://github.com/mucinoab/chip-8
import init, * as wasm from "./frontend.js";

// TODO sound

const TICKS_PER_FRAME = 10;
const ORIGINAL_WIDTH = 64;
const ORIGINAL_HEIGHT = 32;
const SCALE = calculateScale();


await init();
let chip8 = null;
let frameId = null;
let roms = {};

const startButton = document.getElementById("start-button");
startButton.onclick = _ => { startEmulator(); };

const gameSelector = document.getElementById("game-selector");
gameSelector.addEventListener("change", _ => { changeGame(); }, false);

const canvas = document.getElementById("canvas");
canvas.width = ORIGINAL_WIDTH * SCALE;
canvas.height = ORIGINAL_HEIGHT * SCALE;

// Control Buttons
let isStopped = false;
const playButton = document.getElementById("play");
const stepButton = document.getElementById("step");

await loadGames();

function startEmulator() {
  // Game controls
  document.addEventListener("keydown", e => { chip8.keypress(e, true); });
  document.addEventListener("keyup", e => { chip8.keypress(e, false); });

  // Emulator control buttons
  playButton.onclick = _ => { isStopped = !isStopped; console.log(isStopped); };
  stepButton.onclick = _ => { step(); };

  // Resize the iframe to show the whole emulator
  window.parent.document.getElementById("chip8").style.height = "450px";

  // Show emulator
  startButton.style.display = "none";
  document.getElementById("game-panel").style.display = "block";

  chip8 = new wasm.Emulator();
  chip8.load_game(roms[gameSelector.value]);
  mainloop(chip8);
}

async function loadGames() {
  // Source: https://github.com/mattmikolay/chip-8
  const games = ["wipeoff.ch8", "EKG.ch8", "morse_demo.ch8", "OpCodeTest.ch8"];

  for (const game of games) {
    roms[game] = await fetch("games/" + game)
      .then(response => response.arrayBuffer())
      .then(r => new Uint8Array(r))
      .catch(console.error);
  }
}

function changeGame() {
  window.cancelAnimationFrame(frameId);

  clear_screen();
  chip8.reset();
  chip8.load_game(roms[gameSelector.value]);

  isStopped = false;
  mainloop(chip8);
}

function step() {
  for (let i = 0; i < TICKS_PER_FRAME; i += 1)
    chip8.cycle();

  clear_screen();
  chip8.draw_screen(SCALE, canvas.width, canvas.height);
}

function mainloop() {
  if (!isStopped)
    step();

  frameId = window.requestAnimationFrame(_ => mainloop());
}

function clear_screen() {
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, ORIGINAL_WIDTH * SCALE, ORIGINAL_HEIGHT * SCALE);
  ctx.fillStyle = "black";
}

function calculateScale() {
  return window.innerWidth / ORIGINAL_WIDTH;
}
