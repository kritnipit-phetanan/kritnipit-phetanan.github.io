---
layout: page
title: Vision-Based Library Inventory System
description: Automated library shelf auditing using YOLO and multi-descriptor book identification
img: assets/img/5.jpg
importance: 5
category: work
---

## Overview

Contributed to the development of an **automated library inventory system**. The system utilizes YOLO for book detection and Data Matrix decoding, with a robust fallback retrieval pipeline for books without readable codes.

### Key Features

- **YOLO-based Detection**: Real-time book detection on library shelves
- **Data Matrix Decoding**: Primary identification through barcode reading
- **Fallback Retrieval Pipeline**: Multi-descriptor approach for codeless identification
- **Inventory Status Detection**: Identifies missing, misplaced, misshelved, or extra items

### Technical Approach

#### Primary Detection
- **YOLO**: Fast and accurate book spine detection
- **Data Matrix**: Standard barcode decoding for book identification

#### Fallback Retrieval Pipeline
When barcodes are unreadable, the system uses:
- **SIFT**: Scale-Invariant Feature Transform for distinctive features
- **LBP**: Local Binary Patterns for texture analysis
- **Gabor Filters**: Frequency and orientation-based pattern recognition
- **HOG**: Histogram of Oriented Gradients for shape description

### Technologies Used

- YOLO (Object Detection)
- OpenCV
- SIFT, LBP, Gabor Filters, HOG
- Data Matrix Decoding

