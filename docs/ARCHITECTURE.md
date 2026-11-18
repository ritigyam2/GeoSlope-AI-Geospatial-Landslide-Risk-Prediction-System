# Architecture overview

GeoSlope AI is organized as a research workflow with a browser-based presentation layer. This diagram describes components visible in the repository and project materials; it does not imply a deployed backend or live external data service.

## End-to-end flow

~~~mermaid
flowchart TD
    A["Landslide inventory: GSI records"] --> C["Geospatial feature table"]
    B["Environmental layers: terrain, rainfall, NDVI, hydrology, LULC"] --> C
    C --> D["Data preparation: labels, split, scaling, encoding"]
    D --> E["Feature engineering: 17 base to 47 predictors"]
    E --> F["Model experiments"]
    F --> G1["Logistic Regression"]
    F --> G2["RBF SVM"]
    F --> G3["Random Forest"]
    F --> G4["XGBoost"]
    G1 --> H["Evaluation artifacts"]
    G2 --> H
    G3 --> H
    G4 --> H
    H --> I["Dashboard data"]
    I --> J["Browser dashboard: benchmarks, profiles, simulator, sample inspector"]
~~~

## Component boundaries

| Component | Repository evidence | Responsibility |
|---|---|---|
| Prepared data | CSV files ending in preprocessed | Model-ready train/test tables |
| Engineered data | CSV files ending in engineered | Expanded predictor matrix |
| Model experiments | Four Jupyter notebooks | Fit classifiers and evaluate predictions |
| Model artifacts | JOBLIB and PKL files | Serialized model objects |
| Dashboard data | dashboard_data.js | Prepared model and project display data |
| Dashboard UI | index.html, style.css, dashboard.js | Browser-based exploration and scenario interaction |
| Supporting reports | DOCX files | Preprocessing, feature-engineering and model reports |

## Dashboard interpretation

The dashboard includes overview KPIs, model benchmarks, a risk simulator, district profiles, a test-sample inspector and feature-engineering content. It is a presentation and exploration layer over repository data. A simulator does not imply that live rainfall, satellite or field-sensor feeds are connected.

## Design constraints

- Train and test tables are stored as separate artifacts.
- The Random Forest notebook asserts that train and test feature columns match before fitting.
- Dashboard metrics must be reconciled with notebook outputs before being treated as a canonical benchmark.
- Geographic generalization requires spatially appropriate validation; the current split should not be assumed to establish it.
