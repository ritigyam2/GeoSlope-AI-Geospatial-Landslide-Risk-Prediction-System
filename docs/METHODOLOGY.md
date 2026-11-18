# Methodology

This document records the workflow described by the project presentation and notebooks. It describes the existing work; it is not a claim that the pipeline has been independently revalidated.

## 1. Study area and inventory

- **Study area:** 12 districts in Himachal Pradesh, India.
- **Inventory source:** Geological Survey of India (GSI), as stated in the project materials.
- **Original modelling table:** 12,409 labelled samples.
- **Class counts:** 6,531 landslide points and 5,878 non-landslide points.
- **Environmental layer resolution:** 30 m, as described in the presentation.

The presentation identifies the source dataset as *A Geo-Environmental Feature Dataset for Landslide Susceptibility Modelling in Himachal Pradesh, India* (Mendeley Data).

## 2. Environmental predictors

| Family | Variables |
|---|---|
| Terrain | Elevation, slope, aspect |
| Climate / vegetation | Rainfall, NDVI |
| Hydrology | Flow accumulation, distance to rivers |
| Land cover | ESA WorldCover 2020 classes |

The presentation describes cleaning inventory coordinates and district fields, generating pseudo-absence points with seed 42, assigning binary labels and extracting environmental predictors at sample locations.

## 3. Data preparation

- **Training:** 9,945 rows
- **Test:** 2,464 rows
- **Base predictors:** 17
- **Engineered predictors:** 47

The Random Forest notebook prints train/test shapes of (9945, 48) and (2464, 48), where 48 columns include 47 predictors and the class target.

The presentation describes z-score standardization for continuous variables and one-hot encoding for land-cover categories. It also describes keeping train and test datasets separate. Verify the exact fitting scope of each preprocessing operation before making stronger claims about leakage prevention.

## 4. Feature engineering

The presentation describes expansion from 17 to 47 predictors through:

- Robust handling / winsorization of extreme values
- Log transforms for river distance, flow accumulation and elevation
- Circular aspect representation with sine and cosine
- Squared terms for slope, rainfall, elevation and NDVI
- Quantile bins for rainfall, slope and elevation
- Outlier and threshold flags
- Pairwise interactions among slope, rainfall, NDVI and flow accumulation
- A composite hazard index

See the supporting feature-engineering report in the repository for the project team's detailed record.

## 5. Classifiers

1. Logistic Regression
2. Support Vector Machine with an RBF kernel
3. Random Forest
4. XGBoost

The Random Forest notebook specifies 200 estimators, balanced class weights and random_state 42. The XGBoost notebook specifies 300 estimators, learning rate 0.05, maximum depth 5, subsample 0.8 and column subsampling 0.8.

## 6. Evaluation

The project materials use accuracy, precision, recall, F1, ROC-AUC and PR-AUC. The presentation emphasizes recall and F1 alongside ranking metrics because missed landslide-prone samples are a concern in screening workflows.

See [MODEL_EVALUATION.md](MODEL_EVALUATION.md) for differences between the saved notebook output, dashboard data and presentation figures.
