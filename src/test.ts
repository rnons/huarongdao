import { Piece, start } from "./main";

const pieces: Piece[] = [
  { fix: "y", y: 2, x: 2, size: 2 }, // main piece
  { fix: "y", y: 0, x: 1, size: 2 },
  { fix: "y", y: 3, x: 0, size: 2 },
  { fix: "y", y: 4, x: 4, size: 2 },
  { fix: "y", y: 5, x: 0, size: 2 },
  { fix: "y", y: 5, x: 3, size: 2 },
  { fix: "x", x: 0, y: 0, size: 2 },
  { fix: "x", x: 1, y: 1, size: 2 },
  { fix: "x", x: 2, y: 3, size: 3 },
  { fix: "x", x: 3, y: 0, size: 2 },
  { fix: "x", x: 3, y: 3, size: 2 },
  { fix: "x", x: 4, y: 2, size: 2 },
  { fix: "x", x: 5, y: 0, size: 3 }
];

const pieces2: Piece[] = [
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

start(pieces2);
