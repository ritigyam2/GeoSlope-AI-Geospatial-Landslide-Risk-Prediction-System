# Data Card: Himachal Pradesh Landslide Susceptibility Dataset

Following the **Google Data Cards Playbook** (*Pushkarna, Zaldivar, & Kjartansson, ACM FAccT 2022*), this document details the provenance, geographic scope, feature definitions, sampling methodology, and data hygiene protocols for the GeoSlope-AI dataset.

---

## 1. Dataset Overview

* **Dataset Title:** Geo-Environmental Feature Dataset for Landslide Susceptibility Modelling in Himachal Pradesh, India.
* **Originating Institution / Inventory Authority:** Geological Survey of India (GSI) & Mendeley Data.
* **Geographic Coverage:** Western Himalayas, State of Himachal Pradesh, India (Bounding Box approx. $30^\circ 22' \text{N}$ to $33^\circ 12' \text{N}$, $75^\circ 45' \text{E}$ to $79^\circ 04' \text{E}$).
* **Spatial Resolution:** 30 m grid cell resolution.
* **Sample Count:** 12,409 georeferenced observation points.
  * **Class 1 (Historical Landslide Event):** 6,531 records (52.6%).
  * **Class 0 (Non-Landslide Pseudo-Absence):** 5,878 records (47.4%).
* **Study Area Breakdown:** 12 administrative districts: Bilaspur, Chamba, Hamirpur, Kangra, Kinnaur, Kullu, Lahaul & Spiti, Mandi, Shimla, Sirmaur, Solan, and Una.

---

## 2. Remote Sensing Source Layers & Ingestion

All environmental predictors were extracted at inventory coordinates using **Google Earth Engine (GEE)**:

| Category | Layer / Sensor | Spatial Resolution | Extracted Variables | Geotechnical Significance |
| :--- | :--- | :---: | :--- | :--- |
| **Topography / Geomorphometry** | NASA SRTM Digital Elevation Model | 30 m | Elevation ($m$), Slope ($^\circ$), Aspect ($^\circ$) | Gravitational shear stress, slope steepness, insolation angle. |
| **Hydro-Climatology** | CHIRPS / IMD Monsoon Precipitation | Gridded (downscaled to 30m) | Mean Cumulative Rainfall ($mm$) | Pore-water pressure elevation, effective stress reduction. |
| **Hydrology & Drainage** | HydroSHEDS / Hydro-DEM | 30 m | Distance to River ($m$), Flow Accumulation | Toe-erosion debuttressing, subsurface saturation zones. |
| **Biogeophysics** | Landsat 8 / Sentinel-2 Surface Reflectance | 30 m | Normalized Difference Vegetation Index (NDVI) | Root mechanical anchoring, evapotranspiration, soil moisture. |
| **Anthropogenic & Land Cover** | ESA WorldCover 2020 | 10 m (resampled to 30m) | LULC Class Encodings | Urbanization, road-cut vulnerability, deforested terrain. |

---

## 3. Data Cleaning & Zero-Leakage Pipeline

```
Raw GSI Inventory & GEE Extractions
                │
                ▼
   Coordinate Validation & District Clean
                │
                ▼
 Pseudo-Absence Generation (seed = 42)
                │
                ▼
      Total Dataset: 12,409 Rows
                │
                ├───► [STRICT SPLIT BEFORE SCALING] 
                │               │
                │               ├───► Train Partition: 9,945 rows (80.14%)
                │               │       ├── Compute Z-Score Parameters ($\mu_{\text{train}}, \sigma_{\text{train}}$)
                │               │       ├── Fit Target Encodings on Train
                │               │       └── Fit Winsorization Percentiles
                │               │
                │               └───► Test Partition: 2,464 rows (19.86%)
                │                       └── Transform using Train Parameters ONLY
                │
                ▼
47-Feature Geotechnical Space (0.0% Leakage)
```

### 3.1 Pseudo-Absence Sampling Protocol
Because geological records only confirm positive failure locations (presence-only), non-landslide points (pseudo-absences) were sampled randomly across the study area excluding known landslide polygons, constrained by minimum slope thresholds ($< 5^\circ$) and valley floors to reflect stable geotechnical conditions.

### 3.2 Strict Data Hygiene Guarantees
* **Isolation of Test Set:** The test set ($N = 2,464$) was partitioned before any scaling or feature transformations took place.
* **No Imputation Leakage:** Missing values were evaluated and confirmed at 0 in both splits.
* **Target Encoding Protection:** Categorical Land Use / Land Cover (LULC) target encodings were computed strictly using out-of-fold training instances.

---

## 4. Feature Taxonomy: From 17 Base to 47 Engineered Predictors

The raw feature space (17 base predictors) was expanded to 47 dimensions to model non-linear geotechnical physics:

1. **Circular Aspect Trigonometric Decomposition:** 
   $$\text{Aspect}_{\sin} = \sin\left(\frac{\pi \cdot \text{Aspect}}{180}\right), \quad \text{Aspect}_{\cos} = \cos\left(\frac{\pi \cdot \text{Aspect}}{180}\right)$$
   Preserves angular continuity where $0^\circ \equiv 360^\circ$ (North).
2. **Heavy-Tailed Skew Logarithmic Transformations:**
   $$\text{Dist\_River}_{\log} = \ln(1 + \text{Dist\_River}), \quad \text{FlowAccum}_{\log} = \ln(1 + \text{FlowAccumulation})$$
   Compresses exponential river proximity scales.
3. **Polynomial Geotechnical Terms:**
   $$\text{Slope}^2, \quad \text{Rainfall}^2, \quad \text{Elevation}^2, \quad \text{NDVI}^2$$
   Captures quadratic threshold behaviors (e.g., slopes $> 35^\circ$ where failure probability escalates non-linearly).
4. **Hydro-Mechanical Interaction Terms:**
   $$\text{Slope} \times \text{Rainfall}, \quad \text{Slope} \times \text{NDVI}, \quad \text{Rainfall} \times \text{NDVI}$$
   Models compound triggers: high steepness coupled with intense precipitation in deforested catchments.
5. **Composite Geotechnical Hazard Index:**
   $$\text{Hazard\_Index} = \frac{\text{Slope}_z + \text{Rainfall}_z + \text{Elevation}_z}{3}$$
6. **Quantile Bins & Outlier Indicators:**
   Quantile-discretized tiers and extreme value threshold flags.

---

## 5. Known Limitations & Caveats

* **Inventory Reporting Bias:** Historical landslide inventories often reflect events near transportation corridors and human settlements with higher fidelity than remote high-altitude peaks.
* **Temporal Coarseness:** Rainfall represents multi-year monsoon climatological averages rather than sub-hourly cloudburst precipitation intensities.
* **Geotechnical Resolution:** 30m grid cells cannot resolve micro-features such as individual joint sets, rock mass rating (RMR), or local fissure water pressure.
