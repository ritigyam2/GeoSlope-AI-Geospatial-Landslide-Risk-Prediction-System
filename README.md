# GeoSlope-AI: Landslide Susceptibility Classification

GeoSlope-AI is a team project that studies landslide susceptibility in Himachal Pradesh using geospatial and environmental features. It combines a tabular machine-learning workflow with a browser-based dashboard for exploring model outputs.

**Team:** Ritigya Mishra, Khushi Dang, and Shruti Pandey.

This repository is a research and academic prototype. It is not an operational landslide early-warning system.

## Problem and Data

The project uses 12,409 georeferenced observations from Himachal Pradesh. The feature pipeline combines terrain, rainfall, drainage, vegetation, and land-cover information. The documented sources include the Geological Survey of India landslide inventory, SRTM elevation data, CHIRPS precipitation, ESA WorldCover, and satellite-derived vegetation indices.

The modelling workflow expands 17 base predictors into a 47-feature set. The data preparation and provenance are described in [DATA_CARD.md](DATA_CARD.md).

## Modelling

The notebooks compare four binary classification approaches:

- Logistic Regression
- Support Vector Machine with an RBF kernel
- Random Forest
- XGBoost

The documented evaluation uses a held-out test partition of 2,464 observations. The model card records the following results:

| Model | Accuracy | Recall | F1-score | ROC-AUC | PR-AUC |
|---|---:|---:|---:|---:|---:|
| XGBoost | 81.86% | 86.08% | 0.8305 | 0.9026 | 0.9019 |
| Random Forest | 81.25% | 84.59% | 0.8233 | 0.8936 | 0.8920 |
| Logistic Regression | 78.65% | 84.67% | 0.8037 | 0.8681 | 0.8678 |
| SVM (RBF) | 78.41% | 84.20% | 0.8010 | 0.8649 | 0.8556 |

These are results for the documented dataset split, not a measure of performance in a live warning system. Evaluation details and model configuration are available in [MODEL_CARD.md](MODEL_CARD.md).

## Dashboard

The repository includes a static dashboard for inspecting the study data, model comparisons, and scenario-based outputs.

To serve the files locally, run this command from the repository root:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Run the Notebooks

The Python environment is described in [requirements.txt](requirements.txt).

```bash
python -m venv .venv

# Windows
.venv\\Scripts\\activate

# macOS / Linux
source .venv/bin/activate

python -m pip install --upgrade pip
python -m pip install -r requirements.txt
jupyter notebook
```

Open the relevant notebook from the repository root. The repository includes processed data files and model artifacts used by the experiments.

## Repository Guide

- [ARCHITECTURE.md](ARCHITECTURE.md) — system design and data flow
- [DATA_CARD.md](DATA_CARD.md) — data sources, preparation, and limitations
- [MODEL_CARD.md](MODEL_CARD.md) — model configurations and evaluation
- `landslide_prediction_logistic_regression.ipynb`, `landslide_prediction_svm.ipynb`, `random_forest.ipynb`, and `xgboost_model.ipynb` — model experiments
- `index.html`, `dashboard.js`, and `dashboard_data.js` — dashboard implementation

## Limitations

- The target is spatial susceptibility, not the timing of an individual landslide.
- Rainfall features use historical or aggregated values and do not model real-time storm intensity.
- A 30 m grid cannot represent every local geological condition or slope-scale mechanism.
- Historical inventories may overrepresent areas with better reporting and road access.
- Predictions require independent geographic validation and review by qualified geotechnical professionals before any practical use.

## License

See [LICENSE](LICENSE).
