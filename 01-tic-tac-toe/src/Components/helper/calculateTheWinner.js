export default function calculateTheWinner(nexHistory) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner = null;
  let squaresHighlight = [];

  lines.forEach((line) => {
    const [a, b, c] = line;
    if (
      nexHistory[a] &&
      nexHistory[a] === nexHistory[b] &&
      nexHistory[a] === nexHistory[c]
    ) {
      winner = nexHistory[a];
      squaresHighlight.push(a);
      squaresHighlight.push(b);
      squaresHighlight.push(c);
    }
  });

  return [winner, squaresHighlight];
}
