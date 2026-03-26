import React, { useState } from 'react';
import { STATES, getStateByAbbr } from '../lib/states';

interface StateMapProps {
  selectedState?: string;
  onStateSelect?: (stateSlug: string) => void;
}

// Simplified US state abbreviations for display
const STATE_GRID = [
  'WA', 'MT', 'ND', 'MN', 'WI', 'MI', 'VT', 'NH', 'ME',
  'OR', 'ID', 'WY', 'SD', 'IA', 'IL', 'IN', 'OH', 'PA', 'NY', 'MA', 'RI', 'CT',
  'CA', 'NV', 'UT', 'CO', 'NE', 'KS', 'MO', 'KY', 'VA', 'WV', 'MD', 'DE', 'NJ',
  'AZ', 'NM', 'OK', 'AR', 'TN', 'NC', 'SC',
  'TX', 'LA', 'MS', 'AL', 'GA', 'FL',
  'AK', 'HI', 'DC'
];

export function StateMap({ selectedState, onStateSelect }: StateMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleStateClick = (abbr: string) => {
    const state = getStateByAbbr(abbr);
    if (state && onStateSelect) {
      onStateSelect(state.slug);
    }
  };

  const getStateColor = (abbr: string) => {
    const state = getStateByAbbr(abbr);
    if (!state) return 'bg-gray-200';

    if (state.campaignStatus === 'active') {
      return 'bg-am-red text-am-light border-4 border-am-dark';
    } else if (state.campaignStatus === 'coming-soon') {
      return 'bg-am-white text-am-dark border-2 border-am-dark';
    }
    return 'bg-am-blue text-am-dark border-2 border-gray-400';
  };

  const getStateStatus = (abbr: string) => {
    const state = getStateByAbbr(abbr);
    if (!state) return '';
    if (state.campaignStatus === 'active') return '🚀';
    if (state.campaignStatus === 'coming-soon') return '⏰';
    return '?';
  };

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm font-bold">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-am-red border-4 border-am-dark"></div>
          <span>Active Campaign 🚀</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-am-white border-2 border-am-dark"></div>
          <span>Coming Soon ⏰</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-am-blue border-2 border-gray-400"></div>
          <span>Not Yet Active</span>
        </div>
      </div>

      <div className="grid grid-cols-9 gap-1 md:gap-2 bg-am-light p-4 border-4 border-am-dark">
        {STATE_GRID.map((abbr) => {
          const state = getStateByAbbr(abbr);
          const isSelected = selectedState === state?.slug;
          const isHovered = hovered === abbr;

          return (
            <button
              key={abbr}
              onClick={() => handleStateClick(abbr)}
              onMouseEnter={() => setHovered(abbr)}
              onMouseLeave={() => setHovered(null)}
              className={`
                aspect-square flex items-center justify-center
                font-black text-xs md:text-sm uppercase
                transition-all duration-150 cursor-pointer
                ${getStateColor(abbr)}
                ${isSelected ? 'ring-4 ring-am-light-blue ring-offset-2' : ''}
                ${isHovered ? 'shadow-am-lg scale-110 z-10' : ''}
              `}
              title={state ? `${state.name}: Click for details` : abbr}
            >
              <span>{getStateStatus(abbr)}</span>
              <span className="hidden sm:inline">{abbr}</span>
            </button>
          );
        })}
      </div>

      {hovered && getStateByAbbr(hovered) && (
        <div className="mt-4 p-4 border-4 border-am-dark bg-am-blue">
          <p className="font-bold uppercase text-am-dark">
            {getStateByAbbr(hovered)!.name}
          </p>
          <p className="text-sm font-bold text-am-dark">
            {getStateByAbbr(hovered)!.campaignStatus === 'active'
              ? '🚀 Campaign Active'
              : getStateByAbbr(hovered)!.campaignStatus === 'coming-soon'
              ? '⏰ Coming Soon'
              : 'Not yet launched'}
          </p>
        </div>
      )}

      <div className="mt-6 text-center">
        <p className="text-sm font-bold text-am-dark">
          Click a state to see details, contact your representatives, and get involved.
        </p>
      </div>
    </div>
  );
}
