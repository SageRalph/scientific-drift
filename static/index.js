const facts = [
  {
    year: 2000,
    field: "Geology",
    old_teaching: "Continents static or slowly drifting",
    new_discovery: "Plates confirmed shifting via GPS and seafloor spreading",
  },
  {
    year: 2001,
    field: "Astronomy",
    old_teaching: "Universe expansion uncertain",
    new_discovery:
      "Dark energy discovered; accelerated expansion model accepted",
  },
  {
    year: 2003,
    field: "Genetics",
    old_teaching: "99.9% human genetic identity",
    new_discovery:
      "Genome Project revealed significant structural/epigenetic variation",
  },
  {
    year: 2003,
    field: "Mathematics",
    old_teaching: "Poincaré Conjecture unsolved",
    new_discovery: "Perelman’s proof accepted",
  },
  {
    year: 2004,
    field: "Physics",
    old_teaching: "No new 2D materials",
    new_discovery: "Graphene isolated; revolution in materials science",
  },
  {
    year: 2006,
    field: "Astronomy",
    old_teaching: "Pluto is a planet",
    new_discovery: "IAU reclassified Pluto as a dwarf planet",
  },
  {
    year: 2010,
    field: "Biology",
    old_teaching: "Most DNA is 'junk'",
    new_discovery: "ENCODE project showed broad regulatory roles",
  },
  {
    year: 2010,
    field: "Synthetic Biology",
    old_teaching: "Life only natural",
    new_discovery: "First synthetic cell built with synthetic genome",
  },
  {
    year: 2012,
    field: "Particle Physics",
    old_teaching: "Higgs boson hypothetical",
    new_discovery: "Higgs discovered at LHC",
  },
  {
    year: 2012,
    field: "Genetics",
    old_teaching: "Precise gene editing limited",
    new_discovery: "CRISPR-Cas9 revolutionized gene editing",
  },
  {
    year: 2014,
    field: "Paleontology",
    old_teaching: "Dinosaurs cold-blooded, scaly",
    new_discovery: "Feathered, warm-blooded polar dinosaurs found",
  },
  {
    year: 2015,
    field: "Paleontology",
    old_teaching: "Dinosaurs only migrated",
    new_discovery: "Evidence of year-round reproduction in Arctic",
  },
  {
    year: 2016,
    field: "Physics",
    old_teaching: "Gravitational waves unobserved",
    new_discovery: "LIGO detected gravitational waves",
  },
  {
    year: 2017,
    field: "Archaeology",
    old_teaching: "Great Pyramid fully mapped",
    new_discovery: "Muon scan revealed unknown internal chamber",
  },
  {
    year: 2017,
    field: "Geology",
    old_teaching: "Only 7 continents",
    new_discovery: "Zealandia identified as hidden continent",
  },
  {
    year: 2018,
    field: "Paleontology",
    old_teaching: "All dino eggs hard-shelled",
    new_discovery: "Soft-shelled eggs discovered",
  },
  {
    year: 2018,
    field: "Genetics",
    old_teaching: "Primates uncloneable",
    new_discovery: "First cloned macaque twins",
  },
  {
    year: 2019,
    field: "Astronomy",
    old_teaching: "Black holes unseen",
    new_discovery: "Event Horizon Telescope imaged black hole",
  },
  {
    year: 2019,
    field: "Mars Science",
    old_teaching: "No water on Mars",
    new_discovery: "Layered ice-sand water deposits found",
  },
  {
    year: 2020,
    field: "Physics",
    old_teaching: "Kilogram defined by artifact",
    new_discovery: "SI redefined using Planck’s constant",
  },
  {
    year: 2020,
    field: "Biology",
    old_teaching: "Single-protein per gene",
    new_discovery: "Alternative splicing and regulatory RNAs recognized",
  },
  {
    year: 2020,
    field: "Geology",
    old_teaching: "No Antarctica rainforests",
    new_discovery: "Fossil roots show ancient polar rainforests",
  },
  {
    year: 2021,
    field: "Zoology",
    old_teaching: "Octopuses simple",
    new_discovery: "Complex distributed intelligence shown",
  },
  {
    year: 2022,
    field: "Archaeology",
    old_teaching: "Stonehenge stones from Wales",
    new_discovery: "Altar Stone traced to Scotland",
  },
  {
    year: 2022,
    field: "Genetics",
    old_teaching: "Human genome mostly complete",
    new_discovery: "Reached full 3.1B base-pair reference genome",
  },
  {
    year: 2023,
    field: "Chemistry",
    old_teaching: "Bredt’s Rule inviolable",
    new_discovery: "Exceptions found; rule revised",
  },
  {
    year: 2023,
    field: "Climate Science",
    old_teaching: "Human climate impact debated",
    new_discovery: "Consensus on fossil fuel-driven change confirmed",
  },
  {
    year: 2023,
    field: "Physics",
    old_teaching: "Time absolute",
    new_discovery: "Relativistic time dilation routinely measured",
  },
  {
    year: 2023,
    field: "Physics",
    old_teaching: "Milky Way calm",
    new_discovery: "Gaia showed galaxy merger history",
  },
  {
    year: 2023,
    field: "Physics",
    old_teaching: "No neutrino imaging",
    new_discovery: "First neutrino-based Milky Way image",
  },
  {
    year: 2023,
    field: "Particle Physics",
    old_teaching: "No gravitational wave background",
    new_discovery: "Stochastic gravitational-wave background detected",
  },
];

// Group facts by year and field
const timeline = document.getElementById("timeline");
const factsByYearField = {};
facts.forEach(fact => {
  if (!factsByYearField[fact.year]) factsByYearField[fact.year] = {};
  if (!factsByYearField[fact.year][fact.field]) factsByYearField[fact.year][fact.field] = [];
  factsByYearField[fact.year][fact.field].push(fact);
});

Object.entries(factsByYearField).forEach(([year, fieldsObj]) => {
  const item = document.createElement("div");
  item.className = "timeline-item";
  item.id = `year-${year}`;

  // Year heading (centered)
  const yearHeading = document.createElement("h2");
  yearHeading.className = "timeline-year-heading";
  yearHeading.textContent = year;
  item.appendChild(yearHeading);

  // For each field in this year
  Object.entries(fieldsObj).forEach(([field, factsArr]) => {
    // Field subheading
    const fieldHeading = document.createElement("h3");
    fieldHeading.className = "timeline-field-heading";
    fieldHeading.textContent = field;
    item.appendChild(fieldHeading);

    factsArr.forEach(fact => {
      const teachingsRow = document.createElement("div");
      teachingsRow.className = "timeline-teachings-row";

      const oldTeaching = document.createElement("div");
      oldTeaching.className = "timeline-content left";
      oldTeaching.textContent = fact.old_teaching;

      const newDiscovery = document.createElement("div");
      newDiscovery.className = "timeline-content right";
      newDiscovery.textContent = fact.new_discovery;

      teachingsRow.appendChild(oldTeaching);
      teachingsRow.appendChild(newDiscovery);
      item.appendChild(teachingsRow);
    });
  });
  timeline.appendChild(item);
});

// Scroll to year
document.getElementById("inputYear").addEventListener("change", () => {
  const year = parseInt(document.getElementById("inputYear").value);
  const target = document.getElementById(`year-${year}`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
