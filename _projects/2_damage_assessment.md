---
layout: page
title: Automated 3D Conflict Damage Assessment & Visualization System
description: Monocular depth estimation pipelines for urban change detection and conflict damage assessment
img: assets/img/war.jpg
importance: 2
category: Work
---

## Overview

Developed an **Automated 3D Damage Assessment System** using monocular depth estimation model to detect changes in 3D for urban and conflict zone damage assessment. The primary study areas focused on the **Ukraine-Russia border regions**, including heavily impacted cities such as **Marinka** and **Mariupol**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2569-01-31 02.00.52.jpg" title="Damage Assessment View 1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2569-01-31 02.01.04.jpg" title="Damage Assessment View 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
---

## Project Context

At **Data Design Engineering**, I engineered end-to-end pipelines for damage assessment using monocular imagery from UAVs and satellites.

### Technical Architecture

```
Input RGB Image ──► Depth Estimation Model ──►  Change Detection Model ──► Web Dashboard
```

---

## Key Features

### Monocular Depth Estimation
- Implemented state-of-the-art depth models (Depth-Anything)
- Generated depth maps for change detection

### Change Detection Model
- Implemented state-of-the-art change detection models (Bandon)
- Generated change maps for change detection

### Web-Based Dashboard
- **Deployed via Nginx** for remote access
- Interactive visualization of damage areas in 3D
- Labeling interface for damage assessment

---

## Applications

| Application | Description |
|-------------|-------------|
| **Urban Compliance** | Detection of unauthorized construction |
| **Conflict Assessment** | Structural damage quantification |
| **Disaster Response** | Post-event infrastructure evaluation |
| **Asset Management** | Inventory and monitoring of assets |

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Depth Models** | Depth-Anything, Bandon |
| **3D Processing** | Open3D, Three.js |
| **Deployment** | Nginx, Docker, FastAPI |
| **Languages** | Python, JavaScript |

