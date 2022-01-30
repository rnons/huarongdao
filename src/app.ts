import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";
import { Piece, State, start } from "./main";

const cellSize = 50;

const getColor = (x: number): string =>
  Math.floor(x)
    .toString(16)
    .slice(0, 2)
    .padEnd(2, "0");

const colors = [
  "crimson",
  "coral",
  "chocolate",
  "cadetblue",
  "chartreuse",
  "cornflowerblue",
  "wheat",
  "forestgreen",
  "gold",
  "indigo",
  "grey",
  "limegreen",
  "lightcoral",
  "seagreen",
  "yellowgreen"
];

const Piece = ({ fix, x, y, size }: Piece, index: number) => {
  const hwAttr = fix == "x" ? "height" : "width";
  const styles = {
    top: `${y * cellSize}px`,
    left: `${x * cellSize}px`,
    backgroundColor: colors[index],
    [hwAttr]: `${size * cellSize}px`
  };
  return html`
    <div class="Piece" style=${styleMap(styles)}></div>
  `;
};

const Board = (state: Piece[]) => {
  const pieces = state.map(Piece);
  return html`
    <div class="Board">${pieces}</div>
  `;
};

const initialStep: Piece[] = [
  { fix: "y", y: 2, x: 0, size: 2 }, // main piece
  { fix: "y", y: 0, x: 0, size: 3 },
  { fix: "y", y: 1, x: 0, size: 3 },
  { fix: "y", y: 3, x: 4, size: 2 },
  { fix: "y", y: 4, x: 3, size: 2 },
  { fix: "x", x: 0, y: 3, size: 2 },
  { fix: "x", x: 2, y: 4, size: 2 },
  { fix: "x", x: 3, y: 0, size: 2 },
  { fix: "x", x: 3, y: 2, size: 2 },
  { fix: "x", x: 4, y: 0, size: 3 },
  { fix: "x", x: 5, y: 4, size: 2 }
];

async function run() {
  const steps = await start(initialStep);

  let i = 0;
  for (const step of steps) {
    console.log(i++);
    render(
      html`
        <div>${Board(step)}</div>
      `,
      document.body
    );
    await new Promise(resolve => setTimeout(resolve, 200));
  }
}

run();
