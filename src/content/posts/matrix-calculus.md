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
draft: false
pubDate: 2023-08-07
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

where $A_{ik}$ is the $ik$-th component of $\mathbf{A}$, and $f_k$ is the $k$-th component of $\mathbf{f}(\mathbf{x})$. Then, differentiating both sides with respect to $x_j$, the $j$-th component of $\mathbf{x}$, yields

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

where $f_k$ is the $k$-th component of $\mathbf{f}(\mathbf{x})$, and $A_{ki}$ is the $ki$-th component of $\mathbf{A}$. Then, differentiating both sides with respect to $x_j$, the $j$-th component of $\mathbf{x}$, yields

$$
\frac{ \partial y_{i} }{ \partial x_{j} } = \frac{ \partial  }{ \partial x_{j} } \left( \sum_{k=1}^n f_{k} A_{ki} \right) = \sum_{k=1}^n \frac{ \partial f_{k} }{ \partial x_{j} } A_{ki}.
$$

Note that $\frac{ \partial y_{i} }{ \partial x_{j} }$ is the $ij$-th component of the matrix $\frac{ \partial \mathbf{y} }{ \partial \mathbf{x} }$, and the right-hand side is the $ji$-th component of the matrix product $\frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }^{\top} \mathbf{A}$, or equivalently, the $ij$-th component of the matrix product $\mathbf{A}^{\top} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }$. Therefore, the result holds.

## Vector-vector inner product

Let $\mathbf{x} \in \mathbb{R}^k$, $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^n$, $\mathbf{g} : \mathbb{R}^k \to \mathbb{R}^n$, and $\mathbf{y} : \mathbb{R}^k \to \mathbb{R}$ such that $y(\mathbf{x}) = \mathbf{f}(\mathbf{x})^{\top} \mathbf{g}(\mathbf{x})$. Then,

$$
\frac{\partial y}{\partial \mathbf{x}} = \mathbf{f}(\mathbf{x})^{\top} \frac{\partial \mathbf{g}}{\partial \mathbf{x}} + \mathbf{g}(\mathbf{x})^{\top} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }.
$$

### Proof

We may rewrite $y(\mathbf{x})$ more explicitly as 
$$
y(\mathbf{x}) = \sum_{k=1}^n f_{k} g_{k},
$$
where $f_{k}$ and $g_{k}$ are the $k$-th component of $\mathbf{f}(\mathbf{x})$ and $\mathbf{g}(\mathbf{x})$, respectively. Then, differentiating both sides with respect to $x_{j}$, the $j$-th component of $\mathbf{x}$, yields 
$$
\frac{ \partial y }{ \partial x_{j} } = \sum_{k=1}^n \left( f_{k} \frac{ \partial g_{k} }{ \partial x_{j} } + g_{k} \frac{ \partial f_{k} }{ \partial x_{j} }  \right).
$$
Note that the left-hand side is the $j$-th component of $\frac{ \partial y }{ \partial \mathbf{x} }$, and the right-hand side is the $j$-th component of $\mathbf{f}(\mathbf{x})^{\top} \frac{\partial \mathbf{g}}{\partial \mathbf{x}} + \mathbf{g}(\mathbf{x})^{\top} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }$. Therefore, our result holds.

## Vector-matrix-vector product

Let $\mathbf{x} \in \mathbb{R}^k$, $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^n$, $\mathbf{g} : \mathbb{R}^k \to \mathbb{R}^m$, $\mathbf{A} \in \mathbb{R}^{n \times m}$, and $\mathbf{y} : \mathbb{R}^k \to \mathbb{R}$ such that $y(\mathbf{x}) = \mathbf{f}(\mathbf{x})^\top \mathbf{A} \mathbf{g}(\mathbf{x})$. Then,
$$
\frac{\partial y}{\partial \mathbf{x}} = \mathbf{f}(\mathbf{x})^{\top} \mathbf{A} \frac{ \partial \mathbf{g} }{ \partial \mathbf{x} } + \mathbf{g}(\mathbf{x})^{\top} \mathbf{A}^{\top} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }.
$$

### Proof 

This follows from the previous results. First, let $\mathbf{h}(\mathbf{x}) = \mathbf{A} \mathbf{g}(\mathbf{x})$, so $y(\mathbf{x})=\mathbf{f}(\mathbf{x})^{\top} \mathbf{h}(\mathbf{x})$. Then, using the derivative of the inner product of two vectors, we obtain
$$
\frac{ \partial y }{ \partial \mathbf{x} } = \mathbf{f}(\mathbf{x})^{\top} \frac{ \partial \mathbf{h} }{ \partial \mathbf{x} } + \mathbf{h}(\mathbf{x})^{\top} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }.
$$
Additionally from earlier results, we also know that $\mathbf{h}(\mathbf{x}) = \mathbf{A}\frac{ \partial \mathbf{g} }{ \partial \mathbf{x} }$, so it follows that
$$
\frac{ \partial y }{ \partial \mathbf{x} } = \mathbf{f}(\mathbf{x})^{\top} \mathbf{A} \frac{ \partial \mathbf{g} }{ \partial \mathbf{x} } + \mathbf{g}(\mathbf{x})^{\top} \mathbf{A}^{\top} \frac{ \partial \mathbf{f} }{ \partial \mathbf{x} }.
$$