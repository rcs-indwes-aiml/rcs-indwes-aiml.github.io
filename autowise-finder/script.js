// AutoWise Finder
// Static GitHub Pages app: questionnaire + scoring + ranking + explainable results.

const vehicleData = [
  {
    name: "2018 Honda Pilot EX-L",
    year: 2018,
    price: 18990,
    mileage: 89000,
    seats: 8,
    type: "suv",
    mpg: 22,
    reliability: 8.4,
    resale: 8.7,
    comfort: 8.0,
    dealer: 8.2,
    accident: "minor",
    link: "https://www.autotrader.com/cars-for-sale/honda/pilot"
  },
  {
    name: "2017 Toyota Highlander XLE",
    year: 2017,
    price: 21500,
    mileage: 94000,
    seats: 8,
    type: "suv",
    mpg: 23,
    reliability: 9.0,
    resale: 9.2,
    comfort: 8.1,
    dealer: 7.8,
    accident: "none",
    link: "https://www.autotrader.com/cars-for-sale/toyota/highlander"
  },
  {
    name: "2018 Toyota Sienna LE",
    year: 2018,
    price: 20500,
    mileage: 101000,
    seats: 8,
    type: "minivan",
    mpg: 22,
    reliability: 9.1,
    resale: 8.8,
    comfort: 8.3,
    dealer: 7.5,
    accident: "none",
    link: "https://www.autotrader.com/cars-for-sale/toyota/sienna"
  },
  {
    name: "2019 Kia Sorento LX V6",
    year: 2019,
    price: 15900,
    mileage: 84000,
    seats: 7,
    type: "suv",
    mpg: 21,
    reliability: 7.1,
    resale: 6.5,
    comfort: 7.4,
    dealer: 7.6,
    accident: "none",
    link: "https://www.autotrader.com/cars-for-sale/kia/sorento"
  },
  {
    name: "2018 Honda Odyssey EX-L",
    year: 2018,
    price: 22900,
    mileage: 87000,
    seats: 8,
    type: "minivan",
    mpg: 22,
    reliability: 8.2,
    resale: 8.5,
    comfort: 8.7,
    dealer: 7.9,
    accident: "none",
    link: "https://www.autotrader.com/cars-for-sale/honda/odyssey"
  },
  {
    name: "2017 Acura MDX SH-AWD",
    year: 2017,
    price: 21950,
    mileage: 98000,
    seats: 7,
    type: "luxury",
    mpg: 22,
    reliability: 8.1,
    resale: 7.7,
    comfort: 8.9,
    dealer: 7.3,
    accident: "minor",
    link: "https://www.autotrader.com/cars-for-sale/acura/mdx"
  },
  {
    name: "2018 Mazda CX-9 Touring",
    year: 2018,
    price: 18950,
    mileage: 79000,
    seats: 7,
    type: "suv",
    mpg: 24,
    reliability: 8.0,
    resale: 7.5,
    comfort: 8.4,
    dealer: 7.7,
    accident: "none",
    link: "https://www.autotrader.com/cars-for-sale/mazda/cx-9"
  },
  {
    name: "2017 Lexus RX 350L",
    year: 2017,
    price: 26900,
    mileage: 90000,
    seats: 7,
    type: "luxury",
    mpg: 22,
    reliability: 9.2,
    resale: 8.8,
    comfort: 9.2,
    dealer: 8.0,
    accident: "none",
    link: "https://www.autotrader.com/cars-for-sale/lexus/rx-350l"
  },
  {
    name: "2019 Hyundai Santa Fe XL",
    year: 2019,
    price: 17400,
    mileage: 79000,
    seats: 7,
    type: "suv",
    mpg: 21,
    reliability: 7.4,
    resale: 6.8,
    comfort: 7.8,
    dealer: 7.6,
    accident: "none",
    link: "https://www.autotrader.com/cars-for-sale/hyundai/santa-fe-xl"
  },
  {
    name: "2020 Subaru Ascent Premium",
    year: 2020,
    price: 23500,
    mileage: 76000,
    seats: 8,
    type: "suv",
    mpg: 23,
    reliability: 7.6,
    resale: 7.8,
    comfort: 8.0,
    dealer: 7.9,
    accident: "none",
    link: "https://www.autotrader.com/cars-for-sale/subaru/ascent"
  },
  {
    name: "2016 Toyota Highlander Limited",
    year: 2016,
    price: 19900,
    mileage: 112000,
    seats: 7,
    type: "suv",
    mpg: 22,
    reliability: 9.0,
    resale: 9.0,
    comfort: 8.4,
    dealer: 7.4,
    accident: "none",
    link: "https://www.cars.com/shopping/toyota-highlander/"
  },
  {
    name: "2018 Chevrolet Traverse LT",
    year: 2018,
    price: 16800,
    mileage: 91000,
    seats: 8,
    type: "suv",
    mpg: 21,
    reliability: 6.9,
    resale: 6.3,
    comfort: 8.1,
    dealer: 7.1,
    accident: "minor",
    link: "https://www.cars.com/shopping/chevrolet-traverse/"
  },
  {
    name: "2019 Dodge Durango SXT",
    year: 2019,
    price: 19950,
    mileage: 86000,
    seats: 7,
    type: "suv",
    mpg: 21,
    reliability: 6.8,
    resale: 6.7,
    comfort: 8.0,
    dealer: 7.0,
    accident: "none",
    link: "https://www.cars.com/shopping/dodge-durango/"
  },
  {
    name: "2018 Nissan Pathfinder SV",
    year: 2018,
    price: 15500,
    mileage: 95000,
    seats: 7,
    type: "suv",
    mpg: 23,
    reliability: 6.7,
    resale: 6.4,
    comfort: 7.5,
    dealer: 7.2,
    accident: "none",
    link: "https://www.cars.com/shopping/nissan-pathfinder/"
  },
  {
    name: "2017 Ford Explorer XLT",
    year: 2017,
    price: 16500,
    mileage: 99000,
    seats: 7,
    type: "suv",
    mpg: 20,
    reliability: 6.7,
    resale: 6.6,
    comfort: 7.9,
    dealer: 7.0,
    accident: "minor",
    link: "https://www.cars.com/shopping/ford-explorer/"
  }
];

