---
layout: page
title: Vision-Based Library Inventory System
description: Automated library shelf auditing using YOLO detection and multi-descriptor book identification
img: assets/img/5.jpg
importance: 5
category: Work
---

## Overview

Contributed to the development of an **automated library inventory system** using computer vision for real-time book detection, identification, and shelf auditing.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="Library Inventory System" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Project Context

At **Data Design Engineering**, I worked on vision-based inventory management solutions, deploying YOLO and feature matching techniques to automate visual auditing workflows.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       Camera Input                           │
│                    (Shelf Image/Video)                       │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    YOLO Book Detection                       │
│                  (Spine Localization)                        │
└──────────────────────────┬──────────────────────────────────┘
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
┌───────────────────────┐    ┌───────────────────────┐
│   Data Matrix/ISBN    │    │   Feature-Based       │
│      Decoding         │    │   Identification      │
│    (Primary Path)     │    │   (Fallback Path)     │
└───────────┬───────────┘    └───────────┬───────────┘
            │                            │
            │                ┌───────────┴───────────┐
            │                │   Multi-Descriptor    │
            │                │      Matching         │
            │                │  ┌─────┐ ┌─────┐     │
            │                │  │SIFT │ │ LBP │     │
            │                │  └─────┘ └─────┘     │
            │                │  ┌─────┐ ┌─────┐     │
            │                │  │Gabor│ │ HOG │     │
            │                │  └─────┘ └─────┘     │
            │                └───────────┬───────────┘
            │                            │
            └────────────┬───────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Inventory Database                         │
│           (Status: Present/Missing/Misplaced)                │
└─────────────────────────────────────────────────────────────┘
```

---

## Detection Pipeline

### Primary Path: Barcode Decoding
- **Data Matrix** / ISBN barcode detection
- Direct database lookup for instant identification
- Works best for books with visible, undamaged barcodes

### Fallback Path: Feature Matching
When barcodes are unreadable, the system uses multi-descriptor matching:

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
| ⚠️ **Misplaced** | Book in wrong location | Generate relocation task |
| ➕ **Extra** | Unlisted book detected | Add to inventory |

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Object Detection** | YOLO v8/v11 |
| **Feature Extraction** | SIFT, ORB, LBP, HOG, Gabor |
| **Barcode** | Data Matrix, ISBN decoding |
| **Framework** | OpenCV, PyTorch |
| **Languages** | Python |
