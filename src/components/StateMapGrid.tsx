import React, { useState } from 'react';
import { STATES, getStateByAbbr } from '../lib/states';

interface StateMapGridProps {
  onStateSelect?: (stateSlug: string) => void;
}

// Geographic grid positioning for US states
// Organized in a grid that roughly represents geographic location
const STATE_GRID = [
  // Row 1 (Top West)
  ['', '', '', '', '', '', '', 'WA', 'MT', 'ND', 'MN', 'WI', 'MI', 'VT', 'NH', 'ME'],
  // Row 2
  ['', '', '', '', '', '', 'OR', 'ID', 'WY', 'SD', 'IA', 'IL', 'IN', 'OH', 'PA', 'NY'],
  // Row 3
  ['CA', 'NV', 'UT', 'CO', 'NE', 'MO', 'KY', 'VA', 'WV', 'MD', 'DE', 'NJ'],
  // Row 4
  ['', 'AZ', 'NM', 'OK', 'AR', 'TN', 'NC', 'SC'],
  // Row 5 (South)
  ['', '', 'TX', 'LA', 'MS', 'AL', 'GA', 'FL'],
  // Row 6 (Territories)
  ['AK', '', 'HI', '', '', 'DC'],
];

export function StateMapGrid({ onStateSelect }: StateMapGridProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateClick = (abbr: string) => {
    if (!abbr) return;
    const state = getStateByAbbr(abbr);
    if (state) {
      setSelectedState(state.slug);
      if (onStateSelect) {
        onStateSelect(state.slug);
      }
    }
  };

  const getStateColor = (abbr: string) => {
    if (!abbr) return 'invisible pointer-events-none';

    const state = getStateByAbbr(abbr);
    if (!state) return 'bg-gray-100';

    if (state.campaignStatus === 'active') {
      return 'bg-nb-pink text-nb-light';
    } else if (state.campaignStatus === 'coming-soon') {
      return 'bg-nb-yellow text-nb-dark';
    }
    return 'bg-gray-100 text-nb-dark';
  };

  const getStateIcon = (abbr: string) => {
    if (!abbr) return '';
    const state = getStateByAbbr(abbr);
    if (!state) return '';
    if (state.campaignStatus === 'active') return '🚀';
    if (state.campaignStatus === 'coming-soon') return '⏰';
    return '';
  };

  return (
    <div className="w-full">
      {/* Legend */}
      <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm font-bold">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-nb-pink border-4 border-nb-dark"></div>
          <span>Active Campaign 🚀</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-nb-yellow border-4 border-nb-dark"></div>
          <span>Coming Soon ⏰</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-100 border-4 border-nb-dark"></div>
          <span>Not Yet Active</span>
        </div>
      </div>

      {/* Grid Map */}
      <div className="bg-nb-light p-6 border-4 border-nb-dark overflow-x-auto">
        <div className="inline-block">
          {STATE_GRID.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-1 mb-1">
              {row.map((abbr, colIdx) => {
                const state = abbr ? getStateByAbbr(abbr) : null;
                const isSelected = selectedState === state?.slug;
                const isHovered = hoveredState === abbr;

                return (
                  <button
                    key={`${rowIdx}-${colIdx}`}
                    onClick={() => handleStateClick(abbr)}
                    onMouseEnter={() => abbr && setHoveredState(abbr)}
                    onMouseLeave={() => setHoveredState(null)}
                    disabled={!abbr}
                    className={`
                      w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20
                      flex items-center justify-center
                      border-4 border-nb-dark
                      font-black text-xs md:text-sm lg:text-base
                      uppercase
                      transition-all duration-150
                      ${getStateColor(abbr)}
                      ${!abbr ? 'pointer-events-none' : 'cursor-pointer'}
                      ${isSelected ? 'ring-4 ring-nb-purple ring-offset-2 shadow-nb-lg' : ''}
                      ${isHovered && abbr ? 'shadow-nb-lg scale-105 z-10' : ''}
                      ${abbr ? 'hover:shadow-nb' : ''}
                    `}
                    title={state ? `${state.name}: ${state.campaignStatus}` : ''}
                  >
                    {abbr && (
                      <div className="text-center">
                        <div className="text-lg">{getStateIcon(abbr)}</div>
                        <div className="leading-none">{abbr}</div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Hover Info */}
      {hoveredState && getStateByAbbr(hoveredState) && (
        <div className="mt-4 p-4 border-4 border-nb-dark bg-nb-cyan">
          <p className="font-black uppercase text-nb-dark">
            {getStateByAbbr(hoveredState)!.name}
          </p>
          <p className="text-sm font-bold text-nb-dark">
            {getStateByAbbr(hoveredState)!.campaignStatus === 'active'
              ? '🚀 Campaign Active'
              : getStateByAbbr(hoveredState)!.campaignStatus === 'coming-soon'
              ? '⏰ Coming Soon'
              : '❓ Not Yet Active'}
          </p>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 text-center">
        <p className="font-black uppercase italic text-nb-dark text-lg">
          Click a state to see details, contact your representatives, and get involved.
        </p>
      </div>
    </div>
  );
}