let customVehicles = [];
let currentRanked = [];

const $ = (id) => document.getElementById(id);

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function paymentAmount(price, downPayment, apr, months) {
  const principal = Math.max(0, price - downPayment);
  const monthlyRate = (apr / 100) / 12;
  if (principal <= 0) return 0;
  if (monthlyRate === 0) return principal / months;
  return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
}

function estimateResale(car, keepYears) {
  // Simple educational estimate: stronger resale score and reliability reduce depreciation.
  const ageNow = new Date().getFullYear() - car.year;
  const brandStrength = (car.resale + car.reliability) / 20;
  const annualDep = 0.085 - (brandStrength * 0.025);
  const mileagePenalty = car.mileage > 100000 ? 0.04 : car.mileage > 80000 ? 0.025 : 0.01;
  const accidentPenalty = car.accident === "major" ? 0.16 : car.accident === "minor" ? 0.06 : 0;
  const factor = Math.pow(1 - annualDep, keepYears) - mileagePenalty - accidentPenalty - ageNow * 0.003;
  return clamp(car.price * factor, car.price * 0.18, car.price * 0.82);
}

function profileFromForm() {
  return {
    zip: $("zipCode").value || "77479",
    budget: Number($("budget").value || 20000),
    monthlyTarget: Number($("monthlyTarget").value || 300),
    downPayment: Number($("downPayment").value || 0),
    apr: Number($("apr").value || 0),
    loanMonths: Number($("loanMonths").value || 72),
    keepYears: Number($("keepYears").value || 5),
    seats: Number($("seats").value || 7),
    maxMileage: Number($("maxMileage").value || 110000),
    bodyType: $("bodyType").value,
    accidentTolerance: $("accidentTolerance").value,
    reliabilityWeight: Number($("reliabilityWeight").value || 8),
    resaleWeight: Number($("resaleWeight").value || 8),
    comfortWeight: Number($("comfortWeight").value || 6),
    costWeight: Number($("costWeight").value || 8)
  };
}

