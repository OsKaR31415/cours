up::[[ensembles de nombres]]
title::"$\mathbb{C} := \{ a + ib \mid (a, b) \in \mathbb{R} \}$ où $i^{2} = -1$"
#maths/analyse/complexes

----
On a créé un objet noté $i$ tel que $i^2 = -1$
Un nombre complexe $z$ s'écrit $z = a + ib$ avec $(a, b)\in\mathbb R^2$
$\mathbb C$ est l'ensemble des nombres complexes. On a donc $z\in\mathbb C$

# Propriétés

 - $\mathbb{C}$ est un [[corps]] 

Soit $z = a+ib$ un nombre complexe :

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
# Notations
Soit $z = a+ib, (a,b)\in\mathbb R^2$.

 - $\text{Re}(z)$ est la _partie réelle_ de $z$ (soit $a$)
 - $\text{Im}(z)$ est la _partie imaginaire_ de $z$ (soit $b$)
 - $|z|$ est le [[module d'un complexe|module]] de $z$
 - $\arg(z)$ ets [[argument|l'argument]] de $z$
 - $\overline{z}$ est le [[conjugé complexe]] de $z$
 - la forme $z=a+ib, (a,b)\in\mathbb R^2$ est la [[forme algébrique]] de $z$
 - la forme $\alpha e^{i\theta}$ est la [[forme exponentielle]] de $z$
 - la forme $\alpha\left( cos(\theta) + i\sin(\theta) \right)$ est la [[forme trigonométrique d'un complexe|forme trigonométrique]] de $z$

 Voir : [[construction de C]]

 
