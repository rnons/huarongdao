import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";
import { Piece, Step, start } from "./main";

type State = {
  steps: Step[];
  current: number;
};

const state: State = new Proxy(
  { steps: [], current: 0, total: 0 },
  {
    set: (target, key: keyof State, value: any) => {
      target[key] = value;
      render(App(state), document.body);
      return true;
    }
  }
);

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

const Board = (step: Piece[]) => {
  const pieces = step.map(Piece);
  return html`
    <div class="Board">${pieces}</div>
  `;
};

const onSelectChange = (index: number) => (e: InputEvent) => {
  let target = e.target as HTMLSelectElement;
  // @ts-expect-error
  state.steps[0][index].fix = target.value;
  state.steps = [state.steps[0]];
};

const onInputInitialStep = (index: number, field: keyof Piece) => (
  e: InputEvent
) => {
  let target = e.target as HTMLInputElement;
  // @ts-expect-error
  state.steps[0][index][field] = +target.value;
  state.steps = [state.steps[0]];
};

const PieceInput = ({ fix, x, y, size }: Piece, index: number) => {
  return html`
    <div>
      <span class="PieceInputLabel">${index == 0 ? "曹操" : index} - </span>
      <select value="${fix}" @change=${onSelectChange(index)}>
        <option value="x" ?selected=${fix == "x"}>竖</option>
        <option value="y" ?selected=${fix == "y"}>横</option>
      </select>
      <label>
        行
        <input
          type="number"
          value="${y}"
          min="0"
          max="6"
          @input=${onInputInitialStep(index, "y")}
        />
      </label>
      <label>
        列
        <input
          type="number"
          value="${x}"
          min="0"
          max="6"
          @input=${onInputInitialStep(index, "x")}
        />
      </label>
      <label>
        尺寸
        <input
          type="number"
          value="${size}"
          min="0"
          max="6"
          @input=${onInputInitialStep(index, "size")}
        />
      </label>
    </div>
  `;
};

const Form = (initial: Step) => {
  const rows = initial.map(PieceInput);
  // const rows = "";
  return html`
    <div>
      ${rows}
      <button @click=${run}>Run</button>
    </div>
  `;
};

const onProgressInputStep = (e: InputEvent) => {
  let target = e.target as HTMLInputElement;
  state.current = +target.value;
};

const App = ({ steps, current }: State) => {
  const total = steps.length;
  return html`
    <div class="App">
      <div>
        ${Board(steps[current])}
        <progress value="${current}" max="${total}"></progress>
        <input
          type="number"
          value="${current}"
          min="0"
          max="${total}"
          @input=${onProgressInputStep}
        />
        / <span>${total}</span>
      </div>
      ${Form(steps[0])}
    </div>
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
  console.log("run", state.steps[0]);
  state.steps = await start(state.steps[0]);
}

state.steps = [initialStep];
run();
