---
layout: page
title: GNSS-Denied UAV Navigation System
description: VIO & VPS sensor fusion framework for UAV localization using custom EKF
img: assets/img/3.jpg
importance: 3
category: work
---

## Overview

Developed a **sensor fusion framework** for GNSS-denied UAV localization using a custom **Extended Kalman Filter (EKF)**. The system integrates Visual-Inertial Odometry (VIO) and Visual Positioning System (VPS) inputs from a monocular downward-facing camera.

### Key Features

- **GNSS-Denied Operation**: Enables UAV navigation in GPS-denied environments
- **Custom EKF Implementation**: Tailored Extended Kalman Filter for optimal sensor fusion
- **VIO Integration**: Visual-Inertial Odometry for real-time motion estimation
- **VPS Integration**: Visual Positioning System for absolute position correction
- **Monocular Camera**: Cost-effective solution using single downward-facing camera

### System Architecture

```
IMU Data ────┐
             ├──► Extended Kalman Filter ──► Fused Pose Estimate
VIO Output ──┤
             │
VPS Output ──┘
```

### Technologies Used

- Python, NumPy
- Extended Kalman Filter
- Visual-Inertial Odometry
- Visual Positioning System
- Computer Vision (OpenCV)

