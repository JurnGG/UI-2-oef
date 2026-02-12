enum PieceType {
  Lion = 'Lion',
  Lionesse = 'Lionesse',
  Impala = 'Impala',
  Zebra = 'Zebra',
  Rhino = 'Rhino',
  Elephant = 'Elephant',
  Termite = 'Termite',
  Rover = 'Rover',
}
enum Direction {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  UP = 'UP',
  DOWN = 'DOWN',
}

type Piece = {
  label: string;
  pieceType: PieceType;
};

type PieceSet = { [key: string]: Piece };
const pieces: PieceSet = {
  A: { label: 'A', pieceType: PieceType.Lion },
  B: { label: 'B', pieceType: PieceType.Impala },
  C: { label: 'C', pieceType: PieceType.Zebra },
  D: { label: 'D', pieceType: PieceType.Lionesse },
  E: { label: 'E', pieceType: PieceType.Zebra },
  F: { label: 'F', pieceType: PieceType.Lion },
  G: { label: 'G', pieceType: PieceType.Lionesse },
  H: { label: 'H', pieceType: PieceType.Impala },
  I: { label: 'I', pieceType: PieceType.Impala },
  J: { label: 'J', pieceType: PieceType.Lionesse },
  K: { label: 'K', pieceType: PieceType.Impala },
  O: { label: 'O', pieceType: PieceType.Rhino },
  P: { label: 'P', pieceType: PieceType.Elephant },
  Q: { label: 'Q', pieceType: PieceType.Rhino },
  R: { label: 'R', pieceType: PieceType.Elephant },
  S: { label: 'S', pieceType: PieceType.Rhino },
  U: { label: 'U', pieceType: PieceType.Termite },
  V: { label: 'V', pieceType: PieceType.Termite },
  X: { label: 'X', pieceType: PieceType.Rover },
};

type Move = {
  piece: Piece;
  direction: Direction;
  distance: number;
};

const moves: Move[] = [
  {
    piece: pieces['E'],
    direction: Direction.LEFT,
    distance: 1,
  },
  {
    piece: pieces['Q'],
    direction: Direction.DOWN,
    distance: 2,
  },
  {
    piece: pieces['F'],
    direction: Direction.DOWN,
    distance: 1,
  },

  {
    piece: pieces['X'],
    direction: Direction.DOWN,
    distance: 1,
  },

  {
    piece: pieces['X'],
    direction: Direction.RIGHT,
    distance: 3,
  },
];

console.log(moves);
