# GeoSlope AI
### Geospatial Landslide Susceptibility Modelling & Risk Assessment

A machine-learning study of terrain, rainfall, vegetation, hydrology and land-cover signals across Himachal Pradesh, India.

[Explore the dashboard](index.html) · [Methodology](docs/METHODOLOGY.md) · [Model evaluation](docs/MODEL_EVALUATION.md) · [Architecture](docs/ARCHITECTURE.md)

![Himalayan terrain](assets/images/himalayas_satellite_terrain.jpg)

---

## Project overview

GeoSlope AI investigates landslide susceptibility across **12 districts of Himachal Pradesh**. It combines a labelled landslide inventory with environmental predictors, expands the predictor space through feature engineering, compares four classification approaches and presents model outputs through an interactive browser dashboard.

This repository contains model-development notebooks, prepared datasets, serialized model artifacts, evaluation outputs, technical reports and a dashboard.

> **Research prototype:** Outputs are susceptibility estimates for analysis—not operational forecasts, official warnings or a substitute for geological assessment and emergency-management guidance.

## Study snapshot

| Component | Recorded value |
|---|---:|
| Geographic coverage | 12 Himachal Pradesh districts |
| Labelled modelling samples | 12,409 |
| Training split | 9,945 |
| Held-out test split | 2,464 |
| Baseline predictors | 17 |
| Engineered predictors | 47 |
| Landslide-labelled samples | 6,531 |
| Non-landslide samples | 5,878 |
| Classifier families | 4 |

## Workflow

1. **Geospatial data assembly** — combine the landslide inventory and environmental feature layers.
2. **Data preparation** — prepare binary labels, separate train/test datasets, standardize continuous predictors and encode land-cover classes.
3. **Feature engineering** — expand 17 baseline predictors to 47 engineered predictors using transformations, non-linear terms, bins, flags, interactions and a composite index.
4. **Model experiments** — compare Logistic Regression, RBF-kernel SVM, Random Forest and XGBoost.
5. **Exploration** — inspect benchmark views, district profiles, a scenario simulator, sample records and feature-engineering context in the dashboard.

See [methodology](docs/METHODOLOGY.md) and [architecture](docs/ARCHITECTURE.md).

## Models

| Model | Role |
|---|---|
| Logistic Regression | Linear baseline |
| Support Vector Machine (RBF) | Non-linear kernel baseline |
| Random Forest | Bagged-tree ensemble |
| XGBoost | Gradient-boosted tree ensemble |

The Random Forest notebook specifies 200 estimators, balanced class weights and a fixed random seed. The XGBoost notebook specifies 300 estimators, learning rate 0.05 and maximum depth 5.

### Evaluation integrity

The saved notebooks, dashboard data and project presentation contain **different metric snapshots**. Rather than combining them into an unverified leaderboard, this repository documents the source of each reported value and the reconciliation required.

See [model evaluation and metric provenance](docs/MODEL_EVALUATION.md).

## Interactive dashboard

Open [index.html](index.html) in a modern browser. The interface includes:

- Overview and model KPIs
- Four-model benchmark comparisons
- Interactive risk-scenario inputs
- District hazard profiles
- Test-sample inspection
- Feature-engineering explanations

The dashboard is a local browser interface backed by the repository's JavaScript data and presentation assets. It is not connected to live sensor feeds or an official government alert service.

## Repository structure

~~~text
.
├── assets/images/                 # Himalayan and landslide imagery
├── docs/                          # Project and methodology documentation
├── index.html                     # Dashboard interface
├── style.css                      # Dashboard styles
├── dashboard.js                   # Dashboard interactions
├── dashboard_data.js              # Dashboard display data
├── random_forest.ipynb             # Random Forest experiment
├── xgboost_model.ipynb             # XGBoost experiment
├── landslide_prediction_logistic_regression.ipynb
├── landslide_prediction_svm.ipynb
├── landslide_*_preprocessed.csv    # Prepared train/test data
├── landslide_*_engineered.csv      # Engineered train/test data
├── *_lands lide_model.*            # Serialized model artifacts
└── *.docx                          # Supporting technical reports
~~~

## Technology

- **Analysis:** Python, pandas, NumPy, Matplotlib
- **Machine learning:** scikit-learn, XGBoost
- **Dashboard:** HTML, CSS, JavaScript
- **Geospatial context:** Geological Survey of India inventory; Google Earth Engine-derived environmental layers, as described in the project materials

## Documentation

| Document | Coverage |
|---|---|
| [Architecture](docs/ARCHITECTURE.md) | Data flow, model layer and dashboard boundary |
| [Methodology](docs/METHODOLOGY.md) | Study area, preprocessing and feature engineering |
| [Data & artifacts](docs/DATA_AND_ARTIFACTS.md) | Dataset and repository artifact inventory |
| [Model evaluation](docs/MODEL_EVALUATION.md) | Results, confusion matrix and metric provenance |
| [Reproducibility](docs/REPRODUCIBILITY.md) | Environment considerations and rerun checklist |

## Contributors

- **Ritigya Mishra**
- **Khushi Dang**
- **Shruti Pandey**

## Responsible use

Landslide susceptibility modelling is sensitive to inventory completeness, spatial sampling, class construction, feature quality and validation design. A high test score alone does not establish geographic transferability or operational readiness. Do not use this prototype to make evacuation, infrastructure-safety or emergency-response decisions.

## Acknowledgements

The project materials identify the Geological Survey of India (GSI) as the landslide-inventory source and describe environmental predictors extracted using Google Earth Engine at 30 m spatial resolution. The original modelling dataset is identified in the presentation as *A Geo-Environmental Feature Dataset for Landslide Susceptibility Modelling in Himachal Pradesh, India* (Mendeley Data). Consult the original dataset record for its definitive citation and reuse terms.
