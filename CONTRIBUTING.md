# Contributing to GeoSlope-AI

Thank you for your interest in contributing to **GeoSlope-AI**! We welcome contributions from machine learning researchers, geospatial data scientists, geotechnical engineers, and software engineers.

This project adheres to **Google Open Source Engineering Standards** regarding code clarity, reproducibility, data hygiene, and documentation.

---

## Code of Conduct

All contributors and maintainers are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure an open, inclusive, and harassment-free community.

---

## Development & Contribution Workflow

### 1. Branching Strategy
* `main`: Protected stable branch containing verified code, documentation, and trained model artifacts.
* `feature/<feature-name>`: Dedicated branches for new features or data transforms.
* `fix/<bug-description>`: Bug fixes and performance patches.
* `docs/<topic>`: Documentation, Model Cards, and technical report updates.

### 2. Setting Up the Environment

```bash
# Clone the repository
git clone https://github.com/ritigyam2/GeoSlope-AI-Geospatial-Landslide-Risk-Prediction-System.git
cd GeoSlope-AI-Geospatial-Landslide-Risk-Prediction-System

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Engineering Guidelines & Constraints

* **Strict Data Leakage Prevention:** Any new preprocessing transformation or imputation logic MUST be fitted strictly on the training partition (`X_train`) and applied subsequently to validation and test sets.
* **Seed Reproducibility:** All stochastic processes, splits, and tree estimators must fix `random_state=42`.
* **Documentation First:** Any algorithmic or model parameter changes must be accompanied by updates to [MODEL_CARD.md](MODEL_CARD.md) and [ARCHITECTURE.md](ARCHITECTURE.md).
* **Deterministic Inference:** The client-side dashboard (`dashboard.js`, `dashboard_data.js`) must maintain sub-10ms response times for interactive user parameter exploration.

---

## Submitting Pull Requests

1. Ensure all notebooks execute sequentially from top to bottom without unhandled exceptions.
2. Check that code adheres to PEP 8 standards (`flake8`, `black`).
3. Fill out the provided [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md) completely, including quantitative before/after metric comparisons if model performance is modified.
