// US States data with ballot initiative info
export interface StateData {
  slug: string;
  name: string;
  abbr: string;
  signatureTarget: number;
  populationPercent: string; // "5%" of registered voters, etc.
  hasOrganizer: boolean;
  campaignStatus: 'active' | 'coming-soon' | 'not-yet';
  seniorSenator: {
    name: string;
    party: string;
    phone: string;
    website: string;
  };
  juniorSenator: {
    name: string;
    party: string;
    phone: string;
    website: string;
  };
  representatives: Array<{
    name: string;
    district: number;
    party: string;
    phone: string;
  }>;
}

// Simplified state data (you can expand this)
export const STATES: StateData[] = [
  {
    slug: 'california',
    name: 'California',
    abbr: 'CA',
    signatureTarget: 997139,
    populationPercent: '5% of registered voters',
    hasOrganizer: true,
    campaignStatus: 'active',
    seniorSenator: {
      name: 'Dianne Feinstein',
      party: 'D',
      phone: '(202) 224-3841',
      website: 'feinstein.senate.gov'
    },
    juniorSenator: {
      name: 'Alex Padilla',
      party: 'D',
      phone: '(202) 224-3553',
      website: 'padilla.senate.gov'
    },
    representatives: [
      { name: 'John Duarte', district: 3, party: 'R', phone: '(202) 225-3336' }
    ]
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    abbr: 'CO',
    signatureTarget: 124632,
    populationPercent: '5% of registered voters',
    hasOrganizer: true,
    campaignStatus: 'active',
    seniorSenator: {
      name: 'John Hickenlooper',
      party: 'D',
      phone: '(202) 224-5941',
      website: 'hickenlooper.senate.gov'
    },
    juniorSenator: {
      name: 'Michael Bennet',
      party: 'D',
      phone: '(202) 224-5852',
      website: 'bennet.senate.gov'
    },
    representatives: []
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    abbr: 'MA',
    signatureTarget: 69821,
    populationPercent: '3% of registered voters',
    hasOrganizer: false,
    campaignStatus: 'coming-soon',
    seniorSenator: {
      name: 'Elizabeth Warren',
      party: 'D',
      phone: '(202) 224-4543',
      website: 'warren.senate.gov'
    },
    juniorSenator: {
      name: 'Ed Markey',
      party: 'D',
      phone: '(202) 224-2742',
      website: 'markey.senate.gov'
    },
    representatives: []
  },
  {
    slug: 'washington',
    name: 'Washington',
    abbr: 'WA',
    signatureTarget: 246063,
    populationPercent: '8% of registered voters',
    hasOrganizer: true,
    campaignStatus: 'active',
    seniorSenator: {
      name: 'Patty Murray',
      party: 'D',
      phone: '(202) 224-2621',
      website: 'murray.senate.gov'
    },
    juniorSenator: {
      name: 'Maria Cantwell',
      party: 'D',
      phone: '(202) 224-3441',
      website: 'cantwell.senate.gov'
    },
    representatives: []
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    abbr: 'OR',
    signatureTarget: 61275,
    populationPercent: '6% of registered voters',
    hasOrganizer: false,
    campaignStatus: 'coming-soon',
    seniorSenator: {
      name: 'Ron Wyden',
      party: 'D',
      phone: '(202) 224-5244',
      website: 'wyden.senate.gov'
    },
    juniorSenator: {
      name: 'Jeff Merkley',
      party: 'D',
      phone: '(202) 224-3753',
      website: 'merkley.senate.gov'
    },
    representatives: []
  },
  // Add more states as needed - this is a template
  // In production, you'd populate all 50 states + territories
];

export function getStateBySlug(slug: string): StateData | undefined {
  return STATES.find(s => s.slug === slug);
}

export function getStateByAbbr(abbr: string): StateData | undefined {
  return STATES.find(s => s.abbr === abbr);
}

export function getActiveStates(): StateData[] {
  return STATES.filter(s => s.campaignStatus === 'active');
}

export function getComingSoonStates(): StateData[] {
  return STATES.filter(s => s.campaignStatus === 'coming-soon');
}
