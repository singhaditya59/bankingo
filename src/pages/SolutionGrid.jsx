import { SOLUTION_ORDER } from "./constants";
import SolutionRow from "./SolutionRow";

export default function SolutionGrid({
  grid,
  onDragStart,
  onDrop,
  correctRows = {},
  shakeRow,
}) {
  return (
    <div
      className="
        w-full
        max-w-[420px]
        sm:max-w-[520px]
        mx-auto
        flex flex-col
        items-center
        gap-6 sm:gap-8
        px-2
      "
    >
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
