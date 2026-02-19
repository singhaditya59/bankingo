import { SOLUTION_ORDER } from "./constants";
import SolutionRow from "./SolutionRow";

export default function SolutionGrid({
  grid,
  onDragStart,
  onDrop,
  correctRows = {},
  shakeRow,
  activeDemoTile,
}) {
  return (
    <div className="flex flex-col items-center gap-8">
      {SOLUTION_ORDER.map((solution, rowIndex) => (
        <SolutionRow
          key={solution}
          solution={solution}
          rowIndex={rowIndex}
          grid={grid}
          onDragStart={onDragStart}
          onDrop={onDrop}
          unlocked={correctRows?.[solution] || false}
          shouldShake={shakeRow === rowIndex}
        />
      ))}
    </div>
  );
}