function getDynamicWeights(profile) {
  // Converts buyer slider values into balanced 100-point model.
  const base = {
    budget: 16 + profile.costWeight * 0.7,
    payment: 8 + profile.costWeight * 0.4,
    seats: 11,
    reliability: 8 + profile.reliabilityWeight,
    resale: 7 + profile.resaleWeight,
    mileage: 10,
    ownership: 8 + profile.costWeight * 0.45,
    comfort: 4 + profile.comfortWeight * 0.75,
    accident: 7,
    dealer: 3,
    body: 4
  };
  const total = Object.values(base).reduce((a, b) => a + b, 0);
  Object.keys(base).forEach(k => base[k] = base[k] / total * 100);
  return base;
}

function scoreCar(car, profile) {
  const weights = getDynamicWeights(profile);
  const monthly = paymentAmount(car.price, profile.downPayment, profile.apr, profile.loanMonths);
  const resaleValue = estimateResale(car, profile.keepYears);
  const netDepreciation = car.price - resaleValue;
  const estimatedFuel = ((12000 / Math.max(12, car.mpg)) * 3.15 * profile.keepYears);
  const maintenanceRisk = (10 - car.reliability) * 450 * profile.keepYears;
  const ownershipCost = netDepreciation + estimatedFuel + maintenanceRisk;

  const budgetScore = car.price <= profile.budget
    ? 100 - clamp(((profile.budget - car.price) / profile.budget) * -10, -10, 10)
    : clamp(100 - ((car.price - profile.budget) / profile.budget) * 170, 0, 100);

  const paymentScore = monthly <= profile.monthlyTarget
    ? 100
    : clamp(100 - ((monthly - profile.monthlyTarget) / profile.monthlyTarget) * 150, 0, 100);

  const seatScore = car.seats >= profile.seats
    ? 100
    : clamp(100 - (profile.seats - car.seats) * 35, 0, 100);

  const mileageScore = car.mileage <= profile.maxMileage
    ? clamp(100 - (car.mileage / profile.maxMileage) * 36, 55, 100)
    : clamp(70 - ((car.mileage - profile.maxMileage) / profile.maxMileage) * 160, 0, 70);

  const reliabilityScore = car.reliability * 10;
  const resaleScore = car.resale * 10;
  const comfortScore = car.comfort * 10;
  const dealerScore = car.dealer * 10;

  let accidentScore = 100;
  if (car.accident === "minor") {
    accidentScore = profile.accidentTolerance === "none" ? 62 : 83;
  }
  if (car.accident === "major") {
    accidentScore = profile.accidentTolerance === "flexible" ? 48 : 18;
  }

  const bodyScore =
    profile.bodyType === "any" ? 100 :
    profile.bodyType === car.type ? 100 :
    (profile.bodyType === "suv" && car.type === "luxury") ? 92 :
    (profile.bodyType === "luxury" && car.type === "suv") ? 78 :
    60;

  // Ownership cost score uses budget as rough scale. Lower is better.
  const ownershipScale = Math.max(7000, profile.budget * 0.65);
  const ownershipScore = clamp(100 - (ownershipCost / ownershipScale) * 55, 0, 100);

  const score =
    budgetScore * weights.budget / 100 +
    paymentScore * weights.payment / 100 +
    seatScore * weights.seats / 100 +
    reliabilityScore * weights.reliability / 100 +
    resaleScore * weights.resale / 100 +
    mileageScore * weights.mileage / 100 +
    ownershipScore * weights.ownership / 100 +
    comfortScore * weights.comfort / 100 +
    accidentScore * weights.accident / 100 +
    dealerScore * weights.dealer / 100 +
    bodyScore * weights.body / 100;

  const detailScores = {
    budgetScore, paymentScore, seatScore, reliabilityScore, resaleScore, mileageScore,
    ownershipScore, comfortScore, accidentScore, dealerScore, bodyScore
  };

  return {
    ...car,
    score: Math.round(score),
    monthly,
    resaleValue,
    ownershipCost,
    netDepreciation,
    estimatedFuel,
    maintenanceRisk,
    detailScores
  };
}

