---
alias: ["automate à pile", "pushdown automata"]
---
up::[[automate]]
link:: [wikipedia](https://fr.wikipedia.org/wiki/Automate_%C3%A0_pile)
#informatique 

---

# Motivation
On veut reconnaitre un langage sur $\Sigma$
Ce langage peut être relativement expressif, typiquement autant qu'un langage de programmation (voir [[grammaire-algebrique]])

# Définition

Même base qu'un [[automate-fini]], mais on rajoute une [[string-stack|pile à chaines de caractères]]

Plus précisémment:
$A=(Q, \Sigma, \Gamma, q_0, F, \gamma_0, \delta)$
Avec
- $Q$ les états de l'automate
- $\Sigma$ l'alphabet d'entrée
- $\Gamma$ l'alphabet de pile
- $q_0$ l'état initiale
- $F$ l'ensemble des états finaux
- $\gamma_0$ le symbole de pile initial
- $\delta: Q\times (\Sigma \cup \varepsilon) \times \Gamma \to Q \times \Gamma^*$ la fonction de transition


> [!NOTE] Pile
> Il faut se rappeler que par convention, on empile et dépile **par la gauche**


# Transition
Une configuration pour l'automate est un triplet $(q, m, \alpha)$ avec
- $q$ l'état courant
- $m$ le mot qui reste à lire
- $\alpha$ le mot qui constitue la pile

On définit la relation binaire $\vdash$ , *c'est elle qui spécifie le fonctionnement de l'automate*

$\vdash$ est vérifiée pour les couples de configuration sous une des deux formes:

1) $(q, aM, zL) \vdash (q', M, VL)$
2) $(q, M, zL) \vdash (q', M, VL)$

Avec
- $q, q' \in Q$
- $M \in \Sigma^*$ et $a \in \Sigma$
- $L \in \Gamma^*$, $V \in \Gamma^*$, $z \in \Gamma$
- $(q', V) \in \delta(q, a, z)$

(on a mis les mots en majuscule pour les distinguer des lettres)

Lors de la transition 1):
- on a lu la lettre $a$
- on a changé d'état $q \to q'$
- on a dépilé $z$ et empilé le mot $V$
- le tout était autorisé par $\delta$

Lors de la transition 2), on a fait la même chose sans lire aucune lettre: on parle de transition $\epsilon$ ou transition instantanée


On dit qu'une configuration découle d'une autre quand il existe une suite de transitions qui passe d'une configuration à l'autre
On note $c_1 \vdash^* c_2$


> [!WARNING] Unicité
> Pour une configuration donnée, il peut souvent en découler plusieurs ($\delta$ peut donner plusieurs possibilités.
> Il faut voir l'ensemble des transitions possibles comme un arbre de racine $(q_0, u, \gamma_0)$
> On parle d'automate déterministe quand cet arbre est toujours dégénéré (linéaire)

# Reconaissance
On a deux modes de reconnaissance:
- par pile vide
- par état final

## Pile vide
le mot $u$ est reconnu quand
$(q_0, u, \gamma_0) \vdash (q', \epsilon, \epsilon)$

## État final
le mot $u$ est reconnu quand
Quand $(q_0, u, \gamma_0) \vdash (q', \epsilon, \gamma)$ avec $q \in F$

# Automate à deux piles
Si on lui donne deux piles, un automate devient capable de simuler une [[machine-turing]]