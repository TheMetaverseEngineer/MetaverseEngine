import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 0,
      category_id: 5,
      name: "Xcel Energy",
    },
    {
      id: 1,
      category_id: 28,
      name: "Target",
    },
    {
      id: 2,
      category_id: 33,
      name: "Armstrong World Industries",
    },
    {
      id: 3,
      category_id: 29,
      name: "GameStop",
    },
    {
      id: 4,
      category_id: 18,
      name: "Moody's",
    },
    {
      id: 5,
      category_id: 5,
      name: "Exxon Mobil",
    },
    {
      id: 6,
      category_id: 33,
      name: "Sysco",
    },
    {
      id: 7,
      category_id: 4,
      name: "Windstream Holdings",
    },
    {
      id: 8,
      category_id: 33,
      name: "Carter's",
    },
    {
      id: 9,
      category_id: 3,
      name: "Graphic Packaging Holding",
    },
    {
      id: 10,
      category_id: 4,
      name: "Avaya",
    },
    {
      id: 11,
      category_id: 32,
      name: "Tiffany",
    },
    {
      id: 12,
      category_id: 5,
      name: "MRC Global",
    },
    {
      id: 13,
      category_id: 24,
      name: "Autoliv",
    },
    {
      id: 14,
      category_id: 18,
      name: "Esterline Technologies",
    },
    {
      id: 15,
      category_id: 20,
      name: "Verizon",
    },
    {
      id: 16,
      category_id: 22,
      name: "State Street Corp.",
    },
    {
      id: 17,
      category_id: 8,
      name: "Berry Plastics Group",
    },
    {
      id: 18,
      category_id: 7,
      name: "Avis Budget Group",
    },
    {
      id: 19,
      category_id: 17,
      name: "Enable Midstream Partners",
    },
    {
      id: 20,
      category_id: 6,
      name: "Tesoro",
    },
    {
      id: 21,
      category_id: 18,
      name: "Wolverine World Wide",
    },
    {
      id: 22,
      category_id: 24,
      name: "Murphy USA",
    },
    {
      id: 23,
      category_id: 28,
      name: "Curtiss-Wright",
    },
    {
      id: 24,
      category_id: 19,
      name: "Sears Hometown & Outlet Stores",
    },
    {
      id: 25,
      category_id: 8,
      name: "Chico's FAS",
    },
    {
      id: 26,
      category_id: 5,
      name: "Fidelity National Information Services",
    },
    {
      id: 27,
      category_id: 0,
      name: "Esterline Technologies",
    },
    {
      id: 28,
      category_id: 3,
      name: "US Foods",
    },
    {
      id: 29,
      category_id: 15,
      name: "Alliance Data Systems",
    },
    {
      id: 30,
      category_id: 21,
      name: "Sears Holdings",
    },
    {
      id: 31,
      category_id: 26,
      name: "Best Buy",
    },
    {
      id: 32,
      category_id: 21,
      name: "Education Management",
    },
    {
      id: 33,
      category_id: 3,
      name: "CareFusion",
    },
    {
      id: 34,
      category_id: 23,
      name: "DaVita HealthCare Partners",
    },
    {
      id: 35,
      category_id: 23,
      name: "Southern",
    },
    {
      id: 36,
      category_id: 16,
      name: "Dollar General",
    },
    {
      id: 37,
      category_id: 5,
      name: "Delek US Holdings",
    },
    {
      id: 38,
      category_id: 17,
      name: "Steelcase",
    },
    {
      id: 39,
      category_id: 29,
      name: "Devon Energy",
    },
    {
      id: 40,
      category_id: 11,
      name: "Granite Construction",
    },
    {
      id: 41,
      category_id: 3,
      name: "Barnes & Noble",
    },
    {
      id: 42,
      category_id: 29,
      name: "Old Dominion Freight Line",
    },
    {
      id: 43,
      category_id: 18,
      name: "Alere",
    },
    {
      id: 44,
      category_id: 7,
      name: "New York Life Insurance",
    },
    {
      id: 45,
      category_id: 25,
      name: "Andersons",
    },
    {
      id: 46,
      category_id: 20,
      name: "Target",
    },
    {
      id: 47,
      category_id: 22,
      name: "Merck",
    },
    {
      id: 48,
      category_id: 21,
      name: "Regency Energy Partners",
    },
    {
      id: 49,
      category_id: 8,
      name: "Knights of Columbus",
    },
    {
      id: 50,
      category_id: 17,
      name: "Amica Mutual Insurance",
    },
    {
      id: 51,
      category_id: 6,
      name: "Flowers Foods",
    },
    {
      id: 52,
      category_id: 2,
      name: "MasTec",
    },
    {
      id: 53,
      category_id: 5,
      name: "ANN",
    },
    {
      id: 54,
      category_id: 7,
      name: "Sears Hometown & Outlet Stores",
    },
    {
      id: 55,
      category_id: 10,
      name: "Snap-on",
    },
    {
      id: 56,
      category_id: 23,
      name: "Fidelity National Financial",
    },
    {
      id: 57,
      category_id: 9,
      name: "Estee Lauder",
    },
    {
      id: 58,
      category_id: 6,
      name: "WPX Energy",
    },
    {
      id: 59,
      category_id: 19,
      name: "RS Legacy",
    },
    {
      id: 60,
      category_id: 11,
      name: "Dresser-Rand Group",
    },
    {
      id: 61,
      category_id: 13,
      name: "Mueller Industries",
    },
    {
      id: 62,
      category_id: 3,
      name: "Momentive Performance Materials",
    },
    {
      id: 63,
      category_id: 32,
      name: "CarMax",
    },
    {
      id: 64,
      category_id: 30,
      name: "Fifth Third Bancorp",
    },
    {
      id: 65,
      category_id: 0,
      name: "Southern",
    },
    {
      id: 66,
      category_id: 10,
      name: "Metaldyne Performance Group",
    },
    {
      id: 67,
      category_id: 0,
      name: "Cinemark Holdings",
    },
    {
      id: 68,
      category_id: 19,
      name: "Citrix Systems",
    },
    {
      id: 69,
      category_id: 2,
      name: "West",
    },
    {
      id: 70,
      category_id: 28,
      name: "Knights of Columbus",
    },
    {
      id: 71,
      category_id: 19,
      name: "Torchmark",
    },
    {
      id: 72,
      category_id: 11,
      name: "TrueBlue",
    },
    {
      id: 73,
      category_id: 30,
      name: "Navient",
    },
    {
      id: 74,
      category_id: 26,
      name: "Energy Transfer Equity",
    },
    {
      id: 75,
      category_id: 11,
      name: "Clorox",
    },
    {
      id: 76,
      category_id: 18,
      name: "Affiliated Managers Group",
    },
    {
      id: 77,
      category_id: 12,
      name: "Roundy's",
    },
    {
      id: 78,
      category_id: 31,
      name: "TD Ameritrade Holding",
    },
    {
      id: 79,
      category_id: 24,
      name: "Teradata",
    },
    {
      id: 80,
      category_id: 28,
      name: "Nortek",
    },
    {
      id: 81,
      category_id: 0,
      name: "Domtar",
    },
    {
      id: 82,
      category_id: 1,
      name: "Regal Beloit",
    },
    {
      id: 83,
      category_id: 14,
      name: "Cerner",
    },
    {
      id: 84,
      category_id: 10,
      name: "Coach",
    },
    {
      id: 85,
      category_id: 12,
      name: "Stryker",
    },
    {
      id: 86,
      category_id: 12,
      name: "Levi Strauss",
    },
    {
      id: 87,
      category_id: 6,
      name: "iHeartMedia",
    },
    {
      id: 88,
      category_id: 10,
      name: "Baxter International",
    },
    {
      id: 89,
      category_id: 28,
      name: "Newmont Mining",
    },
    {
      id: 90,
      category_id: 31,
      name: "Publix Super Markets",
    },
    {
      id: 91,
      category_id: 15,
      name: "SM Energy",
    },
    {
      id: 92,
      category_id: 32,
      name: "Charter Communications",
    },
    {
      id: 93,
      category_id: 9,
      name: "Spectra Energy",
    },
    {
      id: 94,
      category_id: 10,
      name: "Lorillard",
    },
    {
      id: 95,
      category_id: 28,
      name: "Rockwell Collins",
    },
    {
      id: 96,
      category_id: 9,
      name: "Sonic Automotive",
    },
    {
      id: 97,
      category_id: 2,
      name: "Jones Lang LaSalle",
    },
    {
      id: 98,
      category_id: 8,
      name: "WEC Energy Group",
    },
    {
      id: 99,
      category_id: 31,
      name: "Fiserv",
    },
    {
      id: 100,
      category_id: 6,
      name: "Boston Scientific",
    },
    {
      id: 101,
      category_id: 33,
      name: "CBS",
    },
    {
      id: 102,
      category_id: 31,
      name: "Avaya",
    },
    {
      id: 103,
      category_id: 11,
      name: "Pfizer",
    },
    {
      id: 104,
      category_id: 11,
      name: "Skyworks Solutions",
    },
    {
      id: 105,
      category_id: 4,
      name: "Nordstrom",
    },
    {
      id: 106,
      category_id: 19,
      name: "Schnitzer Steel Industries",
    },
    {
      id: 107,
      category_id: 17,
      name: "Priceline Group",
    },
    {
      id: 108,
      category_id: 10,
      name: "Dollar Tree",
    },
    {
      id: 109,
      category_id: 24,
      name: "Terex",
    },
    {
      id: 110,
      category_id: 10,
      name: "Terex",
    },
    {
      id: 111,
      category_id: 15,
      name: "Arthur J. Gallagher",
    },
    {
      id: 112,
      category_id: 22,
      name: "Northern Tier Energy",
    },
    {
      id: 113,
      category_id: 8,
      name: "BorgWarner",
    },
    {
      id: 114,
      category_id: 29,
      name: "DaVita HealthCare Partners",
    },
    {
      id: 115,
      category_id: 30,
      name: "Tailored Brands",
    },
    {
      id: 116,
      category_id: 26,
      name: "QEP Resources",
    },
    {
      id: 117,
      category_id: 14,
      name: "Alliance Holdings",
    },
    {
      id: 118,
      category_id: 1,
      name: "Chico's FAS",
    },
    {
      id: 119,
      category_id: 2,
      name: "3M",
    },
    {
      id: 120,
      category_id: 22,
      name: "Universal Health Services",
    },
    {
      id: 121,
      category_id: 25,
      name: "Lexmark International",
    },
    {
      id: 122,
      category_id: 30,
      name: "Goldman Sachs Group",
    },
    {
      id: 123,
      category_id: 20,
      name: "Meritor",
    },
    {
      id: 124,
      category_id: 18,
      name: "Scotts Miracle-Gro",
    },
    {
      id: 125,
      category_id: 2,
      name: "Cameron International",
    },
    {
      id: 126,
      category_id: 33,
      name: "Crown Castle International",
    },
    {
      id: 127,
      category_id: 4,
      name: "Delta Air Lines",
    },
    {
      id: 128,
      category_id: 2,
      name: "Intel",
    },
    {
      id: 129,
      category_id: 29,
      name: "Boeing",
    },
    {
      id: 130,
      category_id: 26,
      name: "Synopsys",
    },
    {
      id: 131,
      category_id: 28,
      name: "Loews",
    },
    {
      id: 132,
      category_id: 5,
      name: "Graham Holdings",
    },
    {
      id: 133,
      category_id: 21,
      name: "Mondelez International",
    },
    {
      id: 134,
      category_id: 19,
      name: "Owens-Illinois",
    },
    {
      id: 135,
      category_id: 34,
      name: "SCANA",
    },
    {
      id: 136,
      category_id: 5,
      name: "Sonoco Products",
    },
    {
      id: 137,
      category_id: 13,
      name: "Yum Brands",
    },
    {
      id: 138,
      category_id: 34,
      name: "Waste Management",
    },
    {
      id: 139,
      category_id: 25,
      name: "Sempra Energy",
    },
    {
      id: 140,
      category_id: 16,
      name: "Verizon",
    },
    {
      id: 141,
      category_id: 14,
      name: "Scripps Networks Interactive",
    },
    {
      id: 142,
      category_id: 32,
      name: "Fidelity National Information Services",
    },
    {
      id: 143,
      category_id: 4,
      name: "Univision Communications",
    },
    {
      id: 144,
      category_id: 21,
      name: "Henry Schein",
    },
    {
      id: 145,
      category_id: 31,
      name: "Diplomat Pharmacy",
    },
    {
      id: 146,
      category_id: 9,
      name: "First American Financial",
    },
    {
      id: 147,
      category_id: 8,
      name: "CenterPoint Energy",
    },
    {
      id: 148,
      category_id: 16,
      name: "KKR",
    },
    {
      id: 149,
      category_id: 6,
      name: "Zimmer Biomet Holdings",
    },
    {
      id: 150,
      category_id: 10,
      name: "Boeing",
    },
    {
      id: 151,
      category_id: 26,
      name: "Anthem",
    },
    {
      id: 152,
      category_id: 3,
      name: "Thermo Fisher Scientific",
    },
    {
      id: 153,
      category_id: 2,
      name: "McGraw Hill Financial",
    },
    {
      id: 154,
      category_id: 8,
      name: "ADT",
    },
    {
      id: 155,
      category_id: 1,
      name: "Armstrong World Industries",
    },
    {
      id: 156,
      category_id: 4,
      name: "Dollar Tree",
    },
    {
      id: 157,
      category_id: 11,
      name: "Trimble Navigation",
    },
    {
      id: 158,
      category_id: 27,
      name: "CIT Group",
    },
    {
      id: 159,
      category_id: 34,
      name: "Commercial Metals",
    },
    {
      id: 160,
      category_id: 14,
      name: "Arch Coal",
    },
    {
      id: 161,
      category_id: 26,
      name: "Coca-Cola",
    },
    {
      id: 162,
      category_id: 7,
      name: "KeyCorp",
    },
    {
      id: 163,
      category_id: 32,
      name: "SanDisk",
    },
    {
      id: 164,
      category_id: 19,
      name: "Triple-S Management",
    },
    {
      id: 165,
      category_id: 26,
      name: "Targa Resources",
    },
    {
      id: 166,
      category_id: 7,
      name: "Scripps Networks Interactive",
    },
    {
      id: 167,
      category_id: 31,
      name: "Xylem",
    },
    {
      id: 168,
      category_id: 29,
      name: "Worthington Industries",
    },
    {
      id: 169,
      category_id: 8,
      name: "Apache",
    },
    {
      id: 170,
      category_id: 5,
      name: "HNI",
    },
    {
      id: 171,
      category_id: 29,
      name: "Kellogg",
    },
    {
      id: 172,
      category_id: 18,
      name: "ManpowerGroup",
    },
    {
      id: 173,
      category_id: 13,
      name: "J.Crew Group",
    },
    {
      id: 174,
      category_id: 12,
      name: "Zoetis",
    },
    {
      id: 175,
      category_id: 0,
      name: "Thor Industries",
    },
    {
      id: 176,
      category_id: 33,
      name: "Fluor",
    },
    {
      id: 177,
      category_id: 4,
      name: "Mutual of America Life Insurance",
    },
    {
      id: 178,
      category_id: 2,
      name: "Triumph Group",
    },
    {
      id: 179,
      category_id: 26,
      name: "Bank of New York Mellon Corp.",
    },
    {
      id: 180,
      category_id: 8,
      name: "Michaels Cos.",
    },
    {
      id: 181,
      category_id: 4,
      name: "Mutual of Omaha Insurance",
    },
    {
      id: 182,
      category_id: 32,
      name: "Fifth Third Bancorp",
    },
    {
      id: 183,
      category_id: 18,
      name: "Knights of Columbus",
    },
    {
      id: 184,
      category_id: 25,
      name: "Coach",
    },
    {
      id: 185,
      category_id: 25,
      name: "Intercontinental Exchange",
    },
    {
      id: 186,
      category_id: 31,
      name: "CenturyLink",
    },
    {
      id: 187,
      category_id: 4,
      name: "HNI",
    },
    {
      id: 188,
      category_id: 0,
      name: "Antero Resources",
    },
    {
      id: 189,
      category_id: 21,
      name: "Cummins",
    },
    {
      id: 190,
      category_id: 5,
      name: "Sprague Resources",
    },
    {
      id: 191,
      category_id: 8,
      name: "Sanderson Farms",
    },
    {
      id: 192,
      category_id: 23,
      name: "Coty",
    },
    {
      id: 193,
      category_id: 24,
      name: "WABCO Holdings",
    },
    {
      id: 194,
      category_id: 0,
      name: "American Express",
    },
    {
      id: 195,
      category_id: 26,
      name: "Regal Beloit",
    },
    {
      id: 196,
      category_id: 24,
      name: "LifePoint Health",
    },
    {
      id: 197,
      category_id: 9,
      name: "Tailored Brands",
    },
    {
      id: 198,
      category_id: 33,
      name: "Synnex",
    },
    {
      id: 199,
      category_id: 33,
      name: "A.O. Smith",
    },
    {
      id: 200,
      category_id: 17,
      name: "NRG Energy",
    },
    {
      id: 201,
      category_id: 7,
      name: "Anadarko Petroleum",
    },
    {
      id: 202,
      category_id: 18,
      name: "Guess",
    },
    {
      id: 203,
      category_id: 12,
      name: "MRC Global",
    },
    {
      id: 204,
      category_id: 34,
      name: "Reinsurance Group of America",
    },
    {
      id: 205,
      category_id: 32,
      name: "Westinghouse Air Brake Technologies",
    },
    {
      id: 206,
      category_id: 17,
      name: "Equifax",
    },
    {
      id: 207,
      category_id: 24,
      name: "LinkedIn",
    },
    {
      id: 208,
      category_id: 15,
      name: "CF Industries Holdings",
    },
    {
      id: 209,
      category_id: 3,
      name: "Dillard's",
    },
    {
      id: 210,
      category_id: 27,
      name: "Genesco",
    },
    {
      id: 211,
      category_id: 2,
      name: "Amica Mutual Insurance",
    },
    {
      id: 212,
      category_id: 7,
      name: "Orbital ATK",
    },
    {
      id: 213,
      category_id: 10,
      name: "salesforce.com",
    },
    {
      id: 214,
      category_id: 22,
      name: "Sanmina",
    },
    {
      id: 215,
      category_id: 18,
      name: "Entergy",
    },
    {
      id: 216,
      category_id: 9,
      name: "Lorillard",
    },
    {
      id: 217,
      category_id: 24,
      name: "Constellation Brands",
    },
    {
      id: 218,
      category_id: 12,
      name: "Valero Energy",
    },
    {
      id: 219,
      category_id: 31,
      name: "Eli Lilly",
    },
    {
      id: 220,
      category_id: 25,
      name: "Tempur Sealy International",
    },
    {
      id: 221,
      category_id: 21,
      name: "UnitedHealth Group",
    },
    {
      id: 222,
      category_id: 25,
      name: "Tiffany",
    },
    {
      id: 223,
      category_id: 20,
      name: "Cerner",
    },
    {
      id: 224,
      category_id: 18,
      name: "MasTec",
    },
    {
      id: 225,
      category_id: 24,
      name: "Franklin Resources",
    },
    {
      id: 226,
      category_id: 22,
      name: "Outerwall",
    },
    {
      id: 227,
      category_id: 15,
      name: "Hess",
    },
    {
      id: 228,
      category_id: 20,
      name: "Pitney Bowes",
    },
    {
      id: 229,
      category_id: 3,
      name: "MeadWestvaco",
    },
    {
      id: 230,
      category_id: 19,
      name: "Bon-Ton Stores",
    },
    {
      id: 231,
      category_id: 3,
      name: "Alliance One International",
    },
    {
      id: 232,
      category_id: 5,
      name: "Murphy Oil",
    },
    {
      id: 233,
      category_id: 16,
      name: "Twenty-First Century Fox",
    },
    {
      id: 234,
      category_id: 6,
      name: "Chiquita Brands International",
    },
    {
      id: 235,
      category_id: 33,
      name: "National Fuel Gas",
    },
    {
      id: 236,
      category_id: 8,
      name: "Belden",
    },
    {
      id: 237,
      category_id: 14,
      name: "VWR",
    },
    {
      id: 238,
      category_id: 7,
      name: "CDW",
    },
    {
      id: 239,
      category_id: 1,
      name: "Jarden",
    },
    {
      id: 240,
      category_id: 13,
      name: "Kraft Foods Group",
    },
    {
      id: 241,
      category_id: 16,
      name: "Xerox",
    },
    {
      id: 242,
      category_id: 18,
      name: "Valero Energy",
    },
    {
      id: 243,
      category_id: 31,
      name: "Arthur J. Gallagher",
    },
    {
      id: 244,
      category_id: 24,
      name: "Torchmark",
    },
    {
      id: 245,
      category_id: 10,
      name: "Nexeo Solutions Holdings",
    },
    {
      id: 246,
      category_id: 33,
      name: "Celgene",
    },
    {
      id: 247,
      category_id: 16,
      name: "Tower International",
    },
    {
      id: 248,
      category_id: 3,
      name: "Momentive Performance Materials",
    },
    {
      id: 249,
      category_id: 31,
      name: "E*Trade Financial",
    },
  ],
  selectedRoom: {},
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState: initialState,
  reducers: {
    selectRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
  },
});

export const { selectRoom } = roomsSlice.actions;

export default roomsSlice.reducer;
