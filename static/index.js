// Group facts by year and field
const timeline = document.getElementById("timeline");
const grouped = facts.reduce((acc, fact) => {
  acc[fact.year] = acc[fact.year] || {};
  acc[fact.year][fact.field] = acc[fact.year][fact.field] || [];
  acc[fact.year][fact.field].push(fact);
  return acc;
}, {});

for (const year in grouped) {
  const item = document.createElement("article");
  item.className = "timeline-item";
  item.id = `year-${year}`;

  item.innerHTML += `<h2 class="timeline-year-heading">${year}</h2>`;
  for (const field in grouped[year]) {
    item.innerHTML += `<h3 class="timeline-field-heading">${field}</h3>`;
    const teachingsContainer = document.createElement("div");
    grouped[year][field].forEach((fact) => {
      const teachingsRow = document.createElement("div");
      teachingsRow.className = "timeline-teachings-row";
      let newDiscoveryText = fact.new_discovery;
      if (Array.isArray(fact.sources) && fact.sources.length > 0) {
        newDiscoveryText += `\
        <span class="timeline-sources">\
          ${fact.sources
            .map((src, i) => `<a href="${src}" target="_blank">[${i + 1}]</a>`)
            .join(" ")}\
        </span>`;
      }
      teachingsRow.innerHTML = `
        <div class="timeline-content left">${fact.old_teaching}</div>
        <div class="timeline-content right">${newDiscoveryText}</div>
      `;
      teachingsContainer.appendChild(teachingsRow);
    });
    item.appendChild(teachingsContainer);
  }
  timeline.appendChild(item);
}

// Scroll to year
document.getElementById("inputYear").addEventListener("change", () => {
  const inputYear = parseInt(document.getElementById("inputYear").value);
  const years = Array.from(document.querySelectorAll(".timeline-item"))
    .map((el) => parseInt(el.id.replace("year-", "")))
    .filter(Number.isFinite);
  const nearestYear = years.reduce(
    (a, b) => (Math.abs(b - inputYear) < Math.abs(a - inputYear) ? b : a),
    years[0]
  );
  const target = document.getElementById(`year-${nearestYear}`);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
});
