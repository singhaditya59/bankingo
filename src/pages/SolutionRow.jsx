import SolutionArrow from "./SolutionArrow";
import { SOLUTIONS } from "./constants";

export default function SolutionRow({
  solution,
  rowIndex,
  grid,
  onDragStart,
  onDrop,
  unlocked,
  shouldShake,
}) {
  const rowItems = grid.slice(rowIndex * 4, rowIndex * 4 + 4);

  const correctKeywords = SOLUTIONS[solution].map((k) =>
    k.toLowerCase()
  );

  const correctCount = rowItems.filter((item) =>
    correctKeywords.includes(item.toLowerCase())
  ).length;

  const isRowComplete = correctCount === 4;

  return (
    <div
      className={`
        flex flex-col sm:flex-row
        items-center justify-center
        gap-4 sm:gap-8
        w-full
        select-none
        touch-none
        transition-all duration-300
        ${shouldShake ? "animate-shake" : ""}
      `}
    >
      {/* Tiles */}
      <div className="flex gap-2 sm:gap-5">
        {rowItems.map((keyword, colIndex) => {
          const index = rowIndex * 4 + colIndex;

          const isCorrectTile = correctKeywords.includes(
            keyword.toLowerCase()
          );

          return (
            <div
              key={index}
              draggable={!isRowComplete}
              onDragStart={() => onDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(index)}
              onTouchStart={() => onDragStart(index)}
              onTouchEnd={() => onDrop(index)}
              style={{ touchAction: "none" }}
              className={`
                relative
                w-14 h-14
                xs:w-16 xs:h-16
                sm:w-20 sm:h-20
                md:w-24 md:h-24
                rounded-full
                flex items-center justify-center
                text-[8px] xs:text-[9px] sm:text-xs
                font-semibold text-center
                px-1
                backdrop-blur-md
                border
                overflow-hidden
                cursor-grab active:cursor-grabbing
                select-none
                transition-all duration-300 hover:scale-105
                ${
                  isCorrectTile
                    ? `
                      bg-orange-500/20
                      border-orange-400
                      text-orange-300
                      shadow-[0_0_20px_rgba(255,140,0,0.9)]
                    `
                    : `
                      bg-white/5
                      border-white/25
                      text-white
                      shadow-[0_0_8px_rgba(255,255,255,0.15)]
                    `
                }
              `}
            >
              {/* Gloss */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-full pointer-events-none" />
              {keyword}
            </div>
          );
        })}
      </div>

      {/* Arrow */}
      <SolutionArrow solution={solution} unlocked={isRowComplete} />
    </div>
  );
}
