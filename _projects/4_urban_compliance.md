---
layout: page
title: Urban Compliance Monitoring System
description: Geometric change detection for unauthorized structure identification using depth estimation
img: assets/img/urban.jpg
importance: 4
category: Work
---

## Overview

Developed an **end-to-end surveillance system** to identify unauthorized urban structures by analyzing geometric changes rather than just visual differences.

---

## Problem Statement

Traditional change detection methods based on visual appearance often fail to distinguish between:
- Seasonal vegetation changes
- Lighting condition variations
- Actual structural modifications

Our approach uses **3D geometric analysis** to focus specifically on unauthorized construction activities.

---

## Technical Pipeline

```
Reference Period          Current Period
      │                        │
      ▼                        ▼
┌──────────┐            ┌──────────┐
│  Images  │            │  Images  │
└────┬─────┘            └────┬─────┘
     │                       │
     ▼                       ▼
┌──────────┐            ┌──────────┐
│  Depth   │            │  Depth   │
│Estimation│            │Estimation│
└────┬─────┘            └────┬─────┘
     │                       │
     ▼                       ▼
┌──────────┐            ┌──────────┐
│   DEM    │            │   DEM    │
│Reference │            │ Current  │
└────┬─────┘            └────┬─────┘
     │                       │
     └───────────┬───────────┘
                 ▼
         ┌──────────────┐
         │   Height     │
         │ Difference   │
         │  Analysis    │
         └──────┬───────┘
                │
                ▼
         ┌──────────────┐
         │ Unauthorized │
         │  Structure   │
         │  Detection   │
         └──────────────┘
```

---

## Detection Capabilities

| Type | Description | Example |
|------|-------------|---------|
| **Vertical Extensions** | Additional floors | Rooftop structures |
| **Horizontal Extensions** | Building expansion | Side annexes |
| **New Structures** | Completely new builds | Warehouses, sheds |
| **Height Violations** | Exceeding limits | Antenna, tank installations |

---

## Key Results

- **Geometric Precision**: Height change detection with sub-meter accuracy
- **False Positive Reduction**: 80% reduction vs. appearance-based methods
- **Automated Pipeline**: End-to-end processing with minimal human intervention

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Depth Estimation** | Depth-Anything, ZoeDepth |
| **GIS Integration** | GDAL, Rasterio, GeoPandas |
| **Visualization** | Folium, Leaflet |
| **Languages** | Python |
