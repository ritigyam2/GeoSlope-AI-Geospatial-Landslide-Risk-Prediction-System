# Data and repository artifacts

## Dataset summary

The project materials describe a 12,409-row labelled modelling table for 12 districts in Himachal Pradesh.

| Item | Value |
|---|---:|
| Total modelling samples | 12,409 |
| Landslide class (1) | 6,531 |
| Non-landslide class (0) | 5,878 |
| Training rows | 9,945 |
| Test rows | 2,464 |
| Base predictors | 17 |
| Engineered predictors | 47 |

The Random Forest notebook confirms 9,945 training rows, 2,464 test rows and 47 input columns after excluding the class target.

## Feature families

- Elevation, slope and aspect
- Rainfall and NDVI
- Distance to river and flow accumulation
- Land-use / land-cover encodings

The presentation identifies ESA WorldCover 2020 as the land-cover source and describes environmental feature extraction in Google Earth Engine at 30 m spatial resolution.

## Existing data files

| Artifact | Purpose |
|---|---|
| landslide_train_preprocessed.csv | Prepared training split |
| landslide_test_preprocessed.csv | Prepared test split |
| landslide_train_engineered.csv | Feature-engineered training split |
| landslide_test_engineered.csv | Feature-engineered test split |
| *_test_predictions.csv | Model prediction outputs |
| *.joblib and *.pkl | Serialized model artifacts |

The repository also contains notebooks, dashboard JavaScript, images and Word reports. File names are retained as they exist in the repository.

## Data provenance and reuse

The presentation names the Geological Survey of India (GSI) as the inventory source and identifies the original dataset as *A Geo-Environmental Feature Dataset for Landslide Susceptibility Modelling in Himachal Pradesh, India* on Mendeley Data.

Before redistributing raw source data or derived datasets, verify the original dataset's licence, attribution requirements and redistribution terms. This documentation does not grant rights to third-party data or imagery.

## Data handling notes

- Keep train and test files separate during experiments.
- Preserve the class target column and document its label mapping.
- Record the exact source file and split used by each experiment.
- Avoid treating pseudo-absence samples as confirmed field observations.
- Do not interpret model probability as a calibrated physical probability of slope failure unless calibration has been evaluated.
