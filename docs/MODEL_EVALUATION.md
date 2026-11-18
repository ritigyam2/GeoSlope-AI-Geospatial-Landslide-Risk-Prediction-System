# Model evaluation and metric provenance

## Why this page exists

The repository contains multiple evaluation snapshots that do not agree. A technically credible project should identify the source of each figure instead of combining results from different runs into one leaderboard.

All percentages below refer to the 2,464-row test split where the source explicitly indicates that split. These are reported artifacts, not a fresh rerun performed during this documentation update.

## Random Forest: three recorded snapshots

| Source | Accuracy | Precision | Recall | F1 | ROC-AUC | PR-AUC |
|---|---:|---:|---:|---:|---:|---:|
| Executed random_forest.ipynb output | 80.68% | 80.47% | 82.63% | 81.54% | 0.8930 | 0.8895 |
| Dashboard data (dashboard_data.js) | 81.25% | 80.18% | 84.59% | 82.33% | 0.8936 | 0.8920 |
| Project presentation | 81.09% | 80.26% | 84.04% | 82.10% | 0.8936 | 0.8920 |

The executed notebook also records this confusion matrix (rows: actual class 0 / class 1; columns: predicted class 0 / class 1):

~~~text
                 Predicted 0   Predicted 1
Actual 0              937          255
Actual 1              221         1051
~~~

The presentation's Random Forest confusion-matrix interpretation reports 929 true negatives, 263 false positives, 203 false negatives and 1,069 true positives. These values do not match the executed notebook output.

## Other model snapshots

| Model | Executed notebook evidence | Presentation comparison table | Dashboard data |
|---|---|---|---|
| Logistic Regression | Notebook is present; inspected saved output does not expose a complete evaluation block | Accuracy 78.69%; F1 80.20%; ROC-AUC 0.8695; PR-AUC 0.8660 | Accuracy 78.65%; F1 80.37%; ROC-AUC 0.8681; PR-AUC 0.8678 |
| RBF SVM | Accuracy 78.41%; precision 76.39%; recall 84.20%; F1 80.10%; ROC-AUC 0.8649; PR-AUC 0.8556 | Accuracy 80.44%; precision 80.12%; recall 83.19%; F1 81.63%; ROC-AUC 0.8865; PR-AUC 0.8837 | Accuracy 78.41%; dashboard metadata contains a separate metric snapshot |
| XGBoost | Notebook is present, but saved cells do not contain a completed evaluation output | Accuracy 81.17%; precision 81.19%; recall 83.22%; F1 82.19%; ROC-AUC 0.8994; PR-AUC 0.8984 | Accuracy 81.86%; precision 80.22%; recall 86.08%; F1 83.05%; ROC-AUC 0.9026; PR-AUC 0.9019 |

The presentation also contains a separate accuracy chart with values that differ from its consolidated comparison table. Do not treat the presentation's model table as a single canonical source without a rerun.

## Recommended reconciliation procedure

1. Freeze the exact train/test CSV files used by each model.
2. Confirm that every notebook reads the same engineered train/test files.
3. Re-run all four notebooks from clean kernels with the same target definition and test rows.
4. Compute metrics from the same prediction arrays and positive-class probability arrays.
5. Save the resulting metrics and confusion matrices in one versioned evaluation artifact.
6. Update dashboard metrics only after that artifact is approved.
7. Record model parameters, package versions, data hashes and run date.

## Interpretation

The Random Forest notebook's saved output is the only complete Random Forest metric block with an execution output in the inspected notebook. The SVM notebook also contains an explicit evaluation output. Dashboard and presentation values should remain labelled by provenance until a common rerun resolves the differences.

Do not claim that one classifier is definitively best based on the mixed snapshots above.
