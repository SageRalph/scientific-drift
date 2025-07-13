// Group facts by year and field
const timeline = document.getElementById("timeline");
const factsByYearField = {};
facts.forEach((fact) => {
  if (!factsByYearField[fact.year]) factsByYearField[fact.year] = {};
  if (!factsByYearField[fact.year][fact.field])
    factsByYearField[fact.year][fact.field] = [];
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

    factsArr.forEach((fact) => {
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
  const inputYear = parseInt(document.getElementById("inputYear").value);
  // Get all available years from the timeline
  const yearElements = Array.from(document.querySelectorAll(".timeline-item"));
  const years = yearElements.map(el => parseInt(el.id.replace("year-", ""))).filter(y => !isNaN(y));
  // Find the nearest year
  let nearestYear = years[0];
  let minDiff = Math.abs(inputYear - nearestYear);
  years.forEach(y => {
    const diff = Math.abs(inputYear - y);
    if (diff < minDiff) {
      minDiff = diff;
      nearestYear = y;
    }
  });
  const target = document.getElementById(`year-${nearestYear}`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
