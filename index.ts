type CharMap = string[][];

export const parseMap = (input: string): CharMap => {
  return input.split('\n').map(line => line.split(''));
};

interface Position {
  row: number;
  col: number;
}

const directions: { [key: string]: Position } = {
  'up': { row: -1, col: 0 },
  'down': { row: 1, col: 0 },
  'left': { row: 0, col: -1 },
  'right': { row: 0, col: 1 }
};

const isLetter = (char: string): boolean => /[A-Z]/.test(char);
const isPath = (char: string): boolean => /[@x\-\|\+]/.test(char);

export const followPath = (map: CharMap): { letters: string, path: string } => {
  const startPositions = findStarts(map);
  if (startPositions.length === 0) {
    throw new Error('Invalid map: missing start character');
  }
  if (startPositions.length > 1) {
    throw new Error('Invalid map: multiple start characters');
  }

  const endPositions = findEnds(map);
  if (endPositions.length === 0) {
    throw new Error('Invalid map: missing end character');
  }
  if (endPositions.length > 1) {
    throw new Error('Invalid map: multiple end characters');
  }

  let position: Position = startPositions[0];
  let direction: keyof typeof directions = 'right';
  let letters = '';
  let path = '';
  const visited = new Set<string>();

  while (true) {
    const char = map[position.row][position.col];
    path += char;

    if (isLetter(char) && !visited.has(`${position.row},${position.col}`)) {
      letters += char;
      visited.add(`${position.row},${position.col}`);
    }

    if (char === 'x') {
      break;
    }

    const nextPosition = getNextPosition(position, direction, map);
    if (!nextPosition) {
      throw new Error('Invalid map: broken path');
    }

    position = nextPosition.position;
    direction = nextPosition.direction;
  }

  return { letters, path };
};

const findStarts = (map: CharMap): Position[] => {
  const starts: Position[] = [];
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      if (map[row][col] === '@') {
        starts.push({ row, col });
      }
    }
  }
  return starts;
};

const findEnds = (map: CharMap): Position[] => {
  const ends: Position[] = [];
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      if (map[row][col] === 'x') {
        ends.push({ row, col });
      }
    }
  }
  return ends;
};

const getNextPosition = (position: Position, direction: keyof typeof directions, map: CharMap): { position: Position, direction: keyof typeof directions } | null => {
  const next = {
    row: position.row + directions[direction].row,
    col: position.col + directions[direction].col
  };

  if (map[next.row] && map[next.row][next.col] && (isPath(map[next.row][next.col]) || isLetter(map[next.row][next.col]))) {
    return { position: next, direction };
  }

   const possibleDirections: (keyof typeof directions)[] = ['up', 'down', 'left', 'right'];
  for (const dir of possibleDirections) {
    if (dir === direction) continue;  

    const newPos = {
      row: position.row + directions[dir].row,
      col: position.col + directions[dir].col
    };

    if (map[newPos.row] && map[newPos.row][newPos.col] && (isPath(map[newPos.row][newPos.col]) || isLetter(map[newPos.row][newPos.col]))) {
       if (newPos.row !== position.row - directions[direction].row || newPos.col !== position.col - directions[direction].col) {
        return { position: newPos, direction: dir };
      }
    }
  }

  return null;
};