---
layout: page
title: SWAT-LSTM River Flow Prediction
description: AI-Enhanced Hydrological Modeling for the Chao Phraya River Basin
img: assets/img/flowdzine-creativity-xPH9yxPrki4-unsplash.jpg
importance: 6
category: Research
related_publications: false
---

## Overview

Developed a **hybrid hydrological modeling approach** combining the Soil and Water Assessment Tool (SWAT) with Long Short-Term Memory (LSTM) neural networks for enhanced river flow prediction. The study focused on the **Chao Phraya River Basin**, Thailand's most significant watershed, to improve flood forecasting and water resource management.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/swat-lstm.jpg" title="SWAT-LSTM River Flow Prediction" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Research Context

This research addresses the limitations of traditional process-based hydrological models by integrating physics-based SWAT simulations with data-driven deep learning techniques. The hybrid SWAT-LSTM approach leverages the strengths of both methodologies to achieve more accurate and reliable flow rate predictions.

### Study Area

The **Chao Phraya River Basin** is Thailand's largest and most economically important river system, covering approximately 160,000 km² and serving as the country's agricultural and industrial heartland. Accurate flow prediction in this basin is critical for:
- Flood early warning systems
- Agricultural water management
- Hydropower optimization
- Urban water supply planning

---

## Technical Approach

### Model Architecture

1. **SWAT Component**: Physics-based watershed modeling for:
   - Rainfall-runoff simulation
   - Evapotranspiration estimation
   - Groundwater interactions
   - Land use/land cover effects

2. **LSTM Component**: Deep learning for:
   - Temporal pattern recognition
   - Non-linear relationship modeling
   - Error correction of SWAT outputs
   - Long-term dependency capture

### Coupling Strategy

The hybrid model uses SWAT outputs as input features for the LSTM network, allowing the deep learning component to learn and correct systematic biases while preserving the physical interpretability of the hydrological model.

---

## Key Results

- **Improved Prediction Accuracy**: The coupled SWAT-LSTM model outperformed standalone SWAT and pure LSTM approaches
- **Enhanced Peak Flow Capture**: Better performance in predicting extreme flow events
- **Reduced Systematic Bias**: LSTM effectively corrected SWAT model deficiencies
- **Operational Applicability**: Demonstrated potential for real-time flood forecasting

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Hydrological Modeling** | SWAT (Soil and Water Assessment Tool) |
| **Deep Learning** | LSTM (Long Short-Term Memory), TensorFlow/Keras |
| **Data Processing** | Python, Pandas, NumPy |
| **GIS & Remote Sensing** | QGIS, ArcGIS, GDAL |
| **Visualization** | Matplotlib, Seaborn |

---

## Publication

This research contributed to:
- **Enhancing flow rate prediction of the Chao Phraya River Basin using SWAT–LSTM model coupling** - Journal of Hydrology: Regional Studies, 2024

DOI: [10.1016/j.ejrh.2024.101820](https://doi.org/10.1016/j.ejrh.2024.101820)
