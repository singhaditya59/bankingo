import { SOLUTION_URLS } from "./constants";

export default function SolutionArrow({ solution, unlocked }) {
  return (
    <a
      href={unlocked ? SOLUTION_URLS[solution] : undefined}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => !unlocked && e.preventDefault()}
      className={`
        relative
        flex items-center justify-center
        w-[140px] sm:w-[180px]
        h-[48px] sm:h-[56px]
        px-3 sm:px-4
        text-[10px] sm:text-xs
        font-semibold tracking-wider
        backdrop-blur-md
        transition-all duration-300
        text-center leading-tight
        overflow-hidden
        select-none
        ${
          unlocked
            ? `
              bg-orange-500/15
              border border-orange-400/80
              text-orange-300
              shadow-[0_0_20px_rgba(255,140,0,0.8)]
              hover:shadow-[0_0_35px_rgba(255,140,0,1)]
              hover:scale-105
            `
            : `
              bg-white/5
              border border-white/20
              text-white/50
              cursor-not-allowed
              opacity-60
            `
        }
      `}
    >
      {/* Gloss Reflection */}
      <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      {solution}
    </a>
  );
}
