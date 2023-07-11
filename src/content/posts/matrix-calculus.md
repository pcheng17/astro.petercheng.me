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

## Matrix-vector product

Let $\mathbf{x} \in \mathbb{R}^k$, $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^m$, $\mathbf{A} \in \mathbb{R}^{n \times m}$, and $\mathbf{y} : \mathbb{R}^k \to \mathbb{R}^n$ such that $\mathbf{y}(\mathbf{x}) = \mathbf{A} \mathbf{f}(\mathbf{x})$. Then,

$$
\frac{ \partial \mathbf{y} }{ \partial \mathbf{x} } = \mathbf{A} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }. 
$$

### Proof

Consider the $i$-th component of the vector $\mathbf{y}(\mathbf{x})$,

$$
y_{i} = \sum_{k=1}^m A_{ik} f_{k},
$$

where $A_{ik}$ is the $ik$-th component of $\mathbf{A}$, and $f_k$ is the $k$-th component of $\mathbf{f}(\mathbf{x})$. Then, differentiating both sides with respect to $x_j$, the $j$-th component of $\mathbf{x}$ yields

$$
\frac{ \partial y_{i} }{ \partial x_{j} } = \frac{ \partial  }{ \partial x_{j} } \left( \sum_{k=1}^m A_{ik} f_{k} \right) = \sum_{k=1}^m A_{ik} \frac{ \partial f_{k} }{ \partial x_{j} }.
$$

Note that $\frac{ \partial y_{i} }{ \partial x_{j} }$ is the $ij$-th component of the matrix $\frac{ \partial \mathbf{y} }{ \partial \mathbf{x} }$, and the right-hand side is the $ij$-th component of the matrix product $\mathbf{A} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }$. Therefore, the result holds.

## Vector-matrix product

Let $\mathbf{x} \in \mathbb{R}^k$, $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^n$, $\mathbf{A} \in \mathbb{R}^{n \times m}$, and $\mathbf{y} : \mathbb{R}^k \to \mathbb{R}^m$ such that $\mathbf{y}(\mathbf{x}) = \mathbf{f}(\mathbf{x})^{\top} \mathbf{A}$. Then,

$$
\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \mathbf{A}^{\top} \frac{\partial \mathbf{f}}{\partial \mathbf{x}}.
$$

### Proof

Consider the $i$-th component of the vector $\mathbf{y}(\mathbf{x})$,

$$
y_{i} = \sum_{k=1}^n f_{k} A_{ki},
$$

where $f_k$ is the $k$-th component of $\mathbf{f}(\mathbf{x})$, and $A_{ki}$ is the $ki$-th component of $\mathbf{A}$. Then, differentiating both sides with respect to $x_j$, the $j$-th component of $\mathbf{x}$ yields

$$
\frac{ \partial y_{i} }{ \partial x_{j} } = \frac{ \partial  }{ \partial x_{j} } \left( \sum_{k=1}^n f_{k} A_{ki} \right) = \sum_{k=1}^n \frac{ \partial f_{k} }{ \partial x_{j} } A_{ki}.
$$

Note that $\frac{ \partial y_{i} }{ \partial x_{j} }$ is the $ij$-th component of the matrix $\frac{ \partial \mathbf{y} }{ \partial \mathbf{x} }$, and the right-hand side is the $ji$-th component of the matrix product $\frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }^{\top} \mathbf{A}$, or equivalently, the $ij$-th component of the matrix product $\mathbf{A}^{\top} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }$. Therefore, the result holds.

## Vector-vector inner product

Let $\mathbf{x} \in \mathbb{R}^k$, $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^n$, $\mathbf{g} : \mathbb{R}^k \to \mathbb{R}^n$, and $\mathbf{y} : \mathbb{R}^k \to \mathbb{R}$ such that $y(\mathbf{x}) = \mathbf{f}(\mathbf{x})^{\top} \mathbf{g}(\mathbf{x})$. Then,

$$
\frac{\partial y}{\partial \mathbf{x}} = \mathbf{f}(\mathbf{x})^{\top} \frac{\partial \mathbf{g}}{\partial \mathbf{x}} + \mathbf{g}(\mathbf{x})^{\top} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }.
$$

## Vector-matrix-vector product

Let $\mathbf{x} \in \mathbb{R}^k$, $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^n$, $\mathbf{g} : \mathbb{R}^k \to \mathbb{R}^m$, $\mathbf{A} \in \mathbb{R}^{n \times m}$, and $\mathbf{y} : \mathbb{R}^k \to \mathbb{R}$ such that $y(\mathbf{x}) = \mathbf{f}(\mathbf{x})^\top \mathbf{A} \mathbf{g}(\mathbf{x})$. Then,

$$
\frac{\partial y}{\partial \mathbf{x}} = \mathbf{f}(\mathbf{x})^{\top} \mathbf{A} \frac{ \partial \mathbf{g} }{ \partial \mathbf{x} } + \mathbf{g}(\mathbf{x})^{\top} \mathbf{A}^{\top} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }.
$$