function explainCar(car, profile) {
  const strengths = [];
  const cautions = [];

  if (car.price <= profile.budget) strengths.push("fits the selected budget");
  else cautions.push("is above the selected budget");

  if (car.monthly <= profile.monthlyTarget) strengths.push("keeps the estimated payment within target");
  else cautions.push("may exceed the preferred monthly payment");

  if (car.seats >= profile.seats) strengths.push("meets the seating requirement");
  else cautions.push("does not meet the requested seat count");

  if (car.reliability >= 8.4) strengths.push("has a strong reliability profile");
  else if (car.reliability < 7.2) cautions.push("has a lower reliability score in this model");

  if (car.resale >= 8.4) strengths.push("has strong resale value");
  else if (car.resale < 7) cautions.push("may depreciate faster than top resale choices");

  if (car.mileage > profile.maxMileage) cautions.push("exceeds the mileage preference");
  else if (car.mileage < profile.maxMileage * 0.82) strengths.push("has acceptable mileage for the profile");

  if (car.accident === "minor") cautions.push("has a minor accident-history caution");
  if (car.accident === "major") cautions.push("has a major accident/title-risk caution");

  const first = strengths.length ? `Ranked high because it ${strengths.slice(0, 3).join(", ")}.` : "This vehicle has a mixed fit for the selected buyer profile.";
  const second = cautions.length ? ` Score was reduced because it ${cautions.slice(0, 3).join(", ")}.` : " No major caution was triggered by the current profile.";
  return first + second;
}

function badgesFor(car, profile) {
  const badges = [];
  if (car.score >= 85) badges.push(["Best overall fit", "good"]);
  if (car.monthly <= profile.monthlyTarget) badges.push(["Payment-friendly", "good"]);
  if (car.resale >= 8.6) badges.push(["High resale", "good"]);
  if (car.reliability >= 8.7) badges.push(["Reliability leader", "good"]);
  if (car.comfort >= 8.7) badges.push(["Comfort-focused", "good"]);
  if (car.price > profile.budget) badges.push(["Over budget", "warn"]);
  if (car.mileage > profile.maxMileage) badges.push(["Mileage caution", "warn"]);
  if (car.accident === "minor") badges.push(["Minor accident caution", "warn"]);
  if (car.accident === "major") badges.push(["Major risk", "danger"]);
  if (!badges.length) badges.push(["Balanced option", ""]);
  return badges;
}

function rankVehicles() {
  const profile = profileFromForm();
  const combined = [...vehicleData, ...customVehicles];
  currentRanked = combined.map(car => scoreCar(car, profile));

  const sortBy = $("sortBy").value;
  currentRanked.sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "monthly") return a.monthly - b.monthly;
    if (sortBy === "resale") return b.resale - a.resale;
    if (sortBy === "reliability") return b.reliability - a.reliability;
    return b.score - a.score;
  });

  renderSummary(currentRanked, profile);
  renderResults(currentRanked.slice(0, 10), profile);
  renderSearchLinks(profile);
}

function renderSummary(ranked, profile) {
  const top = ranked[0];
  const underBudget = ranked.filter(car => car.price <= profile.budget).length;
  const paymentFit = ranked.filter(car => car.monthly <= profile.monthlyTarget).length;
  const averageScore = Math.round(ranked.reduce((sum, car) => sum + car.score, 0) / ranked.length);

  $("summaryCards").innerHTML = `
    <div class="summary-card">
      <strong>${top ? top.score : "--"}</strong>
      <span>Top score</span>
    </div>
    <div class="summary-card">
      <strong>${underBudget}</strong>
      <span>Vehicles under budget</span>
    </div>
    <div class="summary-card">
      <strong>${paymentFit}</strong>
      <span>Within payment target</span>
    </div>
    <div class="summary-card">
      <strong>${averageScore}</strong>
      <span>Average fit score</span>
    </div>
  `;
}

