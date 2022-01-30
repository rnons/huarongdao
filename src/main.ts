const COL = 6;
const ROW = 6;

export interface Piece {
  fix: "x" | "y";
  x: number;
  y: number;
  size: number;
}

type Step = Piece[];

function isPieceOn(
  { fix, x, y, size }: Piece,
  xt: number,
  yt: number
): boolean {
  if (fix == "x" && x == xt) {
    return y <= yt && y + size > yt;
  }
  if (fix == "y" && y == yt) {
    return x <= xt && x + size > xt;
  }
  return false;
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start }).map((_, index) => start + index);
}

function isPieceEqual(p1: Piece, p2: Piece) {
  return p1.fix == p2.fix && p1.x == p2.x && p1.y == p2.y && p1.size == p2.size;
}

export class State {
  public numPieces: number;

  constructor(public pieces: Piece[]) {
    this.numPieces = pieces.length;
  }

  getPiece(index: number) {
    return this.pieces[index];
  }

  private isEmpty(x: number, y: number) {
    if (x < 0 || x >= COL || y < 0 || y >= ROW) {
      // Outside the board.
      return false;
    }
    return !this.pieces.some(p => isPieceOn(p, x, y));
  }

  isEuqal(state: State) {
    return this.pieces.every((p1, index) =>
      isPieceEqual(p1, state.getPiece(index))
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

function isKnownState(states: State[], state: State) {
  return states.some(s => s.isEuqal(state));
}

export async function start(step: Step) {
  const knownStates: State[] = [];
  let isDone = false;
  let finalSteps: Step[] = [];

  async function run(state: State, steps: Step[] = []) {
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
        if (!isKnownState(knownStates, newState)) {
          knownStates.push(newState);
          steps.push(newState.pieces);
          await run(newState, steps);
          continue;
        }
      }
    }
  }

  await run(new State(step));
  console.log("Done after", finalSteps.length, "steps");
  return finalSteps;
}
