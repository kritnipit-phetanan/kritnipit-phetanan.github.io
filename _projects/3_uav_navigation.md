---
layout: page
title: GNSS-Denied UAV Navigation System
description: VIO & VPS sensor fusion framework with custom EKF for precise UAV localization
img: assets/img/drone.jpg
importance: 3
category: Work
---

## Overview

Engineered a **GNSS-denied navigation system** for UAVs, integrating Visual-Inertial Odometry (VIO) and Visual Positioning System (VPS) through a custom Extended Kalman Filter (EKF) for precise localization.

---

## Project Context

At **Data Design Engineering (Sep 2024 - Jan 2026)**, I developed navigation modules enabling UAV operation in GPS-denied environments such as urban canyons, indoor spaces, and EW-contested areas.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    Sensor Input Layer                           │
├──────────────┬──────────────┬──────────────┬───────────────────┤
│   IMU Data   │ Camera Frame │  Barometer   │   Magnetometer    │
│  (200 Hz)    │  (30 fps)    │   (50 Hz)    │     (100 Hz)      │
└──────┬───────┴──────┬───────┴──────┬───────┴─────────┬─────────┘
       │              │              │                 │
       ▼              ▼              ▼                 ▼
┌──────────────────────────────────────────────────────────────────┐
│                Extended Kalman Filter (18-State)                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ State: [position, velocity, orientation, IMU bias, ...]  │  │
│  └──────────────────────────────────────────────────────────┘  │
└──────────────────────────────┬───────────────────────────────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│ VIO Update  │         │ VPS Update  │         │ Mag Update  │
│ (relative)  │         │ (absolute)  │         │ (heading)   │
└─────────────┘         └─────────────┘         └─────────────┘
```

---

## Key Components

### Visual-Inertial Odometry (VIO)
- Feature tracking with optical flow
- IMU pre-integration for motion estimation
- Provides high-frequency relative pose updates

### Visual Positioning System (VPS)
- Georeferenced map matching
- Absolute position corrections
- DAM/DEM-based terrain correlation

### Custom EKF Implementation
- 18-state formulation (position, velocity, orientation, biases)
- Optimized prediction-update cycle
- Robust outlier rejection

---

## Hardware Deployment

| Platform | Specs | Performance |
|----------|-------|-------------|
| **Raspberry Pi 5** | ARM Cortex-A76, 8GB RAM | Real-time @ 30 Hz |
| **Orange Pi 5** | RK3588S, 8GB RAM | Real-time @ 50 Hz |

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Computer Vision** | OpenCV, Feature Matching (xFeat) |
| **State Estimation** | Custom EKF, NumPy, SciPy |
| **Robotics** | ROS 2, sensor drivers |
| **Optimization** | ONNX, TensorRT |
| **Languages** | Python, C++ |
