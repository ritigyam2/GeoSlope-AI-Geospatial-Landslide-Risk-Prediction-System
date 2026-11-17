// Auto-generated project data for Landslide Susceptibility Dashboard
const DASHBOARD_DATA = {
    projectMeta: {
        title: "Landslide Prediction and Risk Assessment",
        subtitle: "Machine Learning Geotechnical Early Warning System",
        studyArea: "Himachal Pradesh, Western Himalayas, India",
        totalSamples: 12409,
        trainSamples: 9945,
        testSamples: 2464,
        featuresEngineered: 47,
        baselineFeatures: 17,
        classDistribution: {
            landslideCount: 6531,
            nonLandslideCount: 5878,
            trainPositiveRatio: 0.5288,
            testPositiveRatio: 0.5162
        }
    },
    models: {
  "xgboost": {
    "name": "XGBoost",
    "type": "Gradient Boosted Decision Trees",
    "status": "Production Champion",
    "description": "300 trees, learning rate 0.05, max depth 5, subsample 0.8. Demonstrates highest sensitivity and threshold discrimination.",
    "accuracy": 0.8186,
    "precision": 0.8022,
    "recall": 0.8608,
    "specificity": 0.7735,
    "f1": 0.8305,
    "roc_auc": 0.9026,
    "pr_auc": 0.9019,
    "cm": {
      "tn": 922,
      "fp": 270,
      "fn": 177,
      "tp": 1095
    },
    "roc_curve": [
      {
        "fpr": 0.0,
        "tpr": 0.0
      },
      {
        "fpr": 0.0,
        "tpr": 0.0739
      },
      {
        "fpr": 0.0008,
        "tpr": 0.1682
      },
      {
        "fpr": 0.005,
        "tpr": 0.2209
      },
      {
        "fpr": 0.0117,
        "tpr": 0.2909
      },
      {
        "fpr": 0.0168,
        "tpr": 0.32
      },
      {
        "fpr": 0.0201,
        "tpr": 0.3687
      },
      {
        "fpr": 0.026,
        "tpr": 0.4119
      },
      {
        "fpr": 0.0302,
        "tpr": 0.4395
      },
      {
        "fpr": 0.0352,
        "tpr": 0.4788
      },
      {
        "fpr": 0.0428,
        "tpr": 0.4961
      },
      {
        "fpr": 0.052,
        "tpr": 0.5157
      },
      {
        "fpr": 0.0587,
        "tpr": 0.5354
      },
      {
        "fpr": 0.0654,
        "tpr": 0.5605
      },
      {
        "fpr": 0.0747,
        "tpr": 0.5841
      },
      {
        "fpr": 0.0847,
        "tpr": 0.6148
      },
      {
        "fpr": 0.0931,
        "tpr": 0.6399
      },
      {
        "fpr": 0.1015,
        "tpr": 0.6564
      },
      {
        "fpr": 0.1099,
        "tpr": 0.6722
      },
      {
        "fpr": 0.12,
        "tpr": 0.6903
      },
      {
        "fpr": 0.13,
        "tpr": 0.7099
      },
      {
        "fpr": 0.1393,
        "tpr": 0.7217
      },
      {
        "fpr": 0.1468,
        "tpr": 0.7453
      },
      {
        "fpr": 0.156,
        "tpr": 0.7736
      },
      {
        "fpr": 0.1653,
        "tpr": 0.7862
      },
      {
        "fpr": 0.177,
        "tpr": 0.8042
      },
      {
        "fpr": 0.1862,
        "tpr": 0.816
      },
      {
        "fpr": 0.1963,
        "tpr": 0.8294
      },
      {
        "fpr": 0.2055,
        "tpr": 0.842
      },
      {
        "fpr": 0.2223,
        "tpr": 0.8553
      },
      {
        "fpr": 0.2315,
        "tpr": 0.864
      },
      {
        "fpr": 0.245,
        "tpr": 0.8758
      },
      {
        "fpr": 0.2592,
        "tpr": 0.8852
      },
      {
        "fpr": 0.276,
        "tpr": 0.8947
      },
      {
        "fpr": 0.2919,
        "tpr": 0.9088
      },
      {
        "fpr": 0.302,
        "tpr": 0.919
      },
      {
        "fpr": 0.3163,
        "tpr": 0.93
      },
      {
        "fpr": 0.3356,
        "tpr": 0.9387
      },
      {
        "fpr": 0.3591,
        "tpr": 0.9536
      },
      {
        "fpr": 0.3842,
        "tpr": 0.9631
      },
      {
        "fpr": 0.4102,
        "tpr": 0.9693
      },
      {
        "fpr": 0.4488,
        "tpr": 0.9788
      },
      {
        "fpr": 0.4899,
        "tpr": 0.9851
      },
      {
        "fpr": 0.552,
        "tpr": 0.9914
      },
      {
        "fpr": 1.0,
        "tpr": 1.0
      }
    ],
    "pr_curve": [
      {
        "recall": 1.0,
        "precision": 0.5162
      },
      {
        "recall": 1.0,
        "precision": 0.5276
      },
      {
        "recall": 1.0,
        "precision": 0.5394
      },
      {
        "recall": 1.0,
        "precision": 0.5521
      },
      {
        "recall": 1.0,
        "precision": 0.5651
      },
      {
        "recall": 1.0,
        "precision": 0.5787
      },
      {
        "recall": 1.0,
        "precision": 0.5933
      },
      {
        "recall": 0.9992,
        "precision": 0.6078
      },
      {
        "recall": 0.9961,
        "precision": 0.6226
      },
      {
        "recall": 0.9937,
        "precision": 0.6381
      },
      {
        "recall": 0.9921,
        "precision": 0.6546
      },
      {
        "recall": 0.989,
        "precision": 0.6713
      },
      {
        "recall": 0.9835,
        "precision": 0.687
      },
      {
        "recall": 0.9788,
        "precision": 0.7042
      },
      {
        "recall": 0.9662,
        "precision": 0.7179
      },
      {
        "recall": 0.9575,
        "precision": 0.7346
      },
      {
        "recall": 0.9418,
        "precision": 0.7483
      },
      {
        "recall": 0.9277,
        "precision": 0.7633
      },
      {
        "recall": 0.9064,
        "precision": 0.7743
      },
      {
        "recall": 0.8844,
        "precision": 0.7862
      },
      {
        "recall": 0.8632,
        "precision": 0.7997
      },
      {
        "recall": 0.842,
        "precision": 0.8138
      },
      {
        "recall": 0.8137,
        "precision": 0.824
      },
      {
        "recall": 0.7869,
        "precision": 0.8321
      },
      {
        "recall": 0.7579,
        "precision": 0.8441
      },
      {
        "recall": 0.7233,
        "precision": 0.8471
      },
      {
        "recall": 0.6973,
        "precision": 0.8603
      },
      {
        "recall": 0.6651,
        "precision": 0.8695
      },
      {
        "recall": 0.6336,
        "precision": 0.8799
      },
      {
        "recall": 0.603,
        "precision": 0.8908
      },
      {
        "recall": 0.5676,
        "precision": 0.8958
      },
      {
        "recall": 0.5346,
        "precision": 0.9091
      },
      {
        "recall": 0.5031,
        "precision": 0.9222
      },
      {
        "recall": 0.467,
        "precision": 0.9384
      },
      {
        "recall": 0.4222,
        "precision": 0.9405
      },
      {
        "recall": 0.3836,
        "precision": 0.9457
      },
      {
        "recall": 0.3443,
        "precision": 0.9542
      },
      {
        "recall": 0.3011,
        "precision": 0.9551
      },
      {
        "recall": 0.2665,
        "precision": 0.9769
      },
      {
        "recall": 0.2217,
        "precision": 0.9792
      },
      {
        "recall": 0.1792,
        "precision": 0.987
      },
      {
        "recall": 0.1384,
        "precision": 0.9944
      },
      {
        "recall": 0.0928,
        "precision": 1.0
      },
      {
        "recall": 0.0448,
        "precision": 1.0
      },
      {
        "recall": 0.0,
        "precision": 1.0
      }
    ]
  },
  "random_forest": {
    "name": "Random Forest",
    "type": "Bagged Decision Tree Ensemble",
    "status": "Benchmark Model",
    "description": "200 trees, balanced class weights, Gini criterion. Excellent robust baseline without feature scaling required.",
    "accuracy": 0.8125,
    "precision": 0.8018,
    "recall": 0.8459,
    "specificity": 0.7768,
    "f1": 0.8233,
    "roc_auc": 0.8936,
    "pr_auc": 0.892,
    "cm": {
      "tn": 926,
      "fp": 266,
      "fn": 196,
      "tp": 1076
    },
    "roc_curve": [
      {
        "fpr": 0.0,
        "tpr": 0.0
      },
      {
        "fpr": 0.0,
        "tpr": 0.059
      },
      {
        "fpr": 0.0008,
        "tpr": 0.1242
      },
      {
        "fpr": 0.0067,
        "tpr": 0.2068
      },
      {
        "fpr": 0.0092,
        "tpr": 0.2524
      },
      {
        "fpr": 0.0185,
        "tpr": 0.3255
      },
      {
        "fpr": 0.0243,
        "tpr": 0.3719
      },
      {
        "fpr": 0.0319,
        "tpr": 0.4277
      },
      {
        "fpr": 0.0394,
        "tpr": 0.452
      },
      {
        "fpr": 0.0562,
        "tpr": 0.5157
      },
      {
        "fpr": 0.0671,
        "tpr": 0.5377
      },
      {
        "fpr": 0.078,
        "tpr": 0.5684
      },
      {
        "fpr": 0.0847,
        "tpr": 0.6046
      },
      {
        "fpr": 0.0982,
        "tpr": 0.6305
      },
      {
        "fpr": 0.1082,
        "tpr": 0.6643
      },
      {
        "fpr": 0.1225,
        "tpr": 0.6958
      },
      {
        "fpr": 0.1393,
        "tpr": 0.7178
      },
      {
        "fpr": 0.1527,
        "tpr": 0.7303
      },
      {
        "fpr": 0.1628,
        "tpr": 0.7649
      },
      {
        "fpr": 0.177,
        "tpr": 0.7767
      },
      {
        "fpr": 0.1921,
        "tpr": 0.8027
      },
      {
        "fpr": 0.2064,
        "tpr": 0.8168
      },
      {
        "fpr": 0.2173,
        "tpr": 0.8373
      },
      {
        "fpr": 0.2282,
        "tpr": 0.8522
      },
      {
        "fpr": 0.2534,
        "tpr": 0.8671
      },
      {
        "fpr": 0.276,
        "tpr": 0.8805
      },
      {
        "fpr": 0.2919,
        "tpr": 0.8892
      },
      {
        "fpr": 0.3045,
        "tpr": 0.9017
      },
      {
        "fpr": 0.3205,
        "tpr": 0.9143
      },
      {
        "fpr": 0.3364,
        "tpr": 0.919
      },
      {
        "fpr": 0.3473,
        "tpr": 0.9292
      },
      {
        "fpr": 0.3725,
        "tpr": 0.9387
      },
      {
        "fpr": 0.3842,
        "tpr": 0.9442
      },
      {
        "fpr": 0.406,
        "tpr": 0.956
      },
      {
        "fpr": 0.4279,
        "tpr": 0.9646
      },
      {
        "fpr": 0.4497,
        "tpr": 0.9678
      },
      {
        "fpr": 0.4732,
        "tpr": 0.9709
      },
      {
        "fpr": 0.4899,
        "tpr": 0.9803
      },
      {
        "fpr": 0.5252,
        "tpr": 0.9858
      },
      {
        "fpr": 0.557,
        "tpr": 0.9874
      },
      {
        "fpr": 0.6049,
        "tpr": 0.9898
      },
      {
        "fpr": 0.6426,
        "tpr": 0.9945
      },
      {
        "fpr": 0.7039,
        "tpr": 0.9992
      },
      {
        "fpr": 0.7718,
        "tpr": 1.0
      },
      {
        "fpr": 1.0,
        "tpr": 1.0
      }
    ],
    "pr_curve": [
      {
        "recall": 1.0,
        "precision": 0.5162
      },
      {
        "recall": 1.0,
        "precision": 0.5737
      },
      {
        "recall": 0.9992,
        "precision": 0.6024
      },
      {
        "recall": 0.9976,
        "precision": 0.6172
      },
      {
        "recall": 0.9898,
        "precision": 0.6359
      },
      {
        "recall": 0.989,
        "precision": 0.6505
      },
      {
        "recall": 0.9858,
        "precision": 0.6649
      },
      {
        "recall": 0.9819,
        "precision": 0.6751
      },
      {
        "recall": 0.9725,
        "precision": 0.6849
      },
      {
        "recall": 0.9693,
        "precision": 0.6939
      },
      {
        "recall": 0.9662,
        "precision": 0.7019
      },
      {
        "recall": 0.9607,
        "precision": 0.7117
      },
      {
        "recall": 0.9481,
        "precision": 0.7209
      },
      {
        "recall": 0.9395,
        "precision": 0.7273
      },
      {
        "recall": 0.934,
        "precision": 0.7347
      },
      {
        "recall": 0.9206,
        "precision": 0.744
      },
      {
        "recall": 0.9143,
        "precision": 0.7508
      },
      {
        "recall": 0.9041,
        "precision": 0.7596
      },
      {
        "recall": 0.8907,
        "precision": 0.7635
      },
      {
        "recall": 0.8813,
        "precision": 0.7704
      },
      {
        "recall": 0.8703,
        "precision": 0.7823
      },
      {
        "recall": 0.8538,
        "precision": 0.7939
      },
      {
        "recall": 0.8459,
        "precision": 0.8018
      },
      {
        "recall": 0.8223,
        "precision": 0.8077
      },
      {
        "recall": 0.8066,
        "precision": 0.8162
      },
      {
        "recall": 0.783,
        "precision": 0.8198
      },
      {
        "recall": 0.7665,
        "precision": 0.8312
      },
      {
        "recall": 0.7398,
        "precision": 0.8357
      },
      {
        "recall": 0.7193,
        "precision": 0.8433
      },
      {
        "recall": 0.7013,
        "precision": 0.8552
      },
      {
        "recall": 0.6643,
        "precision": 0.8676
      },
      {
        "recall": 0.6415,
        "precision": 0.8718
      },
      {
        "recall": 0.6046,
        "precision": 0.8839
      },
      {
        "recall": 0.577,
        "precision": 0.8865
      },
      {
        "recall": 0.5377,
        "precision": 0.8953
      },
      {
        "recall": 0.5157,
        "precision": 0.9073
      },
      {
        "recall": 0.4709,
        "precision": 0.9215
      },
      {
        "recall": 0.4316,
        "precision": 0.9353
      },
      {
        "recall": 0.3923,
        "precision": 0.938
      },
      {
        "recall": 0.3381,
        "precision": 0.9513
      },
      {
        "recall": 0.2744,
        "precision": 0.9562
      },
      {
        "recall": 0.2146,
        "precision": 0.9681
      },
      {
        "recall": 0.1564,
        "precision": 0.9851
      },
      {
        "recall": 0.0794,
        "precision": 1.0
      },
      {
        "recall": 0.0,
        "precision": 1.0
      }
    ]
  },
  "logistic_regression": {
    "name": "Logistic Regression",
    "type": "Standardized Linear Classifier",
    "status": "Interpretable Baseline",
    "description": "StandardScaler pipeline with L2 regularization (C=0.5). Gained +4.3% AUC directly from non-linear feature engineering.",
    "accuracy": 0.7865,
    "precision": 0.7649,
    "recall": 0.8467,
    "specificity": 0.7223,
    "f1": 0.8037,
    "roc_auc": 0.8681,
    "pr_auc": 0.8678,
    "cm": {
      "tn": 861,
      "fp": 331,
      "fn": 195,
      "tp": 1077
    },
    "roc_curve": [
      {
        "fpr": 0.0,
        "tpr": 0.0
      },
      {
        "fpr": 0.0008,
        "tpr": 0.0967
      },
      {
        "fpr": 0.005,
        "tpr": 0.1572
      },
      {
        "fpr": 0.0084,
        "tpr": 0.2233
      },
      {
        "fpr": 0.0143,
        "tpr": 0.2704
      },
      {
        "fpr": 0.0218,
        "tpr": 0.3105
      },
      {
        "fpr": 0.0285,
        "tpr": 0.3318
      },
      {
        "fpr": 0.0369,
        "tpr": 0.3616
      },
      {
        "fpr": 0.0436,
        "tpr": 0.3986
      },
      {
        "fpr": 0.0503,
        "tpr": 0.423
      },
      {
        "fpr": 0.0604,
        "tpr": 0.4371
      },
      {
        "fpr": 0.0654,
        "tpr": 0.4631
      },
      {
        "fpr": 0.0721,
        "tpr": 0.4953
      },
      {
        "fpr": 0.0805,
        "tpr": 0.522
      },
      {
        "fpr": 0.0898,
        "tpr": 0.5432
      },
      {
        "fpr": 0.1015,
        "tpr": 0.5747
      },
      {
        "fpr": 0.1107,
        "tpr": 0.603
      },
      {
        "fpr": 0.1233,
        "tpr": 0.6219
      },
      {
        "fpr": 0.1334,
        "tpr": 0.6384
      },
      {
        "fpr": 0.1443,
        "tpr": 0.6541
      },
      {
        "fpr": 0.156,
        "tpr": 0.6753
      },
      {
        "fpr": 0.1653,
        "tpr": 0.6942
      },
      {
        "fpr": 0.1753,
        "tpr": 0.7138
      },
      {
        "fpr": 0.1862,
        "tpr": 0.7343
      },
      {
        "fpr": 0.2005,
        "tpr": 0.7563
      },
      {
        "fpr": 0.2131,
        "tpr": 0.772
      },
      {
        "fpr": 0.2232,
        "tpr": 0.7854
      },
      {
        "fpr": 0.2366,
        "tpr": 0.8058
      },
      {
        "fpr": 0.25,
        "tpr": 0.8231
      },
      {
        "fpr": 0.2659,
        "tpr": 0.8349
      },
      {
        "fpr": 0.2802,
        "tpr": 0.8483
      },
      {
        "fpr": 0.2995,
        "tpr": 0.8585
      },
      {
        "fpr": 0.3188,
        "tpr": 0.8726
      },
      {
        "fpr": 0.3372,
        "tpr": 0.8805
      },
      {
        "fpr": 0.3549,
        "tpr": 0.8986
      },
      {
        "fpr": 0.3691,
        "tpr": 0.9096
      },
      {
        "fpr": 0.3918,
        "tpr": 0.923
      },
      {
        "fpr": 0.4136,
        "tpr": 0.9371
      },
      {
        "fpr": 0.4329,
        "tpr": 0.9465
      },
      {
        "fpr": 0.4631,
        "tpr": 0.9544
      },
      {
        "fpr": 0.4916,
        "tpr": 0.9631
      },
      {
        "fpr": 0.5319,
        "tpr": 0.9717
      },
      {
        "fpr": 0.5864,
        "tpr": 0.9819
      },
      {
        "fpr": 0.6753,
        "tpr": 0.9906
      },
      {
        "fpr": 1.0,
        "tpr": 1.0
      }
    ],
    "pr_curve": [
      {
        "recall": 1.0,
        "precision": 0.5162
      },
      {
        "recall": 0.9984,
        "precision": 0.5268
      },
      {
        "recall": 0.9976,
        "precision": 0.5382
      },
      {
        "recall": 0.9976,
        "precision": 0.5508
      },
      {
        "recall": 0.9976,
        "precision": 0.5637
      },
      {
        "recall": 0.9976,
        "precision": 0.5773
      },
      {
        "recall": 0.9937,
        "precision": 0.5904
      },
      {
        "recall": 0.9921,
        "precision": 0.6044
      },
      {
        "recall": 0.9866,
        "precision": 0.6167
      },
      {
        "recall": 0.9827,
        "precision": 0.631
      },
      {
        "recall": 0.9796,
        "precision": 0.6463
      },
      {
        "recall": 0.9717,
        "precision": 0.6606
      },
      {
        "recall": 0.9631,
        "precision": 0.6738
      },
      {
        "recall": 0.9536,
        "precision": 0.6873
      },
      {
        "recall": 0.9434,
        "precision": 0.7013
      },
      {
        "recall": 0.9285,
        "precision": 0.7127
      },
      {
        "recall": 0.9127,
        "precision": 0.7247
      },
      {
        "recall": 0.8852,
        "precision": 0.7316
      },
      {
        "recall": 0.8703,
        "precision": 0.745
      },
      {
        "recall": 0.853,
        "precision": 0.7598
      },
      {
        "recall": 0.8341,
        "precision": 0.7722
      },
      {
        "recall": 0.8113,
        "precision": 0.7854
      },
      {
        "recall": 0.7799,
        "precision": 0.7923
      },
      {
        "recall": 0.7547,
        "precision": 0.804
      },
      {
        "recall": 0.728,
        "precision": 0.8116
      },
      {
        "recall": 0.6942,
        "precision": 0.8176
      },
      {
        "recall": 0.6619,
        "precision": 0.8207
      },
      {
        "recall": 0.6392,
        "precision": 0.8364
      },
      {
        "recall": 0.614,
        "precision": 0.8508
      },
      {
        "recall": 0.5802,
        "precision": 0.8552
      },
      {
        "recall": 0.5503,
        "precision": 0.8642
      },
      {
        "recall": 0.5197,
        "precision": 0.8767
      },
      {
        "recall": 0.4811,
        "precision": 0.8793
      },
      {
        "recall": 0.4434,
        "precision": 0.8854
      },
      {
        "recall": 0.4119,
        "precision": 0.9003
      },
      {
        "recall": 0.3734,
        "precision": 0.91
      },
      {
        "recall": 0.3365,
        "precision": 0.9244
      },
      {
        "recall": 0.3011,
        "precision": 0.941
      },
      {
        "recall": 0.2634,
        "precision": 0.9599
      },
      {
        "recall": 0.2233,
        "precision": 0.966
      },
      {
        "recall": 0.1777,
        "precision": 0.9658
      },
      {
        "recall": 0.1352,
        "precision": 0.9773
      },
      {
        "recall": 0.0936,
        "precision": 0.9917
      },
      {
        "recall": 0.0472,
        "precision": 1.0
      },
      {
        "recall": 0.0,
        "precision": 1.0
      }
    ]
  },
  "svm": {
    "name": "Support Vector Machine",
    "type": "Non-linear Kernel Classifier",
    "status": "Kernel Baseline",
    "description": "RBF Kernel (C=1.0, gamma='scale') with 5-fold Platt scaling probability calibration.",
    "accuracy": 0.7841,
    "precision": 0.7639,
    "recall": 0.842,
    "specificity": 0.7223,
    "f1": 0.801,
    "roc_auc": 0.8649,
    "pr_auc": 0.8556,
    "cm": {
      "tn": 861,
      "fp": 331,
      "fn": 201,
      "tp": 1071
    },
    "roc_curve": [
      {
        "fpr": 0.0,
        "tpr": 0.0
      },
      {
        "fpr": 0.0017,
        "tpr": 0.0542
      },
      {
        "fpr": 0.005,
        "tpr": 0.1171
      },
      {
        "fpr": 0.0109,
        "tpr": 0.1572
      },
      {
        "fpr": 0.0176,
        "tpr": 0.2005
      },
      {
        "fpr": 0.0243,
        "tpr": 0.2476
      },
      {
        "fpr": 0.031,
        "tpr": 0.2987
      },
      {
        "fpr": 0.0369,
        "tpr": 0.3239
      },
      {
        "fpr": 0.0436,
        "tpr": 0.3538
      },
      {
        "fpr": 0.0495,
        "tpr": 0.4064
      },
      {
        "fpr": 0.0579,
        "tpr": 0.4513
      },
      {
        "fpr": 0.068,
        "tpr": 0.4851
      },
      {
        "fpr": 0.0772,
        "tpr": 0.5079
      },
      {
        "fpr": 0.0822,
        "tpr": 0.5291
      },
      {
        "fpr": 0.0898,
        "tpr": 0.559
      },
      {
        "fpr": 0.099,
        "tpr": 0.577
      },
      {
        "fpr": 0.1107,
        "tpr": 0.6053
      },
      {
        "fpr": 0.1242,
        "tpr": 0.6313
      },
      {
        "fpr": 0.1342,
        "tpr": 0.6509
      },
      {
        "fpr": 0.146,
        "tpr": 0.6675
      },
      {
        "fpr": 0.1619,
        "tpr": 0.6895
      },
      {
        "fpr": 0.1703,
        "tpr": 0.7146
      },
      {
        "fpr": 0.1812,
        "tpr": 0.7382
      },
      {
        "fpr": 0.1938,
        "tpr": 0.75
      },
      {
        "fpr": 0.2064,
        "tpr": 0.7665
      },
      {
        "fpr": 0.219,
        "tpr": 0.7791
      },
      {
        "fpr": 0.2324,
        "tpr": 0.7917
      },
      {
        "fpr": 0.2466,
        "tpr": 0.8058
      },
      {
        "fpr": 0.2626,
        "tpr": 0.8255
      },
      {
        "fpr": 0.2752,
        "tpr": 0.8381
      },
      {
        "fpr": 0.281,
        "tpr": 0.8514
      },
      {
        "fpr": 0.2945,
        "tpr": 0.864
      },
      {
        "fpr": 0.3154,
        "tpr": 0.8797
      },
      {
        "fpr": 0.328,
        "tpr": 0.8899
      },
      {
        "fpr": 0.3515,
        "tpr": 0.9009
      },
      {
        "fpr": 0.3666,
        "tpr": 0.9127
      },
      {
        "fpr": 0.3834,
        "tpr": 0.9277
      },
      {
        "fpr": 0.4027,
        "tpr": 0.9379
      },
      {
        "fpr": 0.4279,
        "tpr": 0.9489
      },
      {
        "fpr": 0.4505,
        "tpr": 0.9583
      },
      {
        "fpr": 0.469,
        "tpr": 0.9654
      },
      {
        "fpr": 0.5529,
        "tpr": 0.9733
      },
      {
        "fpr": 0.6653,
        "tpr": 0.9803
      },
      {
        "fpr": 0.7802,
        "tpr": 0.9898
      },
      {
        "fpr": 1.0,
        "tpr": 1.0
      }
    ],
    "pr_curve": [
      {
        "recall": 1.0,
        "precision": 0.5162
      },
      {
        "recall": 1.0,
        "precision": 0.5276
      },
      {
        "recall": 1.0,
        "precision": 0.5394
      },
      {
        "recall": 0.9929,
        "precision": 0.5487
      },
      {
        "recall": 0.9906,
        "precision": 0.5602
      },
      {
        "recall": 0.9898,
        "precision": 0.5733
      },
      {
        "recall": 0.9866,
        "precision": 0.5859
      },
      {
        "recall": 0.9811,
        "precision": 0.598
      },
      {
        "recall": 0.9796,
        "precision": 0.6126
      },
      {
        "recall": 0.9772,
        "precision": 0.6275
      },
      {
        "recall": 0.9756,
        "precision": 0.6437
      },
      {
        "recall": 0.9693,
        "precision": 0.6583
      },
      {
        "recall": 0.9662,
        "precision": 0.6753
      },
      {
        "recall": 0.9607,
        "precision": 0.6916
      },
      {
        "recall": 0.945,
        "precision": 0.7025
      },
      {
        "recall": 0.9316,
        "precision": 0.7151
      },
      {
        "recall": 0.9127,
        "precision": 0.7261
      },
      {
        "recall": 0.8923,
        "precision": 0.7346
      },
      {
        "recall": 0.8789,
        "precision": 0.7503
      },
      {
        "recall": 0.8553,
        "precision": 0.7608
      },
      {
        "recall": 0.827,
        "precision": 0.7684
      },
      {
        "recall": 0.798,
        "precision": 0.7796
      },
      {
        "recall": 0.7759,
        "precision": 0.7915
      },
      {
        "recall": 0.7539,
        "precision": 0.8045
      },
      {
        "recall": 0.7288,
        "precision": 0.8146
      },
      {
        "recall": 0.6965,
        "precision": 0.8189
      },
      {
        "recall": 0.6682,
        "precision": 0.8277
      },
      {
        "recall": 0.6423,
        "precision": 0.8388
      },
      {
        "recall": 0.6148,
        "precision": 0.8509
      },
      {
        "recall": 0.5849,
        "precision": 0.8611
      },
      {
        "recall": 0.5519,
        "precision": 0.8677
      },
      {
        "recall": 0.5157,
        "precision": 0.8758
      },
      {
        "recall": 0.4796,
        "precision": 0.8866
      },
      {
        "recall": 0.445,
        "precision": 0.8927
      },
      {
        "recall": 0.4088,
        "precision": 0.8966
      },
      {
        "recall": 0.3664,
        "precision": 0.8944
      },
      {
        "recall": 0.3294,
        "precision": 0.9011
      },
      {
        "recall": 0.2909,
        "precision": 0.9136
      },
      {
        "recall": 0.2476,
        "precision": 0.913
      },
      {
        "recall": 0.2091,
        "precision": 0.9236
      },
      {
        "recall": 0.1698,
        "precision": 0.9351
      },
      {
        "recall": 0.1297,
        "precision": 0.9429
      },
      {
        "recall": 0.0904,
        "precision": 0.9664
      },
      {
        "recall": 0.0456,
        "precision": 0.9831
      },
      {
        "recall": 0.0,
        "precision": 1.0
      }
    ]
  }
},
    features: {
  "xgboost_top": [
    {
      "feature": "Elevation_sq",
      "importance": 0.1151
    },
    {
      "feature": "Hazard_index",
      "importance": 0.0992
    },
    {
      "feature": "LC_built_bare",
      "importance": 0.0672
    },
    {
      "feature": "Slope_bin",
      "importance": 0.0627
    },
    {
      "feature": "Elevation_log",
      "importance": 0.0551
    },
    {
      "feature": "LC_cropland",
      "importance": 0.0391
    },
    {
      "feature": "Slope_z",
      "importance": 0.038
    },
    {
      "feature": "Rainfall_bin",
      "importance": 0.033
    },
    {
      "feature": "LULC_code",
      "importance": 0.0308
    },
    {
      "feature": "NDVI_z",
      "importance": 0.0304
    },
    {
      "feature": "Elevation_z",
      "importance": 0.0282
    },
    {
      "feature": "Slope_minus_NDVI",
      "importance": 0.0277
    },
    {
      "feature": "Slope_sq",
      "importance": 0.0249
    },
    {
      "feature": "Rainfall_minus_Elev",
      "importance": 0.0241
    },
    {
      "feature": "LULC_30",
      "importance": 0.0226
    }
  ],
  "rf_top": [
    {
      "feature": "Hazard_index",
      "importance": 0.0798
    },
    {
      "feature": "Elevation_sq",
      "importance": 0.0786
    },
    {
      "feature": "Elevation_z",
      "importance": 0.0702
    },
    {
      "feature": "Elevation_log",
      "importance": 0.0675
    },
    {
      "feature": "Slope_minus_NDVI",
      "importance": 0.0488
    },
    {
      "feature": "Rainfall_minus_Elev",
      "importance": 0.0457
    },
    {
      "feature": "NDVI_z",
      "importance": 0.0418
    },
    {
      "feature": "Slope_z",
      "importance": 0.0391
    },
    {
      "feature": "Rainfall_z",
      "importance": 0.0386
    },
    {
      "feature": "Elevation_bin",
      "importance": 0.0377
    },
    {
      "feature": "NDVI_sq",
      "importance": 0.0353
    },
    {
      "feature": "Rainfall_x_NDVI",
      "importance": 0.0339
    },
    {
      "feature": "Rainfall_sq",
      "importance": 0.0286
    },
    {
      "feature": "Slope_x_NDVI",
      "importance": 0.0277
    },
    {
      "feature": "Slope_bin",
      "importance": 0.0275
    }
  ],
  "lr_top_risk_drivers": [
    {
      "feature": "Hazard_index",
      "coef": 1.5076
    },
    {
      "feature": "Slope_minus_NDVI",
      "coef": 1.4659
    },
    {
      "feature": "Rainfall_minus_Elev",
      "coef": 0.7577
    },
    {
      "feature": "NDVI_z",
      "coef": 0.6867
    },
    {
      "feature": "LULC_50",
      "coef": 0.5583
    },
    {
      "feature": "Dist_River_log",
      "coef": 0.4334
    },
    {
      "feature": "Elevation_log",
      "coef": 0.3444
    },
    {
      "feature": "Rainfall_x_NDVI",
      "coef": 0.288
    }
  ],
  "lr_top_protective": [
    {
      "feature": "Elevation_sq",
      "coef": -1.5436
    },
    {
      "feature": "Rainfall_z",
      "coef": -0.8487
    },
    {
      "feature": "LULC_te",
      "coef": -0.8323
    },
    {
      "feature": "Slope_sq",
      "coef": -0.7003
    },
    {
      "feature": "FlowAccumulation_log",
      "coef": -0.6296
    },
    {
      "feature": "Slope_bin",
      "coef": -0.5041
    },
    {
      "feature": "Elevation_z",
      "coef": -0.4592
    },
    {
      "feature": "LC_cropland",
      "coef": -0.4428
    }
  ]
},
    districts: [
  {
    "district": "Kangra",
    "risk": "High",
    "riskScore": 84,
    "landslideCount": 1420,
    "avgRainfall": "1750 mm",
    "avgSlope": "32.4\u00b0",
    "vulnerableBlocks": "Dharamshala, Baijnath, Palampur"
  },
  {
    "district": "Mandi",
    "risk": "High",
    "riskScore": 88,
    "landslideCount": 1580,
    "avgRainfall": "1520 mm",
    "avgSlope": "35.1\u00b0",
    "vulnerableBlocks": "Jogindernagar, Karsog, Seraj"
  },
  {
    "district": "Shimla",
    "risk": "High",
    "riskScore": 86,
    "landslideCount": 1390,
    "avgRainfall": "1480 mm",
    "avgSlope": "33.8\u00b0",
    "vulnerableBlocks": "Rampur, Theog, Rohru, Kotkhai"
  },
  {
    "district": "Kullu",
    "risk": "Severe",
    "riskScore": 92,
    "landslideCount": 1140,
    "avgRainfall": "1620 mm",
    "avgSlope": "38.5\u00b0",
    "vulnerableBlocks": "Manali, Banjar, Anni, Sainj"
  },
  {
    "district": "Chamba",
    "risk": "High",
    "riskScore": 82,
    "landslideCount": 980,
    "avgRainfall": "1390 mm",
    "avgSlope": "36.2\u00b0",
    "vulnerableBlocks": "Bharmour, Pangi, Dalhousie"
  },
  {
    "district": "Kinnaur",
    "risk": "Severe",
    "riskScore": 94,
    "landslideCount": 730,
    "avgRainfall": "850 mm",
    "avgSlope": "41.0\u00b0",
    "vulnerableBlocks": "Pooh, Kalpa, Nichar, Sangla"
  },
  {
    "district": "Sirmaur",
    "risk": "Moderate",
    "riskScore": 68,
    "landslideCount": 420,
    "avgRainfall": "1410 mm",
    "avgSlope": "28.3\u00b0",
    "vulnerableBlocks": "Shillai, Renuka, Paonta Sahib"
  },
  {
    "district": "Solan",
    "risk": "Moderate",
    "riskScore": 64,
    "landslideCount": 390,
    "avgRainfall": "1320 mm",
    "avgSlope": "26.5\u00b0",
    "vulnerableBlocks": "Kasauli, Kandaghat, Arki"
  },
  {
    "district": "Bilaspur",
    "risk": "Low",
    "riskScore": 48,
    "landslideCount": 210,
    "avgRainfall": "1150 mm",
    "avgSlope": "21.0\u00b0",
    "vulnerableBlocks": "Sadar, Ghumarwin, Jhandutta"
  },
  {
    "district": "Hamirpur",
    "risk": "Low",
    "riskScore": 42,
    "landslideCount": 160,
    "avgRainfall": "1180 mm",
    "avgSlope": "18.5\u00b0",
    "vulnerableBlocks": "Nadaun, Bhoranj, Barsar"
  },
  {
    "district": "Una",
    "risk": "Low",
    "riskScore": 34,
    "landslideCount": 90,
    "avgRainfall": "1050 mm",
    "avgSlope": "14.2\u00b0",
    "vulnerableBlocks": "Bangana, Haroli, Amb"
  },
  {
    "district": "Lahaul & Spiti",
    "risk": "Moderate",
    "riskScore": 72,
    "landslideCount": 490,
    "avgRainfall": "550 mm",
    "avgSlope": "39.8\u00b0",
    "vulnerableBlocks": "Keylong, Udaipur, Kaza"
  }
],
    testSamples: [
  {
    "sample_id": 1216,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.46720001101493835,
    "pred_rf": 0,
    "prob_rf": 0.325,
    "status": "False Negative (Missed)",
    "slope_z": -1.25,
    "rainfall_z": 0.67,
    "elevation_z": -0.88,
    "ndvi_z": 0.86,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -1.44,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 63,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.00989999994635582,
    "pred_rf": 0,
    "prob_rf": 0.01,
    "status": "True Negative (Safe)",
    "slope_z": -1.84,
    "rainfall_z": -0.17,
    "elevation_z": -1.16,
    "ndvi_z": 0.73,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": -2.57,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1577,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.8823999762535095,
    "pred_rf": 1,
    "prob_rf": 0.86,
    "status": "True Positive (Hit)",
    "slope_z": 1.06,
    "rainfall_z": 1.36,
    "elevation_z": -0.51,
    "ndvi_z": 0.66,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 1.75,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1097,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.42179998755455017,
    "pred_rf": 1,
    "prob_rf": 0.525,
    "status": "False Negative (Missed)",
    "slope_z": -0.5,
    "rainfall_z": 0.27,
    "elevation_z": -1.03,
    "ndvi_z": 0.92,
    "dist_river_z": -0.12,
    "flow_z": 0.26,
    "hazard_index": -0.56,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 924,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.014800000004470348,
    "pred_rf": 0,
    "prob_rf": 0.04,
    "status": "True Negative (Safe)",
    "slope_z": -0.13,
    "rainfall_z": -0.76,
    "elevation_z": 2.02,
    "ndvi_z": -1.62,
    "dist_river_z": -0.11,
    "flow_z": -0.39,
    "hazard_index": 0.88,
    "lulc_category": "Water / Snow / Wetland"
  },
  {
    "sample_id": 2178,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.8916000127792358,
    "pred_rf": 1,
    "prob_rf": 0.71,
    "status": "True Positive (Hit)",
    "slope_z": -1.1,
    "rainfall_z": 0.54,
    "elevation_z": 0.52,
    "ndvi_z": -0.4,
    "dist_river_z": -0.11,
    "flow_z": 0.01,
    "hazard_index": 0.28,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 2442,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.9272000193595886,
    "pred_rf": 1,
    "prob_rf": 0.895,
    "status": "False Positive (Alarm)",
    "slope_z": -0.8,
    "rainfall_z": -0.02,
    "elevation_z": -0.57,
    "ndvi_z": 0.02,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": -0.68,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 694,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.04149999842047691,
    "pred_rf": 0,
    "prob_rf": 0.045,
    "status": "True Negative (Safe)",
    "slope_z": 0.61,
    "rainfall_z": -0.89,
    "elevation_z": 0.71,
    "ndvi_z": 1.45,
    "dist_river_z": -0.12,
    "flow_z": -0.25,
    "hazard_index": -1.59,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 714,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.6000000238418579,
    "pred_rf": 0,
    "prob_rf": 0.4,
    "status": "False Positive (Alarm)",
    "slope_z": 2.02,
    "rainfall_z": -1.88,
    "elevation_z": 0.82,
    "ndvi_z": -1.05,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": 1.37,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 1752,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.41940000653266907,
    "pred_rf": 0,
    "prob_rf": 0.26,
    "status": "False Negative (Missed)",
    "slope_z": -0.28,
    "rainfall_z": -0.61,
    "elevation_z": -0.3,
    "ndvi_z": 0.85,
    "dist_river_z": -0.13,
    "flow_z": 0.01,
    "hazard_index": -1.29,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2173,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.43149998784065247,
    "pred_rf": 0,
    "prob_rf": 0.27,
    "status": "False Negative (Missed)",
    "slope_z": 0.02,
    "rainfall_z": -0.57,
    "elevation_z": 0.5,
    "ndvi_z": 0.66,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -1.23,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 447,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.4625000059604645,
    "pred_rf": 0,
    "prob_rf": 0.48,
    "status": "True Negative (Safe)",
    "slope_z": -0.43,
    "rainfall_z": -0.57,
    "elevation_z": -0.13,
    "ndvi_z": 0.0,
    "dist_river_z": -0.13,
    "flow_z": 0.36,
    "hazard_index": -0.34,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 107,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.014499999582767487,
    "pred_rf": 0,
    "prob_rf": 0.015,
    "status": "True Negative (Safe)",
    "slope_z": -1.69,
    "rainfall_z": -0.07,
    "elevation_z": -1.07,
    "ndvi_z": 0.85,
    "dist_river_z": -0.12,
    "flow_z": -0.25,
    "hazard_index": -2.36,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1910,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.7146000266075134,
    "pred_rf": 1,
    "prob_rf": 0.725,
    "status": "True Positive (Hit)",
    "slope_z": -0.58,
    "rainfall_z": -0.32,
    "elevation_z": -0.1,
    "ndvi_z": -0.64,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -0.27,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1750,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.41940000653266907,
    "pred_rf": 0,
    "prob_rf": 0.26,
    "status": "False Negative (Missed)",
    "slope_z": -0.28,
    "rainfall_z": -0.61,
    "elevation_z": -0.3,
    "ndvi_z": 0.85,
    "dist_river_z": -0.13,
    "flow_z": 0.01,
    "hazard_index": -1.29,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 449,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.507099986076355,
    "pred_rf": 1,
    "prob_rf": 0.54,
    "status": "False Positive (Alarm)",
    "slope_z": 2.25,
    "rainfall_z": -0.88,
    "elevation_z": -0.13,
    "ndvi_z": 0.76,
    "dist_river_z": -0.13,
    "flow_z": 2.55,
    "hazard_index": 2.25,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2116,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.6198999881744385,
    "pred_rf": 1,
    "prob_rf": 0.575,
    "status": "True Positive (Hit)",
    "slope_z": 0.24,
    "rainfall_z": -1.93,
    "elevation_z": 0.3,
    "ndvi_z": -1.48,
    "dist_river_z": -0.12,
    "flow_z": 0.07,
    "hazard_index": 0.19,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1502,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9954000115394592,
    "pred_rf": 1,
    "prob_rf": 0.995,
    "status": "True Positive (Hit)",
    "slope_z": 0.68,
    "rainfall_z": 0.44,
    "elevation_z": -0.58,
    "ndvi_z": -0.53,
    "dist_river_z": -0.13,
    "flow_z": 2.98,
    "hazard_index": 3.17,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 1617,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.3797999918460846,
    "pred_rf": 0,
    "prob_rf": 0.4,
    "status": "False Negative (Missed)",
    "slope_z": 0.46,
    "rainfall_z": -0.93,
    "elevation_z": -0.47,
    "ndvi_z": 0.71,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -1.19,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1099,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.12240000069141388,
    "pred_rf": 0,
    "prob_rf": 0.085,
    "status": "False Negative (Missed)",
    "slope_z": -1.77,
    "rainfall_z": 0.48,
    "elevation_z": -1.02,
    "ndvi_z": 0.49,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -1.79,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 615,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.4936999976634979,
    "pred_rf": 0,
    "prob_rf": 0.43,
    "status": "True Negative (Safe)",
    "slope_z": 0.31,
    "rainfall_z": 0.51,
    "elevation_z": 0.46,
    "ndvi_z": 0.9,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": 0.1,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2195,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.3995000123977661,
    "pred_rf": 0,
    "prob_rf": 0.295,
    "status": "False Negative (Missed)",
    "slope_z": -0.58,
    "rainfall_z": -0.93,
    "elevation_z": 0.6,
    "ndvi_z": 0.53,
    "dist_river_z": -0.13,
    "flow_z": -0.25,
    "hazard_index": -1.76,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 975,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.008500000461935997,
    "pred_rf": 0,
    "prob_rf": 0.035,
    "status": "True Negative (Safe)",
    "slope_z": 1.06,
    "rainfall_z": -1.81,
    "elevation_z": 2.32,
    "ndvi_z": -1.71,
    "dist_river_z": -0.13,
    "flow_z": 0.64,
    "hazard_index": 1.74,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 2162,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.6281999945640564,
    "pred_rf": 1,
    "prob_rf": 0.615,
    "status": "True Positive (Hit)",
    "slope_z": 0.09,
    "rainfall_z": -1.1,
    "elevation_z": 0.46,
    "ndvi_z": 0.31,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -1.32,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2193,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.09929999709129333,
    "pred_rf": 0,
    "prob_rf": 0.08,
    "status": "False Negative (Missed)",
    "slope_z": -0.36,
    "rainfall_z": -0.96,
    "elevation_z": 0.59,
    "ndvi_z": 1.21,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -2.54,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1430,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9598000049591064,
    "pred_rf": 1,
    "prob_rf": 0.955,
    "status": "True Positive (Hit)",
    "slope_z": 0.24,
    "rainfall_z": 0.84,
    "elevation_z": -0.65,
    "ndvi_z": -0.2,
    "dist_river_z": -0.13,
    "flow_z": 0.07,
    "hazard_index": 1.77,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1243,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.12939999997615814,
    "pred_rf": 0,
    "prob_rf": 0.11,
    "status": "False Negative (Missed)",
    "slope_z": -1.77,
    "rainfall_z": 0.13,
    "elevation_z": -0.85,
    "ndvi_z": 0.95,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -2.59,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 221,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.5562999844551086,
    "pred_rf": 1,
    "prob_rf": 0.62,
    "status": "False Positive (Alarm)",
    "slope_z": 0.91,
    "rainfall_z": -0.44,
    "elevation_z": -0.81,
    "ndvi_z": 1.0,
    "dist_river_z": -0.13,
    "flow_z": 0.39,
    "hazard_index": 0.14,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1674,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9226999878883362,
    "pred_rf": 1,
    "prob_rf": 0.855,
    "status": "True Positive (Hit)",
    "slope_z": 0.16,
    "rainfall_z": 2.27,
    "elevation_z": -0.41,
    "ndvi_z": -1.06,
    "dist_river_z": -0.13,
    "flow_z": 0.22,
    "hazard_index": 4.08,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1908,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.862500011920929,
    "pred_rf": 1,
    "prob_rf": 0.94,
    "status": "True Positive (Hit)",
    "slope_z": 0.54,
    "rainfall_z": 1.35,
    "elevation_z": -0.11,
    "ndvi_z": 1.03,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 0.85,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2092,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.6500999927520752,
    "pred_rf": 0,
    "prob_rf": 0.445,
    "status": "True Positive (Hit)",
    "slope_z": 0.24,
    "rainfall_z": 0.25,
    "elevation_z": 0.23,
    "ndvi_z": 0.89,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -0.42,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2200,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.34380000829696655,
    "pred_rf": 1,
    "prob_rf": 0.52,
    "status": "False Negative (Missed)",
    "slope_z": 0.02,
    "rainfall_z": -1.04,
    "elevation_z": 0.66,
    "ndvi_z": 0.02,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -1.05,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 305,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.7792999744415283,
    "pred_rf": 1,
    "prob_rf": 0.57,
    "status": "False Positive (Alarm)",
    "slope_z": 0.39,
    "rainfall_z": -0.12,
    "elevation_z": -0.55,
    "ndvi_z": 0.95,
    "dist_river_z": -0.12,
    "flow_z": 0.01,
    "hazard_index": -0.23,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 496,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.7139999866485596,
    "pred_rf": 1,
    "prob_rf": 0.815,
    "status": "False Positive (Alarm)",
    "slope_z": 0.68,
    "rainfall_z": -0.54,
    "elevation_z": 0.03,
    "ndvi_z": -0.38,
    "dist_river_z": -0.12,
    "flow_z": -0.15,
    "hazard_index": 0.88,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 520,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.450300008058548,
    "pred_rf": 0,
    "prob_rf": 0.24,
    "status": "True Negative (Safe)",
    "slope_z": 0.02,
    "rainfall_z": -0.79,
    "elevation_z": 0.1,
    "ndvi_z": 1.08,
    "dist_river_z": -0.13,
    "flow_z": -0.15,
    "hazard_index": -1.5,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 212,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.36419999599456787,
    "pred_rf": 0,
    "prob_rf": 0.29,
    "status": "True Negative (Safe)",
    "slope_z": -1.25,
    "rainfall_z": 0.12,
    "elevation_z": -0.83,
    "ndvi_z": 0.92,
    "dist_river_z": -0.12,
    "flow_z": -0.39,
    "hazard_index": -1.89,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 588,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.6381000280380249,
    "pred_rf": 1,
    "prob_rf": 0.725,
    "status": "False Positive (Alarm)",
    "slope_z": 0.31,
    "rainfall_z": -0.68,
    "elevation_z": 0.37,
    "ndvi_z": -0.31,
    "dist_river_z": -0.13,
    "flow_z": -0.15,
    "hazard_index": 0.29,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2211,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.24230000376701355,
    "pred_rf": 0,
    "prob_rf": 0.2,
    "status": "False Negative (Missed)",
    "slope_z": 0.31,
    "rainfall_z": 0.83,
    "elevation_z": 0.72,
    "ndvi_z": -0.28,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": 1.41,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 369,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.4627000093460083,
    "pred_rf": 0,
    "prob_rf": 0.315,
    "status": "True Negative (Safe)",
    "slope_z": -1.25,
    "rainfall_z": 0.71,
    "elevation_z": -0.37,
    "ndvi_z": 1.22,
    "dist_river_z": -0.11,
    "flow_z": -0.58,
    "hazard_index": -1.78,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1664,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.7903000116348267,
    "pred_rf": 1,
    "prob_rf": 0.61,
    "status": "True Positive (Hit)",
    "slope_z": -0.21,
    "rainfall_z": 0.0,
    "elevation_z": -0.42,
    "ndvi_z": 0.18,
    "dist_river_z": -0.13,
    "flow_z": -0.06,
    "hazard_index": 0.03,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 508,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.08060000091791153,
    "pred_rf": 0,
    "prob_rf": 0.17,
    "status": "True Negative (Safe)",
    "slope_z": 0.76,
    "rainfall_z": -0.51,
    "elevation_z": 0.06,
    "ndvi_z": 1.33,
    "dist_river_z": -0.13,
    "flow_z": -0.15,
    "hazard_index": -0.73,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1195,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9204999804496765,
    "pred_rf": 1,
    "prob_rf": 0.885,
    "status": "True Positive (Hit)",
    "slope_z": 0.98,
    "rainfall_z": 0.47,
    "elevation_z": -0.91,
    "ndvi_z": 0.64,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 0.81,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 70,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.011800000444054604,
    "pred_rf": 0,
    "prob_rf": 0.005,
    "status": "True Negative (Safe)",
    "slope_z": -1.84,
    "rainfall_z": 0.19,
    "elevation_z": -1.16,
    "ndvi_z": 0.15,
    "dist_river_z": -0.13,
    "flow_z": -0.25,
    "hazard_index": -1.53,
    "lulc_category": "Cropland"
  },
  {
    "sample_id": 1310,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9797999858856201,
    "pred_rf": 1,
    "prob_rf": 0.98,
    "status": "True Positive (Hit)",
    "slope_z": 0.68,
    "rainfall_z": 0.08,
    "elevation_z": -0.79,
    "ndvi_z": -1.69,
    "dist_river_z": -0.13,
    "flow_z": -0.06,
    "hazard_index": 2.87,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 262,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.8597000241279602,
    "pred_rf": 1,
    "prob_rf": 0.735,
    "status": "False Positive (Alarm)",
    "slope_z": -0.58,
    "rainfall_z": 0.01,
    "elevation_z": -0.72,
    "ndvi_z": 0.36,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": -0.76,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1751,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.41940000653266907,
    "pred_rf": 0,
    "prob_rf": 0.26,
    "status": "False Negative (Missed)",
    "slope_z": -0.28,
    "rainfall_z": -0.61,
    "elevation_z": -0.3,
    "ndvi_z": 0.85,
    "dist_river_z": -0.13,
    "flow_z": 0.01,
    "hazard_index": -1.29,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2373,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.3093999922275543,
    "pred_rf": 0,
    "prob_rf": 0.335,
    "status": "False Negative (Missed)",
    "slope_z": -1.32,
    "rainfall_z": 0.47,
    "elevation_z": -0.05,
    "ndvi_z": 1.22,
    "dist_river_z": -0.1,
    "flow_z": -0.58,
    "hazard_index": -2.1,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 688,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.09049999713897705,
    "pred_rf": 0,
    "prob_rf": 0.24,
    "status": "True Negative (Safe)",
    "slope_z": 0.68,
    "rainfall_z": -1.26,
    "elevation_z": 0.69,
    "ndvi_z": 0.88,
    "dist_river_z": -0.11,
    "flow_z": -0.58,
    "hazard_index": -1.48,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 30,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.0013000000035390258,
    "pred_rf": 0,
    "prob_rf": 0.0,
    "status": "True Negative (Safe)",
    "slope_z": -1.69,
    "rainfall_z": -0.67,
    "elevation_z": -1.19,
    "ndvi_z": 0.2,
    "dist_river_z": 8.04,
    "flow_z": -0.58,
    "hazard_index": -4.78,
    "lulc_category": "Cropland"
  },
  {
    "sample_id": 1815,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.8640000224113464,
    "pred_rf": 1,
    "prob_rf": 0.76,
    "status": "True Positive (Hit)",
    "slope_z": 1.28,
    "rainfall_z": 2.27,
    "elevation_z": -0.22,
    "ndvi_z": -0.78,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": 4.49,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 287,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.613099992275238,
    "pred_rf": 1,
    "prob_rf": 0.61,
    "status": "False Positive (Alarm)",
    "slope_z": 0.76,
    "rainfall_z": -0.57,
    "elevation_z": -0.62,
    "ndvi_z": 0.86,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -0.68,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 790,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.02290000021457672,
    "pred_rf": 0,
    "prob_rf": 0.07,
    "status": "True Negative (Safe)",
    "slope_z": 1.8,
    "rainfall_z": -1.1,
    "elevation_z": 1.19,
    "ndvi_z": 1.26,
    "dist_river_z": -0.12,
    "flow_z": -0.25,
    "hazard_index": -0.29,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1261,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.6029000282287598,
    "pred_rf": 1,
    "prob_rf": 0.67,
    "status": "True Positive (Hit)",
    "slope_z": -1.4,
    "rainfall_z": 0.37,
    "elevation_z": -0.83,
    "ndvi_z": 0.34,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -1.38,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1115,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.2896000146865845,
    "pred_rf": 0,
    "prob_rf": 0.415,
    "status": "False Negative (Missed)",
    "slope_z": -1.55,
    "rainfall_z": -0.15,
    "elevation_z": -0.99,
    "ndvi_z": 1.12,
    "dist_river_z": -0.11,
    "flow_z": -0.58,
    "hazard_index": -2.83,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 538,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.8970999717712402,
    "pred_rf": 1,
    "prob_rf": 0.765,
    "status": "False Positive (Alarm)",
    "slope_z": 0.83,
    "rainfall_z": 0.13,
    "elevation_z": 0.15,
    "ndvi_z": -0.34,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 1.31,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 374,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.7501000165939331,
    "pred_rf": 1,
    "prob_rf": 0.775,
    "status": "False Positive (Alarm)",
    "slope_z": 0.24,
    "rainfall_z": 0.16,
    "elevation_z": -0.35,
    "ndvi_z": 1.1,
    "dist_river_z": -0.11,
    "flow_z": -0.39,
    "hazard_index": -0.56,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 845,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.2822999954223633,
    "pred_rf": 0,
    "prob_rf": 0.17,
    "status": "True Negative (Safe)",
    "slope_z": 0.68,
    "rainfall_z": -0.38,
    "elevation_z": 1.54,
    "ndvi_z": -0.74,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 1.05,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1457,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9793999791145325,
    "pred_rf": 1,
    "prob_rf": 0.995,
    "status": "True Positive (Hit)",
    "slope_z": 0.91,
    "rainfall_z": 0.59,
    "elevation_z": -0.62,
    "ndvi_z": -0.44,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 1.93,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 326,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.5231999754905701,
    "pred_rf": 1,
    "prob_rf": 0.59,
    "status": "False Positive (Alarm)",
    "slope_z": 0.02,
    "rainfall_z": -0.34,
    "elevation_z": -0.47,
    "ndvi_z": 0.17,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -0.5,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 392,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.7552000284194946,
    "pred_rf": 1,
    "prob_rf": 0.86,
    "status": "False Positive (Alarm)",
    "slope_z": -0.21,
    "rainfall_z": 1.32,
    "elevation_z": -0.29,
    "ndvi_z": 1.35,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -0.24,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1858,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.7684000134468079,
    "pred_rf": 1,
    "prob_rf": 0.815,
    "status": "True Positive (Hit)",
    "slope_z": 1.06,
    "rainfall_z": -0.89,
    "elevation_z": -0.18,
    "ndvi_z": 0.09,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 0.07,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1145,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.979200005531311,
    "pred_rf": 1,
    "prob_rf": 0.945,
    "status": "True Positive (Hit)",
    "slope_z": 0.39,
    "rainfall_z": 0.08,
    "elevation_z": -0.95,
    "ndvi_z": -0.1,
    "dist_river_z": -0.13,
    "flow_z": 1.5,
    "hazard_index": 1.7,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 268,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.9007999897003174,
    "pred_rf": 1,
    "prob_rf": 0.8,
    "status": "False Positive (Alarm)",
    "slope_z": -0.43,
    "rainfall_z": 1.74,
    "elevation_z": -0.7,
    "ndvi_z": 0.27,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 1.04,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1861,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.8733000159263611,
    "pred_rf": 1,
    "prob_rf": 0.74,
    "status": "True Positive (Hit)",
    "slope_z": 0.09,
    "rainfall_z": 0.46,
    "elevation_z": -0.17,
    "ndvi_z": 0.24,
    "dist_river_z": -0.1,
    "flow_z": -0.58,
    "hazard_index": 0.28,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 585,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.5188000202178955,
    "pred_rf": 0,
    "prob_rf": 0.47,
    "status": "False Positive (Alarm)",
    "slope_z": -0.36,
    "rainfall_z": -0.83,
    "elevation_z": 0.36,
    "ndvi_z": -0.08,
    "dist_river_z": -0.12,
    "flow_z": -0.25,
    "hazard_index": -0.84,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 575,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.3903000056743622,
    "pred_rf": 0,
    "prob_rf": 0.255,
    "status": "True Negative (Safe)",
    "slope_z": -0.36,
    "rainfall_z": -0.96,
    "elevation_z": 0.33,
    "ndvi_z": 0.2,
    "dist_river_z": -0.12,
    "flow_z": -0.39,
    "hazard_index": -1.35,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 121,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.019600000232458115,
    "pred_rf": 0,
    "prob_rf": 0.04,
    "status": "True Negative (Safe)",
    "slope_z": -1.69,
    "rainfall_z": 0.05,
    "elevation_z": -1.05,
    "ndvi_z": 1.34,
    "dist_river_z": -0.13,
    "flow_z": 1.14,
    "hazard_index": -1.99,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1197,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.22619999945163727,
    "pred_rf": 0,
    "prob_rf": 0.23,
    "status": "False Negative (Missed)",
    "slope_z": -1.69,
    "rainfall_z": 0.42,
    "elevation_z": -0.9,
    "ndvi_z": 0.39,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -1.68,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 39,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.019300000742077827,
    "pred_rf": 0,
    "prob_rf": 0.025,
    "status": "True Negative (Safe)",
    "slope_z": -1.77,
    "rainfall_z": 0.43,
    "elevation_z": -1.18,
    "ndvi_z": -0.4,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -0.95,
    "lulc_category": "Cropland"
  },
  {
    "sample_id": 2259,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.8633999824523926,
    "pred_rf": 1,
    "prob_rf": 0.735,
    "status": "True Positive (Hit)",
    "slope_z": 0.24,
    "rainfall_z": 0.48,
    "elevation_z": 1.1,
    "ndvi_z": -1.08,
    "dist_river_z": -0.13,
    "flow_z": 1.46,
    "hazard_index": 2.91,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 493,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.7247999906539917,
    "pred_rf": 1,
    "prob_rf": 0.615,
    "status": "False Positive (Alarm)",
    "slope_z": 0.39,
    "rainfall_z": 0.06,
    "elevation_z": 0.01,
    "ndvi_z": 0.36,
    "dist_river_z": -0.12,
    "flow_z": -0.39,
    "hazard_index": 0.25,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 510,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.8111000061035156,
    "pred_rf": 1,
    "prob_rf": 0.805,
    "status": "False Positive (Alarm)",
    "slope_z": -0.28,
    "rainfall_z": 2.06,
    "elevation_z": 0.07,
    "ndvi_z": 0.33,
    "dist_river_z": -0.13,
    "flow_z": 0.33,
    "hazard_index": 2.09,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1053,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.006300000008195639,
    "pred_rf": 0,
    "prob_rf": 0.0,
    "status": "True Negative (Safe)",
    "slope_z": 0.39,
    "rainfall_z": -1.29,
    "elevation_z": 2.85,
    "ndvi_z": -1.74,
    "dist_river_z": -0.13,
    "flow_z": -0.15,
    "hazard_index": 1.19,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 518,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.045099999755620956,
    "pred_rf": 0,
    "prob_rf": 0.06,
    "status": "True Negative (Safe)",
    "slope_z": -0.13,
    "rainfall_z": -0.93,
    "elevation_z": 0.09,
    "ndvi_z": 1.43,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": -2.32,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1359,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.8988000154495239,
    "pred_rf": 1,
    "prob_rf": 0.95,
    "status": "True Positive (Hit)",
    "slope_z": -0.58,
    "rainfall_z": 0.26,
    "elevation_z": -0.74,
    "ndvi_z": -0.19,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -0.14,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 521,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.7240999937057495,
    "pred_rf": 1,
    "prob_rf": 0.72,
    "status": "False Positive (Alarm)",
    "slope_z": 0.31,
    "rainfall_z": -0.43,
    "elevation_z": 0.1,
    "ndvi_z": 0.26,
    "dist_river_z": -0.13,
    "flow_z": 0.3,
    "hazard_index": 0.25,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1735,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.6668000221252441,
    "pred_rf": 1,
    "prob_rf": 0.65,
    "status": "True Positive (Hit)",
    "slope_z": -0.8,
    "rainfall_z": 0.56,
    "elevation_z": -0.31,
    "ndvi_z": 0.25,
    "dist_river_z": -0.13,
    "flow_z": 0.85,
    "hazard_index": 0.4,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1058,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.004800000227987766,
    "pred_rf": 0,
    "prob_rf": 0.005,
    "status": "True Negative (Safe)",
    "slope_z": -1.1,
    "rainfall_z": -1.02,
    "elevation_z": 2.85,
    "ndvi_z": -2.09,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -0.04,
    "lulc_category": "Water / Snow / Wetland"
  },
  {
    "sample_id": 241,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.6287999749183655,
    "pred_rf": 0,
    "prob_rf": 0.49,
    "status": "False Positive (Alarm)",
    "slope_z": -0.8,
    "rainfall_z": 0.95,
    "elevation_z": -0.75,
    "ndvi_z": 0.88,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -0.74,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 462,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.9277999997138977,
    "pred_rf": 1,
    "prob_rf": 0.94,
    "status": "False Positive (Alarm)",
    "slope_z": 1.65,
    "rainfall_z": 0.03,
    "elevation_z": -0.09,
    "ndvi_z": -0.54,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": 2.39,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 1342,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.3433000147342682,
    "pred_rf": 0,
    "prob_rf": 0.36,
    "status": "False Negative (Missed)",
    "slope_z": -0.95,
    "rainfall_z": 0.29,
    "elevation_z": -0.75,
    "ndvi_z": 1.09,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -1.75,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1086,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.10050000250339508,
    "pred_rf": 0,
    "prob_rf": 0.03,
    "status": "False Negative (Missed)",
    "slope_z": -1.1,
    "rainfall_z": -0.37,
    "elevation_z": -1.05,
    "ndvi_z": 1.0,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": -2.3,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2458,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9373000264167786,
    "pred_rf": 1,
    "prob_rf": 0.905,
    "status": "True Positive (Hit)",
    "slope_z": -0.13,
    "rainfall_z": 1.49,
    "elevation_z": -0.1,
    "ndvi_z": 0.84,
    "dist_river_z": -0.11,
    "flow_z": -0.58,
    "hazard_index": 0.5,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1732,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.8029999732971191,
    "pred_rf": 1,
    "prob_rf": 0.9,
    "status": "True Positive (Hit)",
    "slope_z": 0.61,
    "rainfall_z": 0.51,
    "elevation_z": -0.32,
    "ndvi_z": -0.05,
    "dist_river_z": -0.12,
    "flow_z": -0.25,
    "hazard_index": 1.44,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2062,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.35850000381469727,
    "pred_rf": 1,
    "prob_rf": 0.575,
    "status": "False Negative (Missed)",
    "slope_z": -0.36,
    "rainfall_z": 2.03,
    "elevation_z": 0.17,
    "ndvi_z": 1.28,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 0.38,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2000,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.6898000240325928,
    "pred_rf": 1,
    "prob_rf": 0.725,
    "status": "True Positive (Hit)",
    "slope_z": -0.13,
    "rainfall_z": -0.89,
    "elevation_z": 0.07,
    "ndvi_z": -0.27,
    "dist_river_z": -0.13,
    "flow_z": 0.66,
    "hazard_index": 0.06,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1650,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.832099974155426,
    "pred_rf": 1,
    "prob_rf": 0.735,
    "status": "True Positive (Hit)",
    "slope_z": -0.5,
    "rainfall_z": 0.61,
    "elevation_z": -0.43,
    "ndvi_z": 0.79,
    "dist_river_z": -0.13,
    "flow_z": 0.01,
    "hazard_index": -0.23,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 460,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.19850000739097595,
    "pred_rf": 0,
    "prob_rf": 0.215,
    "status": "True Negative (Safe)",
    "slope_z": -1.62,
    "rainfall_z": 1.04,
    "elevation_z": -0.1,
    "ndvi_z": -0.31,
    "dist_river_z": -0.13,
    "flow_z": -0.15,
    "hazard_index": 0.09,
    "lulc_category": "Cropland"
  },
  {
    "sample_id": 321,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.8572999835014343,
    "pred_rf": 1,
    "prob_rf": 0.87,
    "status": "False Positive (Alarm)",
    "slope_z": 0.02,
    "rainfall_z": 1.03,
    "elevation_z": -0.48,
    "ndvi_z": 0.94,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": 0.09,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2236,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.3158999979496002,
    "pred_rf": 0,
    "prob_rf": 0.22,
    "status": "False Negative (Missed)",
    "slope_z": 1.21,
    "rainfall_z": 0.83,
    "elevation_z": 0.93,
    "ndvi_z": -0.99,
    "dist_river_z": -0.11,
    "flow_z": -0.58,
    "hazard_index": 3.01,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1398,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9253000020980835,
    "pred_rf": 1,
    "prob_rf": 0.895,
    "status": "True Positive (Hit)",
    "slope_z": 1.06,
    "rainfall_z": 0.6,
    "elevation_z": -0.69,
    "ndvi_z": 0.42,
    "dist_river_z": -0.13,
    "flow_z": 0.95,
    "hazard_index": 2.16,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 178,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.8628000020980835,
    "pred_rf": 1,
    "prob_rf": 0.72,
    "status": "False Positive (Alarm)",
    "slope_z": 0.02,
    "rainfall_z": 0.15,
    "elevation_z": -0.93,
    "ndvi_z": 1.13,
    "dist_river_z": -0.12,
    "flow_z": 0.45,
    "hazard_index": -0.27,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1112,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.2151000052690506,
    "pred_rf": 0,
    "prob_rf": 0.24,
    "status": "False Negative (Missed)",
    "slope_z": -1.17,
    "rainfall_z": 0.27,
    "elevation_z": -1.0,
    "ndvi_z": 1.18,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -2.1,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2340,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.030500000342726707,
    "pred_rf": 0,
    "prob_rf": 0.065,
    "status": "False Negative (Missed)",
    "slope_z": -1.92,
    "rainfall_z": 0.17,
    "elevation_z": -1.15,
    "ndvi_z": 0.92,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -2.67,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 997,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.004600000102072954,
    "pred_rf": 0,
    "prob_rf": 0.0,
    "status": "True Negative (Safe)",
    "slope_z": 0.09,
    "rainfall_z": -1.24,
    "elevation_z": 2.47,
    "ndvi_z": -1.75,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 0.6,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 86,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.20110000669956207,
    "pred_rf": 0,
    "prob_rf": 0.32,
    "status": "True Negative (Safe)",
    "slope_z": -1.32,
    "rainfall_z": -0.13,
    "elevation_z": -1.11,
    "ndvi_z": -0.7,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -0.75,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 368,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.829800009727478,
    "pred_rf": 1,
    "prob_rf": 0.805,
    "status": "False Positive (Alarm)",
    "slope_z": 2.1,
    "rainfall_z": 1.41,
    "elevation_z": -0.37,
    "ndvi_z": 0.06,
    "dist_river_z": -0.12,
    "flow_z": -0.25,
    "hazard_index": 3.72,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2384,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.00419999985024333,
    "pred_rf": 0,
    "prob_rf": 0.0,
    "status": "True Negative (Safe)",
    "slope_z": -1.84,
    "rainfall_z": -0.55,
    "elevation_z": -1.16,
    "ndvi_z": -0.73,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -1.67,
    "lulc_category": "Cropland"
  },
  {
    "sample_id": 2338,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.030500000342726707,
    "pred_rf": 0,
    "prob_rf": 0.065,
    "status": "False Negative (Missed)",
    "slope_z": -1.92,
    "rainfall_z": 0.17,
    "elevation_z": -1.15,
    "ndvi_z": 0.92,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -2.67,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 859,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.04919999837875366,
    "pred_rf": 0,
    "prob_rf": 0.025,
    "status": "True Negative (Safe)",
    "slope_z": 0.39,
    "rainfall_z": -1.49,
    "elevation_z": 1.68,
    "ndvi_z": -1.73,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 0.62,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2250,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.43939998745918274,
    "pred_rf": 0,
    "prob_rf": 0.2,
    "status": "False Negative (Missed)",
    "slope_z": 0.39,
    "rainfall_z": -0.55,
    "elevation_z": 1.06,
    "ndvi_z": 0.17,
    "dist_river_z": -0.12,
    "flow_z": 0.13,
    "hazard_index": 0.18,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 681,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.8841999769210815,
    "pred_rf": 1,
    "prob_rf": 0.835,
    "status": "False Positive (Alarm)",
    "slope_z": 1.21,
    "rainfall_z": -1.45,
    "elevation_z": 0.67,
    "ndvi_z": -1.41,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 1.16,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 1154,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.4357999861240387,
    "pred_rf": 1,
    "prob_rf": 0.51,
    "status": "False Negative (Missed)",
    "slope_z": -0.95,
    "rainfall_z": 0.63,
    "elevation_z": -0.95,
    "ndvi_z": 0.9,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -1.22,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2403,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.9071000218391418,
    "pred_rf": 1,
    "prob_rf": 0.74,
    "status": "False Positive (Alarm)",
    "slope_z": 0.09,
    "rainfall_z": 0.16,
    "elevation_z": 0.33,
    "ndvi_z": -0.9,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": 1.31,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 749,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.10260000079870224,
    "pred_rf": 0,
    "prob_rf": 0.145,
    "status": "True Negative (Safe)",
    "slope_z": 0.68,
    "rainfall_z": -0.32,
    "elevation_z": 0.98,
    "ndvi_z": 1.23,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -0.87,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 96,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.016100000590085983,
    "pred_rf": 0,
    "prob_rf": 0.105,
    "status": "True Negative (Safe)",
    "slope_z": -1.92,
    "rainfall_z": 0.11,
    "elevation_z": -1.09,
    "ndvi_z": -1.36,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -0.45,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 572,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.5494999885559082,
    "pred_rf": 1,
    "prob_rf": 0.61,
    "status": "False Positive (Alarm)",
    "slope_z": 0.16,
    "rainfall_z": 1.41,
    "elevation_z": 0.32,
    "ndvi_z": 1.29,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 0.27,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 865,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.050999999046325684,
    "pred_rf": 0,
    "prob_rf": 0.025,
    "status": "True Negative (Safe)",
    "slope_z": 1.73,
    "rainfall_z": -1.17,
    "elevation_z": 1.7,
    "ndvi_z": -0.82,
    "dist_river_z": -0.13,
    "flow_z": -0.15,
    "hazard_index": 1.73,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 362,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.5397999882698059,
    "pred_rf": 1,
    "prob_rf": 0.53,
    "status": "False Positive (Alarm)",
    "slope_z": -0.13,
    "rainfall_z": 1.52,
    "elevation_z": -0.38,
    "ndvi_z": 1.45,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -0.08,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2179,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.30709999799728394,
    "pred_rf": 0,
    "prob_rf": 0.24,
    "status": "False Negative (Missed)",
    "slope_z": 0.24,
    "rainfall_z": -0.57,
    "elevation_z": 0.52,
    "ndvi_z": 1.1,
    "dist_river_z": -0.12,
    "flow_z": 0.01,
    "hazard_index": -0.98,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2186,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.38280001282691956,
    "pred_rf": 0,
    "prob_rf": 0.405,
    "status": "False Negative (Missed)",
    "slope_z": 1.13,
    "rainfall_z": -0.94,
    "elevation_z": 0.57,
    "ndvi_z": 0.67,
    "dist_river_z": -0.11,
    "flow_z": -0.39,
    "hazard_index": -0.32,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 302,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.22920000553131104,
    "pred_rf": 0,
    "prob_rf": 0.46,
    "status": "True Negative (Safe)",
    "slope_z": -0.43,
    "rainfall_z": 0.03,
    "elevation_z": -0.58,
    "ndvi_z": 1.26,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -1.66,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 405,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.6499000191688538,
    "pred_rf": 1,
    "prob_rf": 0.55,
    "status": "False Positive (Alarm)",
    "slope_z": 0.76,
    "rainfall_z": 1.91,
    "elevation_z": -0.22,
    "ndvi_z": 1.06,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 1.61,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1714,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9726999998092651,
    "pred_rf": 1,
    "prob_rf": 0.97,
    "status": "True Positive (Hit)",
    "slope_z": 0.61,
    "rainfall_z": 1.18,
    "elevation_z": -0.33,
    "ndvi_z": -0.16,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": 2.11,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 1573,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.28290000557899475,
    "pred_rf": 0,
    "prob_rf": 0.205,
    "status": "False Negative (Missed)",
    "slope_z": -1.1,
    "rainfall_z": 0.13,
    "elevation_z": -0.52,
    "ndvi_z": 1.23,
    "dist_river_z": -0.11,
    "flow_z": -0.25,
    "hazard_index": -1.95,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 976,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.004999999888241291,
    "pred_rf": 0,
    "prob_rf": 0.005,
    "status": "True Negative (Safe)",
    "slope_z": -0.36,
    "rainfall_z": -1.1,
    "elevation_z": 2.33,
    "ndvi_z": -1.59,
    "dist_river_z": -0.13,
    "flow_z": -0.39,
    "hazard_index": 0.3,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 2362,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.28690001368522644,
    "pred_rf": 0,
    "prob_rf": 0.29,
    "status": "True Negative (Safe)",
    "slope_z": -1.47,
    "rainfall_z": 0.77,
    "elevation_z": -0.8,
    "ndvi_z": 0.67,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -1.38,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1961,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.4794999957084656,
    "pred_rf": 1,
    "prob_rf": 0.54,
    "status": "False Negative (Missed)",
    "slope_z": -0.58,
    "rainfall_z": -0.39,
    "elevation_z": 0.01,
    "ndvi_z": -0.59,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -0.39,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 797,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.06689999997615814,
    "pred_rf": 0,
    "prob_rf": 0.22,
    "status": "True Negative (Safe)",
    "slope_z": 0.76,
    "rainfall_z": -0.18,
    "elevation_z": 1.24,
    "ndvi_z": 0.21,
    "dist_river_z": 8.04,
    "flow_z": -0.06,
    "hazard_index": -1.44,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1183,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9641000032424927,
    "pred_rf": 1,
    "prob_rf": 0.905,
    "status": "True Positive (Hit)",
    "slope_z": 0.91,
    "rainfall_z": 1.91,
    "elevation_z": -0.92,
    "ndvi_z": 0.34,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": 2.48,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2234,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.32109999656677246,
    "pred_rf": 0,
    "prob_rf": 0.165,
    "status": "False Negative (Missed)",
    "slope_z": 0.39,
    "rainfall_z": -0.15,
    "elevation_z": 0.93,
    "ndvi_z": 0.95,
    "dist_river_z": -0.13,
    "flow_z": -0.25,
    "hazard_index": -0.44,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2257,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.0738999992609024,
    "pred_rf": 0,
    "prob_rf": 0.245,
    "status": "False Negative (Missed)",
    "slope_z": 2.02,
    "rainfall_z": -1.42,
    "elevation_z": 1.1,
    "ndvi_z": -2.1,
    "dist_river_z": -0.12,
    "flow_z": -0.39,
    "hazard_index": 2.87,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 1240,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.95169997215271,
    "pred_rf": 1,
    "prob_rf": 0.925,
    "status": "True Positive (Hit)",
    "slope_z": -0.5,
    "rainfall_z": 1.04,
    "elevation_z": -0.85,
    "ndvi_z": -0.09,
    "dist_river_z": -0.13,
    "flow_z": 2.11,
    "hazard_index": 1.93,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 592,
    "actual": 0,
    "pred_xgb": 0,
    "prob_xgb": 0.03759999945759773,
    "pred_rf": 0,
    "prob_rf": 0.12,
    "status": "True Negative (Safe)",
    "slope_z": 0.91,
    "rainfall_z": -0.74,
    "elevation_z": 0.38,
    "ndvi_z": 1.45,
    "dist_river_z": -0.11,
    "flow_z": -0.58,
    "hazard_index": -1.35,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1319,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9065999984741211,
    "pred_rf": 1,
    "prob_rf": 0.97,
    "status": "True Positive (Hit)",
    "slope_z": -0.43,
    "rainfall_z": 0.22,
    "elevation_z": -0.78,
    "ndvi_z": 0.4,
    "dist_river_z": -0.12,
    "flow_z": -0.39,
    "hazard_index": -0.45,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1185,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9129999876022339,
    "pred_rf": 1,
    "prob_rf": 0.855,
    "status": "True Positive (Hit)",
    "slope_z": -0.21,
    "rainfall_z": 0.67,
    "elevation_z": -0.92,
    "ndvi_z": 0.77,
    "dist_river_z": -0.13,
    "flow_z": -0.25,
    "hazard_index": -0.03,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1166,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.7365000247955322,
    "pred_rf": 1,
    "prob_rf": 0.76,
    "status": "True Positive (Hit)",
    "slope_z": -0.88,
    "rainfall_z": 0.34,
    "elevation_z": -0.94,
    "ndvi_z": 0.33,
    "dist_river_z": -0.13,
    "flow_z": 0.69,
    "hazard_index": -0.05,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 579,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.5684000253677368,
    "pred_rf": 1,
    "prob_rf": 0.575,
    "status": "False Positive (Alarm)",
    "slope_z": 0.54,
    "rainfall_z": -1.04,
    "elevation_z": 0.34,
    "ndvi_z": 0.05,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -0.57,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 228,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.8389000296592712,
    "pred_rf": 1,
    "prob_rf": 0.765,
    "status": "False Positive (Alarm)",
    "slope_z": -0.88,
    "rainfall_z": 0.98,
    "elevation_z": -0.79,
    "ndvi_z": 0.31,
    "dist_river_z": -0.12,
    "flow_z": -0.25,
    "hazard_index": 0.06,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2286,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.2711000144481659,
    "pred_rf": 1,
    "prob_rf": 0.51,
    "status": "False Negative (Missed)",
    "slope_z": -0.58,
    "rainfall_z": -0.73,
    "elevation_z": 1.54,
    "ndvi_z": -0.66,
    "dist_river_z": -0.11,
    "flow_z": -0.58,
    "hazard_index": -0.68,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 431,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.6815999746322632,
    "pred_rf": 1,
    "prob_rf": 0.635,
    "status": "False Positive (Alarm)",
    "slope_z": -0.13,
    "rainfall_z": -0.73,
    "elevation_z": -0.16,
    "ndvi_z": -0.26,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -0.61,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 514,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.9549000263214111,
    "pred_rf": 1,
    "prob_rf": 0.835,
    "status": "False Positive (Alarm)",
    "slope_z": 0.61,
    "rainfall_z": 0.33,
    "elevation_z": 0.09,
    "ndvi_z": -0.7,
    "dist_river_z": -0.13,
    "flow_z": 2.81,
    "hazard_index": 3.12,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 2184,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.39340001344680786,
    "pred_rf": 0,
    "prob_rf": 0.34,
    "status": "False Negative (Missed)",
    "slope_z": -0.43,
    "rainfall_z": -0.31,
    "elevation_z": 0.56,
    "ndvi_z": 0.61,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": -1.36,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1094,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.476500004529953,
    "pred_rf": 0,
    "prob_rf": 0.375,
    "status": "False Negative (Missed)",
    "slope_z": -1.47,
    "rainfall_z": 0.8,
    "elevation_z": -1.03,
    "ndvi_z": -0.53,
    "dist_river_z": -0.13,
    "flow_z": -0.58,
    "hazard_index": -0.14,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1137,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.974399983882904,
    "pred_rf": 1,
    "prob_rf": 0.91,
    "status": "True Positive (Hit)",
    "slope_z": -0.21,
    "rainfall_z": 0.06,
    "elevation_z": -0.97,
    "ndvi_z": -1.33,
    "dist_river_z": -0.13,
    "flow_z": 0.17,
    "hazard_index": 1.74,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 377,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.6498000025749207,
    "pred_rf": 1,
    "prob_rf": 0.66,
    "status": "False Positive (Alarm)",
    "slope_z": -0.28,
    "rainfall_z": 0.13,
    "elevation_z": -0.33,
    "ndvi_z": 1.14,
    "dist_river_z": -0.1,
    "flow_z": -0.58,
    "hazard_index": -1.32,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1517,
    "actual": 1,
    "pred_xgb": 0,
    "prob_xgb": 0.2964000105857849,
    "pred_rf": 0,
    "prob_rf": 0.375,
    "status": "False Negative (Missed)",
    "slope_z": -0.43,
    "rainfall_z": 0.13,
    "elevation_z": -0.57,
    "ndvi_z": 1.45,
    "dist_river_z": -0.13,
    "flow_z": 0.3,
    "hazard_index": -1.14,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 1700,
    "actual": 1,
    "pred_xgb": 1,
    "prob_xgb": 0.9156000018119812,
    "pred_rf": 1,
    "prob_rf": 0.95,
    "status": "True Positive (Hit)",
    "slope_z": -0.43,
    "rainfall_z": -0.08,
    "elevation_z": -0.35,
    "ndvi_z": -0.72,
    "dist_river_z": -0.12,
    "flow_z": -0.58,
    "hazard_index": 0.21,
    "lulc_category": "Built / Bare Ground"
  },
  {
    "sample_id": 269,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.6628999710083008,
    "pred_rf": 1,
    "prob_rf": 0.59,
    "status": "False Positive (Alarm)",
    "slope_z": -1.25,
    "rainfall_z": 0.26,
    "elevation_z": -0.7,
    "ndvi_z": 0.21,
    "dist_river_z": -0.13,
    "flow_z": 0.07,
    "hazard_index": -0.69,
    "lulc_category": "Forest / Natural Veg"
  },
  {
    "sample_id": 427,
    "actual": 0,
    "pred_xgb": 1,
    "prob_xgb": 0.5807999968528748,
    "pred_rf": 1,
    "prob_rf": 0.535,
    "status": "False Positive (Alarm)",
    "slope_z": 1.43,
    "rainfall_z": -0.68,
    "elevation_z": -0.17,
    "ndvi_z": 0.43,
    "dist_river_z": -0.12,
    "flow_z": -0.25,
    "hazard_index": 0.59,
    "lulc_category": "Forest / Natural Veg"
  }
]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DASHBOARD_DATA;
}
