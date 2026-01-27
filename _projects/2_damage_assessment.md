---
layout: page
title: 3D Change Detection & Damage Assessment
description: Monocular depth estimation pipelines for urban change detection and conflict damage assessment
img: assets/img/2.jpg
importance: 2
category: work
---

## Overview

Developed an **Automated 3D Change Detection System** using monocular depth estimation to generate Digital Elevation Models (DEMs) for urban and conflict zone damage assessment.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2.jpg" title="3D Change Detection" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Project Context

At **Data Design Engineering (Sep 2024 - Jan 2026)**, I engineered end-to-end pipelines for remote damage assessment using monocular imagery from UAVs and satellites.

### Technical Architecture

```
Input Image ──► Depth Estimation ──► DEM Generation ──► Change Detection ──► Web Dashboard
                     │                     │                   │
                     ▼                     ▼                   ▼
              Depth-Anything          Point Cloud         Volumetric
               / ZoeDepth               to DSM            Analysis
```

---

## Key Features

### Monocular Depth Estimation
- Implemented state-of-the-art depth models (Depth-Anything, ZoeDepth)
- Optimized for drone/satellite imagery processing
- Generated metric depth maps for accurate measurements

### DEM Comparison Pipeline
- Multi-temporal DEM registration and alignment
- Automatic change area detection
- Volumetric quantification of structural changes

### Web-Based Dashboard
- **Deployed via Nginx** for remote access
- Interactive visualization of damage areas
- Report generation for assessment teams

---

## Applications

| Application | Description |
|-------------|-------------|
| **Urban Compliance** | Detection of unauthorized construction |
| **Conflict Assessment** | Structural damage quantification |
| **Disaster Response** | Post-event infrastructure evaluation |

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Depth Models** | Depth-Anything, ZoeDepth, MiDaS |
| **3D Processing** | Open3D, PCL, CloudCompare |
| **Deployment** | Nginx, Docker, FastAPI |
| **Languages** | Python, JavaScript |
