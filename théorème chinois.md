up::[[MOC arithmétique]] 
#maths/arithmétique 

---

> [!definition] Théorème chinois
> Soit $n \in \mathbb{N}$ avec $n \geq 2$
> Soit $(m_{n}) \in \mathbb{N}^{\mathbb{N}^{*}}$ une suite de nombres deux-à-deux **[[nombres premiers entre eux|premiers entre eux]]**
> Soit $(a_{n}) \in \mathbb{N}^{\mathbb{N}^{*}}$ une suite
> Le système :
> $\begin{cases} x \equiv a_1 [m_1]\\ x\equiv a_2[m_2]\\ \vdots\\ x\equiv a_{n}[m_{n}] \end{cases}$
> Admet une **unique solution** modulo $m_1 \times m_2 \times \cdots \times m_{n}$
> Soit $p = \prod\limits_{k=1}^{n} m_{n}$, cette solution est une classe de $\mathbb{Z}/p\mathbb{Z}$ par la relation $\equiv$
> Soit $(M_{i})$ la suite telle que $M_{i} = \dfrac{p}{m_{i}}$
> Soit $(y_{n})$ la suite telle que $y_{i} M_{i} \equiv 1 [m_{i}]$
> Et on a :
> $x = a_1M_1y_1 + a_2M_2y_2 + \cdots + a_{n}M_{n}y_{n}$
^definition



$$
\forall n \in \mathbb{N}, n\geq 2 \implies \forall a\in\mathbb{N}^{\mathbb{N}}, \forall m\in\mathbb{N}^{\mathbb{N}}, \forall (i, j) \in \mathbb{N}^{2}, 
$$