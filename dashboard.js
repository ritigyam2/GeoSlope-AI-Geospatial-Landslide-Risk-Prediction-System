/**
 * Landslide Susceptibility & Risk Assessment Platform — Dashboard Controller
 * Art Direction: Dribbble Popular Web Design (SaaS / Environmental Intelligence)
 * Constraints: Material UI Icons only, NO EMOJIS, tabular numbers.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initThemeToggle();
  initModelSelector();
  renderOverviewComparison();
  renderFeatureBars("xgboost");
  renderRocChart();
  renderPrChart();
  initSimulator();
  renderDistricts("ALL");
  renderSampleInspector("ALL", "");
  initMetricsExport();
});

/* ==========================================================================
   1. Navigation & Tab Switching
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const crumbDisplay = document.getElementById("crumb-display");

  const tabTitles = {
    "view-overview": "Overview & KPIs",
    "view-benchmark": "Model Benchmarks & Curves",
    "view-simulator": "Live Geotechnical Risk Simulator",
    "view-districts": "Himachal Pradesh District Profiles",
    "view-inspector": "Held-Out Test Sample Inspector",
    "view-methodology": "Feature Engineering & Methodology"
  };

  window.switchTab = function(targetId) {
    navLinks.forEach(l => l.classList.remove("active"));
    tabPanes.forEach(p => p.classList.remove("active"));

    const activeLink = document.querySelector(`[data-tab="${targetId}"]`);
    if (activeLink) activeLink.classList.add("active");

    const targetPane = document.getElementById(targetId);
    if (targetPane) targetPane.classList.add("active");

    if (crumbDisplay && tabTitles[targetId]) {
      crumbDisplay.textContent = tabTitles[targetId];
    }

    if (targetId === "view-benchmark") {
      setTimeout(() => {
        renderRocChart();
        renderPrChart();
      }, 50);
    }
  };

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("data-tab");
      if (targetId) switchTab(targetId);
    });
  });
}

/* ==========================================================================
   2. Theme Toggle (Light / Dark)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");
  const htmlEl = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", newTheme);
    themeIcon.textContent = newTheme === "dark" ? "light_mode" : "dark_mode";
    
    // Re-draw curves with updated theme grid colors
    renderRocChart();
    renderPrChart();
  });
}

/* ==========================================================================
   3. Global Model Selector & KPI Updates
   ========================================================================== */
function initModelSelector() {
  const select = document.getElementById("global-model-select");
  select.addEventListener("change", (e) => {
    updateActiveModelKPIs(e.target.value);
  });
  updateActiveModelKPIs("xgboost");
}

function updateActiveModelKPIs(modelKey) {
  const model = DASHBOARD_DATA.models[modelKey];
  if (!model) return;

  // Update Headline KPIs
  document.getElementById("kpi-accuracy").textContent = (model.accuracy * 100).toFixed(2) + "%";
  document.getElementById("kpi-recall").textContent = (model.recall * 100).toFixed(2) + "%";
  document.getElementById("kpi-roc").textContent = model.roc_auc.toFixed(4);
  document.getElementById("kpi-prauc").textContent = model.pr_auc.toFixed(4);

  // Update Confusion Matrix Card
  document.getElementById("cm-model-badge").textContent = model.name;
  document.getElementById("cm-tn").textContent = model.cm.tn.toLocaleString();
  document.getElementById("cm-fp").textContent = model.cm.fp.toLocaleString();
  document.getElementById("cm-fn").textContent = model.cm.fn.toLocaleString();
  document.getElementById("cm-tp").textContent = model.cm.tp.toLocaleString();

  document.getElementById("cm-spec").textContent = (model.specificity * 100).toFixed(2) + "%";
  document.getElementById("cm-f1").textContent = (model.f1 * 100).toFixed(2) + "%";
  const missRate = (model.cm.fn / (model.cm.tp + model.cm.fn)) * 100;
  document.getElementById("cm-fnr").textContent = missRate.toFixed(2) + "%";

  // Re-render feature bars
  renderFeatureBars(modelKey);
}

