# Model Card: GeoSlope-AI Landslide Susceptibility System

Following the Google Research Model Card framework (*Mitchell et al., 2019, "Model Cards for Model Reporting"*), this document outlines the architecture, performance characteristics, intended use cases, empirical validation, and operational constraints of the GeoSlope-AI predictive models.

---

## 1. Model Details

### 1.1 Overview
* **Model Name:** GeoSlope-AI Geotechnical Hazard Classifier (Production Champion: XGBoost; Benchmark Ensemble: Random Forest).
* **Developers:** Ritigya Mishra, Khushi Dang, Shruti Pandey (Department of Computer Science & Engineering - AIML, UPES).
* **Release Date:** October 2026.
* **Model Type:** Binary Supervised Classification (Supervised Machine Learning on Georeferenced Tabular Data).
* **License:** MIT License.
* **Primary Champion Pipeline:** Extreme Gradient Boosting (`XGBClassifier`) with regularized tree ensembles.
* **Benchmark Comparison Pipelines:** 
  * Random Forest (`RandomForestClassifier`, 200 trees, bootstrap aggregation)
  * Support Vector Machine (`SVC`, Radial Basis Function Kernel)
  * Logistic Regression (`LogisticRegression`, $L_2$-regularized, standardized linear baseline)

### 1.2 Hyperparameters & Configuration

```python
# Production Champion: XGBoost
XGBClassifier(
    n_estimators=300,
    learning_rate=0.05,
    max_depth=5,
    subsample=0.8,
    colsample_bytree=0.8,
    scale_pos_weight=0.891,
    objective="binary:logistic",
    eval_metric="logloss",
    random_state=42
)

# Benchmark Ensemble: Random Forest
RandomForestClassifier(
    n_estimators=200,
    max_depth=None,
    min_samples_split=2,
    min_samples_leaf=1,
    class_weight="balanced",
    random_state=42,
    n_jobs=-1
)
```

---

## 2. Intended Use & Deployment Scope

### 2.1 Primary Intended Applications
* **Geotechnical Early Warning Support:** First-pass screening for slope failure susceptibility across the 12 districts of Himachal Pradesh (Western Himalayas).
* **Infrastructure Risk Mitigation:** Planning and prioritizing stabilization interventions (e.g., gabion retaining walls, horizontal drainage borings, wire-mesh drape systems) along high-risk transport corridors (e.g., NH-05, NH-21).
* **Interactive Decision-Support:** Integration with the client-side GeoRisk Himachal dashboard for real-time risk simulation under hypothetical rainfall triggers and terrain modifications.

### 2.2 Out-of-Scope & Misuse
* **Deterministic Event Timing:** GeoSlope-AI predicts *spatial susceptibility* ($P(\text{Landslide} = 1 \mid \mathbf{x})$), **not** the exact minute, hour, or day of slope failure initiation.
* **Micro-scale Soil Mechanics Replacement:** Cannot substitute for on-site geotechnical boreholes, inclinometer arrays, piezometer monitoring, or finite-element limit equilibrium slope stability analyses (e.g., Bishop, Janbu).
* **Direct Transfer to Dissimilar Geologies:** The model is calibrated to Western Himalayan lithology and monsoon hydro-climatology; deployment in non-Himalayan regimes without local domain fine-tuning is strictly out-of-scope.

---

## 3. Training & Evaluation Data

* **Study Area:** Himachal Pradesh, India (covering all 12 administrative districts: Bilaspur, Chamba, Hamirpur, Kangra, Kinnaur, Kullu, Lahaul & Spiti, Mandi, Shimla, Sirmaur, Solan, Una).
* **Data Sources:** 
  * Historical landslide inventory compiled by the Geological Survey of India (GSI).
  * Mendeley Data: *A Geo-Environmental Feature Dataset for Landslide Susceptibility Modelling in Himachal Pradesh, India*.
  * Satellite remote sensing layers extracted via Google Earth Engine (SRTM 30m DEM, ESA WorldCover 2020, CHIRPS precipitation, Landsat/Sentinel NDVI).
* **Sample Size:** 12,409 georeferenced records.
  * **Landslide Points (Class 1):** 6,531 observations (52.6%).
  * **Non-Landslide Pseudo-Absence Points (Class 0):** 5,878 observations (47.4%).
