// US States data with ballot initiative info
export interface StateData {
  slug: string;
  name: string;
  abbr: string;
  signatureTarget: number;
  populationPercent: string;
  hasBallotInitiative: boolean;
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
    website?: string;
  }>;
}

export const STATES: StateData[] = [
  {
    slug: 'alabama',
    name: 'Alabama',
    abbr: 'AL',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Tommy Tuberville', party: 'R', phone: '202-224-4124', website: 'www.tuberville.senate.gov' },
    juniorSenator: { name: 'Katie Boyd Britt', party: 'R', phone: '202-224-5744', website: 'www.britt.senate.gov' },
    representatives: [
  {
    "name": "Robert B. Aderholt",
    "party": "R",
    "phone": "202-225-4876",
    "website": "aderholt.house.gov",
    "district": 4
  },
  {
    "name": "Mike Rogers",
    "party": "R",
    "phone": "202-225-3261",
    "website": "mikerogers.house.gov",
    "district": 3
  },
  {
    "name": "Terri A. Sewell",
    "party": "D",
    "phone": "202-225-2665",
    "website": "sewell.house.gov",
    "district": 7
  },
  {
    "name": "Gary J. Palmer",
    "party": "R",
    "phone": "202-225-4921",
    "website": "palmer.house.gov",
    "district": 6
  },
  {
    "name": "Barry Moore",
    "party": "R",
    "phone": "202-225-2901",
    "website": "barrymoore.house.gov",
    "district": 1
  },
  {
    "name": "Dale W. Strong",
    "party": "R",
    "phone": "202-225-4801",
    "website": "strong.house.gov",
    "district": 5
  },
  {
    "name": "Shomari Figures",
    "party": "D",
    "phone": "202-225-4931",
    "website": "figures.house.gov",
    "district": 2
  }
],
  },
  {
    slug: 'alaska',
    name: 'Alaska',
    abbr: 'AK',
    signatureTarget: 30000,
    populationPercent: '~10% of votes cast',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Lisa Murkowski', party: 'R', phone: '202-224-6665', website: 'www.murkowski.senate.gov' },
    juniorSenator: { name: 'Dan Sullivan', party: 'R', phone: '202-224-3004', website: 'www.sullivan.senate.gov' },
    representatives: [
  {
    "name": "Nicholas J. Begich III",
    "party": "R",
    "phone": "202-225-5765",
    "website": "begich.house.gov",
    "district": 0
  }
],
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    abbr: 'AZ',
    signatureTarget: 238000,
    populationPercent: '10% of qualified electors',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Mark Kelly', party: 'D', phone: '202-224-2235', website: 'www.kelly.senate.gov' },
    juniorSenator: { name: 'Ruben Gallego', party: 'D', phone: '202-224-4521', website: 'www.gallego.senate.gov' },
    representatives: [
  {
    "name": "David Schweikert",
    "party": "R",
    "phone": "202-225-2190",
    "website": "schweikert.house.gov",
    "district": 1
  },
  {
    "name": "Andy Biggs",
    "party": "R",
    "phone": "202-225-2635",
    "website": "biggs.house.gov",
    "district": 5
  },
  {
    "name": "Greg Stanton",
    "party": "D",
    "phone": "202-225-9888",
    "website": "stanton.house.gov",
    "district": 4
  },
  {
    "name": "Elijah Crane",
    "party": "R",
    "phone": "202-225-3361",
    "website": "crane.house.gov",
    "district": 2
  },
  {
    "name": "Juan Ciscomani",
    "party": "R",
    "phone": "202-225-2542",
    "website": "ciscomani.house.gov",
    "district": 6
  },
  {
    "name": "Yassamin Ansari",
    "party": "D",
    "phone": "202-225-4065",
    "website": "ansari.house.gov",
    "district": 3
  },
  {
    "name": "Abraham J. Hamadeh",
    "party": "R",
    "phone": "202-225-4576",
    "website": "hamadeh.house.gov",
    "district": 8
  },
  {
    "name": "Adelita S. Grijalva",
    "party": "D",
    "phone": "202-225-2435",
    "website": "grijalva.house.gov",
    "district": 7
  }
],
  },
  {
    slug: 'arkansas',
    name: 'Arkansas',
    abbr: 'AR',
    signatureTarget: 78000,
    populationPercent: '8% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'John Boozman', party: 'R', phone: '202-224-4843', website: 'www.boozman.senate.gov/public' },
    juniorSenator: { name: 'Tom Cotton', party: 'R', phone: '202-224-2353', website: 'www.cotton.senate.gov' },
    representatives: [
  {
    "name": "Eric A. Rick Crawford",
    "party": "R",
    "phone": "202-225-4076",
    "website": "crawford.house.gov",
    "district": 1
  },
  {
    "name": "Steve Womack",
    "party": "R",
    "phone": "202-225-4301",
    "website": "womack.house.gov",
    "district": 3
  },
  {
    "name": "J. French Hill",
    "party": "R",
    "phone": "202-225-2506",
    "website": "hill.house.gov",
    "district": 2
  },
  {
    "name": "Bruce Westerman",
    "party": "R",
    "phone": "202-225-3772",
    "website": "westerman.house.gov",
    "district": 4
  }
],
  },
  {
    slug: 'california',
    name: 'California',
    abbr: 'CA',
    signatureTarget: 546651,
    populationPercent: '5% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: true,
    campaignStatus: 'active',
    seniorSenator: { name: 'Alex Padilla', party: 'D', phone: '202-224-3553', website: 'www.padilla.senate.gov' },
    juniorSenator: { name: 'Adam B. Schiff', party: 'D', phone: '202-224-3841', website: 'www.schiff.senate.gov' },
    representatives: [
  {
    "name": "Ken Calvert",
    "party": "R",
    "phone": "202-225-1986",
    "website": "calvert.house.gov",
    "district": 41
  },
  {
    "name": "Judy Chu",
    "party": "D",
    "phone": "202-225-5464",
    "website": "chu.house.gov",
    "district": 28
  },
  {
    "name": "Jim Costa",
    "party": "D",
    "phone": "202-225-3341",
    "website": "costa.house.gov",
    "district": 21
  },
  {
    "name": "John Garamendi",
    "party": "D",
    "phone": "202-225-1880",
    "website": "garamendi.house.gov",
    "district": 8
  },
  {
    "name": "Zoe Lofgren",
    "party": "D",
    "phone": "202-225-3072",
    "website": "lofgren.house.gov",
    "district": 18
  },
  {
    "name": "Doris O. Matsui",
    "party": "D",
    "phone": "202-225-7163",
    "website": "matsui.house.gov",
    "district": 7
  },
  {
    "name": "Tom McClintock",
    "party": "R",
    "phone": "202-225-2511",
    "website": "mcclintock.house.gov",
    "district": 5
  },
  {
    "name": "Nancy Pelosi",
    "party": "D",
    "phone": "202-225-4965",
    "website": "pelosi.house.gov",
    "district": 11
  },
  {
    "name": "Brad Sherman",
    "party": "D",
    "phone": "202-225-5911",
    "website": "sherman.house.gov",
    "district": 32
  },
  {
    "name": "Linda T. Sánchez",
    "party": "D",
    "phone": "202-225-6676",
    "website": "lindasanchez.house.gov",
    "district": 38
  },
  {
    "name": "Mike Thompson",
    "party": "D",
    "phone": "202-225-3311",
    "website": "mikethompson.house.gov",
    "district": 4
  },
  {
    "name": "Maxine Waters",
    "party": "D",
    "phone": "202-225-2201",
    "website": "waters.house.gov",
    "district": 43
  },
  {
    "name": "Jared Huffman",
    "party": "D",
    "phone": "202-225-5161",
    "website": "huffman.house.gov",
    "district": 2
  },
  {
    "name": "Ami Bera",
    "party": "D",
    "phone": "202-225-5716",
    "website": "bera.house.gov",
    "district": 6
  },
  {
    "name": "Eric Swalwell",
    "party": "D",
    "phone": "202-225-5065",
    "website": "swalwell.house.gov",
    "district": 14
  },
  {
    "name": "Julia Brownley",
    "party": "D",
    "phone": "202-225-5811",
    "website": "juliabrownley.house.gov",
    "district": 26
  },
  {
    "name": "Raul Ruiz",
    "party": "D",
    "phone": "202-225-5330",
    "website": "ruiz.house.gov",
    "district": 25
  },
  {
    "name": "Mark Takano",
    "party": "D",
    "phone": "202-225-2305",
    "website": "takano.house.gov",
    "district": 39
  },
  {
    "name": "Juan Vargas",
    "party": "D",
    "phone": "202-225-8045",
    "website": "vargas.house.gov",
    "district": 52
  },
  {
    "name": "Scott H. Peters",
    "party": "D",
    "phone": "202-225-0508",
    "website": "scottpeters.house.gov",
    "district": 50
  },
  {
    "name": "Mark DeSaulnier",
    "party": "D",
    "phone": "202-225-2095",
    "website": "desaulnier.house.gov",
    "district": 10
  },
  {
    "name": "Pete Aguilar",
    "party": "D",
    "phone": "202-225-3201",
    "website": "aguilar.house.gov",
    "district": 33
  },
  {
    "name": "Ted Lieu",
    "party": "D",
    "phone": "202-225-3976",
    "website": "lieu.house.gov",
    "district": 36
  },
  {
    "name": "Norma J. Torres",
    "party": "D",
    "phone": "202-225-6161",
    "website": "torres.house.gov",
    "district": 35
  },
  {
    "name": "Ro Khanna",
    "party": "D",
    "phone": "202-225-2631",
    "website": "khanna.house.gov",
    "district": 17
  },
  {
    "name": "Jimmy Panetta",
    "party": "D",
    "phone": "202-225-2861",
    "website": "panetta.house.gov",
    "district": 19
  },
  {
    "name": "Salud O. Carbajal",
    "party": "D",
    "phone": "202-225-3601",
    "website": "carbajal.house.gov",
    "district": 24
  },
  {
    "name": "Nanette Diaz Barragán",
    "party": "D",
    "phone": "202-225-8220",
    "website": "barragan.house.gov",
    "district": 44
  },
  {
    "name": "J. Luis Correa",
    "party": "D",
    "phone": "202-225-2965",
    "website": "correa.house.gov",
    "district": 46
  },
  {
    "name": "Jimmy Gomez",
    "party": "D",
    "phone": "202-225-6235",
    "website": "gomez.house.gov",
    "district": 34
  },
  {
    "name": "Josh Harder",
    "party": "D",
    "phone": "202-225-4540",
    "website": "harder.house.gov",
    "district": 9
  },
  {
    "name": "Mike Levin",
    "party": "D",
    "phone": "202-225-3906",
    "website": "levin.house.gov",
    "district": 49
  },
  {
    "name": "Darrell Issa",
    "party": "R",
    "phone": "202-225-5672",
    "website": "issa.house.gov",
    "district": 48
  },
  {
    "name": "David G. Valadao",
    "party": "R",
    "phone": "202-225-4695",
    "website": "valadao.house.gov",
    "district": 22
  },
  {
    "name": "Jay Obernolte",
    "party": "R",
    "phone": "202-225-5861",
    "website": "obernolte.house.gov",
    "district": 23
  },
  {
    "name": "Young Kim",
    "party": "R",
    "phone": "202-225-4111",
    "website": "youngkim.house.gov",
    "district": 40
  },
  {
    "name": "Sara Jacobs",
    "party": "D",
    "phone": "202-225-2040",
    "website": "sarajacobs.house.gov",
    "district": 51
  },
  {
    "name": "Kevin Kiley",
    "party": "I",
    "phone": "202-225-2523",
    "website": "kiley.house.gov",
    "district": 3
  },
  {
    "name": "Kevin Mullin",
    "party": "D",
    "phone": "202-225-3531",
    "website": "kevinmullin.house.gov",
    "district": 15
  },
  {
    "name": "Sydney Kamlager-Dove",
    "party": "D",
    "phone": "202-225-7084",
    "website": "kamlager-dove.house.gov",
    "district": 37
  },
  {
    "name": "Robert Garcia",
    "party": "D",
    "phone": "202-225-7924",
    "website": "robertgarcia.house.gov",
    "district": 42
  },
  {
    "name": "Vince Fong",
    "party": "R",
    "phone": "202-225-2915",
    "website": "fong.house.gov",
    "district": 20
  },
  {
    "name": "Gilbert Ray Cisneros, Jr.",
    "party": "D",
    "phone": "202-225-5256",
    "website": "cisneros.house.gov",
    "district": 31
  },
  {
    "name": "Lateefah Simon",
    "party": "D",
    "phone": "202-225-2661",
    "website": "simon.house.gov",
    "district": 12
  },
  {
    "name": "Adam Gray",
    "party": "D",
    "phone": "202-225-1947",
    "website": "gray.house.gov",
    "district": 13
  },
  {
    "name": "Sam T. Liccardo",
    "party": "D",
    "phone": "202-225-8104",
    "website": "liccardo.house.gov",
    "district": 16
  },
  {
    "name": "George Whitesides",
    "party": "D",
    "phone": "202-225-1956",
    "website": "whitesides.house.gov",
    "district": 27
  },
  {
    "name": "Luz M. Rivas",
    "party": "D",
    "phone": "202-225-6131",
    "website": "rivas.house.gov",
    "district": 29
  },
  {
    "name": "Laura Friedman",
    "party": "D",
    "phone": "202-225-4176",
    "website": "friedman.house.gov",
    "district": 30
  },
  {
    "name": "Derek Tran",
    "party": "D",
    "phone": "202-225-2415",
    "website": "tran.house.gov",
    "district": 45
  },
  {
    "name": "Dave Min",
    "party": "D",
    "phone": "202-225-5611",
    "website": "min.house.gov",
    "district": 47
  }
],
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    abbr: 'CO',
    signatureTarget: 124632,
    populationPercent: '5% of votes cast for Sec. of State',
    hasBallotInitiative: true,
    hasOrganizer: true,
    campaignStatus: 'active',
    seniorSenator: { name: 'Michael F. Bennet', party: 'D', phone: '202-224-5852', website: 'www.bennet.senate.gov' },
    juniorSenator: { name: 'John W. Hickenlooper', party: 'D', phone: '202-224-5941', website: 'www.hickenlooper.senate.gov' },
    representatives: [
  {
    "name": "Diana DeGette",
    "party": "D",
    "phone": "202-225-4431",
    "website": "degette.house.gov",
    "district": 1
  },
  {
    "name": "Joe Neguse",
    "party": "D",
    "phone": "202-225-2161",
    "website": "neguse.house.gov",
    "district": 2
  },
  {
    "name": "Jason Crow",
    "party": "D",
    "phone": "202-225-7882",
    "website": "crow.house.gov",
    "district": 6
  },
  {
    "name": "Lauren Boebert",
    "party": "R",
    "phone": "202-225-4761",
    "website": "boebert.house.gov",
    "district": 4
  },
  {
    "name": "Brittany Pettersen",
    "party": "D",
    "phone": "202-225-2645",
    "website": "pettersen.house.gov",
    "district": 7
  },
  {
    "name": "Jeff Hurd",
    "party": "R",
    "phone": "202-225-4676",
    "website": "hurd.house.gov",
    "district": 3
  },
  {
    "name": "Jeff Crank",
    "party": "R",
    "phone": "202-225-4422",
    "website": "crank.house.gov",
    "district": 5
  },
  {
    "name": "Gabe Evans",
    "party": "R",
    "phone": "202-225-5625",
    "website": "gabeevans.house.gov",
    "district": 8
  }
],
  },
  {
    slug: 'connecticut',
    name: 'Connecticut',
    abbr: 'CT',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Richard Blumenthal', party: 'D', phone: '202-224-2823', website: 'www.blumenthal.senate.gov' },
    juniorSenator: { name: 'Christopher Murphy', party: 'D', phone: '202-224-4041', website: 'www.murphy.senate.gov' },
    representatives: [
  {
    "name": "Joe Courtney",
    "party": "D",
    "phone": "202-225-2076",
    "website": "courtney.house.gov",
    "district": 2
  },
  {
    "name": "Rosa L. DeLauro",
    "party": "D",
    "phone": "202-225-3661",
    "website": "delauro.house.gov",
    "district": 3
  },
  {
    "name": "James A. Himes",
    "party": "D",
    "phone": "202-225-5541",
    "website": "himes.house.gov",
    "district": 4
  },
  {
    "name": "John B. Larson",
    "party": "D",
    "phone": "202-225-2265",
    "website": "larson.house.gov",
    "district": 1
  },
  {
    "name": "Jahana Hayes",
    "party": "D",
    "phone": "202-225-4476",
    "website": "hayes.house.gov",
    "district": 5
  }
],
  },
  {
    slug: 'delaware',
    name: 'Delaware',
    abbr: 'DE',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Christopher A. Coons', party: 'D', phone: '202-224-5042', website: 'www.coons.senate.gov' },
    juniorSenator: { name: 'Lisa Blunt Rochester', party: 'D', phone: '202-224-2441', website: 'www.bluntrochester.senate.gov' },
    representatives: [
  {
    "name": "Sarah McBride",
    "party": "D",
    "phone": "202-225-4165",
    "website": "mcbride.house.gov",
    "district": 0
  }
],
  },
  {
    slug: 'florida',
    name: 'Florida',
    abbr: 'FL',
    signatureTarget: 891589,
    populationPercent: '8% of votes cast in presidential election',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Rick Scott', party: 'R', phone: '202-224-5274', website: 'www.rickscott.senate.gov' },
    juniorSenator: { name: 'Ashley Moody', party: 'R', phone: '202-224-3041', website: 'www.moody.senate.gov' },
    representatives: [
  {
    "name": "Gus M. Bilirakis",
    "party": "R",
    "phone": "202-225-5755",
    "website": "bilirakis.house.gov",
    "district": 12
  },
  {
    "name": "Vern Buchanan",
    "party": "R",
    "phone": "202-225-5015",
    "website": "buchanan.house.gov",
    "district": 16
  },
  {
    "name": "Kathy Castor",
    "party": "D",
    "phone": "202-225-3376",
    "website": "castor.house.gov",
    "district": 14
  },
  {
    "name": "Mario Diaz-Balart",
    "party": "R",
    "phone": "202-225-4211",
    "website": "mariodiazbalart.house.gov",
    "district": 26
  },
  {
    "name": "Debbie Wasserman Schultz",
    "party": "D",
    "phone": "202-225-7931",
    "website": "wassermanschultz.house.gov",
    "district": 25
  },
  {
    "name": "Daniel Webster",
    "party": "R",
    "phone": "202-225-1002",
    "website": "webster.house.gov",
    "district": 11
  },
  {
    "name": "Frederica S. Wilson",
    "party": "D",
    "phone": "202-225-4506",
    "website": "wilson.house.gov",
    "district": 24
  },
  {
    "name": "Lois Frankel",
    "party": "D",
    "phone": "202-225-9890",
    "website": "frankel.house.gov",
    "district": 22
  },
  {
    "name": "Neal P. Dunn",
    "party": "R",
    "phone": "202-225-5235",
    "website": "dunn.house.gov",
    "district": 2
  },
  {
    "name": "John H. Rutherford",
    "party": "R",
    "phone": "202-225-2501",
    "website": "rutherford.house.gov",
    "district": 5
  },
  {
    "name": "Darren Soto",
    "party": "D",
    "phone": "202-225-9889",
    "website": "soto.house.gov",
    "district": 9
  },
  {
    "name": "Brian J. Mast",
    "party": "R",
    "phone": "202-225-3026",
    "website": "mast.house.gov",
    "district": 21
  },
  {
    "name": "W. Gregory Steube",
    "party": "R",
    "phone": "202-225-5792",
    "website": "steube.house.gov",
    "district": 17
  },
  {
    "name": "Kat Cammack",
    "party": "R",
    "phone": "202-225-5744",
    "website": "cammack.house.gov",
    "district": 3
  },
  {
    "name": "Scott Franklin",
    "party": "R",
    "phone": "202-225-1252",
    "website": "franklin.house.gov",
    "district": 18
  },
  {
    "name": "Byron Donalds",
    "party": "R",
    "phone": "202-225-2536",
    "website": "donalds.house.gov",
    "district": 19
  },
  {
    "name": "Carlos A. Gimenez",
    "party": "R",
    "phone": "202-225-2778",
    "website": "gimenez.house.gov",
    "district": 28
  },
  {
    "name": "Maria Elvira Salazar",
    "party": "R",
    "phone": "202-225-3931",
    "website": "salazar.house.gov",
    "district": 27
  },
  {
    "name": "Sheila Cherfilus-McCormick",
    "party": "D",
    "phone": "202-225-1313",
    "website": "cherfilus-mccormick.house.gov",
    "district": 20
  },
  {
    "name": "Aaron Bean",
    "party": "R",
    "phone": "202-225-0123",
    "website": "bean.house.gov",
    "district": 4
  },
  {
    "name": "Cory Mills",
    "party": "R",
    "phone": "202-225-4035",
    "website": "mills.house.gov",
    "district": 7
  },
  {
    "name": "Maxwell Frost",
    "party": "D",
    "phone": "202-225-2176",
    "website": "frost.house.gov",
    "district": 10
  },
  {
    "name": "Anna Paulina Luna",
    "party": "R",
    "phone": "202-225-5961",
    "website": "luna.house.gov",
    "district": 13
  },
  {
    "name": "Laurel M. Lee",
    "party": "R",
    "phone": "202-225-5626",
    "website": "laurellee.house.gov",
    "district": 15
  },
  {
    "name": "Jared Moskowitz",
    "party": "D",
    "phone": "202-225-3001",
    "website": "moskowitz.house.gov",
    "district": 23
  },
  {
    "name": "Mike Haridopolos",
    "party": "R",
    "phone": "202-225-3671",
    "website": "haridopolos.house.gov",
    "district": 8
  },
  {
    "name": "Jimmy Patronis",
    "party": "R",
    "phone": "202-225-4136",
    "website": "patronis.house.gov",
    "district": 1
  },
  {
    "name": "Randy Fine",
    "party": "R",
    "phone": "202-225-2706",
    "website": "fine.house.gov",
    "district": 6
  }
],
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    abbr: 'GA',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Jon Ossoff', party: 'D', phone: '202-224-3521', website: 'www.ossoff.senate.gov' },
    juniorSenator: { name: 'Raphael G. Warnock', party: 'D', phone: '202-224-3643', website: 'www.warnock.senate.gov' },
    representatives: [
  {
    "name": "Sanford D. Bishop, Jr.",
    "party": "D",
    "phone": "202-225-3631",
    "website": "bishop.house.gov",
    "district": 2
  },
  {
    "name": "Henry C. Hank Johnson, Jr.",
    "party": "D",
    "phone": "202-225-1605",
    "website": "hankjohnson.house.gov",
    "district": 4
  },
  {
    "name": "Austin Scott",
    "party": "R",
    "phone": "202-225-6531",
    "website": "austinscott.house.gov",
    "district": 8
  },
  {
    "name": "David Scott",
    "party": "D",
    "phone": "202-225-2939",
    "website": "davidscott.house.gov",
    "district": 13
  },
  {
    "name": "Earl L. Buddy Carter",
    "party": "R",
    "phone": "202-225-5831",
    "website": "buddycarter.house.gov",
    "district": 1
  },
  {
    "name": "Barry Loudermilk",
    "party": "R",
    "phone": "202-225-2931",
    "website": "loudermilk.house.gov",
    "district": 11
  },
  {
    "name": "Rick W. Allen",
    "party": "R",
    "phone": "202-225-2823",
    "website": "allen.house.gov",
    "district": 12
  },
  {
    "name": "Lucy McBath",
    "party": "D",
    "phone": "202-225-4501",
    "website": "mcbath.house.gov",
    "district": 6
  },
  {
    "name": "Nikema Williams",
    "party": "D",
    "phone": "202-225-3801",
    "website": "nikemawilliams.house.gov",
    "district": 5
  },
  {
    "name": "Andrew S. Clyde",
    "party": "R",
    "phone": "202-225-9893",
    "website": "clyde.house.gov",
    "district": 9
  },
  {
    "name": "Richard McCormick",
    "party": "R",
    "phone": "202-225-4272",
    "website": "mccormick.house.gov",
    "district": 7
  },
  {
    "name": "Mike Collins",
    "party": "R",
    "phone": "202-225-4101",
    "website": "collins.house.gov",
    "district": 10
  },
  {
    "name": "Brian Jack",
    "party": "R",
    "phone": "202-225-5901",
    "website": "jack.house.gov",
    "district": 3
  }
],
  },
  {
    slug: 'hawaii',
    name: 'Hawaii',
    abbr: 'HI',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Brian Schatz', party: 'D', phone: '202-224-3934', website: 'www.schatz.senate.gov' },
    juniorSenator: { name: 'Mazie K. Hirono', party: 'D', phone: '202-224-6361', website: 'www.hirono.senate.gov' },
    representatives: [
  {
    "name": "Ed Case",
    "party": "D",
    "phone": "202-225-2726",
    "website": "case.house.gov",
    "district": 1
  },
  {
    "name": "Jill N. Tokuda",
    "party": "D",
    "phone": "202-225-4906",
    "website": "tokuda.house.gov",
    "district": 2
  }
],
  },
  {
    slug: 'idaho',
    name: 'Idaho',
    abbr: 'ID',
    signatureTarget: 67000,
    populationPercent: '6% of registered voters',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Mike Crapo', party: 'R', phone: '202-224-6142', website: 'www.crapo.senate.gov' },
    juniorSenator: { name: 'James E. Risch', party: 'R', phone: '202-224-2752', website: 'www.risch.senate.gov' },
    representatives: [
  {
    "name": "Michael K. Simpson",
    "party": "R",
    "phone": "202-225-5531",
    "website": "simpson.house.gov",
    "district": 2
  },
  {
    "name": "Russ Fulcher",
    "party": "R",
    "phone": "202-225-6611",
    "website": "fulcher.house.gov",
    "district": 1
  }
],
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    abbr: 'IL',
    signatureTarget: 290000,
    populationPercent: '8% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Richard J. Durbin', party: 'D', phone: '202-224-2152', website: 'www.durbin.senate.gov' },
    juniorSenator: { name: 'Tammy Duckworth', party: 'D', phone: '202-224-2854', website: 'www.duckworth.senate.gov' },
    representatives: [
  {
    "name": "Danny K. Davis",
    "party": "D",
    "phone": "202-225-5006",
    "website": "davis.house.gov",
    "district": 7
  },
  {
    "name": "Mike Quigley",
    "party": "D",
    "phone": "202-225-4061",
    "website": "quigley.house.gov",
    "district": 5
  },
  {
    "name": "Janice D. Schakowsky",
    "party": "D",
    "phone": "202-225-2111",
    "website": "schakowsky.house.gov",
    "district": 9
  },
  {
    "name": "Bill Foster",
    "party": "D",
    "phone": "202-225-3515",
    "website": "foster.house.gov",
    "district": 11
  },
  {
    "name": "Robin L. Kelly",
    "party": "D",
    "phone": "202-225-0773",
    "website": "robinkelly.house.gov",
    "district": 2
  },
  {
    "name": "Mike Bost",
    "party": "R",
    "phone": "202-225-5661",
    "website": "bost.house.gov",
    "district": 12
  },
  {
    "name": "Darin LaHood",
    "party": "R",
    "phone": "202-225-6201",
    "website": "lahood.house.gov",
    "district": 16
  },
  {
    "name": "Bradley Scott Schneider",
    "party": "D",
    "phone": "202-225-4835",
    "website": "schneider.house.gov",
    "district": 10
  },
  {
    "name": "Raja Krishnamoorthi",
    "party": "D",
    "phone": "202-225-3711",
    "website": "krishnamoorthi.house.gov",
    "district": 8
  },
  {
    "name": "Jesús G. Chuy García",
    "party": "D",
    "phone": "202-225-8203",
    "website": "chuygarcia.house.gov",
    "district": 4
  },
  {
    "name": "Sean Casten",
    "party": "D",
    "phone": "202-225-4561",
    "website": "casten.house.gov",
    "district": 6
  },
  {
    "name": "Lauren Underwood",
    "party": "D",
    "phone": "202-225-2976",
    "website": "underwood.house.gov",
    "district": 14
  },
  {
    "name": "Mary E. Miller",
    "party": "R",
    "phone": "202-225-5271",
    "website": "marymiller.house.gov",
    "district": 15
  },
  {
    "name": "Jonathan L. Jackson",
    "party": "D",
    "phone": "202-225-4372",
    "website": "jonathanjackson.house.gov",
    "district": 1
  },
  {
    "name": "Delia C. Ramirez",
    "party": "D",
    "phone": "202-225-5701",
    "website": "ramirez.house.gov",
    "district": 3
  },
  {
    "name": "Nikki Budzinski",
    "party": "D",
    "phone": "202-225-2371",
    "website": "budzinski.house.gov",
    "district": 13
  },
  {
    "name": "Eric Sorensen",
    "party": "D",
    "phone": "202-225-5905",
    "website": "sorensen.house.gov",
    "district": 17
  }
],
  },
  {
    slug: 'indiana',
    name: 'Indiana',
    abbr: 'IN',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Todd Young', party: 'R', phone: '202-224-5623', website: 'www.young.senate.gov' },
    juniorSenator: { name: 'Jim Banks', party: 'R', phone: '202-224-4814', website: 'www.banks.senate.gov' },
    representatives: [
  {
    "name": "André Carson",
    "party": "D",
    "phone": "202-225-4011",
    "website": "carson.house.gov",
    "district": 7
  },
  {
    "name": "James R. Baird",
    "party": "R",
    "phone": "202-225-5037",
    "website": "baird.house.gov",
    "district": 4
  },
  {
    "name": "Frank J. Mrvan",
    "party": "D",
    "phone": "202-225-2461",
    "website": "mrvan.house.gov",
    "district": 1
  },
  {
    "name": "Victoria Spartz",
    "party": "R",
    "phone": "202-225-2276",
    "website": "spartz.house.gov",
    "district": 5
  },
  {
    "name": "Rudy Yakym III",
    "party": "R",
    "phone": "202-225-3915",
    "website": "yakym.house.gov",
    "district": 2
  },
  {
    "name": "Erin Houchin",
    "party": "R",
    "phone": "202-225-5315",
    "website": "houchin.house.gov",
    "district": 9
  },
  {
    "name": "Marlin A. Stutzman",
    "party": "R",
    "phone": "202-225-4436",
    "website": "stutzman.house.gov",
    "district": 3
  },
  {
    "name": "Jefferson Shreve",
    "party": "R",
    "phone": "202-225-3021",
    "website": "shreve.house.gov",
    "district": 6
  },
  {
    "name": "Mark B. Messmer",
    "party": "R",
    "phone": "202-225-4636",
    "website": "messmer.house.gov",
    "district": 8
  }
],
  },
  {
    slug: 'iowa',
    name: 'Iowa',
    abbr: 'IA',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Chuck Grassley', party: 'R', phone: '202-224-3744', website: 'www.grassley.senate.gov' },
    juniorSenator: { name: 'Joni Ernst', party: 'R', phone: '202-224-3254', website: 'www.ernst.senate.gov' },
    representatives: [
  {
    "name": "Ashley Hinson",
    "party": "R",
    "phone": "202-225-2911",
    "website": "hinson.house.gov",
    "district": 2
  },
  {
    "name": "Mariannette Miller-Meeks",
    "party": "R",
    "phone": "202-225-6576",
    "website": "millermeeks.house.gov",
    "district": 1
  },
  {
    "name": "Randy Feenstra",
    "party": "R",
    "phone": "202-225-4426",
    "website": "feenstra.house.gov",
    "district": 4
  },
  {
    "name": "Zachary Nunn",
    "party": "R",
    "phone": "202-225-5476",
    "website": "nunn.house.gov",
    "district": 3
  }
],
  },
  {
    slug: 'kansas',
    name: 'Kansas',
    abbr: 'KS',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Jerry Moran', party: 'R', phone: '202-224-6521', website: 'www.moran.senate.gov' },
    juniorSenator: { name: 'Roger Marshall', party: 'R', phone: '202-224-4774', website: 'www.marshall.senate.gov' },
    representatives: [
  {
    "name": "Ron Estes",
    "party": "R",
    "phone": "202-225-6216",
    "website": "estes.house.gov",
    "district": 4
  },
  {
    "name": "Sharice Davids",
    "party": "D",
    "phone": "202-225-2865",
    "website": "davids.house.gov",
    "district": 3
  },
  {
    "name": "Tracey Mann",
    "party": "R",
    "phone": "202-225-2715",
    "website": "mann.house.gov",
    "district": 1
  },
  {
    "name": "Derek Schmidt",
    "party": "R",
    "phone": "202-225-6601",
    "website": "schmidt.house.gov",
    "district": 2
  }
],
  },
  {
    slug: 'kentucky',
    name: 'Kentucky',
    abbr: 'KY',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Mitch McConnell', party: 'R', phone: '202-224-2541', website: 'www.mcconnell.senate.gov' },
    juniorSenator: { name: 'Rand Paul', party: 'R', phone: '(202) 224-4343', website: 'paul.senate.gov' },
    representatives: [
  {
    "name": "Brett Guthrie",
    "party": "R",
    "phone": "202-225-3501",
    "website": "guthrie.house.gov",
    "district": 2
  },
  {
    "name": "Harold Rogers",
    "party": "R",
    "phone": "202-225-4601",
    "website": "halrogers.house.gov",
    "district": 5
  },
  {
    "name": "Thomas Massie",
    "party": "R",
    "phone": "202-225-3465",
    "website": "massie.house.gov",
    "district": 4
  },
  {
    "name": "Andy Barr",
    "party": "R",
    "phone": "202-225-4706",
    "website": "barr.house.gov",
    "district": 6
  },
  {
    "name": "James Comer",
    "party": "R",
    "phone": "202-225-3115",
    "website": "comer.house.gov",
    "district": 1
  },
  {
    "name": "Morgan McGarvey",
    "party": "D",
    "phone": "202-225-5401",
    "website": "mcgarvey.house.gov",
    "district": 3
  }
],
  },
  {
    slug: 'louisiana',
    name: 'Louisiana',
    abbr: 'LA',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Bill Cassidy', party: 'R', phone: '202-224-5824', website: 'www.cassidy.senate.gov' },
    juniorSenator: { name: 'John Kennedy', party: 'R', phone: '202-224-4623', website: 'www.kennedy.senate.gov/public' },
    representatives: [
  {
    "name": "Steve Scalise",
    "party": "R",
    "phone": "202-225-3015",
    "website": "scalise.house.gov",
    "district": 1
  },
  {
    "name": "Clay Higgins",
    "party": "R",
    "phone": "202-225-2031",
    "website": "clayhiggins.house.gov",
    "district": 3
  },
  {
    "name": "Mike Johnson",
    "party": "R",
    "phone": "202-225-2777",
    "website": "mikejohnson.house.gov",
    "district": 4
  },
  {
    "name": "Julia Letlow",
    "party": "R",
    "phone": "202-225-8490",
    "website": "letlow.house.gov",
    "district": 5
  },
  {
    "name": "Troy A. Carter",
    "party": "D",
    "phone": "202-225-6636",
    "website": "troycarter.house.gov",
    "district": 2
  },
  {
    "name": "Cleo Fields",
    "party": "D",
    "phone": "202-225-3901",
    "website": "fields.house.gov",
    "district": 6
  }
],
  },
  {
    slug: 'maine',
    name: 'Maine',
    abbr: 'ME',
    signatureTarget: 67000,
    populationPercent: '~10% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Angus S. King, Jr.', party: 'I', phone: '202-224-5344', website: 'www.king.senate.gov' },
    juniorSenator: { name: 'Angus S. King, Jr.', party: 'I', phone: '202-224-5344', website: 'www.king.senate.gov' },
    representatives: [
  {
    "name": "Chellie Pingree",
    "party": "D",
    "phone": "202-225-6116",
    "website": "pingree.house.gov",
    "district": 1
  },
  {
    "name": "Jared F. Golden",
    "party": "D",
    "phone": "202-225-6306",
    "website": "golden.house.gov",
    "district": 2
  }
],
  },
  {
    slug: 'maryland',
    name: 'Maryland',
    abbr: 'MD',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Chris Van Hollen', party: 'D', phone: '202-224-4654', website: 'www.vanhollen.senate.gov' },
    juniorSenator: { name: 'Angela D. Alsobrooks', party: 'D', phone: '202-224-4524', website: 'www.alsobrooks.senate.gov' },
    representatives: [
  {
    "name": "Andy Harris",
    "party": "R",
    "phone": "202-225-5311",
    "website": "harris.house.gov",
    "district": 1
  },
  {
    "name": "Steny H. Hoyer",
    "party": "D",
    "phone": "202-225-4131",
    "website": "hoyer.house.gov",
    "district": 5
  },
  {
    "name": "Jamie Raskin",
    "party": "D",
    "phone": "202-225-5341",
    "website": "raskin.house.gov",
    "district": 8
  },
  {
    "name": "Kweisi Mfume",
    "party": "D",
    "phone": "202-225-4741",
    "website": "mfume.house.gov",
    "district": 7
  },
  {
    "name": "Glenn Ivey",
    "party": "D",
    "phone": "202-225-8699",
    "website": "ivey.house.gov",
    "district": 4
  },
  {
    "name": "Johnny Olszewski, Jr.",
    "party": "D",
    "phone": "202-225-3061",
    "website": "olszewski.house.gov",
    "district": 2
  },
  {
    "name": "Sarah Elfreth",
    "party": "D",
    "phone": "202-225-4016",
    "website": "elfreth.house.gov",
    "district": 3
  },
  {
    "name": "April McClain Delaney",
    "party": "D",
    "phone": "202-225-2721",
    "website": "mcclaindelaney.house.gov",
    "district": 6
  }
],
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    abbr: 'MA',
    signatureTarget: 69821,
    populationPercent: '~3.5% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'coming-soon',
    seniorSenator: { name: 'Elizabeth Warren', party: 'D', phone: '202-224-4543', website: 'www.warren.senate.gov' },
    juniorSenator: { name: 'Edward J. Markey', party: 'D', phone: '202-224-2742', website: 'www.markey.senate.gov' },
    representatives: [
  {
    "name": "William R. Keating",
    "party": "D",
    "phone": "202-225-3111",
    "website": "keating.house.gov",
    "district": 9
  },
  {
    "name": "Stephen F. Lynch",
    "party": "D",
    "phone": "202-225-8273",
    "website": "lynch.house.gov",
    "district": 8
  },
  {
    "name": "James P. McGovern",
    "party": "D",
    "phone": "202-225-6101",
    "website": "mcgovern.house.gov",
    "district": 2
  },
  {
    "name": "Richard E. Neal",
    "party": "D",
    "phone": "202-225-5601",
    "website": "neal.house.gov",
    "district": 1
  },
  {
    "name": "Katherine M. Clark",
    "party": "D",
    "phone": "202-225-2836",
    "website": "katherineclark.house.gov",
    "district": 5
  },
  {
    "name": "Seth Moulton",
    "party": "D",
    "phone": "202-225-8020",
    "website": "moulton.house.gov",
    "district": 6
  },
  {
    "name": "Lori Trahan",
    "party": "D",
    "phone": "202-225-3411",
    "website": "trahan.house.gov",
    "district": 3
  },
  {
    "name": "Ayanna Pressley",
    "party": "D",
    "phone": "202-225-5111",
    "website": "pressley.house.gov",
    "district": 7
  },
  {
    "name": "Jake Auchincloss",
    "party": "D",
    "phone": "202-225-5931",
    "website": "auchincloss.house.gov",
    "district": 4
  }
],
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    abbr: 'MI',
    signatureTarget: 340000,
    populationPercent: '8% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Gary C. Peters', party: 'D', phone: '202-224-6221', website: 'www.peters.senate.gov' },
    juniorSenator: { name: 'Elissa Slotkin', party: 'D', phone: '202-224-4822', website: 'www.slotkin.senate.gov' },
    representatives: [
  {
    "name": "Bill Huizenga",
    "party": "R",
    "phone": "202-225-4401",
    "website": "huizenga.house.gov",
    "district": 4
  },
  {
    "name": "Tim Walberg",
    "party": "R",
    "phone": "202-225-6276",
    "website": "walberg.house.gov",
    "district": 5
  },
  {
    "name": "John R. Moolenaar",
    "party": "R",
    "phone": "202-225-3561",
    "website": "moolenaar.house.gov",
    "district": 2
  },
  {
    "name": "Debbie Dingell",
    "party": "D",
    "phone": "202-225-4071",
    "website": "debbiedingell.house.gov",
    "district": 6
  },
  {
    "name": "Jack Bergman",
    "party": "R",
    "phone": "202-225-4735",
    "website": "bergman.house.gov",
    "district": 1
  },
  {
    "name": "Haley M. Stevens",
    "party": "D",
    "phone": "202-225-8171",
    "website": "stevens.house.gov",
    "district": 11
  },
  {
    "name": "Rashida Tlaib",
    "party": "D",
    "phone": "202-225-5126",
    "website": "tlaib.house.gov",
    "district": 12
  },
  {
    "name": "Lisa C. McClain",
    "party": "R",
    "phone": "202-225-2106",
    "website": "mcclain.house.gov",
    "district": 9
  },
  {
    "name": "Hillary J. Scholten",
    "party": "D",
    "phone": "202-225-3831",
    "website": "scholten.house.gov",
    "district": 3
  },
  {
    "name": "John James",
    "party": "R",
    "phone": "202-225-4961",
    "website": "james.house.gov",
    "district": 10
  },
  {
    "name": "Shri Thanedar",
    "party": "D",
    "phone": "202-225-5802",
    "website": "thanedar.house.gov",
    "district": 13
  },
  {
    "name": "Tom Barrett",
    "party": "R",
    "phone": "202-225-4872",
    "website": "barrett.house.gov",
    "district": 7
  },
  {
    "name": "Kristen McDonald Rivet",
    "party": "D",
    "phone": "202-225-3611",
    "website": "mcdonaldrivet.house.gov",
    "district": 8
  }
],
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    abbr: 'MN',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Amy Klobuchar', party: 'D', phone: '202-224-3244', website: 'www.klobuchar.senate.gov' },
    juniorSenator: { name: 'Tina Smith', party: 'D', phone: '202-224-5641', website: 'www.smith.senate.gov' },
    representatives: [
  {
    "name": "Betty McCollum",
    "party": "D",
    "phone": "202-225-6631",
    "website": "mccollum.house.gov",
    "district": 4
  },
  {
    "name": "Tom Emmer",
    "party": "R",
    "phone": "202-225-2331",
    "website": "emmer.house.gov",
    "district": 6
  },
  {
    "name": "Angie Craig",
    "party": "D",
    "phone": "202-225-2271",
    "website": "craig.house.gov",
    "district": 2
  },
  {
    "name": "Ilhan Omar",
    "party": "D",
    "phone": "202-225-4755",
    "website": "omar.house.gov",
    "district": 5
  },
  {
    "name": "Pete Stauber",
    "party": "R",
    "phone": "202-225-6211",
    "website": "stauber.house.gov",
    "district": 8
  },
  {
    "name": "Michelle Fischbach",
    "party": "R",
    "phone": "202-225-2165",
    "website": "fischbach.house.gov",
    "district": 7
  },
  {
    "name": "Brad Finstad",
    "party": "R",
    "phone": "202-225-2472",
    "website": "finstad.house.gov",
    "district": 1
  },
  {
    "name": "Kelly Morrison",
    "party": "D",
    "phone": "202-225-2871",
    "website": "morrison.house.gov",
    "district": 3
  }
],
  },
  {
    slug: 'mississippi',
    name: 'Mississippi',
    abbr: 'MS',
    signatureTarget: 106000,
    populationPercent: '12% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Roger F. Wicker', party: 'R', phone: '202-224-6253', website: 'www.wicker.senate.gov' },
    juniorSenator: { name: 'Cindy Hyde-Smith', party: 'R', phone: '202-224-5054', website: 'www.hydesmith.senate.gov' },
    representatives: [
  {
    "name": "Bennie G. Thompson",
    "party": "D",
    "phone": "202-225-5876",
    "website": "benniethompson.house.gov",
    "district": 2
  },
  {
    "name": "Trent Kelly",
    "party": "R",
    "phone": "202-225-4306",
    "website": "trentkelly.house.gov",
    "district": 1
  },
  {
    "name": "Michael Guest",
    "party": "R",
    "phone": "202-225-5031",
    "website": "guest.house.gov",
    "district": 3
  },
  {
    "name": "Mike Ezell",
    "party": "R",
    "phone": "202-225-5772",
    "website": "ezell.house.gov",
    "district": 4
  }
],
  },
  {
    slug: 'missouri',
    name: 'Missouri',
    abbr: 'MO',
    signatureTarget: 160000,
    populationPercent: '5% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Josh Hawley', party: 'R', phone: '202-224-6154', website: 'www.hawley.senate.gov' },
    juniorSenator: { name: 'Eric Schmitt', party: 'R', phone: '202-224-5721', website: 'www.schmitt.senate.gov' },
    representatives: [
  {
    "name": "Sam Graves",
    "party": "R",
    "phone": "202-225-7041",
    "website": "graves.house.gov",
    "district": 6
  },
  {
    "name": "Ann Wagner",
    "party": "R",
    "phone": "202-225-1621",
    "website": "wagner.house.gov",
    "district": 2
  },
  {
    "name": "Jason Smith",
    "party": "R",
    "phone": "202-225-4404",
    "website": "jasonsmith.house.gov",
    "district": 8
  },
  {
    "name": "Mark Alford",
    "party": "R",
    "phone": "202-225-2876",
    "website": "alford.house.gov",
    "district": 4
  },
  {
    "name": "Eric Burlison",
    "party": "R",
    "phone": "202-225-6536",
    "website": "burlison.house.gov",
    "district": 7
  },
  {
    "name": "Wesley Bell",
    "party": "D",
    "phone": "202-225-2406",
    "website": "bell.house.gov",
    "district": 1
  },
  {
    "name": "Robert F. Onder, Jr.",
    "party": "R",
    "phone": "202-225-2956",
    "website": "onder.house.gov",
    "district": 3
  }
],
  },
  {
    slug: 'montana',
    name: 'Montana',
    abbr: 'MT',
    signatureTarget: 30000,
    populationPercent: '5% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Tim Sheehy', party: 'R', phone: '202-224-2644', website: 'www.sheehy.senate.gov' },
    juniorSenator: { name: 'Tim Sheehy', party: 'R', phone: '202-224-2644', website: 'www.sheehy.senate.gov' },
    representatives: [
  {
    "name": "Ryan K. Zinke",
    "party": "R",
    "phone": "202-225-5628",
    "website": "zinke.house.gov",
    "district": 1
  },
  {
    "name": "Troy Downing",
    "party": "R",
    "phone": "202-225-3211",
    "website": "downing.house.gov",
    "district": 2
  }
],
  },
  {
    slug: 'nebraska',
    name: 'Nebraska',
    abbr: 'NE',
    signatureTarget: 87000,
    populationPercent: '7% of registered voters',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Deb Fischer', party: 'R', phone: '202-224-6551', website: 'www.fischer.senate.gov' },
    juniorSenator: { name: 'Pete Ricketts', party: 'R', phone: '202-224-4224', website: 'www.ricketts.senate.gov' },
    representatives: [
  {
    "name": "Adrian Smith",
    "party": "R",
    "phone": "202-225-6435",
    "website": "adriansmith.house.gov",
    "district": 3
  },
  {
    "name": "Don Bacon",
    "party": "R",
    "phone": "202-225-4155",
    "website": "bacon.house.gov",
    "district": 2
  },
  {
    "name": "Mike Flood",
    "party": "R",
    "phone": "202-225-4806",
    "website": "flood.house.gov",
    "district": 1
  }
],
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    abbr: 'NV',
    signatureTarget: 100000,
    populationPercent: '10% of votes cast',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Catherine Cortez Masto', party: 'D', phone: '202-224-3542', website: 'www.cortezmasto.senate.gov' },
    juniorSenator: { name: 'Jacky Rosen', party: 'D', phone: '202-224-6244', website: 'www.rosen.senate.gov' },
    representatives: [
  {
    "name": "Mark E. Amodei",
    "party": "R",
    "phone": "202-225-6155",
    "website": "amodei.house.gov",
    "district": 2
  },
  {
    "name": "Dina Titus",
    "party": "D",
    "phone": "202-225-5965",
    "website": "titus.house.gov",
    "district": 1
  },
  {
    "name": "Steven Horsford",
    "party": "D",
    "phone": "202-225-9894",
    "website": "horsford.house.gov",
    "district": 4
  },
  {
    "name": "Susie Lee",
    "party": "D",
    "phone": "202-225-3252",
    "website": "susielee.house.gov",
    "district": 3
  }
],
  },
  {
    slug: 'new-hampshire',
    name: 'New Hampshire',
    abbr: 'NH',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Jeanne Shaheen', party: 'D', phone: '202-224-2841', website: 'www.shaheen.senate.gov' },
    juniorSenator: { name: 'Margaret Wood Hassan', party: 'D', phone: '202-224-3324', website: 'www.hassan.senate.gov' },
    representatives: [
  {
    "name": "Chris Pappas",
    "party": "D",
    "phone": "202-225-5456",
    "website": "pappas.house.gov",
    "district": 1
  },
  {
    "name": "Maggie Goodlander",
    "party": "D",
    "phone": "202-225-5206",
    "website": "goodlander.house.gov",
    "district": 2
  }
],
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    abbr: 'NJ',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Cory A. Booker', party: 'D', phone: '202-224-3224', website: 'www.booker.senate.gov' },
    juniorSenator: { name: 'Andy Kim', party: 'D', phone: '202-224-4744', website: 'www.kim.senate.gov' },
    representatives: [
  {
    "name": "Frank Pallone, Jr.",
    "party": "D",
    "phone": "202-225-4671",
    "website": "pallone.house.gov",
    "district": 6
  },
  {
    "name": "Christopher H. Smith",
    "party": "R",
    "phone": "202-225-3765",
    "website": "chrissmith.house.gov",
    "district": 4
  },
  {
    "name": "Donald Norcross",
    "party": "D",
    "phone": "202-225-6501",
    "website": "norcross.house.gov",
    "district": 1
  },
  {
    "name": "Bonnie Watson Coleman",
    "party": "D",
    "phone": "202-225-5801",
    "website": "watsoncoleman.house.gov",
    "district": 12
  },
  {
    "name": "Josh Gottheimer",
    "party": "D",
    "phone": "202-225-4465",
    "website": "gottheimer.house.gov",
    "district": 5
  },
  {
    "name": "Jefferson Van Drew",
    "party": "R",
    "phone": "202-225-6572",
    "website": "vandrew.house.gov",
    "district": 2
  },
  {
    "name": "Thomas H. Kean, Jr.",
    "party": "R",
    "phone": "202-225-5361",
    "website": "kean.house.gov",
    "district": 7
  },
  {
    "name": "Robert Menendez",
    "party": "D",
    "phone": "202-225-7919",
    "website": "menendez.house.gov",
    "district": 8
  },
  {
    "name": "LaMonica McIver",
    "party": "D",
    "phone": "202-225-3436",
    "website": "mciver.house.gov",
    "district": 10
  },
  {
    "name": "Herbert C. Conaway, Jr.",
    "party": "D",
    "phone": "202-225-4765",
    "website": "conaway.house.gov",
    "district": 3
  },
  {
    "name": "Nellie Pou",
    "party": "D",
    "phone": "202-225-5751",
    "website": "pou.house.gov",
    "district": 9
  }
],
  },
  {
    slug: 'new-mexico',
    name: 'New Mexico',
    abbr: 'NM',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Martin Heinrich', party: 'D', phone: '202-224-5521', website: 'www.heinrich.senate.gov' },
    juniorSenator: { name: 'Ben Ray Luján', party: 'D', phone: '202-224-6621', website: 'www.lujan.senate.gov' },
    representatives: [
  {
    "name": "Teresa Leger Fernandez",
    "party": "D",
    "phone": "202-225-6190",
    "website": "fernandez.house.gov",
    "district": 3
  },
  {
    "name": "Melanie A. Stansbury",
    "party": "D",
    "phone": "202-225-6316",
    "website": "stansbury.house.gov",
    "district": 1
  },
  {
    "name": "Gabe Vasquez",
    "party": "D",
    "phone": "202-225-2365",
    "website": "vasquez.house.gov",
    "district": 2
  }
],
  },
  {
    slug: 'new-york',
    name: 'New York',
    abbr: 'NY',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Charles E. Schumer', party: 'D', phone: '202-224-6542', website: 'www.schumer.senate.gov' },
    juniorSenator: { name: 'Kirsten E. Gillibrand', party: 'D', phone: '202-224-4451', website: 'www.gillibrand.senate.gov' },
    representatives: [
  {
    "name": "Yvette D. Clarke",
    "party": "D",
    "phone": "202-225-6231",
    "website": "clarke.house.gov",
    "district": 9
  },
  {
    "name": "Gregory W. Meeks",
    "party": "D",
    "phone": "202-225-3461",
    "website": "meeks.house.gov",
    "district": 5
  },
  {
    "name": "Jerrold Nadler",
    "party": "D",
    "phone": "202-225-5635",
    "website": "nadler.house.gov",
    "district": 12
  },
  {
    "name": "Paul Tonko",
    "party": "D",
    "phone": "202-225-5076",
    "website": "tonko.house.gov",
    "district": 20
  },
  {
    "name": "Nydia M. Velázquez",
    "party": "D",
    "phone": "202-225-2361",
    "website": "velazquez.house.gov",
    "district": 7
  },
  {
    "name": "Grace Meng",
    "party": "D",
    "phone": "202-225-2601",
    "website": "meng.house.gov",
    "district": 6
  },
  {
    "name": "Hakeem S. Jeffries",
    "party": "D",
    "phone": "202-225-5936",
    "website": "jeffries.house.gov",
    "district": 8
  },
  {
    "name": "Elise M. Stefanik",
    "party": "R",
    "phone": "202-225-4611",
    "website": "stefanik.house.gov",
    "district": 21
  },
  {
    "name": "Adriano Espaillat",
    "party": "D",
    "phone": "202-225-4365",
    "website": "espaillat.house.gov",
    "district": 13
  },
  {
    "name": "Joseph D. Morelle",
    "party": "D",
    "phone": "202-225-3615",
    "website": "morelle.house.gov",
    "district": 25
  },
  {
    "name": "Alexandria Ocasio-Cortez",
    "party": "D",
    "phone": "202-225-3965",
    "website": "ocasio-cortez.house.gov",
    "district": 14
  },
  {
    "name": "Andrew R. Garbarino",
    "party": "R",
    "phone": "202-225-7896",
    "website": "garbarino.house.gov",
    "district": 2
  },
  {
    "name": "Nicole Malliotakis",
    "party": "R",
    "phone": "202-225-3371",
    "website": "malliotakis.house.gov",
    "district": 11
  },
  {
    "name": "Ritchie Torres",
    "party": "D",
    "phone": "202-225-4361",
    "website": "ritchietorres.house.gov",
    "district": 15
  },
  {
    "name": "Claudia Tenney",
    "party": "R",
    "phone": "202-225-3665",
    "website": "tenney.house.gov",
    "district": 24
  },
  {
    "name": "Patrick Ryan",
    "party": "D",
    "phone": "202-225-5614",
    "website": "patryan.house.gov",
    "district": 18
  },
  {
    "name": "Nick LaLota",
    "party": "R",
    "phone": "202-225-3826",
    "website": "lalota.house.gov",
    "district": 1
  },
  {
    "name": "Daniel S. Goldman",
    "party": "D",
    "phone": "202-225-7944",
    "website": "goldman.house.gov",
    "district": 10
  },
  {
    "name": "Michael Lawler",
    "party": "R",
    "phone": "202-225-6506",
    "website": "lawler.house.gov",
    "district": 17
  },
  {
    "name": "Nicholas A. Langworthy",
    "party": "R",
    "phone": "202-225-3161",
    "website": "langworthy.house.gov",
    "district": 23
  },
  {
    "name": "Thomas R. Suozzi",
    "party": "D",
    "phone": "202-225-3335",
    "website": "suozzi.house.gov",
    "district": 3
  },
  {
    "name": "Timothy M. Kennedy",
    "party": "D",
    "phone": "202-225-3306",
    "website": "kennedy.house.gov",
    "district": 26
  },
  {
    "name": "Laura Gillen",
    "party": "D",
    "phone": "202-225-5516",
    "website": "gillen.house.gov",
    "district": 4
  },
  {
    "name": "George Latimer",
    "party": "D",
    "phone": "202-225-2464",
    "website": "latimer.house.gov",
    "district": 16
  },
  {
    "name": "Josh Riley",
    "party": "D",
    "phone": "202-225-5441",
    "website": "riley.house.gov",
    "district": 19
  },
  {
    "name": "John W. Mannion",
    "party": "D",
    "phone": "202-225-3701",
    "website": "mannion.house.gov",
    "district": 22
  }
],
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    abbr: 'NC',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Thom Tillis', party: 'R', phone: '202-224-6342', website: 'www.tillis.senate.gov' },
    juniorSenator: { name: 'Ted Budd', party: 'R', phone: '202-224-3154', website: 'www.budd.senate.gov' },
    representatives: [
  {
    "name": "Virginia Foxx",
    "party": "R",
    "phone": "202-225-2071",
    "website": "foxx.house.gov",
    "district": 5
  },
  {
    "name": "Richard Hudson",
    "party": "R",
    "phone": "202-225-3715",
    "website": "hudson.house.gov",
    "district": 9
  },
  {
    "name": "Alma S. Adams",
    "party": "D",
    "phone": "202-225-1510",
    "website": "adams.house.gov",
    "district": 12
  },
  {
    "name": "David Rouzer",
    "party": "R",
    "phone": "202-225-2731",
    "website": "rouzer.house.gov",
    "district": 7
  },
  {
    "name": "Gregory F. Murphy",
    "party": "R",
    "phone": "202-225-3415",
    "website": "murphy.house.gov",
    "district": 3
  },
  {
    "name": "Deborah K. Ross",
    "party": "D",
    "phone": "202-225-3032",
    "website": "ross.house.gov",
    "district": 2
  },
  {
    "name": "Donald G. Davis",
    "party": "D",
    "phone": "202-225-3101",
    "website": "dondavis.house.gov",
    "district": 1
  },
  {
    "name": "Valerie P. Foushee",
    "party": "D",
    "phone": "202-225-1784",
    "website": "foushee.house.gov",
    "district": 4
  },
  {
    "name": "Chuck Edwards",
    "party": "R",
    "phone": "202-225-6401",
    "website": "edwards.house.gov",
    "district": 11
  },
  {
    "name": "Addison P. McDowell",
    "party": "R",
    "phone": "202-225-3065",
    "website": "mcdowell.house.gov",
    "district": 6
  },
  {
    "name": "Mark Harris",
    "party": "R",
    "phone": "202-225-1976",
    "website": "markharris.house.gov",
    "district": 8
  },
  {
    "name": "Pat Harrigan",
    "party": "R",
    "phone": "202-225-2576",
    "website": "harrigan.house.gov",
    "district": 10
  },
  {
    "name": "Brad Knott",
    "party": "R",
    "phone": "202-225-4531",
    "website": "knott.house.gov",
    "district": 13
  },
  {
    "name": "Tim Moore",
    "party": "R",
    "phone": "202-225-5634",
    "website": "timmoore.house.gov",
    "district": 14
  }
],
  },
  {
    slug: 'north-dakota',
    name: 'North Dakota',
    abbr: 'ND',
    signatureTarget: 16000,
    populationPercent: '2% of resident population',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Kevin Cramer', party: 'R', phone: '202-224-2043', website: 'www.cramer.senate.gov' },
    juniorSenator: { name: 'Kevin Cramer', party: 'R', phone: '202-224-2043', website: 'www.cramer.senate.gov' },
    representatives: [
  {
    "name": "Julie Fedorchak",
    "party": "R",
    "phone": "202-225-2611",
    "website": "fedorchak.house.gov",
    "district": 0
  }
],
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    abbr: 'OH',
    signatureTarget: 132000,
    populationPercent: '3% of votes cast for governor (statutory)',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Bernie Moreno', party: 'R', phone: '202-224-2315', website: 'www.moreno.senate.gov' },
    juniorSenator: { name: 'Jon Husted', party: 'R', phone: '202-224-3353', website: 'www.husted.senate.gov' },
    representatives: [
  {
    "name": "Jim Jordan",
    "party": "R",
    "phone": "202-225-2676",
    "website": "jordan.house.gov",
    "district": 4
  },
  {
    "name": "Marcy Kaptur",
    "party": "D",
    "phone": "202-225-4146",
    "website": "kaptur.house.gov",
    "district": 9
  },
  {
    "name": "Robert E. Latta",
    "party": "R",
    "phone": "202-225-6405",
    "website": "latta.house.gov",
    "district": 5
  },
  {
    "name": "Michael R. Turner",
    "party": "R",
    "phone": "202-225-6465",
    "website": "turner.house.gov",
    "district": 10
  },
  {
    "name": "Joyce Beatty",
    "party": "D",
    "phone": "202-225-4324",
    "website": "beatty.house.gov",
    "district": 3
  },
  {
    "name": "David P. Joyce",
    "party": "R",
    "phone": "202-225-5731",
    "website": "joyce.house.gov",
    "district": 14
  },
  {
    "name": "Warren Davidson",
    "party": "R",
    "phone": "202-225-6205",
    "website": "davidson.house.gov",
    "district": 8
  },
  {
    "name": "Troy Balderson",
    "party": "R",
    "phone": "202-225-5355",
    "website": "balderson.house.gov",
    "district": 12
  },
  {
    "name": "Shontel M. Brown",
    "party": "D",
    "phone": "202-225-7032",
    "website": "shontelbrown.house.gov",
    "district": 11
  },
  {
    "name": "Mike Carey",
    "party": "R",
    "phone": "202-225-2015",
    "website": "carey.house.gov",
    "district": 15
  },
  {
    "name": "Greg Landsman",
    "party": "D",
    "phone": "202-225-2216",
    "website": "landsman.house.gov",
    "district": 1
  },
  {
    "name": "Max L. Miller",
    "party": "R",
    "phone": "202-225-3876",
    "website": "maxmiller.house.gov",
    "district": 7
  },
  {
    "name": "Emilia Strong Sykes",
    "party": "D",
    "phone": "202-225-6265",
    "website": "sykes.house.gov",
    "district": 13
  },
  {
    "name": "Michael A. Rulli",
    "party": "R",
    "phone": "202-225-5705",
    "website": "rulli.house.gov",
    "district": 6
  },
  {
    "name": "David J. Taylor",
    "party": "R",
    "phone": "202-225-3164",
    "website": "taylor.house.gov",
    "district": 2
  }
],
  },
  {
    slug: 'oklahoma',
    name: 'Oklahoma',
    abbr: 'OK',
    signatureTarget: 95000,
    populationPercent: '8% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'James Lankford', party: 'R', phone: '202-224-5754', website: 'www.lankford.senate.gov' },
    juniorSenator: { name: 'Alan Armstrong', party: 'R', phone: '202-224-4721', website: 'www.armstrong.senate.gov' },
    representatives: [
  {
    "name": "Tom Cole",
    "party": "R",
    "phone": "202-225-6165",
    "website": "cole.house.gov",
    "district": 4
  },
  {
    "name": "Kevin Hern",
    "party": "R",
    "phone": "202-225-2211",
    "website": "hern.house.gov",
    "district": 1
  },
  {
    "name": "Stephanie I. Bice",
    "party": "R",
    "phone": "202-225-2132",
    "website": "bice.house.gov",
    "district": 5
  },
  {
    "name": "Josh Brecheen",
    "party": "R",
    "phone": "202-225-2701",
    "website": "brecheen.house.gov",
    "district": 2
  }
],
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    abbr: 'OR',
    signatureTarget: 61275,
    populationPercent: '6% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'coming-soon',
    seniorSenator: { name: 'Ron Wyden', party: 'D', phone: '202-224-5244', website: 'www.wyden.senate.gov' },
    juniorSenator: { name: 'Jeff Merkley', party: 'D', phone: '202-224-3753', website: 'www.merkley.senate.gov' },
    representatives: [
  {
    "name": "Suzanne Bonamici",
    "party": "D",
    "phone": "202-225-0855",
    "website": "bonamici.house.gov",
    "district": 1
  },
  {
    "name": "Cliff Bentz",
    "party": "R",
    "phone": "202-225-6730",
    "website": "bentz.house.gov",
    "district": 2
  },
  {
    "name": "Val T. Hoyle",
    "party": "D",
    "phone": "202-225-6416",
    "website": "hoyle.house.gov",
    "district": 4
  },
  {
    "name": "Andrea Salinas",
    "party": "D",
    "phone": "202-225-5643",
    "website": "salinas.house.gov",
    "district": 6
  },
  {
    "name": "Maxine Dexter",
    "party": "D",
    "phone": "202-225-4811",
    "website": "dexter.house.gov",
    "district": 3
  },
  {
    "name": "Janelle S. Bynum",
    "party": "D",
    "phone": "202-225-5711",
    "website": "bynum.house.gov",
    "district": 5
  }
],
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    abbr: 'PA',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'John Fetterman', party: 'D', phone: '202-224-4254', website: 'www.fetterman.senate.gov' },
    juniorSenator: { name: 'David McCormick', party: 'R', phone: '202-224-6324', website: 'www.mccormick.senate.gov' },
    representatives: [
  {
    "name": "Mike Kelly",
    "party": "R",
    "phone": "202-225-5406",
    "website": "kelly.house.gov",
    "district": 16
  },
  {
    "name": "Glenn Thompson",
    "party": "R",
    "phone": "202-225-5121",
    "website": "thompson.house.gov",
    "district": 15
  },
  {
    "name": "Scott Perry",
    "party": "R",
    "phone": "202-225-5836",
    "website": "perry.house.gov",
    "district": 10
  },
  {
    "name": "Brendan F. Boyle",
    "party": "D",
    "phone": "202-225-6111",
    "website": "boyle.house.gov",
    "district": 2
  },
  {
    "name": "Dwight Evans",
    "party": "D",
    "phone": "202-225-4001",
    "website": "evans.house.gov",
    "district": 3
  },
  {
    "name": "Brian K. Fitzpatrick",
    "party": "R",
    "phone": "202-225-4276",
    "website": "fitzpatrick.house.gov",
    "district": 1
  },
  {
    "name": "Lloyd Smucker",
    "party": "R",
    "phone": "202-225-2411",
    "website": "smucker.house.gov",
    "district": 11
  },
  {
    "name": "Mary Gay Scanlon",
    "party": "D",
    "phone": "202-225-2011",
    "website": "scanlon.house.gov",
    "district": 5
  },
  {
    "name": "Madeleine Dean",
    "party": "D",
    "phone": "202-225-4731",
    "website": "dean.house.gov",
    "district": 4
  },
  {
    "name": "Chrissy Houlahan",
    "party": "D",
    "phone": "202-225-4315",
    "website": "houlahan.house.gov",
    "district": 6
  },
  {
    "name": "Daniel Meuser",
    "party": "R",
    "phone": "202-225-6511",
    "website": "meuser.house.gov",
    "district": 9
  },
  {
    "name": "John Joyce",
    "party": "R",
    "phone": "202-225-2431",
    "website": "johnjoyce.house.gov",
    "district": 13
  },
  {
    "name": "Guy Reschenthaler",
    "party": "R",
    "phone": "202-225-2065",
    "website": "reschenthaler.house.gov",
    "district": 14
  },
  {
    "name": "Summer L. Lee",
    "party": "D",
    "phone": "202-225-2135",
    "website": "summerlee.house.gov",
    "district": 12
  },
  {
    "name": "Christopher R. Deluzio",
    "party": "D",
    "phone": "202-225-2301",
    "website": "deluzio.house.gov",
    "district": 17
  },
  {
    "name": "Ryan Mackenzie",
    "party": "R",
    "phone": "202-225-6411",
    "website": "mackenzie.house.gov",
    "district": 7
  },
  {
    "name": "Robert P. Bresnahan, Jr.",
    "party": "R",
    "phone": "202-225-5546",
    "website": "bresnahan.house.gov",
    "district": 8
  }
],
  },
  {
    slug: 'rhode-island',
    name: 'Rhode Island',
    abbr: 'RI',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Jack Reed', party: 'D', phone: '202-224-4642', website: 'www.reed.senate.gov' },
    juniorSenator: { name: 'Sheldon Whitehouse', party: 'D', phone: '202-224-2921', website: 'www.whitehouse.senate.gov' },
    representatives: [
  {
    "name": "Seth Magaziner",
    "party": "D",
    "phone": "202-225-2735",
    "website": "magaziner.house.gov",
    "district": 2
  },
  {
    "name": "Gabe Amo",
    "party": "D",
    "phone": "202-225-4911",
    "website": "amo.house.gov",
    "district": 1
  }
],
  },
  {
    slug: 'south-carolina',
    name: 'South Carolina',
    abbr: 'SC',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Lindsey Graham', party: 'R', phone: '202-224-5972', website: 'www.lgraham.senate.gov/public' },
    juniorSenator: { name: 'Tim Scott', party: 'R', phone: '202-224-6121', website: 'www.scott.senate.gov' },
    representatives: [
  {
    "name": "James E. Clyburn",
    "party": "D",
    "phone": "202-225-3315",
    "website": "clyburn.house.gov",
    "district": 6
  },
  {
    "name": "Joe Wilson",
    "party": "R",
    "phone": "202-225-2452",
    "website": "joewilson.house.gov",
    "district": 2
  },
  {
    "name": "Ralph Norman",
    "party": "R",
    "phone": "202-225-5501",
    "website": "norman.house.gov",
    "district": 5
  },
  {
    "name": "William R. Timmons IV",
    "party": "R",
    "phone": "202-225-6030",
    "website": "timmons.house.gov",
    "district": 4
  },
  {
    "name": "Nancy Mace",
    "party": "R",
    "phone": "202-225-3176",
    "website": "mace.house.gov",
    "district": 1
  },
  {
    "name": "Russell Fry",
    "party": "R",
    "phone": "202-225-9895",
    "website": "fry.house.gov",
    "district": 7
  },
  {
    "name": "Sheri Biggs",
    "party": "R",
    "phone": "202-225-5301",
    "website": "sheribiggs.house.gov",
    "district": 3
  }
],
  },
  {
    slug: 'south-dakota',
    name: 'South Dakota',
    abbr: 'SD',
    signatureTarget: 17000,
    populationPercent: '5% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'John Thune', party: 'R', phone: '202-224-2321', website: 'www.thune.senate.gov' },
    juniorSenator: { name: 'Mike Rounds', party: 'R', phone: '202-224-5842', website: 'www.rounds.senate.gov' },
    representatives: [
  {
    "name": "Dusty Johnson",
    "party": "R",
    "phone": "202-225-2801",
    "website": "dustyjohnson.house.gov",
    "district": 0
  }
],
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    abbr: 'TN',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Marsha Blackburn', party: 'R', phone: '202-224-3344', website: 'www.blackburn.senate.gov' },
    juniorSenator: { name: 'Bill Hagerty', party: 'R', phone: '202-224-4944', website: 'www.hagerty.senate.gov' },
    representatives: [
  {
    "name": "Steve Cohen",
    "party": "D",
    "phone": "202-225-3265",
    "website": "cohen.house.gov",
    "district": 9
  },
  {
    "name": "Scott DesJarlais",
    "party": "R",
    "phone": "202-225-6831",
    "website": "desjarlais.house.gov",
    "district": 4
  },
  {
    "name": "Charles J. Chuck Fleischmann",
    "party": "R",
    "phone": "202-225-3271",
    "website": "fleischmann.house.gov",
    "district": 3
  },
  {
    "name": "David Kustoff",
    "party": "R",
    "phone": "202-225-4714",
    "website": "kustoff.house.gov",
    "district": 8
  },
  {
    "name": "Tim Burchett",
    "party": "R",
    "phone": "202-225-5435",
    "website": "burchett.house.gov",
    "district": 2
  },
  {
    "name": "John W. Rose",
    "party": "R",
    "phone": "202-225-4231",
    "website": "johnrose.house.gov",
    "district": 6
  },
  {
    "name": "Diana Harshbarger",
    "party": "R",
    "phone": "202-225-6356",
    "website": "harshbarger.house.gov",
    "district": 1
  },
  {
    "name": "Andrew Ogles",
    "party": "R",
    "phone": "202-225-4311",
    "website": "ogles.house.gov",
    "district": 5
  },
  {
    "name": "Matt Van Epps",
    "party": "R",
    "phone": "202-225-2811",
    "website": "vanepps.house.gov",
    "district": 7
  }
],
  },
  {
    slug: 'texas',
    name: 'Texas',
    abbr: 'TX',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'John Cornyn', party: 'R', phone: '202-224-2934', website: 'www.cornyn.senate.gov' },
    juniorSenator: { name: 'Ted Cruz', party: 'R', phone: '202-224-5922', website: 'www.cruz.senate.gov' },
    representatives: [
  {
    "name": "John R. Carter",
    "party": "R",
    "phone": "202-225-3864",
    "website": "carter.house.gov",
    "district": 31
  },
  {
    "name": "Henry Cuellar",
    "party": "D",
    "phone": "202-225-1640",
    "website": "cuellar.house.gov",
    "district": 28
  },
  {
    "name": "Lloyd Doggett",
    "party": "D",
    "phone": "202-225-4865",
    "website": "doggett.house.gov",
    "district": 37
  },
  {
    "name": "Al Green",
    "party": "D",
    "phone": "202-225-7508",
    "website": "algreen.house.gov",
    "district": 9
  },
  {
    "name": "Michael T. McCaul",
    "party": "R",
    "phone": "202-225-2401",
    "website": "mccaul.house.gov",
    "district": 10
  },
  {
    "name": "Randy K. Weber, Sr.",
    "party": "R",
    "phone": "202-225-2831",
    "website": "weber.house.gov",
    "district": 14
  },
  {
    "name": "Joaquin Castro",
    "party": "D",
    "phone": "202-225-3236",
    "website": "castro.house.gov",
    "district": 20
  },
  {
    "name": "Roger Williams",
    "party": "R",
    "phone": "202-225-9896",
    "website": "williams.house.gov",
    "district": 25
  },
  {
    "name": "Marc A. Veasey",
    "party": "D",
    "phone": "202-225-9897",
    "website": "veasey.house.gov",
    "district": 33
  },
  {
    "name": "Brian Babin",
    "party": "R",
    "phone": "202-225-1555",
    "website": "babin.house.gov",
    "district": 36
  },
  {
    "name": "Vicente Gonzalez",
    "party": "D",
    "phone": "202-225-2531",
    "website": "gonzalez.house.gov",
    "district": 34
  },
  {
    "name": "Jodey C. Arrington",
    "party": "R",
    "phone": "202-225-4005",
    "website": "arrington.house.gov",
    "district": 19
  },
  {
    "name": "Michael Cloud",
    "party": "R",
    "phone": "202-225-7742",
    "website": "cloud.house.gov",
    "district": 27
  },
  {
    "name": "Dan Crenshaw",
    "party": "R",
    "phone": "202-225-6565",
    "website": "crenshaw.house.gov",
    "district": 2
  },
  {
    "name": "Lance Gooden",
    "party": "R",
    "phone": "202-225-3484",
    "website": "gooden.house.gov",
    "district": 5
  },
  {
    "name": "Lizzie Fletcher",
    "party": "D",
    "phone": "202-225-2571",
    "website": "fletcher.house.gov",
    "district": 7
  },
  {
    "name": "Veronica Escobar",
    "party": "D",
    "phone": "202-225-4831",
    "website": "escobar.house.gov",
    "district": 16
  },
  {
    "name": "Chip Roy",
    "party": "R",
    "phone": "202-225-4236",
    "website": "roy.house.gov",
    "district": 21
  },
  {
    "name": "Sylvia R. Garcia",
    "party": "D",
    "phone": "202-225-1688",
    "website": "sylviagarcia.house.gov",
    "district": 29
  },
  {
    "name": "Pete Sessions",
    "party": "R",
    "phone": "202-225-6105",
    "website": "sessions.house.gov",
    "district": 17
  },
  {
    "name": "Pat Fallon",
    "party": "R",
    "phone": "202-225-6673",
    "website": "fallon.house.gov",
    "district": 4
  },
  {
    "name": "August Pfluger",
    "party": "R",
    "phone": "202-225-3605",
    "website": "pfluger.house.gov",
    "district": 11
  },
  {
    "name": "Ronny Jackson",
    "party": "R",
    "phone": "202-225-3706",
    "website": "jackson.house.gov",
    "district": 13
  },
  {
    "name": "Troy E. Nehls",
    "party": "R",
    "phone": "202-225-5951",
    "website": "nehls.house.gov",
    "district": 22
  },
  {
    "name": "Tony Gonzales",
    "party": "R",
    "phone": "202-225-4511",
    "website": "gonzales.house.gov",
    "district": 23
  },
  {
    "name": "Beth Van Duyne",
    "party": "R",
    "phone": "202-225-6605",
    "website": "vanduyne.house.gov",
    "district": 24
  },
  {
    "name": "Jake Ellzey",
    "party": "R",
    "phone": "202-225-2002",
    "website": "ellzey.house.gov",
    "district": 6
  },
  {
    "name": "Nathaniel Moran",
    "party": "R",
    "phone": "202-225-3035",
    "website": "moran.house.gov",
    "district": 1
  },
  {
    "name": "Keith Self",
    "party": "R",
    "phone": "202-225-4201",
    "website": "keithself.house.gov",
    "district": 3
  },
  {
    "name": "Morgan Luttrell",
    "party": "R",
    "phone": "202-225-4901",
    "website": "luttrell.house.gov",
    "district": 8
  },
  {
    "name": "Monica De La Cruz",
    "party": "R",
    "phone": "202-225-9901",
    "website": "delacruz.house.gov",
    "district": 15
  },
  {
    "name": "Jasmine Crockett",
    "party": "D",
    "phone": "202-225-8885",
    "website": "crockett.house.gov",
    "district": 30
  },
  {
    "name": "Greg Casar",
    "party": "D",
    "phone": "202-225-5645",
    "website": "casar.house.gov",
    "district": 35
  },
  {
    "name": "Wesley Hunt",
    "party": "R",
    "phone": "202-225-5646",
    "website": "hunt.house.gov",
    "district": 38
  },
  {
    "name": "Craig A. Goldman",
    "party": "R",
    "phone": "202-225-5071",
    "website": "craiggoldman.house.gov",
    "district": 12
  },
  {
    "name": "Brandon Gill",
    "party": "R",
    "phone": "202-225-7772",
    "website": "gill.house.gov",
    "district": 26
  },
  {
    "name": "Julie Johnson",
    "party": "D",
    "phone": "202-225-2231",
    "website": "juliejohnson.house.gov",
    "district": 32
  },
  {
    "name": "Christian D. Menefee",
    "party": "D",
    "phone": "202-225-3816",
    "website": "menefee.house.gov",
    "district": 18
  }
],
  },
  {
    slug: 'utah',
    name: 'Utah',
    abbr: 'UT',
    signatureTarget: 116000,
    populationPercent: '6% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Mike Lee', party: 'R', phone: '202-224-5444', website: 'www.lee.senate.gov' },
    juniorSenator: { name: 'John R. Curtis', party: 'R', phone: '202-224-5251', website: 'www.curtis.senate.gov' },
    representatives: [
  {
    "name": "Blake D. Moore",
    "party": "R",
    "phone": "202-225-0453",
    "website": "blakemoore.house.gov",
    "district": 1
  },
  {
    "name": "Burgess Owens",
    "party": "R",
    "phone": "202-225-3011",
    "website": "owens.house.gov",
    "district": 4
  },
  {
    "name": "Celeste Maloy",
    "party": "R",
    "phone": "202-225-9730",
    "website": "maloy.house.gov",
    "district": 2
  },
  {
    "name": "Mike Kennedy",
    "party": "R",
    "phone": "202-225-7751",
    "website": "mikekennedy.house.gov",
    "district": 3
  }
],
  },
  {
    slug: 'vermont',
    name: 'Vermont',
    abbr: 'VT',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Bernard Sanders', party: 'I', phone: '202-224-5141', website: 'www.sanders.senate.gov' },
    juniorSenator: { name: 'Peter Welch', party: 'D', phone: '202-224-4242', website: 'www.welch.senate.gov' },
    representatives: [
  {
    "name": "Becca Balint",
    "party": "D",
    "phone": "202-225-4115",
    "website": "balint.house.gov",
    "district": 0
  }
],
  },
  {
    slug: 'virginia',
    name: 'Virginia',
    abbr: 'VA',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Mark R. Warner', party: 'D', phone: '202-224-2023', website: 'www.warner.senate.gov' },
    juniorSenator: { name: 'Tim Kaine', party: 'D', phone: '202-224-4024', website: 'www.kaine.senate.gov' },
    representatives: [
  {
    "name": "H. Morgan Griffith",
    "party": "R",
    "phone": "202-225-3861",
    "website": "morgangriffith.house.gov",
    "district": 9
  },
  {
    "name": "Robert C. Bobby Scott",
    "party": "D",
    "phone": "202-225-8351",
    "website": "bobbyscott.house.gov",
    "district": 3
  },
  {
    "name": "Robert J. Wittman",
    "party": "R",
    "phone": "202-225-4261",
    "website": "wittman.house.gov",
    "district": 1
  },
  {
    "name": "Donald S. Beyer, Jr.",
    "party": "D",
    "phone": "202-225-4376",
    "website": "beyer.house.gov",
    "district": 8
  },
  {
    "name": "Ben Cline",
    "party": "R",
    "phone": "202-225-5431",
    "website": "cline.house.gov",
    "district": 6
  },
  {
    "name": "Jennifer A. Kiggans",
    "party": "R",
    "phone": "202-225-4215",
    "website": "kiggans.house.gov",
    "district": 2
  },
  {
    "name": "Jennifer L. McClellan",
    "party": "D",
    "phone": "202-225-6365",
    "website": "mcclellan.house.gov",
    "district": 4
  },
  {
    "name": "John J. McGuire III",
    "party": "R",
    "phone": "202-225-4711",
    "website": "mcguire.house.gov",
    "district": 5
  },
  {
    "name": "Eugene Simon Vindman",
    "party": "D",
    "phone": "202-225-2815",
    "website": "vindman.house.gov",
    "district": 7
  },
  {
    "name": "Suhas Subramanyam",
    "party": "D",
    "phone": "202-225-5136",
    "website": "subramanyam.house.gov",
    "district": 10
  },
  {
    "name": "James R. Walkinshaw",
    "party": "D",
    "phone": "202-225-1492",
    "website": "walkinshaw.house.gov",
    "district": 11
  }
],
  },
  {
    slug: 'washington',
    name: 'Washington',
    abbr: 'WA',
    signatureTarget: 324516,
    populationPercent: '8% of votes cast for governor',
    hasBallotInitiative: true,
    hasOrganizer: true,
    campaignStatus: 'active',
    seniorSenator: { name: 'Patty Murray', party: 'D', phone: '202-224-2621', website: 'www.murray.senate.gov' },
    juniorSenator: { name: 'Maria Cantwell', party: 'D', phone: '202-224-3441', website: 'www.cantwell.senate.gov' },
    representatives: [
  {
    "name": "Rick Larsen",
    "party": "D",
    "phone": "202-225-2605",
    "website": "larsen.house.gov",
    "district": 2
  },
  {
    "name": "Adam Smith",
    "party": "D",
    "phone": "202-225-8901",
    "website": "adamsmith.house.gov",
    "district": 9
  },
  {
    "name": "Suzan K. DelBene",
    "party": "D",
    "phone": "202-225-6311",
    "website": "delbene.house.gov",
    "district": 1
  },
  {
    "name": "Dan Newhouse",
    "party": "R",
    "phone": "202-225-5816",
    "website": "newhouse.house.gov",
    "district": 4
  },
  {
    "name": "Pramila Jayapal",
    "party": "D",
    "phone": "202-225-3106",
    "website": "jayapal.house.gov",
    "district": 7
  },
  {
    "name": "Kim Schrier",
    "party": "D",
    "phone": "202-225-7761",
    "website": "schrier.house.gov",
    "district": 8
  },
  {
    "name": "Marilyn Strickland",
    "party": "D",
    "phone": "202-225-9740",
    "website": "strickland.house.gov",
    "district": 10
  },
  {
    "name": "Marie Gluesenkamp Perez",
    "party": "D",
    "phone": "202-225-3536",
    "website": "gluesenkampperez.house.gov",
    "district": 3
  },
  {
    "name": "Michael Baumgartner",
    "party": "R",
    "phone": "202-225-2006",
    "website": "baumgartner.house.gov",
    "district": 5
  },
  {
    "name": "Emily Randall",
    "party": "D",
    "phone": "202-225-5916",
    "website": "randall.house.gov",
    "district": 6
  }
],
  },
  {
    slug: 'west-virginia',
    name: 'West Virginia',
    abbr: 'WV',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Shelley Moore Capito', party: 'R', phone: '202-224-6472', website: 'www.capito.senate.gov' },
    juniorSenator: { name: 'James C. Justice', party: 'R', phone: '202-224-3954', website: 'www.justice.senate.gov' },
    representatives: [
  {
    "name": "Carol D. Miller",
    "party": "R",
    "phone": "202-225-3452",
    "website": "miller.house.gov",
    "district": 1
  },
  {
    "name": "Riley M. Moore",
    "party": "R",
    "phone": "202-225-2711",
    "website": "rileymoore.house.gov",
    "district": 2
  }
],
  },
  {
    slug: 'wisconsin',
    name: 'Wisconsin',
    abbr: 'WI',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'Ron Johnson', party: 'R', phone: '202-224-5323', website: 'www.ronjohnson.senate.gov' },
    juniorSenator: { name: 'Tammy Baldwin', party: 'D', phone: '202-224-5653', website: 'www.baldwin.senate.gov' },
    representatives: [
  {
    "name": "Gwen Moore",
    "party": "D",
    "phone": "202-225-4572",
    "website": "gwenmoore.house.gov",
    "district": 4
  },
  {
    "name": "Mark Pocan",
    "party": "D",
    "phone": "202-225-2906",
    "website": "pocan.house.gov",
    "district": 2
  },
  {
    "name": "Glenn Grothman",
    "party": "R",
    "phone": "202-225-2476",
    "website": "grothman.house.gov",
    "district": 6
  },
  {
    "name": "Bryan Steil",
    "party": "R",
    "phone": "202-225-3031",
    "website": "steil.house.gov",
    "district": 1
  },
  {
    "name": "Thomas P. Tiffany",
    "party": "R",
    "phone": "202-225-3365",
    "website": "tiffany.house.gov",
    "district": 7
  },
  {
    "name": "Scott Fitzgerald",
    "party": "R",
    "phone": "202-225-5101",
    "website": "fitzgerald.house.gov",
    "district": 5
  },
  {
    "name": "Derrick Van Orden",
    "party": "R",
    "phone": "202-225-5506",
    "website": "vanorden.house.gov",
    "district": 3
  },
  {
    "name": "Tony Wied",
    "party": "R",
    "phone": "202-225-5665",
    "website": "wied.house.gov",
    "district": 8
  }
],
  },
  {
    slug: 'wyoming',
    name: 'Wyoming',
    abbr: 'WY',
    signatureTarget: 42000,
    populationPercent: '15% of votes cast',
    hasBallotInitiative: true,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'John Barrasso', party: 'R', phone: '202-224-6441', website: 'www.barrasso.senate.gov' },
    juniorSenator: { name: 'Cynthia M. Lummis', party: 'R', phone: '202-224-3424', website: 'www.lummis.senate.gov' },
    representatives: [
  {
    "name": "Harriet M. Hageman",
    "party": "R",
    "phone": "202-225-2311",
    "website": "hageman.house.gov",
    "district": 0
  }
],
  },
  // DC - not a state but included for the map
  {
    slug: 'dc',
    name: 'District of Columbia',
    abbr: 'DC',
    signatureTarget: 0,
    populationPercent: 'N/A',
    hasBallotInitiative: false,
    hasOrganizer: false,
    campaignStatus: 'not-yet',
    seniorSenator: { name: 'TBD', party: '', phone: '', website: '' },
    juniorSenator: { name: 'N/A (no Senate representation)', party: '', phone: '', website: '' },
    representatives: [
  {
    "name": "Eleanor Holmes Norton",
    "party": "D",
    "phone": "202-225-8050",
    "website": "norton.house.gov",
    "district": 0
  }
],
  },
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

export function getBallotInitiativeStates(): StateData[] {
  return STATES.filter(s => s.hasBallotInitiative);
}