function renderResults(cars, profile) {
  $("results").innerHTML = cars.map((car, index) => {
    const badges = badgesFor(car, profile).map(([text, type]) => `<span class="badge ${type}">${text}</span>`).join("");
    const reason = explainCar(car, profile);
    const link = car.link || "#";

    return `
      <article class="car-card">
        <div class="rank-score">
          <div class="rank">#${index + 1}</div>
          <div class="score">${car.score}<small>/100</small></div>
        </div>

        <div class="car-main">
          <h3>${car.name}</h3>
          <div class="meta">
            ${car.year} • ${car.mileage.toLocaleString()} miles • ${car.seats} seats • ${car.type.toUpperCase()} • Accident: ${car.accident}
          </div>

          <div class="badges">${badges}</div>

          <p class="reason">${reason}</p>

          <div class="metrics">
            <div class="metric"><strong>${money(car.price)}</strong><span>Price</span></div>
            <div class="metric"><strong>${money(car.monthly)}</strong><span>Est. monthly</span></div>
            <div class="metric"><strong>${money(car.resaleValue)}</strong><span>Est. resale</span></div>
            <div class="metric"><strong>${money(car.ownershipCost)}</strong><span>${profile.keepYears}-yr net cost</span></div>
            <div class="metric"><strong>${car.reliability.toFixed(1)}/10</strong><span>Reliability</span></div>
          </div>

          <div class="card-actions">
            <a href="${link}" target="_blank" rel="noopener">Open Listing/Search</a>
            <button class="small-btn" type="button" onclick="showScoreBreakdown('${encodeURIComponent(car.name)}')">Score Details</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function showScoreBreakdown(encodedName) {
  const name = decodeURIComponent(encodedName);
  const car = currentRanked.find(v => v.name === name);
  if (!car) return;

  const d = car.detailScores;
  const lines = [
    `${car.name}`,
    "",
    `Final score: ${car.score}/100`,
    `Estimated monthly payment: ${money(car.monthly)}`,
    `Estimated resale value: ${money(car.resaleValue)}`,
    `Estimated ownership cost: ${money(car.ownershipCost)}`,
    "",
    "Component scores:",
    `Budget fit: ${Math.round(d.budgetScore)}/100`,
    `Payment fit: ${Math.round(d.paymentScore)}/100`,
    `Seating fit: ${Math.round(d.seatScore)}/100`,
    `Reliability: ${Math.round(d.reliabilityScore)}/100`,
    `Resale: ${Math.round(d.resaleScore)}/100`,
    `Mileage: ${Math.round(d.mileageScore)}/100`,
    `Ownership cost: ${Math.round(d.ownershipScore)}/100`,
    `Comfort: ${Math.round(d.comfortScore)}/100`,
    `Accident/title risk: ${Math.round(d.accidentScore)}/100`,
    `Dealer confidence: ${Math.round(d.dealerScore)}/100`
  ];
  alert(lines.join("\n"));
}

function renderSearchLinks(profile) {
  const zip = encodeURIComponent(profile.zip || "77479");
  const maxPrice = encodeURIComponent(profile.budget);
  const mileage = encodeURIComponent(profile.maxMileage);
  const seatsText = profile.seats >= 7 ? "7 passenger" : `${profile.seats} passenger`;
  const queryBase = encodeURIComponent(`${seatsText} used SUV minivan under ${profile.budget} under ${profile.maxMileage} miles near ${profile.zip}`);

  const links = [
    ["Autotrader", `https://www.autotrader.com/cars-for-sale/all-cars/cars-under-${maxPrice}/${zip}?searchRadius=75&maxMileage=${mileage}`],
    ["Cars.com", `https://www.cars.com/shopping/results/?maximum_distance=75&maximum_price=${maxPrice}&maximum_mileage=${mileage}&stock_type=used&zip=${zip}`],
    ["CarGurus", `https://www.cargurus.com/Cars/inventorylisting/viewDetailsFilterViewInventoryListing.action?zip=${zip}&distance=75&maxPrice=${maxPrice}`],
    ["CarMax", `https://www.carmax.com/cars?search=${queryBase}`],
    ["EchoPark", `https://www.echopark.com/search?keyword=${queryBase}`],
    ["Google Search", `https://www.google.com/search?q=${queryBase}`]
  ];

  $("searchLinks").innerHTML = links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`).join("");
}

function updateSliderLabels() {
  $("reliabilityValue").textContent = $("reliabilityWeight").value;
  $("resaleValue").textContent = $("resaleWeight").value;
  $("comfortValue").textContent = $("comfortWeight").value;
  $("costValue").textContent = $("costWeight").value;
}

function resetProfile() {
  $("zipCode").value = "77479";
  $("budget").value = 20000;
  $("monthlyTarget").value = 300;
  $("downPayment").value = 4000;
  $("apr").value = 7.0;
  $("loanMonths").value = 72;
  $("keepYears").value = 5;
  $("seats").value = 7;
  $("maxMileage").value = 110000;
  $("bodyType").value = "any";
  $("accidentTolerance").value = "minor";
  $("reliabilityWeight").value = 9;
  $("resaleWeight").value = 8;
  $("comfortWeight").value = 6;
  $("costWeight").value = 8;
  updateSliderLabels();
  rankVehicles();
}

function addCustomCar(event) {
  event.preventDefault();
  const name = $("carName").value.trim();
  if (!name) {
    alert("Please enter a vehicle name.");
    return;
  }

  customVehicles.push({
    name,
    year: Number($("carYear").value || 2018),
    price: Number($("carPrice").value || 19000),
    mileage: Number($("carMileage").value || 85000),
    seats: Number($("carSeats").value || 7),
    type: $("carType").value,
    mpg: $("carType").value === "minivan" ? 22 : $("carType").value === "luxury" ? 21 : 23,
    reliability: Number($("carReliability").value || 8),
    resale: Number($("carResale").value || 8),
    comfort: $("carType").value === "luxury" ? 8.8 : 8.0,
    dealer: 7.5,
    accident: $("carAccident").value,
    link: $("carLink").value.trim() || "#"
  });

  $("customCarForm").reset();
  $("carYear").value = 2018;
  $("carPrice").value = 19000;
  $("carMileage").value = 85000;
  $("carSeats").value = 7;
  $("carReliability").value = 8;
  $("carResale").value = 8;
  rankVehicles();
}

function exportJSON() {
  const data = {
    generatedAt: new Date().toISOString(),
    profile: profileFromForm(),
    topResults: currentRanked.slice(0, 10)
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "autowise-results.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

["reliabilityWeight", "resaleWeight", "comfortWeight", "costWeight"].forEach(id => {
  $(id).addEventListener("input", () => {
    updateSliderLabels();
    rankVehicles();
  });
});

$("buyerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  rankVehicles();
});

$("sortBy").addEventListener("change", rankVehicles);
$("resetBtn").addEventListener("click", resetProfile);
$("customCarForm").addEventListener("submit", addCustomCar);
$("exportBtn").addEventListener("click", exportJSON);
$("printBtn").addEventListener("click", () => window.print());

// Re-rank immediately when major fields change.
["budget", "monthlyTarget", "downPayment", "apr", "loanMonths", "keepYears", "seats", "maxMileage", "bodyType", "accidentTolerance", "zipCode"].forEach(id => {
  $(id).addEventListener("change", rankVehicles);
});

updateSliderLabels();
rankVehicles();
