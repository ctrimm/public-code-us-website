import React, { useState } from 'react';
import { STATES, getStateByAbbr } from '../lib/states';

interface StateMapGridProps {
  onStateSelect?: (stateSlug: string) => void;
}

// Standard US state tile grid map layout
// Each state is positioned at [row, col] on a 10-row x 12-col grid
// This follows the widely-used NPR / FiveThirtyEight tile grid convention
const STATE_POSITIONS: Record<string, [number, number]> = {
  // Row 0
  AK: [0, 0],
  ME: [0, 11],
  // Row 1
  WI: [1, 6],
  VT: [1, 9],
  NH: [1, 10],
  // Row 2
  WA: [2, 0],
  ID: [2, 1],
  MT: [2, 2],
  ND: [2, 3],
  MN: [2, 4],
  IL: [2, 6],
  MI: [2, 7],
  NY: [2, 8],
  MA: [2, 9],
  CT: [2, 10],
  RI: [2, 11],
  // Row 3
  OR: [3, 0],
  NV: [3, 1],
  WY: [3, 2],
  SD: [3, 3],
  IA: [3, 4],
  IN: [3, 5],
  OH: [3, 6],
  PA: [3, 7],
  NJ: [3, 8],
  // Row 4
  CA: [4, 0],
  UT: [4, 1],
  CO: [4, 2],
  NE: [4, 3],
  MO: [4, 4],
  KY: [4, 5],
  WV: [4, 6],
  VA: [4, 7],
  MD: [4, 8],
  DC: [4, 9],
  DE: [4, 10],
  // Row 5
  AZ: [5, 1],
  NM: [5, 2],
  KS: [5, 3],
  AR: [5, 4],
  TN: [5, 5],
  NC: [5, 6],
  SC: [5, 7],
  // Row 6
  OK: [6, 3],
  LA: [6, 4],
  MS: [6, 5],
  AL: [6, 6],
  GA: [6, 7],
  // Row 7
  HI: [7, 0],
  TX: [7, 3],
  FL: [7, 8],
};

const GRID_COLS = 12;
const GRID_ROWS = 8;

export function StateMapGrid({ onStateSelect }: StateMapGridProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateClick = (abbr: string) => {
    const state = getStateByAbbr(abbr);
    if (state) {
      setSelectedState(abbr);
      if (onStateSelect) {
        onStateSelect(state.slug);
      }
      // Navigate to state page
      window.location.href = `/states/${state.slug}`;
    }
  };

  const getStateColor = (abbr: string) => {
    const state = getStateByAbbr(abbr);
    if (!state) return 'bg-gray-200 text-nb-dark border-gray-400';

    if (state.campaignStatus === 'active') {
      return 'bg-nb-pink text-nb-dark border-nb-dark';
    } else if (state.campaignStatus === 'coming-soon') {
      return 'bg-nb-yellow text-nb-dark border-nb-dark';
    }
    return 'bg-gray-200 text-nb-dark border-nb-dark';
  };

  // Build a 2D grid for rendering
  const grid: (string | null)[][] = Array.from({ length: GRID_ROWS }, () =>
    Array.from({ length: GRID_COLS }, () => null)
  );

  for (const [abbr, [row, col]] of Object.entries(STATE_POSITIONS)) {
    grid[row][col] = abbr;
  }

  const hoveredStateData = hoveredState ? getStateByAbbr(hoveredState) : null;

  return (
    <div className="w-full">
      {/* Legend */}
      <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm font-bold">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-nb-pink border-2 border-nb-dark"></div>
          <span className="text-nb-dark">Active Campaign</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-nb-yellow border-2 border-nb-dark"></div>
          <span className="text-nb-dark">Coming Soon</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-200 border-2 border-nb-dark"></div>
          <span className="text-nb-dark">Not Yet Active</span>
        </div>
      </div>

      {/* Grid Map */}
      <div className="border-4 border-nb-dark bg-nb-light p-2 sm:p-4 md:p-6 overflow-x-auto">
        <div className="min-w-[540px] mx-auto" style={{ maxWidth: '720px' }}>
          {grid.map((row, rowIdx) => (
            <div key={rowIdx} className="flex">
              {row.map((abbr, colIdx) => {
                if (!abbr) {
                  return (
                    <div
                      key={`${rowIdx}-${colIdx}`}
                      className="flex-1 aspect-square m-[1px]"
                    />
                  );
                }

                const state = getStateByAbbr(abbr);
                const isSelected = selectedState === abbr;
                const isHovered = hoveredState === abbr;

                return (
                  <button
                    key={`${rowIdx}-${colIdx}`}
                    onClick={() => handleStateClick(abbr)}
                    onMouseEnter={() => setHoveredState(abbr)}
                    onMouseLeave={() => setHoveredState(null)}
                    className={`
                      flex-1 aspect-square m-[1px]
                      flex items-center justify-center
                      border-2 border-nb-dark
                      font-black text-[10px] sm:text-xs md:text-sm
                      uppercase cursor-pointer
                      transition-all duration-100
                      ${getStateColor(abbr)}
                      ${isSelected ? 'ring-2 ring-nb-purple ring-offset-1 shadow-nb z-10' : ''}
                      ${isHovered ? 'shadow-nb scale-110 z-20 brightness-110' : ''}
                    `}
                    title={state ? `${state.name} — ${state.campaignStatus}` : abbr}
                    aria-label={state ? state.name : abbr}
                  >
                    {abbr}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Hover Info Panel */}
      <div className={`mt-4 p-4 border-4 border-nb-dark transition-all ${hoveredStateData ? 'bg-nb-cyan' : 'bg-gray-100'}`}>
        {hoveredStateData ? (
          <div className="flex flex-wrap items-center gap-4">
            <p className="font-black uppercase text-nb-dark text-lg">
              {hoveredStateData.name}
            </p>
            <span className={`
              px-3 py-1 text-xs font-black uppercase border-2 border-nb-dark
              ${hoveredStateData.campaignStatus === 'active' ? 'bg-nb-pink text-nb-dark' : ''}
              ${hoveredStateData.campaignStatus === 'coming-soon' ? 'bg-nb-yellow text-nb-dark' : ''}
              ${hoveredStateData.campaignStatus === 'not-yet' ? 'bg-gray-200 text-nb-dark' : ''}
            `}>
              {hoveredStateData.campaignStatus === 'active' && 'Active Campaign'}
              {hoveredStateData.campaignStatus === 'coming-soon' && 'Coming Soon'}
              {hoveredStateData.campaignStatus === 'not-yet' && 'Not Yet Active'}
            </span>
            {hoveredStateData.campaignStatus !== 'not-yet' && (
              <span className="text-sm font-bold text-nb-dark">
                Target: {hoveredStateData.signatureTarget.toLocaleString()} signatures
              </span>
            )}
          </div>
        ) : (
          <p className="font-bold text-gray-500 text-sm text-center">
            Hover over a state to see details. Click to visit the state page.
          </p>
        )}
      </div>
    </div>
  );
}