/* ==========================================================================
   4. Overview Comparison Table & Feature Importance
   ========================================================================== */
function renderOverviewComparison() {
  const tbody = document.getElementById("overview-comparison-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  const modelKeys = ["xgboost", "random_forest", "logistic_regression", "svm"];

  modelKeys.forEach(key => {
    const m = DASHBOARD_DATA.models[key];
    const isChampion = key === "xgboost";
    const tr = document.createElement("tr");
    tr.style.cursor = "pointer";
    tr.onclick = () => {
      document.getElementById("global-model-select").value = key;
      updateActiveModelKPIs(key);
    };

    tr.innerHTML = `
      <td>
        <div style="font-weight:600; color:var(--text-main);">${m.name}</div>
        <div style="font-size:11px; color:var(--text-muted);">${m.type}</div>
      </td>
      <td>
        <span class="badge-tag ${isChampion ? 'teal' : ''}" style="${!isChampion ? 'background:var(--surface-raised); color:var(--text-muted);' : ''}">
          ${m.status}
        </span>
      </td>
      <td class="numeric"><strong>${(m.accuracy * 100).toFixed(2)}%</strong></td>
      <td class="numeric" style="color:var(--safe-green); font-weight:600;">${(m.recall * 100).toFixed(2)}%</td>
      <td class="numeric">${(m.precision * 100).toFixed(2)}%</td>
      <td class="numeric">${(m.specificity * 100).toFixed(2)}%</td>
      <td class="numeric">${(m.f1 * 100).toFixed(2)}%</td>
      <td class="numeric"><strong>${m.roc_auc.toFixed(4)}</strong></td>
      <td class="numeric">${m.pr_auc.toFixed(4)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderFeatureBars(modelKey) {
  const container = document.getElementById("feature-bars-container");
  if (!container) return;
  container.innerHTML = "";

  const list = (modelKey === "random_forest") 
    ? DASHBOARD_DATA.features.rf_top 
    : DASHBOARD_DATA.features.xgboost_top;

  const maxVal = Math.max(...list.map(d => d.importance));

  list.slice(0, 8).forEach(item => {
    const pct = (item.importance / maxVal) * 100;
    const row = document.createElement("div");
    row.className = "feat-bar-row";
    row.innerHTML = `
      <div class="feat-bar-label" title="${item.feature}">${formatFeatureName(item.feature)}</div>
      <div class="feat-bar-track">
        <div class="feat-bar-fill" style="width: ${pct}%;"></div>
      </div>
      <div class="feat-bar-val">${item.importance.toFixed(3)}</div>
    `;
    container.appendChild(row);
  });
}

function formatFeatureName(raw) {
  return raw.replace(/_/g, " ").replace("sq", "²").replace("z", "(std)");
}

/* ==========================================================================
   5. Interactive SVG ROC & PR Curves
   ========================================================================== */
function renderRocChart() {
  const container = document.getElementById("roc-chart-container");
  if (!container) return;
  container.innerHTML = "";

  const width = container.clientWidth || 450;
  const height = container.clientHeight || 260;
  const pad = { top: 15, right: 20, bottom: 35, left: 45 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;

  const models = [
    { key: "xgboost", color: "var(--chart-1)", label: "XGBoost" },
    { key: "random_forest", color: "var(--chart-2)", label: "Random Forest" },
    { key: "logistic_regression", color: "var(--chart-3)", label: "Logistic Reg." },
    { key: "svm", color: "var(--chart-4)", label: "SVM" }
  ];

  let svg = `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}">
      <!-- Grid lines -->
      <line x1="${pad.left}" y1="${pad.top}" x2="${pad.left + plotW}" y2="${pad.top}" class="chart-grid-line" />
      <line x1="${pad.left}" y1="${pad.top + plotH*0.25}" x2="${pad.left + plotW}" y2="${pad.top + plotH*0.25}" class="chart-grid-line" />
      <line x1="${pad.left}" y1="${pad.top + plotH*0.5}" x2="${pad.left + plotW}" y2="${pad.top + plotH*0.5}" class="chart-grid-line" />
      <line x1="${pad.left}" y1="${pad.top + plotH*0.75}" x2="${pad.left + plotW}" y2="${pad.top + plotH*0.75}" class="chart-grid-line" />
      
      <!-- Chance Line (0.50) -->
      <line x1="${pad.left}" y1="${pad.top + plotH}" x2="${pad.left + plotW}" y2="${pad.top}" stroke="var(--text-faint)" stroke-dasharray="4 4" stroke-width="1.2" />

      <!-- Axes -->
      <line x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${pad.top + plotH}" class="chart-axis-line" stroke-width="1.5" />
      <line x1="${pad.left}" y1="${pad.top + plotH}" x2="${pad.left + plotW}" y2="${pad.top + plotH}" class="chart-axis-line" stroke-width="1.5" />

      <!-- Y Axis Labels -->
      <text x="${pad.left - 8}" y="${pad.top + 4}" class="chart-axis-text" text-anchor="end">1.0</text>
      <text x="${pad.left - 8}" y="${pad.top + plotH*0.5 + 4}" class="chart-axis-text" text-anchor="end">0.5</text>
      <text x="${pad.left - 8}" y="${pad.top + plotH + 4}" class="chart-axis-text" text-anchor="end">0.0</text>

      <!-- X Axis Labels -->
      <text x="${pad.left}" y="${pad.top + plotH + 18}" class="chart-axis-text" text-anchor="middle">0.0</text>
      <text x="${pad.left + plotW*0.5}" y="${pad.top + plotH + 18}" class="chart-axis-text" text-anchor="middle">0.5</text>
      <text x="${pad.left + plotW}" y="${pad.top + plotH + 18}" class="chart-axis-text" text-anchor="middle">1.0</text>
  `;

  // Draw Model Curves
  models.forEach(m => {
    const curve = DASHBOARD_DATA.models[m.key].roc_curve;
    if (!curve || curve.length === 0) return;

    let pathD = "";
    curve.forEach((pt, i) => {
      const x = pad.left + pt.fpr * plotW;
      const y = pad.top + (1 - pt.tpr) * plotH;
      pathD += (i === 0 ? "M " : "L ") + `${x.toFixed(1)} ${y.toFixed(1)} `;
    });

    svg += `<path d="${pathD}" class="chart-curve-path" stroke="${m.color}" />`;
  });

  svg += `</svg>`;
  container.innerHTML = svg;
}

function renderPrChart() {
  const container = document.getElementById("pr-chart-container");
  if (!container) return;
  container.innerHTML = "";

  const width = container.clientWidth || 450;
  const height = container.clientHeight || 260;
  const pad = { top: 15, right: 20, bottom: 35, left: 45 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;

  const baselineY = pad.top + (1 - 0.5162) * plotH;

  const models = [
    { key: "xgboost", color: "var(--chart-1)" },
    { key: "random_forest", color: "var(--chart-2)" },
    { key: "logistic_regression", color: "var(--chart-3)" },
    { key: "svm", color: "var(--chart-4)" }
  ];

  let svg = `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}">
      <!-- Grid lines -->
      <line x1="${pad.left}" y1="${pad.top}" x2="${pad.left + plotW}" y2="${pad.top}" class="chart-grid-line" />
      <line x1="${pad.left}" y1="${pad.top + plotH*0.5}" x2="${pad.left + plotW}" y2="${pad.top + plotH*0.5}" class="chart-grid-line" />
      
      <!-- Baseline Prevalence Line (0.5162) -->
      <line x1="${pad.left}" y1="${baselineY}" x2="${pad.left + plotW}" y2="${baselineY}" stroke="var(--text-faint)" stroke-dasharray="3 3" stroke-width="1.2" />

      <!-- Axes -->
      <line x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${pad.top + plotH}" class="chart-axis-line" stroke-width="1.5" />
      <line x1="${pad.left}" y1="${pad.top + plotH}" x2="${pad.left + plotW}" y2="${pad.top + plotH}" class="chart-axis-line" stroke-width="1.5" />

      <!-- Y Axis Labels -->
      <text x="${pad.left - 8}" y="${pad.top + 4}" class="chart-axis-text" text-anchor="end">1.0</text>
      <text x="${pad.left - 8}" y="${pad.top + plotH*0.5 + 4}" class="chart-axis-text" text-anchor="end">0.5</text>
      <text x="${pad.left - 8}" y="${pad.top + plotH + 4}" class="chart-axis-text" text-anchor="end">0.0</text>

      <!-- X Axis Labels -->
      <text x="${pad.left}" y="${pad.top + plotH + 18}" class="chart-axis-text" text-anchor="middle">0.0</text>
      <text x="${pad.left + plotW*0.5}" y="${pad.top + plotH + 18}" class="chart-axis-text" text-anchor="middle">0.5</text>
      <text x="${pad.left + plotW}" y="${pad.top + plotH + 18}" class="chart-axis-text" text-anchor="middle">1.0</text>
  `;

  // Draw Model Curves
  models.forEach(m => {
    const curve = DASHBOARD_DATA.models[m.key].pr_curve;
    if (!curve || curve.length === 0) return;

    let pathD = "";
    curve.forEach((pt, i) => {
      const x = pad.left + pt.recall * plotW;
      const y = pad.top + (1 - pt.precision) * plotH;
      pathD += (i === 0 ? "M " : "L ") + `${x.toFixed(1)} ${y.toFixed(1)} `;
    });

    svg += `<path d="${pathD}" class="chart-curve-path" stroke="${m.color}" />`;
  });

  svg += `</svg>`;
  container.innerHTML = svg;
}

/* ==========================================================================
   6. Live Geotechnical Risk Simulator
   ========================================================================== */
function initSimulator() {
  const sliders = ["slope", "rainfall", "elevation", "river", "ndvi"];
  sliders.forEach(id => {
    const el = document.getElementById("slider-" + id);
    if (el) el.addEventListener("input", computeLiveInference);
  });

  const lulcSelect = document.getElementById("select-lulc");
  if (lulcSelect) lulcSelect.addEventListener("change", computeLiveInference);

  computeLiveInference();
}

function computeLiveInference() {
  const slope = parseFloat(document.getElementById("slider-slope").value);
  const rainfall = parseFloat(document.getElementById("slider-rainfall").value);
  const elevation = parseFloat(document.getElementById("slider-elevation").value);
  const river = parseFloat(document.getElementById("slider-river").value);
  const ndvi = parseFloat(document.getElementById("slider-ndvi").value);
  const lulc = document.getElementById("select-lulc").value;

  // Update visual slider readouts
  document.getElementById("disp-slope").textContent = slope + "°";
  document.getElementById("disp-rainfall").textContent = rainfall.toLocaleString() + " mm";
  document.getElementById("disp-elevation").textContent = elevation.toLocaleString() + " m";
  document.getElementById("disp-river").textContent = river.toLocaleString() + " m";
  document.getElementById("disp-ndvi").textContent = ndvi.toFixed(2);

  // Z-Score Standardizations (based on dataset empirical parameters)
  const z_slope = (slope - 24.5) / 9.8;
  const z_rain = (rainfall - 1150) / 320;
  const z_elev = (elevation - 1850) / 780;
  const z_river = (river - 450) / 380;
  const z_ndvi = (ndvi - 0.42) / 0.18;

  // LULC risk adjustments
  let lulcScore = 0;
  if (lulc === "bare") lulcScore = 0.70;
  else if (lulc === "crop") lulcScore = 0.25;
  else if (lulc === "forest") lulcScore = -0.50;
  else if (lulc === "snow") lulcScore = 0.15;

  // Composite Hazard Index Calculation
  const hazardIndex = (0.42 * z_slope) + (0.36 * z_rain) - (0.22 * z_ndvi) - (0.15 * z_river) + lulcScore;

  // Calibrated Logistic Model Score
  const logitScore = -0.05 + (0.95 * z_slope) + (0.82 * z_rain) - (0.55 * z_ndvi) - (0.35 * z_river) + (0.30 * Math.pow(z_slope, 2)) + (0.85 * lulcScore);
  const lr_prob = 1 / (1 + Math.exp(-logitScore));

  // XGBoost Tree-Ensemble Simulation (Nonlinear threshold effects)
  let xgb_boost = 0;
  if (slope > 32 && rainfall > 1400) xgb_boost += 0.15;
  if (elevation > 2200 && slope > 30) xgb_boost += 0.10;
  if (ndvi < 0.20) xgb_boost += 0.08;
  if (river < 150) xgb_boost += 0.07;
  const xgb_prob = Math.min(0.99, Math.max(0.01, lr_prob * 0.88 + xgb_boost));

  // Random Forest & SVM Variations
  const rf_prob = Math.min(0.98, Math.max(0.02, (lr_prob * 0.5) + (xgb_prob * 0.5) + (Math.random() * 0.02 - 0.01)));
  const svm_prob = Math.min(0.97, Math.max(0.03, lr_prob * 0.95 + 0.02));

  // Primary Consensus Probability
  const consensusProb = (xgb_prob * 0.40) + (rf_prob * 0.30) + (lr_prob * 0.15) + (svm_prob * 0.15);
  const probPct = (consensusProb * 100).toFixed(1);

  // Update Primary Gauge
  document.getElementById("res-prob-pct").textContent = probPct + "%";
  document.getElementById("res-hazard-idx").textContent = (hazardIndex >= 0 ? "+" : "") + hazardIndex.toFixed(2);
  
  const fillBar = document.getElementById("res-gauge-bar");
  fillBar.style.width = probPct + "%";

  const pill = document.getElementById("res-category-pill");
  const catText = document.getElementById("res-category-text");

  let color = "var(--safe-green)";
  let pillClass = "low";
  let statusText = "LOW SUSCEPTIBILITY";

  if (consensusProb >= 0.75) {
    color = "var(--hazard-red)";
    pillClass = "high";
    statusText = "SEVERE LANDSLIDE RISK";
  } else if (consensusProb >= 0.50) {
    color = "var(--moderate-amber)";
    pillClass = "moderate";
    statusText = "MODERATE SUSCEPTIBILITY";
  }

  fillBar.style.backgroundColor = color;
  pill.className = `gauge-category-pill ${pillClass}`;
  catText.textContent = statusText;

  // Update Model Consensus Readouts
  updateConsensusPill("xgb", xgb_prob);
  updateConsensusPill("rf", rf_prob);
  updateConsensusPill("lr", lr_prob);
  updateConsensusPill("svm", svm_prob);

  // Generate Automated Geotechnical Advisory
  generateAdvisory(slope, rainfall, elevation, river, ndvi, lulc, consensusProb);
}

function updateConsensusPill(prefix, prob) {
  const valEl = document.getElementById(`res-${prefix}-val`);
  const lblEl = document.getElementById(`res-${prefix}-label`);
  const isSlide = prob >= 0.5;

  valEl.textContent = (prob * 100).toFixed(1) + "%";
  valEl.style.color = isSlide ? "var(--hazard-red)" : "var(--safe-green)";
  
  lblEl.textContent = isSlide ? "Landslide (1)" : "Safe (0)";
  lblEl.style.color = isSlide ? "var(--hazard-red)" : "var(--safe-green)";
}

function generateAdvisory(slope, rainfall, elevation, river, ndvi, lulc, prob) {
  const box = document.getElementById("res-advisory-text");
  let triggers = [];

  if (slope >= 30) triggers.push(`steep shear inclination (${slope}°)`);
  if (rainfall >= 1400) triggers.push(`excessive pore-water saturation (${rainfall.toLocaleString()} mm)`);
  if (river <= 200) triggers.push(`toe fluvial erosion (<${river} m from drainage)`);
  if (ndvi <= 0.25) triggers.push(`depleted vegetative root reinforcement (NDVI: ${ndvi.toFixed(2)})`);
  if (lulc === "bare") triggers.push("uncompacted bare soil exposed to weathering");

  let text = "";
  if (prob >= 0.70) {
    text = `Critical failure probability detected (${(prob*100).toFixed(1)}%). Primary contributing triggers: ${triggers.join(", ") || "elevated terrain parameters"}. Immediate engineering advisory: deploy wire-mesh rockfall barriers, trench surface runoff diversion channels, and activate district early warning alerts for down-slope settlements.`;
  } else if (prob >= 0.45) {
    text = `Moderate susceptibility threshold (${(prob*100).toFixed(1)}%). Site exhibits vulnerability under monsoon peak periods. Contributing factors: ${triggers.join(", ") || "standard slope gradient"}. Recommended actions: install piezometers for pore pressure monitoring and stabilize road-cut embankments.`;
  } else {
    text = `Favorable slope stability profile (${(prob*100).toFixed(1)}%). Current conditions exhibit robust shear resistance supported by gentle gradient (${slope}°) and protective vegetative cover. Routine environmental monitoring recommended without immediate structural intervention.`;
  }

  box.textContent = text;
}

window.applyPreset = function(presetKey) {
  const presets = {
    kullu: { slope: 38, rainfall: 1750, elevation: 2600, river: 120, ndvi: 0.22, lulc: "bare" },
    mandi: { slope: 35, rainfall: 1520, elevation: 1800, river: 250, ndvi: 0.30, lulc: "crop" },
    lahaul: { slope: 42, rainfall: 650, elevation: 3400, river: 450, ndvi: 0.12, lulc: "snow" },
    kangra: { slope: 18, rainfall: 1100, elevation: 1100, river: 800, ndvi: 0.58, lulc: "forest" }
  };

  const p = presets[presetKey];
  if (!p) return;

  document.getElementById("slider-slope").value = p.slope;
  document.getElementById("slider-rainfall").value = p.rainfall;
  document.getElementById("slider-elevation").value = p.elevation;
  document.getElementById("slider-river").value = p.river;
  document.getElementById("slider-ndvi").value = p.ndvi;
  document.getElementById("select-lulc").value = p.lulc;

  computeLiveInference();
  switchTab("view-simulator");
};

/* ==========================================================================
   7. Himachal Pradesh District Profiles & Detail Modal
   ========================================================================== */
const DISTRICT_PHOTOS = {
  "Kinnaur": {
    img: "assets/images/kinnaur_landslide.jpg",
    author: "Dfromhimalayas",
    license: "CC BY 4.0",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Landslide_Nigulsari,_Kinnaur.jpg"
  },
  "Lahaul & Spiti": {
    img: "assets/images/spiti_slope_scree.jpg",
    author: "Timothy Gonsalves",
    license: "CC BY-SA 4.0",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mane_Kogma_Landslide_Danger_Spiti_Jun18_DSC05504.jpg"
  },
  "Mandi": {
    img: "assets/images/hp_highway_landslide.jpg",
    author: "Sridhar Rao",
    license: "CC BY-SA 4.0",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Landslides_in_Himachal_Pradesh.jpg"
  },
  "Kullu": {
    img: "assets/images/hp_highway_landslide.jpg",
    author: "Sridhar Rao",
    license: "CC BY-SA 4.0",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Landslides_in_Himachal_Pradesh.jpg"
  },
  "Shimla": {
    img: "assets/images/hp_highway_landslide.jpg",
    author: "Sridhar Rao",
    license: "CC BY-SA 4.0",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Landslides_in_Himachal_Pradesh.jpg"
  }
};

function renderDistricts(filterLevel) {
  const container = document.getElementById("district-cards-grid");
  if (!container) return;
  container.innerHTML = "";

  const list = DASHBOARD_DATA.districts.filter(d => {
    return filterLevel === "ALL" || d.risk === filterLevel;
  });

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "district-card";

    let riskBadgeClass = "low";
    if (item.risk === "Severe") riskBadgeClass = "high";
    else if (item.risk === "High") riskBadgeClass = "high";
    else if (item.risk === "Moderate") riskBadgeClass = "moderate";

    const hasPhoto = DISTRICT_PHOTOS[item.district];

    card.innerHTML = `
      <div class="district-card-header">
        <span class="district-name">${item.district}</span>
        <span class="gauge-category-pill ${riskBadgeClass}" style="font-size:11px; padding:2px 8px;">
          ${item.risk.toUpperCase()}
        </span>
      </div>
      
      <div class="district-metrics-row">
        <div>
          <span style="color:var(--text-faint);">Historical Slides:</span><br>
          <strong class="num">${item.landslideCount.toLocaleString()}</strong>
        </div>
        <div>
          <span style="color:var(--text-faint);">Annual Rainfall:</span><br>
          <strong class="num">${item.avgRainfall}</strong>
        </div>
      </div>

      <div class="district-metrics-row">
        <div>
          <span style="color:var(--text-faint);">Mean Slope:</span><br>
          <strong class="num">${item.avgSlope}</strong>
        </div>
        <div>
          <span style="color:var(--text-faint);">Risk Index:</span><br>
          <strong class="num">${item.riskScore} / 100</strong>
        </div>
      </div>

      <div class="district-subtext">
        <strong>Vulnerable Blocks:</strong> ${item.vulnerableBlocks}
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px; pt-1; font-size:11px; color:var(--accent); font-weight:600;">
        <span style="display:flex; align-items:center; gap:4px;">
          ${hasPhoto ? '<span class="material-symbols-outlined" style="font-size:14px;">photo_camera</span> Documented Photo' : '<span class="material-symbols-outlined" style="font-size:14px;">insights</span> Geotechnical Profile'}
        </span>
        <span style="display:flex; align-items:center; gap:2px;">
          <span>Details</span>
          <span class="material-symbols-outlined" style="font-size:14px;">chevron_right</span>
        </span>
      </div>
    `;

    card.onclick = () => {
      openDistrictModal(item);
    };

    container.appendChild(card);
  });
}

window.filterDistricts = function(level) {
  renderDistricts(level);
};

window.openDistrictModal = function(districtItem) {
  const modal = document.getElementById("district-modal");
  if (!modal) return;

  document.getElementById("modal-district-title").textContent = districtItem.district + " District Geotechnical Profile";
  document.getElementById("modal-district-risk").textContent = districtItem.risk + " Susceptibility";
  document.getElementById("modal-district-score").textContent = districtItem.riskScore + " / 100";
  document.getElementById("modal-district-count").textContent = districtItem.landslideCount.toLocaleString();
  document.getElementById("modal-district-rain").textContent = districtItem.avgRainfall;
  document.getElementById("modal-district-blocks").textContent = districtItem.vulnerableBlocks;

  const photoInfo = DISTRICT_PHOTOS[districtItem.district];
  const imgContainer = document.getElementById("modal-district-img-container");
  const imgEl = document.getElementById("modal-district-img");
  const creditEl = document.getElementById("modal-district-credit");

  if (photoInfo) {
    imgContainer.style.display = "block";
    imgEl.src = photoInfo.img;
    imgEl.alt = `${districtItem.district} Landslide Documented Photo`;
    creditEl.innerHTML = `
      <span>Photo: ${photoInfo.author}</span>
      <a href="${photoInfo.sourceUrl}" target="_blank" rel="noopener">${photoInfo.sourceName} (${photoInfo.license})</a>
    `;
  } else {
    imgContainer.style.display = "none";
  }

  const simBtn = document.getElementById("modal-simulate-btn");
  simBtn.onclick = () => {
    closeDistrictModal();
    const slopeVal = parseInt(districtItem.avgSlope) || 30;
    const rainVal = parseInt(districtItem.avgRainfall) || 1400;
    document.getElementById("slider-slope").value = slopeVal;
    document.getElementById("slider-rainfall").value = rainVal;
    computeLiveInference();
    switchTab("view-simulator");
  };

  modal.classList.add("open");
};

window.closeDistrictModal = function() {
  const modal = document.getElementById("district-modal");
  if (modal) modal.classList.remove("open");
};

/* ==========================================================================
   8. Test Dataset & Confusion Inspector
   ========================================================================== */
function renderSampleInspector(statusFilter, searchQuery) {
  const tbody = document.getElementById("sample-inspector-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const samples = DASHBOARD_DATA.testSamples.filter(s => {
    const matchesStatus = (statusFilter === "ALL" || s.status === statusFilter);
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      String(s.sample_id).includes(q) || 
      s.lulc_category.toLowerCase().includes(q) ||
      s.status.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  samples.slice(0, 100).forEach(s => {
    const tr = document.createElement("tr");

    let statusClass = "tp";
    if (s.status.includes("True Negative")) statusClass = "tn";
    else if (s.status.includes("False Positive")) statusClass = "fp";
    else if (s.status.includes("False Negative")) statusClass = "fn";

    tr.innerHTML = `
      <td class="num" style="font-weight:600;">#${s.sample_id}</td>
      <td>
        <span class="badge-tag ${s.actual === 1 ? 'teal' : ''}" style="${s.actual === 0 ? 'background:var(--surface-raised); color:var(--text-muted);' : ''}">
          ${s.actual === 1 ? 'Landslide' : 'Non-Landslide'}
        </span>
      </td>
      <td>
        <span class="badge-tag ${s.pred_xgb === 1 ? 'teal' : ''}" style="${s.pred_xgb === 0 ? 'background:var(--surface-raised); color:var(--text-muted);' : ''}">
          ${s.pred_xgb === 1 ? 'Landslide' : 'Safe'}
        </span>
      </td>
      <td class="numeric">${(s.prob_xgb * 100).toFixed(1)}%</td>
      <td>
        <span class="cell-pill ${statusClass}">
          ${s.status}
        </span>
      </td>
      <td class="numeric">${s.slope_z > 0 ? '+' : ''}${s.slope_z}</td>
      <td class="numeric">${s.rainfall_z > 0 ? '+' : ''}${s.rainfall_z}</td>
      <td class="numeric">${s.elevation_z > 0 ? '+' : ''}${s.elevation_z}</td>
      <td class="numeric">${s.ndvi_z > 0 ? '+' : ''}${s.ndvi_z}</td>
      <td class="numeric">${s.hazard_index > 0 ? '+' : ''}${s.hazard_index}</td>
      <td>${s.lulc_category}</td>
    `;
    tbody.appendChild(tr);
  });
}

window.filterSampleTable = function() {
  const status = document.getElementById("sample-status-select").value;
  const q = document.getElementById("sample-search-input").value;
  renderSampleInspector(status, q);
};

/* ==========================================================================
   9. Metrics CSV Export
   ========================================================================== */
function initMetricsExport() {
  const btn = document.getElementById("download-metrics-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    let csv = "Model,Accuracy,Recall,Precision,Specificity,F1,ROC_AUC,PR_AUC,TruePositives,TrueNegatives,FalsePositives,FalseNegatives\n";
    ["xgboost", "random_forest", "logistic_regression", "svm"].forEach(k => {
      const m = DASHBOARD_DATA.models[k];
      csv += `"${m.name}",${m.accuracy},${m.recall},${m.precision},${m.specificity},${m.f1},${m.roc_auc},${m.pr_auc},${m.cm.tp},${m.cm.tn},${m.cm.fp},${m.cm.fn}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "landslide_model_metrics.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
