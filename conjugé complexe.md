# Conjugué complexe
Soit $z = a+ib$ un [[nombre complexe]].
Le _complexe conjugué_ $z$ est noté $\overline z$, et est le complexe tel que :
$\overline{z} = a-ib$

## Propriétés
Soit $z = a+ib$ un nombre complexe.

- $z + \overline z = 2\text{Re}(z)$
     - $\text{Re}(z) = \dfrac{z+\overline z}2$
- $z-\overline z = 2i\text{Im}(z)$
     - $\text{Im}(z) = \dfrac{z-\overline z}{2i}$
- $\lambda z = \lambda a + i\lambda b$
     - $\text{Re}(\lambda z) = \lambda \text{Re}(z)$
     - $\text{Im}(\lambda z) = \lambda \text{Im}(z)$
- $z = \overline z \iff z\in\mathbb R$
     - Evident car $\text{Re}(z) = \text{Re}(\overline z)$ et car $\text{Im}(z) = -\text{Im}(\overline z)$
     - Permet de montrer qu'un complexe est un réel
- $z = -\overline z \iff z\in i\mathbb R$
     - Evident car $\text{Re}(z) = \text{Re}(\overline z)$ et car $\text{Im}(z) = -\text{Im}(\overline z)$
     - Permet de moontrer qu'un complexe est un imaginaire pur
- $z\times\overline z = |z|^2$
     - Démonstration : $z\times\overline z = (a+ib)(a-ib) = a^2-(ib)^2 = a^2 + b^2 = |z|^2$
- $\dfrac1z = \overline z\dfrac1{|z^2|}$
     - Démonstration : $\dfrac1z = \dfrac{\overline z}{z\times\overline z} = \dfrac{\overline z}{|z|^2} = \overline z\dfrac1{|z|^2}$

La conjuguaison complexe est distributive sur l'addition, la soustraction, la multiplication et la division :

- $\overline{z+z'} = \overline z + \overline{z'}$
- $\overline{z\times z'} = \overline z \times \overline{z'}$
- $\overline{\dfrac z{z'}} = \dfrac{\overline z}{\overline{z'}}$ (si $z'\neq 0$)