* **Partition Protocol (Zero Data Leakage):**
  * **Training Split:** 9,945 rows (80.14%) — used for scaler fitting, target encoding, and hyperparameter cross-validation.
  * **Held-out Test Split:** 2,464 rows (19.86%) — completely isolated prior to feature scaling; evaluated once.

---

## 4. Quantitative Evaluation

### 4.1 Comparative Benchmark Matrix (Held-out Test Partition: $N = 2,464$)

| Model Architecture | Test Accuracy | Precision | Recall (Sensitivity) | Specificity | F1-Score | ROC-AUC | PR-AUC (Average Precision) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **XGBoost (Production Champion)** | **81.86%** | **80.22%** | **86.08%** | 77.35% | **0.8305** | **0.9026** | **0.9019** |
| **Random Forest (Ensemble)** | 81.25% | 80.18% | 84.59% | **77.68%** | 0.8233 | 0.8936 | 0.8920 |
| **Logistic Regression (Baseline)** | 78.65% | 76.49% | 84.67% | 72.23% | 0.8037 | 0.8681 | 0.8678 |
| **Support Vector Machine (RBF)** | 78.41% | 76.39% | 84.20% | 72.23% | 0.8010 | 0.8649 | 0.8556 |

### 4.2 Confusion Matrix (XGBoost Champion on Test Split)

$$\begin{pmatrix} \text{TN: } 922 & \text{FP: } 270 \\ \text{FN: } 177 & \text{TP: } 1,095 \end{pmatrix}$$

* **True Positive Rate (Recall):** $1,095 / (1,095 + 177) = 86.08\%$
* **False Positive Rate:** $270 / (922 + 270) = 22.65\%$
* **Matthews Correlation Coefficient (MCC):** $\approx 0.638$
* **Balanced Accuracy:** $81.72\%$

### 4.3 Life-Safety Cost Matrix Optimization
In natural disaster risk mitigation, the asymmetric cost of errors governs metric selection:
* **Cost of False Negative ($C_{\text{FN}}$):** Catastrophic slope failure without evacuation warning; potential loss of human life and blocked arterial transit corridors.
* **Cost of False Positive ($C_{\text{FP}}$):** Preventative engineering inspection, precautionary slope tarping, or temporary traffic diversion.
* **Design Decision:** The system prioritizes **High Recall ($\ge 86\%$)** and **PR-AUC ($\ge 0.90$)** over raw accuracy alone to ensure minimal missed occurrences.

---

## 5. Feature Attribution & Interpretability

Feature importance analysis derived from Gini impurity and gain metrics highlights the dominant physical mechanisms driving slope destabilization:

1. **Slope Gradient ($\theta$) & $\text{Slope}^2$:** Dominant shear stress driver ($> 28\%$ aggregate relative importance).
2. **Cumulative Monsoon Rainfall:** Pore-water pressure trigger reducing effective normal stress ($\sigma' = \sigma - u$).
3. **Distance to Drainage Channels ($\ln(1 + d_{\text{river}})$):** Toe-erosion by fluvial incisions debuttressing steep valley walls.
4. **Normalized Difference Vegetation Index (NDVI):** Root mechanical cohesion proxy and hydrological interception capacity.
5. **Circular Aspect Components ($\sin(\text{Aspect}), \cos(\text{Aspect})$):** Solar insolation, prevailing monsoon windward/leeward moisture exposure.
6. **Composite Hazard Index:** Multi-variable standardized synergy index $\frac{1}{3}(z_{\text{slope}} + z_{\text{rainfall}} + z_{\text{elevation}})$.

---

## 6. Ethical, Environmental & Operational Considerations

* **Environmental Impact:** All tree ensembles and baselines were trained on standard multi-core commodity CPUs without requiring multi-GPU clusters; total carbon emissions of model training $< 0.05\text{ kg CO}_2\text{eq}$.
* **Fairness & Geographic Representation:** Pseudo-absences were generated using uniform spatial sampling across all 12 districts to prevent district-level bias or over-representation of frequently photographed tourist highways.
* **Human-in-the-Loop Safeguard:** Model output probabilities are strictly mapped to advisory recommendations (Level 1: Minimal Hazard to Level 4: Severe Geotechnical Failure Imminent) intended to inform qualified geological engineers, never to execute autonomous public actions without human verification.
