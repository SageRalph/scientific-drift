const facts = [
  {
    year: 1953,
    field: "Biology",
    old_teaching: "DNA's structure was unknown",
    new_discovery:
      "Double helix structure of DNA was discovered by Watson and Crick",
  },
  {
    year: 1960,
    field: "Biology",
    old_teaching:
      "It was taught that all bacteria are harmful and cause disease",
    new_discovery:
      "Many bacteria are beneficial and essential for health, such as those in the human gut microbiome",
  },
  {
    year: 1962,
    field: "Geography",
    old_teaching:
      "It was believed that continental drift was just a hypothesis",
    new_discovery: "Seafloor spreading provided evidence for plate tectonics",
  },
  {
    year: 1964,
    field: "Physics",
    old_teaching: "It was believed that vacuum was truly empty",
    new_discovery:
      "Discovery of the cosmic microwave background showed the universe is filled with radiation",
  },
  {
    year: 1965,
    field: "Chemistry",
    old_teaching:
      "It was taught that all acids and bases are dangerous and harmful to touch.",
    new_discovery:
      "Some acids and bases are safe and even essential in food and the body, such as citric acid and bicarbonate",
  },
  {
    year: 1970,
    field: "Mathematics",
    old_teaching:
      "It was believed that computers could not solve complex mathematical problems.",
    new_discovery:
      "Computers can solve many complex problems, including calculus and algebra, with the help of algorithms",
  },
  {
    year: 1971,
    field: "Physics",
    old_teaching: "Only visible light was used for astronomy",
    new_discovery: "X-ray telescopes revealed new cosmic phenomena",
  },
  {
    year: 1972,
    field: "Geography",
    old_teaching:
      "It was taught that the Amazon rainforest was largely untouched by humans",
    new_discovery:
      "Archaeological evidence shows ancient civilizations managed and modified large areas of the Amazon",
  },
  {
    year: 1975,
    field: "Biology",
    old_teaching: "It was believed that viruses are living organisms",
    new_discovery:
      "Viruses are not considered truly alive, as they require host cells to reproduce",
  },
  {
    year: 1977,
    field: "Chemistry",
    old_teaching:
      "It was taught that all elements are found naturally on Earth",
    new_discovery:
      "Technetium and other synthetic elements were created in laboratories",
  },
  {
    year: 1980,
    field: "Biology",
    old_teaching:
      "It was taught that all humans have either XX or XY chromosomes",
    new_discovery:
      "Chromosomal variations such as XXY, XYY, and XO were identified and included in genetics education",
  },
  {
    year: 1980,
    field: "Physics",
    old_teaching: "Time was generally taught as being absolute",
    new_discovery: "Relativistic time dilation is now routinely taught",
  },
  {
    year: 1981,
    field: "Biology",
    old_teaching: "It was believed that all enzymes were proteins",
    new_discovery: "Discovery of ribozymes showed RNA can act as enzymes",
  },
  {
    year: 1983,
    field: "Chemistry",
    old_teaching: "It was believed that all plastics are non-biodegradable",
    new_discovery:
      "Biodegradable plastics were developed and are now used in packaging and products",
  },
  {
    year: 1985,
    field: "Physics",
    old_teaching: "Atoms were taught as indivisible units of matter",
    new_discovery:
      "Atoms are made of subatomic particles: protons, neutrons, and electrons, and can be split in nuclear reactions",
  },
  {
    year: 1986,
    field: "Geography",
    old_teaching:
      "It was believed that the Challenger Deep was the deepest part of the ocean",
    new_discovery:
      "New submersible technology mapped even deeper ocean trenches",
  },
  {
    year: 1988,
    field: "Geography",
    old_teaching:
      "It was taught that the ozone layer was stable and not affected by human activity.",
    new_discovery:
      "Human-made chemicals like CFCs caused ozone depletion, leading to international action and recovery",
  },
  {
    year: 1990,
    field: "Biology",
    old_teaching:
      "It was believed that ulcers were caused by stress or spicy food",
    new_discovery:
      "Helicobacter pylori infection was found to be the main cause of most stomach ulcers",
  },
  {
    year: 1990,
    field: "Geography",
    old_teaching:
      "It was believed that mountain formation was a slow, gradual process only",
    new_discovery:
      "Mountains can form rapidly due to tectonic activity and earthquakes",
  },
  {
    year: 1991,
    field: "Mathematics",
    old_teaching:
      "It was taught that fractals were just mathematical curiosities",
    new_discovery:
      "Fractals are used in computer graphics, modeling nature, and signal processing",
  },
  {
    year: 1992,
    field: "Physics",
    old_teaching: "It was thought that planets only exist in our solar system",
    new_discovery: "Exoplanets were discovered around other stars",
  },
  {
    year: 1994,
    field: "Physics",
    old_teaching: "It was taught that neutrinos have no mass",
    new_discovery: "Neutrino oscillations proved neutrinos have mass",
  },
  {
    year: 1995,
    field: "Biology",
    old_teaching:
      "It was taught that all fats are unhealthy and should be avoided",
    new_discovery:
      "Unsaturated fats are beneficial for heart health, while trans fats are harmful",
  },
  {
    year: 1995,
    field: "Physics",
    old_teaching:
      "It was taught that gravitational waves were only theoretical",
    new_discovery:
      "Indirect evidence for gravitational waves was found in binary pulsar systems",
  },
  {
    year: 1997,
    field: "History",
    old_teaching:
      "It was believed that the internet was a niche technology for scientists and the military.",
    new_discovery:
      "The internet is a global network essential for communication, education, and commerce",
  },
  {
    year: 2000,
    field: "Biology",
    old_teaching: "It was suggested that vaccines might cause autism",
    new_discovery:
      "Extensive research showed no link between vaccines and autism and the original study was retracted",
  },

  {
    year: 2000,
    field: "Biology",
    old_teaching: "Gender was taught as strictly binary, male or female",
    new_discovery:
      "Gender is recognized as a spectrum, including non-binary and transgender identities in education and research",
  },
  {
    year: 2000,
    field: "Geography",
    old_teaching:
      "It was taught that continents were static or only slowly drifting",
    new_discovery:
      "It was discovered that tectonic plates are shifting, confirmed by GPS and seafloor spreading",
  },
  {
    year: 2001,
    field: "Physics",
    old_teaching: "The expansion of the universe was uncertain",
    new_discovery:
      "Dark energy was discovered, and the accelerated expansion model was accepted",
  },
  {
    year: 2002,
    field: "Biology",
    old_teaching:
      "It was believed that plants only communicate through chemicals",
    new_discovery: "Plants use electrical signals to communicate internally",
  },
  {
    year: 2003,
    field: "Biology",
    old_teaching: "It was believed that humans share 99.9% genetic identity",
    new_discovery:
      "The Human Genome Project revealed significant structural and epigenetic variation among individuals",
  },
  {
    year: 2003,
    field: "Mathematics",
    old_teaching: "The Poincaré Conjecture was considered unsolved",
    new_discovery: "Perelman’s proof of the Poincaré Conjecture was accepted",
  },
  {
    year: 2004,
    field: "Physics",
    old_teaching: "It was believed that teleportation was only science fiction",
    new_discovery:
      "Quantum teleportation of information has been demonstrated in laboratories",
  },
  {
    year: 2004,
    field: "Physics",
    old_teaching:
      "It was thought that there were no new two-dimensional materials",
    new_discovery: "Graphene was isolated, revolutionizing materials science",
  },
  {
    year: 2005,
    field: "Biology",
    old_teaching:
      "It was taught that cell phones cause dangerous levels of radiation",
    new_discovery:
      "Studies found no evidence of harmful radiation from typical cell phone use",
  },
  {
    year: 2006,
    field: "Physics",
    old_teaching: "Pluto was taught to be a planet",
    new_discovery: "The IAU reclassified Pluto as a dwarf planet",
  },
  {
    year: 2008,
    field: "Mathematics",
    old_teaching:
      "It was taught that prime numbers have no practical use outside of pure mathematics.",
    new_discovery:
      "Prime numbers are essential for cryptography and internet security",
  },
  {
    year: 2010,
    field: "Biology",
    old_teaching: "Most DNA was considered 'junk'",
    new_discovery:
      "The ENCODE project showed that DNA has broad regulatory roles",
  },
  {
    year: 2010,
    field: "Biology",
    old_teaching: "It was believed that life could only arise naturally",
    new_discovery: "The first synthetic cell was built with a synthetic genome",
  },
  {
    year: 2010,
    field: "Physics",
    old_teaching: "It was taught that antimatter was only theoretical",
    new_discovery: "Antimatter was trapped and studied at CERN",
  },
  {
    year: 2011,
    field: "Biology",
    old_teaching:
      "It was taught that all cells in the human body have the same DNA",
    new_discovery:
      "Genetic mosaicism was found to be common, with some cells having different DNA sequences",
  },
  {
    year: 2012,
    field: "Biology",
    old_teaching: "Precise gene editing was considered limited",
    new_discovery: "CRISPR-Cas9 revolutionized gene editing",
  },
  {
    year: 2012,
    field: "Physics",
    old_teaching: "The Higgs boson was considered hypothetical",
    new_discovery: "The Higgs boson was discovered at the LHC",
  },
  {
    year: 2014,
    field: "Biology",
    old_teaching: "Dinosaurs were thought to be cold-blooded and scaly",
    new_discovery: "Feathered, warm-blooded polar dinosaurs were found",
  },
  {
    year: 2015,
    field: "Biology",
    old_teaching: "It was believed that dinosaurs only migrated",
    new_discovery:
      "Evidence of year-round reproduction in the Arctic was found",
  },
  {
    year: 2015,
    field: "Biology",
    old_teaching:
      "It was believed that gender identity was determined only by chromosomes",
    new_discovery:
      "Research showed gender identity involves complex interactions of biology, environment, and culture",
  },
  {
    year: 2016,
    field: "Physics",
    old_teaching: "Gravitational waves had never been observed",
    new_discovery: "LIGO detected gravitational waves for the first time",
  },
  {
    year: 2017,
    field: "Geography",
    old_teaching: "It was taught that there are only seven continents",
    new_discovery: "Zealandia was identified as a hidden continent",
  },
  {
    year: 2017,
    field: "History",
    old_teaching: "It was believed the Great Pyramid was fully mapped",
    new_discovery:
      "A muon scan revealed an unknown internal chamber in the Great Pyramid",
  },
  {
    year: 2018,
    field: "Biology",
    old_teaching: "It was thought that primates could not be cloned",
    new_discovery: "The first cloned macaque twins were created",
  },
  {
    year: 2018,
    field: "Biology",
    old_teaching:
      "It was believed that plastic pollution was only a problem in oceans",
    new_discovery:
      "Microplastics were found in rainwater, soil, and human bodies worldwide",
  },
  {
    year: 2018,
    field: "History",
    old_teaching: "It was believed that all dinosaur eggs were hard-shelled",
    new_discovery: "Soft-shelled dinosaur eggs were discovered",
  },
  {
    year: 2018,
    field: "Physics",
    old_teaching:
      "It was believed that quantum entanglement could not be used for communication",
    new_discovery:
      "Quantum networks using entanglement have been demonstrated for secure communication",
  },
  {
    year: 2019,
    field: "Biology",
    old_teaching:
      "It was believed that pandemics were rare and unlikely in the modern era",
    new_discovery:
      "COVID-19 pandemic showed global vulnerability to infectious diseases",
  },
  {
    year: 2019,
    field: "Physics",
    old_teaching: "Black holes had never been seen directly",
    new_discovery:
      "The Event Horizon Telescope imaged a black hole for the first time",
  },
  {
    year: 2019,
    field: "Physics",
    old_teaching: "It was believed there was no water on Mars",
    new_discovery: "Layered ice-sand water deposits were found on Mars",
  },
  {
    year: 2020,
    field: "Biology",
    old_teaching: "It was taught that each gene produced a single protein",
    new_discovery:
      "Alternative splicing and regulatory RNAs were recognized as important",
  },
  {
    year: 2020,
    field: "Geography",
    old_teaching:
      "It was believed there were no rainforests in ancient Antarctica",
    new_discovery:
      "Fossil roots showed the existence of ancient polar rainforests in Antarctica",
  },
  {
    year: 2020,
    field: "Physics",
    old_teaching: "The kilogram was defined by a physical artifact",
    new_discovery:
      "The SI system redefined the kilogram using Planck’s constant",
  },
  {
    year: 2021,
    field: "Biology",
    old_teaching: "Octopuses were considered simple creatures",
    new_discovery: "Complex distributed intelligence in octopuses was shown",
  },
  {
    year: 2022,
    field: "Biology",
    old_teaching: "It was taught that the human genome was mostly complete",
    new_discovery:
      "The full 3.1 billion base-pair reference genome was reached",
  },
  {
    year: 2022,
    field: "History",
    old_teaching: "It was believed that Stonehenge’s stones came from Wales",
    new_discovery: "The Altar Stone was traced to Scotland",
  },
  {
    year: 2023,
    field: "Biology",
    old_teaching:
      "It was widely believed that all processed foods are unhealthy",
    new_discovery:
      "Some processed foods, such as frozen vegetables, retain nutrients and can be healthy",
  },
  {
    year: 2023,
    field: "Chemistry",
    old_teaching: "Bredt’s Rule was considered inviolable",
    new_discovery:
      "Exceptions to Bredt’s Rule were found, and the rule was revised",
  },
  {
    year: 2023,
    field: "Geography",
    old_teaching: "The impact of humans on climate was debated",
    new_discovery:
      "Consensus on fossil fuel-driven climate change was confirmed",
  },
  {
    year: 2023,
    field: "Physics",
    old_teaching: "It was believed the Milky Way was calm and uneventful",
    new_discovery: "Gaia showed the Milky Way’s galaxy merger history",
  },
  {
    year: 2023,
    field: "Physics",
    old_teaching: "It was thought that neutrino imaging was impossible",
    new_discovery:
      "The first neutrino-based image of the Milky Way was produced",
  },
  {
    year: 2023,
    field: "Physics",
    old_teaching: "It was believed there was no gravitational wave background",
    new_discovery: "A stochastic gravitational-wave background was detected",
  },
  {
    year: 2023,
    field: "Physics",
    old_teaching: "It was thought that fusion energy was always decades away",
    new_discovery:
      "Net energy gain from fusion was achieved in laboratory settings",
  },
  {
    year: 2024,
    field: "Biology",
    old_teaching:
      "It was suggested that artificial sweeteners may be dangerous",
    new_discovery:
      "Most artificial sweeteners are considered safe for the general population and do not cause cancer",
  },
  {
    year: 2024,
    field: "Biology",
    old_teaching:
      "It was believed that mental health issues were rare in young people",
    new_discovery:
      "Mental health challenges among youth are common and widely recognized",
  },
  {
    year: 2024,
    field: "Biology",
    old_teaching: "It was taught that all viruses are harmful",
    new_discovery:
      "Some viruses are beneficial and play roles in ecosystems and human health",
  },
  {
    year: 2025,
    field: "Biology",
    old_teaching: "It was believed that long COVID only affects older adults",
    new_discovery:
      "Long COVID can affect people of all ages, including children and young adults",
  },
];
