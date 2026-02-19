export default function DraggableTile({
  item,
  index,
  onDragStart,
  onDrop,
}) {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(index)}
      className="
        relative w-20 h-20
        bg-white/20 backdrop-blur-lg
        border-[3px] border-[#ff8c1a]
        rounded-md flex items-center justify-center
        text-[11px] font-semibold text-white text-center
        cursor-move
        shadow-[inset_0_2px_3px_rgba(255,255,255,0.35),0_0_18px_rgba(255,140,26,0.55)]
        hover:bg-white/30 transition-all
      "
    >
      <span className="absolute top-1 left-1 right-1 h-1/3 bg-white/20 rounded-sm pointer-events-none" />
      {item}
    </div>
  );
}
