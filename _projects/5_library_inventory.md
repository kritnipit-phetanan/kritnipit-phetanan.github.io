---
layout: page
title: Smart Library Shelf Auditing System
description: Automated book identification and placement verification using YOLO and multi-feature analysis
img: assets/img/book.jpg
importance: 5
category: Work
mermaid:
  enabled: true
  zoomable: true
---

## Overview

Contributed to the development of an **automated library shelf auditing system** using computer vision for real-time book detection, identification, and shelf auditing. This project was developed for the **National Library of Luxembourg**, enabling efficient visual inventory management across their extensive collection.

<div class="row mt-3">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/IMG_5116.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/IMG_8990.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Project Context

I worked on vision-based inventory management solutions, deploying YOLO and feature matching techniques to automate visual auditing workflows.

---

## System Architecture

```mermaid
graph TD
    classDef input fill:#e1f5fe,stroke:#01579b,stroke-width:2px,color:#000000;
    classDef process fill:#f3e5f5,stroke:#4a148c,stroke-width:2px,color:#000000;
    classDef result fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px,color:#000000;
    classDef feature fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#000000;

    A(["Camera Input<br/>(Shelf Image/Video)"]) --> B["YOLO Book Detection<br/>(Spine Localization)"]
    
    subgraph Identification ["Identification Methods"]
        direction LR
        C["Data Matrix Decode<br/>(Primary Path)"]
        D["Feature-Based<br/>Identification<br/>(Fallback Path)"]
    end
    
    B --> C
    B --> D
    
    D --> E["Multi-Descriptor Matching"]
    
    subgraph Descriptors ["Feature Extractors"]
        direction LR
        F["SIFT"] ~~~ G["LBP"] ~~~ H["Gabor"] ~~~ I["HOG"]
    end
    
    E --> Descriptors
    
    C --> J(["Inventory Database<br/>(Present / Missing / Wrong Order / Misshelved)"])
    Descriptors --> J
    
    class A input;
    class B,C,D,E process;
    class F,G,H,I feature;
    class J result;
```

---

## Detection Pipeline

### Primary Path: Barcode Decoding
- **Data Matrix** / ISBN barcode detection
- Direct database lookup for instant identification
- Works best for books with visible, undamaged barcodes

### Fallback Path: Feature Matching
When barcodes are unreadable, the system uses **multi-descriptor matching** with books in database:

| Descriptor | Purpose | Strength |
|------------|---------|----------|
| **SIFT** | Scale-invariant features | Rotation/scale robust |
| **LBP** | Texture patterns | Lighting invariant |
| **Gabor** | Frequency/orientation | Pattern recognition |
| **HOG** | Shape gradients | Structural features |

---

## Inventory Status Detection

| Status | Description | Action |
|--------|-------------|--------|
| ✅ **Present** | Book in correct location | No action needed |
| ❌ **Missing** | Book not found on shelf | Alert librarian |
| ❌ **Wrong Order** | Book in wrong order | Alert librarian |
| ⚠️ **Misshelved** | Book in wrong location | Alert librarian |
| ⚠️ **Extra** | Unlisted book detected | Alert librarian |

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Object Detection** | YOLO |
| **Feature Extraction** | SIFT, ORB, LBP, HOG, Gabor |
| **Barcode** | Data Matrix |
| **Framework** | OpenCV, PyTorch |
| **Languages** | Python |
