---
title: Matrix calculus derivations
date: 2023-06-19
description: Some useful matrix calculus derivations.
keywords:  
tags:
- calculus
- linear-algebra
math: true
toc: false
draft: true
pubDate: 2023-06-19
lastMod:
---

## Vector-vector inner product

Let $\mathbf{x} \in \mathbb{R}^k$, $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^n$, $\mathbf{g} : \mathbb{R}^k \to \mathbb{R}^n$, and $\mathbf{y} : \mathbb{R}^k \to \mathbb{R}$ such that $y(\mathbf{x}) = \mathbf{f}(\mathbf{x})^{\top} \mathbf{g}(\mathbf{x})$. Then,

$$
\frac{\partial y}{\partial \mathbf{x}} = \mathbf{f}(\mathbf{x})^{\top} \frac{\partial \mathbf{g}}{\partial \mathbf{x}} + \mathbf{g}(\mathbf{x})^{\top} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }.
$$

## Matrix-vector product

Let $\mathbf{x} \in \mathbb{R}^k$, $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^m$, $\mathbf{A} \in \mathbb{R}^{n \times m}$, and $\mathbf{y} : \mathbb{R}^k \to \mathbb{R}^n$ such that $\mathbf{y}(\mathbf{x}) = \mathbf{A} \mathbf{f}(\mathbf{x})$. Then,

$$
\frac{ \partial \mathbf{y} }{ \partial \mathbf{x} } = \mathbf{A} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }. 
$$

## Vector-matrix product

Let $\mathbf{x} \in \mathbb{R}^k$, $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^n$, $\mathbf{A} \in \mathbb{R}^{n \times m}$, and $\mathbf{y} : \mathbb{R}^k \to \mathbb{R}^m$ such that $\mathbf{y}(\mathbf{x}) = \mathbf{f}(\mathbf{x})^{\top} \mathbf{A}$. Then,

$$
\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \mathbf{A}^{\top} \frac{\partial \mathbf{f}}{\partial \mathbf{x}}.
$$

## Vector-matrix-vector product

Let $\mathbf{x} \in \mathbb{R}^k$, $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^n$, $\mathbf{g} : \mathbb{R}^k \to \mathbb{R}^m$, $\mathbf{A} \in \mathbb{R}^{n \times m}$, and $\mathbf{y} : \mathbb{R}^k \to \mathbb{R}$ such that $y(\mathbf{x}) = \mathbf{f}(\mathbf{x})^\top \mathbf{A} \mathbf{g}(\mathbf{x})$. Then,

$$
\frac{\partial y}{\partial \mathbf{x}} = 
$$
