import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import skyline from "../assets/skyline.png";
import { SOLUTIONS, SOLUTION_ORDER, derangedShuffle2 } from "./constants";
import SolutionGrid from "./SolutionGrid";
import newgenlogo from "../assets/newgen_logo.png";

export default function PowerYourBank() {
  const navigate = useNavigate();
 

const [grid, setGrid] = useState(() =>
  SOLUTION_ORDER.flatMap((solution) => derangedShuffle2[solution])
);
  const [dragIndex, setDragIndex] = useState(null);
  const [correctRows, setCorrectRows] = useState({});
  const [shakeRow, setShakeRow] = useState(null);
  const [win, setWin] = useState(false);

  const onDragStart = (index) => setDragIndex(index);

  const onDrop = (dropIndex) => {
  if (dragIndex === null) return;

  const sourceRow = Math.floor(dragIndex / 4);
  const targetRow = Math.floor(dropIndex / 4);

  const draggedItem = grid[dragIndex];

  
  if (sourceRow === targetRow) {
    const updated = [...grid];
    [updated[dragIndex], updated[dropIndex]] = [
      updated[dropIndex],
      updated[dragIndex],
    ];

    setGrid(updated);
    setDragIndex(null);
    return;
  }

  
  const targetSolution = SOLUTION_ORDER[targetRow];
  const allowedKeywords = SOLUTIONS[targetSolution].map(k =>
    k.toLowerCase()
  );

  const isValidMove = allowedKeywords.includes(
    draggedItem.toLowerCase()
  );

  if (!isValidMove) {
    
    setShakeRow(targetRow);

    setTimeout(() => setShakeRow(null), 400);

    setDragIndex(null);
    return; 
  }

  
  const updated = [...grid];
  [updated[dragIndex], updated[dropIndex]] = [
    updated[dropIndex],
    updated[dragIndex],
  ];

  setGrid(updated);
  setDragIndex(null);
};


  
  useEffect(() => {
    const status = {};

    SOLUTION_ORDER.forEach((solution, rowIndex) => {
      const expected = SOLUTIONS[solution].map((k) => k.toLowerCase());
      const actual = grid
        .slice(rowIndex * 4, rowIndex * 4 + 4)
        .map((k) => k.toLowerCase());

      status[solution] = expected.every((k) => actual.includes(k));
    });

    setCorrectRows(status);
    setWin(Object.values(status).every(Boolean));
  }, [grid]);

  return (
    <div className="font-montserrat relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-purple-950">
      {/* Purple Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-black/60" />

      {/* Skyline */}
      <div className="absolute -bottom-10 sm:-bottom-14 md:-bottom-20 left-0 w-full pointer-events-none">
        <img src={skyline} alt="City Skyline" className="w-full object-cover opacity-0" />
      </div>

      {/* Fade above skyline */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-purple-900/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        
        {/* LEFT CONTENT */}
      <div className="text-white max-w-md w-full flex flex-col items-start">

          {/* NEWGEN LOGO */}
      <img
          src={newgenlogo}
          alt="Newgen Logo"
          className="w-[140px] md:w-[180px] mb-6"
      />

  {/* Heading */}
  <h1 className="text-lg sm:text-xl font-extrabold text-orange-400 leading-tight tracking-wide drop-shadow-[0_0_20px_rgba(255,140,0,0.6)] whitespace-nowrap">YOU HAVE ENTERED THE X ZONE</h1>


  {/* Instruction Card */}
  <div className="
    mt-6
    w-full
    rounded-sm
    px-4 py-3
    backdrop-blur-sm
  ">
    
    <p className="text-sm font-semibold mb-2">
      HOW TO SOLVE THE GRID:
    </p>

    <ul className="text-sm space-y-1 list-disc pl-5 opacity-90">
      <li>REVIEW THE GRID</li>
      <li>
        IDENTIFY WHAT BELONGS UNDER RETAIL LENDING,
        PAYMENT HUB, COMMERCIAL LENDING & TRADE FINANCE
      </li>
      <li>DRAG AND DROP TO THE RELEVANT CATEGORY</li>
    </ul>
  </div>

</div>


        {/* GRID SECTION */}
        <div className="col-span-2 flex justify-center">
          <SolutionGrid
            grid={grid}
            onDragStart={onDragStart}
            onDrop={onDrop}
            correctRows={correctRows}
            shakeRow={shakeRow}
          />
        </div>
      </div>

      {/* WIN BUTTON */}
      {win && (
        <div className="fixed bottom-4 right-8 z-30">
          <button
            onClick={() => navigate("/success")}
            className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold tracking-wide shadow-[0_0_35px_rgba(255,140,0,0.9)] hover:scale-105 hover:shadow-[0_0_45px_rgba(255,140,0,1)] transition-all duration-300 animate-pulse"
          >
            View Your Reward
          </button>
        </div>
      )}
    </div>
  );
}
