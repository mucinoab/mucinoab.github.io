import init, * as wasm from "./frontend.js";

const TICKS_PER_FRAME = 8;
const ORIGINAL_WIDTH = 64;
const ORIGINAL_HEIGHT = 32;
const SCALE = 12;

const input = document.getElementById("fileinput");
const canvas = document.getElementById("canvas");
canvas.width = ORIGINAL_WIDTH * SCALE;
canvas.height = ORIGINAL_HEIGHT * SCALE;

const ctx = canvas.getContext("2d");

async function run() {
  await init();
  let chip8 = new wasm.Emulator();

  document.addEventListener("keydown", e => chip8.keypress(e, true));
  document.addEventListener("keyup", e => chip8.keypress(e, false));

  input.addEventListener("change", e => {
    let file = e.target.files[0];

    if (!file) {
      alert("Unable to read file.");
      return;
    }

    let fr = new FileReader();
    clear_screen();
    chip8.reset();

    fr.onload = _ => {
      const rom = new Uint8Array(fr.result);

      chip8.load_game(rom);
      mainloop(chip8);
    };

    fr.readAsArrayBuffer(file);
  }, false);
}

function mainloop(chip8) {
  for (let i = 0; i < TICKS_PER_FRAME; i += 1)
    chip8.cycle();

  clear_screen();
  chip8.draw_screen(SCALE);

  window.requestAnimationFrame(_ => mainloop(chip8));
}

function clear_screen() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, ORIGINAL_WIDTH * SCALE, ORIGINAL_HEIGHT * SCALE);
  ctx.fillStyle = "black";
}

run().catch(console.error);
