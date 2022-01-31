const COL = 6;
const ROW = 6;

export type Piece = {
  fix: "x" | "y";
  x: number;
  y: number;
  size: number;
};

export type Step = Piece[];

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start }).map((_, index) => start + index);
}

function isPieceEqual(p1: Piece, p2: Piece) {
  return p1.fix == p2.fix && p1.x == p2.x && p1.y == p2.y && p1.size == p2.size;
}

export class State {
  public numPieces: number;
  private board: number[][] = [];

  constructor(public pieces: Piece[]) {
    this.numPieces = pieces.length;
    for (let x = 0; x < COL; x++) {
      this.board[x] = [];
      for (let y = 0; y < COL; y++) {
        this.board[x][y] = 1; // 1 means empty
      }
    }
    for (const { fix, x, y, size } of pieces) {
      if (fix == "x") {
        for (let i = 0; i < size; i++) {
          this.board[x][y + i] = 0; // 0 means filled
        }
      } else {
        for (let i = 0; i < size; i++) {
          this.board[x + i][y] = 0; // 0 means filled
        }
      }
    }
  }

  private isEmpty(x: number, y: number) {
    return this.board[x]?.[y];
  }

  isEuqal(state: State) {
    return this.pieces.every((p1, index) =>
      isPieceEqual(p1, state.pieces[index])
    );
  }

  isDone() {
    const { fix, x, y, size } = this.pieces[0];
    if (fix == "y") {
      return range(x + size, COL).every(v => this.isEmpty(v, y));
    }
    return range(y + size, ROW).every(v => this.isEmpty(x, v));
  }

  private _getNewPositions(piece: Piece) {
    const { fix, x, y, size } = piece;
    const newPositions = [];
    if (fix == "y") {
      if (this.isEmpty(x - 1, y)) {
        // Can move left.
        newPositions.push({ ...piece, x: x - 1 });
      }
      if (this.isEmpty(x + size, y)) {
        // Can move right.
        newPositions.push({ ...piece, x: x + 1 });
      }
    } else {
      if (this.isEmpty(x, y - 1)) {
        // Can move up.
        newPositions.push({ ...piece, y: y - 1 });
      }
      if (this.isEmpty(x, y + size)) {
        // Can move down.
        newPositions.push({ ...piece, y: y + 1 });
      }
    }
    return newPositions;
  }

  walk(index: number): State[] {
    let leading = this.pieces.slice(0, index);
    let ending = this.pieces.slice(index + 1);
    return this._getNewPositions(this.pieces[index]).map(
      position => new State([...leading, position, ...ending])
    );
  }
}

function isOneMoveDiff(step1: Step, step2: Step) {
  let move = 0;
  for (let i = 0; i < step1.length; i++) {
    let p1 = step1[i];
    let p2 = step2[i];
    move += Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
  }
  return move == 1;
}

async function optimize(steps: Step[], cursor: number = 0): Promise<Step[]> {
  await new Promise(resolve => setTimeout(resolve));
  let cursorStep = steps[cursor];
  if (!cursorStep) {
    return steps;
  }
  for (let i = steps.length - 1; i > cursor; i--) {
    if (isOneMoveDiff(cursorStep, steps[i])) {
      steps = [...steps.slice(0, cursor + 1), ...steps.slice(i)];
      return optimize(steps, cursor + 1);
    }
  }
  return optimize(steps, cursor + 1);
}

export async function start(step: Step) {
  const knownStates: State[] = [];
  let isDone = false;
  let finalSteps: Step[] = [];

  async function run(state: State, steps: Step[]) {
    if (state.isDone()) {
      isDone = true;
      finalSteps = steps;
      return;
    }

    for (let i = 0; i < state.numPieces; i++) {
      for (const newState of state.walk(i)) {
        if (isDone) {
          return;
        }
        if (knownStates.every(s => !s.isEuqal(newState))) {
          knownStates.push(newState);
          await run(newState, [...steps, newState.pieces]);
          continue;
        }
      }
    }
  }

  await run(new State(step), [step]);
  console.log("Done after", finalSteps.length, "steps");
  finalSteps = await optimize(finalSteps);
  console.log("Optimized to", finalSteps.length, "steps");
  let i = 0;
  return finalSteps;
}
