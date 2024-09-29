---
date: '3'
title: 'Robot Path Planning with PRM'
cover: 'results_screenshot.png'
github: https://github.com/LateefAkinola/Robot-Sampling-Based-Planning-with-PRM'
external: 'https://github.com/LateefAkinola/Robot-Sampling-Based-Planning-with-PRM'
tech:
  - Python
  - Jupyter Notebook
  - CoppeliaSim

showInProjects: true
---

A PRM program was written to carry out a sampling-based planning in order to find a path for a point robot through a cluttered planar environment with predefined obstacles.

The program takes the obstacles.csv file as input, chooses its own random samples in the (x, y) C-space, and its output consists of three files: nodes.csv, edges.csv, and path.csv.
For visualization purposes, the csv motion planning [kilobot](https://www.kilobotics.com/) scene was utilized.

