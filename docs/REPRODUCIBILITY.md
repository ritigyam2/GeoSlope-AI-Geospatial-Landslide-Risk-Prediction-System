# Reproducibility guide

This repository contains notebook experiments, prepared CSV files, serialized model artifacts and a static browser dashboard. The steps below are an inspection and rerun checklist; they do not assume a dependency file or automated training entry point that is not currently present.

## 1. Clone the repository

~~~bash
git clone https://github.com/ritigyam2/GeoSlope-AI-Geospatial-Landslide-Risk-Prediction-System.git
cd GeoSlope-AI-Geospatial-Landslide-Risk-Prediction-System
~~~

## 2. Create an isolated Python environment

~~~bash
python -m venv .venv
~~~

Activate it:

- macOS / Linux: source .venv/bin/activate
- Windows PowerShell: .venv/Scripts/Activate.ps1

Install the libraries required by the notebook you intend to inspect. The notebooks import pandas, NumPy, Matplotlib, scikit-learn and, for XGBoost, the xgboost package. Exact compatible versions are not pinned in a repository dependency manifest at present.

## 3. Open the notebooks

~~~bash
jupyter lab
~~~

Run one notebook at a time, from top to bottom, after checking the data paths referenced in its cells. The Random Forest notebook reads landslide_train_engineered.csv and landslide_test_engineered.csv. Check the other notebooks' data paths before execution; do not assume they all reference identical filenames.

## 4. Inspect the dashboard

Open index.html in a modern browser. The dashboard uses local JavaScript and image assets in the repository.

## 5. Record an experiment

For each run, record:

- Git commit SHA
- Notebook name and execution date
- Exact training and test file names (ideally file hashes)
- Target definition and positive class
- Feature count and feature schema
- Model hyperparameters and random seed
- Accuracy, precision, recall, F1, ROC-AUC and PR-AUC
- Confusion matrix and class supports
- Python and package versions

## Current reproducibility limitations

- A pinned requirements.txt or environment.yml is not present in the inspected root tree.
- The notebooks do not all contain complete saved evaluation outputs.
- The XGBoost notebook's saved cells do not show a completed evaluation output.
- Metric snapshots differ between notebook output, dashboard data and the presentation.
- Geographic or temporal validation should be documented before making claims about performance in unseen districts or future periods.

A clean, common rerun is required before publishing a definitive cross-model leaderboard.
