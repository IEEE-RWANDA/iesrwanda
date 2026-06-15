// IEEE IES Hubs & Nodes — sourced from https://hubs.ieee-ies.org (official colours).
// Country names match the map geometry (Natural Earth). A couple of city-states
// (Singapore, Maldives) are too small to appear in the 110m geometry, so they're
// represented by their hub but won't paint a polygon.
export type IesHub = { name: string; color: string; countries: string[] };

export const iesHubs: IesHub[] = [
  {
    name: "Hub North & South Africa",
    color: "#E9C46A",
    countries: ["Algeria", "Egypt", "South Africa", "Tunisia"],
  },
  {
    name: "Hub East Africa",
    color: "#F26419",
    countries: ["Kenya", "Uganda", "Tanzania", "Rwanda", "Ethiopia", "Nigeria"],
  },
  {
    name: "Hub Brazil",
    color: "#F4A261",
    countries: ["Brazil"],
  },
  {
    name: "Hub Central America",
    color: "#57CC99",
    countries: ["Guatemala", "Costa Rica", "Panama"],
  },
  {
    name: "Hub Mexico",
    color: "#43B58A",
    countries: ["Mexico"],
  },
  {
    name: "Hub India",
    color: "#2A9D8F",
    countries: ["India"],
  },
  {
    name: "Hub Melbourne (Asia–Pacific)",
    color: "#3D85C6",
    countries: ["Australia", "New Zealand", "Indonesia", "Malaysia"],
  },
  {
    name: "Hub SE Europe",
    color: "#9B5DE5",
    countries: ["Bosnia and Herz.", "Croatia", "Serbia", "Montenegro", "Macedonia"],
  },
];

// flat lookup: country name -> { color, hub }
export const hubByCountry: Record<string, { color: string; hub: string }> = {};
for (const h of iesHubs) {
  for (const c of h.countries) hubByCountry[c] = { color: h.color, hub: h.name };
}
