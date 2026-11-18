# Technical Architecture & System Design Document

**Project:** GeoSlope-AI — Western Himalayas Geotechnical Machine Learning Platform  
**Authors:** Ritigya Mishra, Khushi Dang, Shruti Pandey  
**Document Status:** Final Production Spec  
**Target Architecture:** Distributed Geospatial Preprocessing & Client-Side Edge Inference  

---

## 1. System Overview & Problem Statement

Landslides represent one of the most fatal natural geological hazards in the young, tectonically active Western Himalayas (specifically the state of Himachal Pradesh, India). Traditional slope stability assessment methods rely on limit equilibrium analyses or physical instrumentation (inclinometers, piezometers), which are cost-prohibitive to deploy continuously over thousands of square kilometers.

GeoSlope-AI delivers a **scalable geospatial machine learning framework** capable of assessing landslide susceptibility across 12,409 georeferenced observations in Himachal Pradesh, providing:
1. High-throughput environmental feature processing and geotechnical feature expansion (17 base $\rightarrow$ 47 engineered predictors).
2. Multi-model consensus benchmarking spanning linear, kernel, and boosted tree models.
3. Zero-dependency, client-side real-time interactive risk inference and automated geotechnical advisories.

```
                      SYSTEM ARCHITECTURE OVERVIEW

┌────────────────────────────────────────────────────────────────────────┐
│                   1. GEOSPATIAL DATA INGESTION ENGINE                  │
│                                                                        │
│   GSI Inventory         NASA SRTM DEM        CHIRPS / IMD    ESA WorldCover │
│   (6,539 Events)       (30m Topography)      (Rainfall Grid)  (Land Cover)  │
│         │                     │                    │               │   │
│         └──────────────┬──────┴────────────────────┴───────────────┘   │
│                        │                                               │
│                        ▼                                               │
│            [Google Earth Engine (GEE) Ingestion]                       │
│                        │                                               │
│                        ▼                                               │
│             12,409 Georeferenced Coordinates                           │
└────────────────────────┬───────────────────────────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 2. ZERO-LEAKAGE PREPROCESSING PIPELINE                 │
│                                                                        │
│   Raw Features (17 Base Dimensions)                                    │
│         │                                                              │
│   [STRICT 80/20 PARTITION BEFORE TRANSFORMATION]                       │
│         │                                                              │
│         ├── Train Split: 9,945 rows (52.9% Positive)                   │
│         │     └── Fit Scalers, Quantiles & Target Encodings            │
│         │                                                              │
│         └── Held-out Test Split: 2,464 rows (51.6% Positive)           │
│               └── Transform using Train Parameters Only                │
└────────────────────────┬───────────────────────────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────────────────────────┐
│             3. GEOTECHNICAL FEATURE EXPANSION (17 -> 47)               │
│                                                                        │
│   • Trigonometric Aspect: sin(Aspect), cos(Aspect)                     │
│   • Logarithmic Compression: ln(1 + Dist_River), ln(1 + FlowAccum)     │
│   • Polynomial Kinematics: Slope^2, Rainfall^2, Elevation^2, NDVI^2    │
│   • Compound Interaction Terms: Slope x Rainfall, Slope x NDVI        │
│   • Composite Hazard Index: Mean(Slope_z, Rainfall_z, Elevation_z)    │
└────────────────────────┬───────────────────────────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────────────────────────┐
│               4. MULTI-MODEL BENCHMARK & CONSENSUS ENGINE              │
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Logistic Regression  │  SVM (RBF Kernel)                       │   │
│   │ Acc: 78.65%          │  Acc: 78.41%                            │   │
│   │ ROC-AUC: 0.8681      │  ROC-AUC: 0.8649                        │   │
│   ├──────────────────────┼─────────────────────────────────────────┤   │
│   │ Random Forest (200t) │  XGBoost (Champion GBDT, 300t)          │   │
│   │ Acc: 81.25%          │  Acc: 81.86%                            │   │
│   │ Recall: 84.59%       │  Recall: 86.08% | ROC-AUC: 0.9026       │   │
│   └──────────────────────┴─────────────────────────────────────────┘   │
└────────────────────────┬───────────────────────────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────────────────────────┐
│             5. INTERACTIVE GEORISK CLIENT-SIDE DASHBOARD               │
│                                                                        │
│   • Overview & KPIs (12,409 points, 47 features, confusion matrices)   │
│   • Interactive Model Benchmark Matrix (ROC, PR Curves, Precision/Rec) │
│   • Live Geotechnical Risk Simulator (Real-time consensus scoring)     │
│   • District Vulnerability Inspector (All 12 HP Districts)             │
│   • Automated Engineering Mitigation Advisory Generator                │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Mathematical Modeling & Cost-Sensitive Formulation

### 2.1 Hazard Probability Estimation
For any georeferenced spatial coordinate $i \in \mathbb{R}^2$ characterized by feature vector $\mathbf{x}_i \in \mathbb{R}^{47}$, the system estimates the posterior probability of slope failure:

$$P(Y_i = 1 \mid \mathbf{x}_i) = \sigma\left(\sum_{m=1}^M f_m(\mathbf{x}_i)\right)$$

where $f_m \in \mathcal{F}$ represents individual regression trees in the boosted ensemble (XGBoost) and $\sigma(\cdot)$ is the logistic sigmoid.

### 2.2 Asymmetric Life-Safety Risk Utility
In geotechnical disaster screening, false negatives ($Y=1, \hat{Y}=0$) carry catastrophic costs (unanticipated slope failure impacting settlements or highways), whereas false positives ($Y=0, \hat{Y}=1$) incur modest costs (routine slope inspection or precautionary barriers).

Let the cost matrix $\mathbf{C}$ be parameterized by:

$$\mathbf{C} = \begin{pmatrix} C(\hat{0}, 0) & C(\hat{1}, 0) \\ C(\hat{0}, 1) & C(\hat{1}, 1) \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ \lambda & 0 \end{pmatrix}, \quad \lambda \gg 1$$

To minimize expected Bayes risk $\mathbb{E}[C]$, the decision cutoff threshold $T^*$ is shifted:

$$T^* = \frac{C(\hat{1}, 0) - C(\hat{0}, 0)}{[C(\hat{1}, 0) - C(\hat{0}, 0)] + [C(\hat{0}, 1) - C(\hat{1}, 1)]} = \frac{1}{1 + \lambda} < 0.5$$

This theoretical basis justifies optimizing the classifier for **Recall (86.08%)** and **PR-AUC (0.9019)** rather than symmetric accuracy alone.

---

## 3. Engineering Highlights & Design Decisions

### 3.1 Zero Data-Leakage Protocol
A pervasive failure mode in geospatial ML literature is computing scalers, encoders, or outlier thresholds on the entire dataset prior to splitting. GeoSlope-AI enforces strict isolation:
* Split index partitioned before continuous normalization.
* Target encodings computed strictly on training folds.
* Test set ($N = 2,464$) evaluated without data leakage.

### 3.2 High-Dimensional Non-Linear Geotechnical Modeling
Soil shear strength follows the Mohr-Coulomb failure criterion:

$$\tau_f = c' + (\sigma_n - u) \tan \phi'$$

Because pore-water pressure $u$ is heavily non-linear with respect to cumulative monsoon precipitation and drainage proximity, linear models fail to capture compound thresholds without manual interaction terms. By expanding 17 base variables into 47 engineered features (incorporating quadratic steepness, log fluvial accumulation, and cross-products), our linear baseline jumped from 74.0% to 78.65% accuracy, while tree ensembles reached 81.86% accuracy with 0.9026 ROC-AUC.

### 3.3 Zero-Dependency Edge Architecture
The interactive web dashboard (`index.html`, `dashboard.js`, `dashboard_data.js`, `style.css`) runs completely client-side in the browser:
* **No Server Infrastructure Required:** Can be served from static hosting (GitHub Pages, Cloudflare Pages, S3).
* **Deterministic Real-time Inference Engine:** Emulates multi-model consensus calculations on the client in sub-millisecond latency.
* **Full Responsive Theme & Accessibility:** Implements dark/light mode, IBM Plex typography, and structured CSS token architecture without external UI framework bloat.
