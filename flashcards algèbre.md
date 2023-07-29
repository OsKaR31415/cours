#maths/algèbre #flashcards/maths/algèbre

# Structures 

propriétés d'un semi groupe
??
une loi de composition **interne**
et **associative**
<!--SR:!2024-05-13,326,192!2023-10-24,98,292-->

propriétés d'un groupe
??
une loi de composition **interne**
et **associative**
Il existe un **élément neutre**
Tous les éléments ont un **symétrique**
<!--SR:!2026-09-18,1184,330!2023-07-22,223,312-->

propriétés d'un monoïde
??
une loi de composition **interne**
et **associative**
Il existe un **élément neutre**
<!--SR:!2023-08-11,49,172!2024-07-23,397,272-->

l'**ordre d'un groupe** est...
??
le _nombre d'éléments_ de son ensemble sous-jacent 
<!--SR:!2023-10-28,365,312!2023-07-08,188,292-->

l'**ordre** d'un **élément** $a$ d'un groupe est...
??
le plus petit nombre $n$ tel que $a^{*n}=a$
<!--SR:!2024-01-01,365,312!2025-11-18,880,312-->

propriétés d'un [[espace vectoriel]] 
??
$(E, +, \cdot)$ tel que :
 - $(E, +)$ est un [[groupe abélien]] 
     - [[loi de composition interne]] 
     - [[commutativité|commutative]] 
     - un [[élément neutre]] 
     - tous les éléments sont [[éléments symétrisables|symétrisables]] 
 - $\cdot$ est [[distributivité|distributive]] sur $+$
<!--SR:!2024-05-04,365,292!2025-08-13,783,312-->


sous espace vectoriel
?
 - $F \subset E$
 - $0_{E} \in F$
 - $\forall (u, v) \in E^{2}, \forall \lambda \in \mathbb{R}, \lambda u + v \in F$ (stable par combinaison linéaire)
<!--SR:!2023-09-30,272,322-->

propriétés d'un [[espace affine]] 
?
Soit $E$ un [[espace vectoriel]] 
$\mathcal{E}$ est un [[espace affine]] ssi :
 - $\forall (A, B) \in \mathcal{E}^{2}, \quad \overrightarrow{AB} \in E$
     - toute paire de point forme un vecteur de $E$
 - $\forall (A, B)\in \mathcal{E}^{2}, \quad \overrightarrow{AB} = -\overrightarrow{BA}$
     - inverser les points oppose le vecteur
 - $\forall (A, B, C)\in \mathcal{E}^{3}, \quad \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$
     - [[relation de chasles]]
 - $\forall O \in \mathcal{E}, \quad \forall v \in E, \quad \exists!A \in E, \quad \overrightarrow{OA} = \vec{v}$
     - pour toute translation, il existe une image unique pour chaque point
<!--SR:!2023-06-29,1,193-->


espace affine engendré par La famille de points $(\mathcal{A}_{i})$
$Aff(\mathcal{A})$
?
Plus petit espace affine contenant tout les points d'une famille de points $(\mathcal{A}_{i})$
$\begin{align} Aff(\mathcal{A}) &= \mathcal{A}_0+Vect(\{ \overrightarrow{\mathcal{A}_0M} \mid M \in \mathcal{A} \}) \\ &= \mathcal{A}_0 + Vect(\{ \overrightarrow{\mathcal{A}_0\mathcal{A}_1}, \overrightarrow{\mathcal{A}_0\mathcal{A}_2}, \dots, \overrightarrow{\mathcal{A}_0\mathcal{A}_{k}} \}) \end{align}$
$Aff(\mathcal{A})$ se construit avec une origine dans $\mathcal{A}$, et avec toutes les translations engendrées par la famille des vecteurs $\{ \overrightarrow{\mathcal{A}_{0}M} \mid M \in \mathcal{A} \}$
<!--SR:!2024-03-08,259,293-->

direction d'un espace affine $\mathcal{E}$
??
Soit $\mathcal{E}$ un espace affine
l'ensemble $\{ \overrightarrow{AB} \mid (A, B) \in \mathcal{E}^{2} \}$
<!--SR:!2024-04-26,365,313!2025-03-05,621,293-->

[[théorème du rang]] 
??
Soient $E$ et $F$ deux espaces vectoriels de dimension finie
Soit $f : E \to F$
on a :
$\boxed{\dim(\mathrm{Im}(f)) + \dim(\ker(f)) = \dim(E)}$
<!--SR:!2024-10-06,472,273!2024-08-31,484,313-->


Montrer que $F$ est un [[sous espace vectoriel]] de $E$
?
 - $F \subset E$
 - $\vec{0}_{E} \in F$
 - $F$ est stable par combinaisons linéaires
<!--SR:!2024-09-11,495,313-->

Somme d'espaces vectoriels $E+F$
?
$E + F = \{ e + f \mid e \in E \wedge f \in F \}$
<!--SR:!2023-10-23,171,273-->


Théorème des bases incomplètes
??
Soit $E$ un [[espace vectoriel]] de [[dimension d'un espace vectoriel|dimension]] finie
Soit $\mathcal{F}$ une [[famille de vecteurs libre|famille libre]] de vecteurs de $E$.
On peut toujours ajouter un nombre fini de vecteurs à $\mathcal{F}$ pour qu'elle devienne une base de $E$
(Ces vecteurs ajoutés rendent $\mathcal{F}$ [[famille de vecteurs génératrice|génératrice]] )
<!--SR:!2024-03-12,264,293!2024-02-17,240,273-->

Espace préhilbertien réel
??
Un $\mathbb{R}$-[[espace vectoriel]], muni d'une [[forme bilinéaire]] $\varphi$, où :
 - [[forme bilinéaire symétrique|symétrique]] : $\varphi(x, y) = \varphi(y, x)$
 - [[forme bilinéaire définie|définie]] : $\varphi(x, x) = 0 \iff x = \vec{0}$
 - [[forme bilinéaire positive|positive]] : $\varphi(x, x) \geq 0$
<!--SR:!2023-07-05,9,282!2023-09-10,54,302-->

# Applications

application bilinéaire 
?
Application $f: E^{2} \to \mathbf{K}$ telle que :
 - $f(( \textcolor{green}{a_{1}}\textcolor{royalblue}{u_{1}} + \textcolor{orange}{a_{2}}\textcolor{royalblue}{u_{2}}; v )) = \textcolor{green}{a_{1}}f((\textcolor{royalblue}{u_{1}}; v)) + \textcolor{orange}{a_{2}}f((\textcolor{royalblue}{u_{2}}; v))$
 - $f(( u; \textcolor{green}{a_{1}}\textcolor{royalblue}{v_{1}} + \textcolor{orange}{a_{2}}\textcolor{royalblue}{v_{2}} )) = \textcolor{green}{a_{1}}f((u;\textcolor{royalblue}{v_{1}})) + \textcolor{orange}{a_{2}}f((u;\textcolor{royalblue}{v_{2}}))$
<!--SR:!2024-07-21,395,283-->

application symétrique 
??
Application $f : E^{2} \to \mathbf{K}$ telle que 
$\forall  (u, v) \in E^{2}, \quad f((u;v)) = f((v;u))$
<!--SR:!2025-02-21,610,323!2023-09-14,256,303-->


## Applications bilinéaires

Définition d'une norme
??
Soit $E$ un $\mathbf{K}$-[[espace vectoriel]] où $\mathbf{K}$ admet une [[valeur absolue]]
 - [[espace séparé|séparation]] : $\forall x \in \mathbf{E}, \quad \mathcal{N}(x) = 0 \implies x = 0_{E}$
     - la [[réciproque (logique)|réciproque]] est vraie aussi
 - absolue [[application homogène|homogénéité]] : $\forall (\lambda, x) \in K \times E, \quad \mathcal{N}(\lambda x) = |\lambda|\mathcal{N}(x)$
 - [[inégalité triangulaire]] ([[application sous-additive]]) : $\forall (x, y) \in \mathbf{E}^{2}, \quad \mathcal{N}(x + y) \leq \mathcal{N}(x)+\mathcal{N}(y)$
<!--SR:!2023-07-03,7,262!2023-07-06,10,282-->


Soit $b$ une forme bilinéaire de matrice $B$,
exprimer $b(x, y)$ sous forme matricielle
?
$b(x, y) = \,^T\!x \cdot B \cdot y$
<!--SR:!2023-07-15,19,322-->

Définition d'un produit scalaire
??
[[forme bilinéaire]] [[forme bilinéaire symétrique|symétrique]] [[forme bilinéaire définie|définie]] [[forme bilinéaire positive|positive]]
<!--SR:!2023-07-04,8,262!2023-10-18,92,322-->

### Endomorphismes

Définition d'un endomorphisme
??
[[morphisme]] d'un [[espace vectoriel]] dans lui-même
<!--SR:!2023-10-05,79,302!2023-07-03,7,262-->

endomorphisme symétrique
??
$\langle \varphi(u), v \rangle = \langle u, \varphi(v) \rangle$
Sur $\mathbb{R}$, cela est équivalent à dire que la matrice de l'endomorphisme est symétrique
<!--SR:!2023-07-04,8,262!2023-06-29,3,284-->

endomorphisme adjoint d'un endomorphisme $f$
??
$f^{*}$ tel que $\langle f^{*}(u), v \rangle = \langle u, f(v) \rangle$
<!--SR:!2023-07-14,18,302!2023-07-11,15,302-->

matrice adjointe de $A$
??
Notée $A^{*}$
Sur, $\mathbb{C}$, la **transconjuguée** : $A^{*} = \,^T \,\overline{A}$
<!--SR:!2023-07-19,21,302!2023-07-06,10,303-->

endomorphisme normal
??
endomorphisme $f$ tel que $f$ commute avec son [[endomorphisme adjoint|adjoint]]:
$f \circ f^{*} = f^{*} \circ f$
<!--SR:!2023-07-05,9,262!2023-07-12,14,303-->

spectre d'un endomorphisme linéaire
??
ensemble des valeurs propres d'un endomorphisme
<!--SR:!2023-07-01,5,242!2023-07-07,11,283-->



- [x] #task rédiger flashcards ✅ 2023-05-15
 - démonstration de l'[[inégalité triangulaire]] 
 - [[inégalité de cauchy schwartz]] 
     - cas d'égalité
 - définition d'[[espace préhilbertien]] --> structures
 - définition de [[orthogonal d'un sous espace vectoriel|sev orthogonal]] --> structures
 - endomorphisme 
     - adjacent et matrice adjacente

# Matrices 


Matrice de rotation en 2D (angle $\theta$) ::: $\large\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}$
<!--SR:!2023-06-29,1,164!2024-11-30,521,304-->

Matrice de symétrie en 2D (angle $\theta$) ::: $\large \begin{pmatrix}\cos \theta & \sin \theta \\ \sin \theta & -\cos \theta\end{pmatrix}$
<!--SR:!2023-07-04,12,230!2023-12-21,230,270-->

[[direction d'un espace affine]] ::: Ensemble des vecteurs formés par deux points d'un [[espace affine]] 
<!--SR:!2025-05-13,691,313!2023-08-23,62,233-->
$\{ \overrightarrow{AB} \mid (A, B) \in \mathcal{E}^{2} \}$


espace affine engendré par une famille de points $\mathcal{A}$
?
plus petit espace affine contenant tous les points de $\mathcal{A}$
C'est l'intersection de tous les espaces affines contenant $\mathcal{A}$
<!--SR:!2023-07-15,17,273-->


valeur propre d'une matrice $M$
??
Soit $M$ une matrice
un **scalaire $\lambda$ tel que** :
il existe un vecteur $u \neq \vec{0}$ tel que $Mu = \lambda u$
<!--SR:!2024-04-26,365,293!2025-05-15,693,313-->

valeur propre d'une application linéaire $\varphi$
??
Soit $\varphi$ une application linéaire
un **scalaire $\lambda$ tel que** :
il existe un vecteur $u \neq \vec{0}$ tel que $\varphi(u) = \lambda u$
<!--SR:!2024-09-12,496,313!2025-05-14,692,313-->

vecteur propre d'une application linéaire $\varphi$
??
Soit $\varphi$ une application linéaire
un **vecteur $u \neq \vec{0}$ tel que** :
il existe un scalaire $\lambda$ tel que $\varphi(u) = \lambda u$
<!--SR:!2024-08-12,465,293!2023-12-15,224,313-->

vecteur propre d'une matrice $M$
??
Soit $M$ une matrice
un **vecteur $u \neq \vec{0}$ tel que** :
il existe un scalaire $\lambda$ tel que $Mu = \lambda u$
<!--SR:!2024-07-27,449,290!2024-07-31,453,293-->

comment diagonaliser une matrice
?
Soit $M$ une matrice
 - calculer les [[valeur propre d'une matrice|valeurs propres]] $\lambda$
     - ma [[matrice diagonale]] dont les coefficients sont ces valeurs propres est la matrice diagonalisée, $D$
     - [!] la matrice est diagonalisable seulement si il y à assez de valeurs propres distinctes (on veut $\dim D = \dim M$)
 - pour chaque [[valeur propre d'une matrice|valeur propre]] 
     - calculer [[sous espace propre|sous espace vectoriel des vecteurs propres associés]] à cette [[valeur propre d'une matrice|valeur propre]]
     - calculer la [[base d'un espace vectoriel|base]] de ce [[sous espace vectoriel]] 
 - la concaténation des vecteurs des [[base d'un espace vectoriel|bases]] de tous les [[sous espace propre|sous espaces propres]] forme une matrice $P$
     - [!] il faut mettre ces vecteurs dans le même ordre que les valeurs propres dans $D$
     - cette matrice est la matrice de passage qui va de $M$ à $D$ : $A = PDP^{-1}$
<!--SR:!2025-02-12,601,272-->

trace d'une matrice $M$ ($\mathrm{Tr}(M)$)
??
soit M une matrice $n\times n$
la somme des coefficients diagonaux de $M$
$\displaystyle\sum\limits_{k=1}^{n} M_{k,k}$
<!--SR:!2025-03-19,636,293!2024-06-13,405,273-->


[[matrice orthogonale]] 
??
Matrice $M$ telle que $^TM = M^{-1}$
(on montre qu'elle est composée de vecteurs unitaires)
<!--SR:!2023-08-27,66,253!2024-01-26,218,253-->

[[matrice symétrique]] 
??
Matrice $M$ telle que $M = \,^T M$
<!--SR:!2025-05-21,699,332!2023-07-10,151,313-->

[[matrice antisymétrique]] 
??
Matrice $M$ telle que $\,^T M = -M$
<!--SR:!2024-09-10,494,333!2025-03-18,635,293-->

Formule pour l'inverse d'une matrice 
?
$M^{-1} = \dfrac{1}{\det M} \times \,^T \mathrm{comat}(M)$
<!--SR:!2025-03-31,648,293-->

[[matrice diagonale]] 
??
Matrice $M$ telle que $i \neq j \implies M_{i,j} = 0$
Seules la diagonale est non-nulle
<!--SR:!2025-04-29,677,312!2024-08-11,464,313-->




# Bases

[[base duale d'une famille de formes linéaires|base duale]]



- [ ] #todo: pour l'algèbre linéaire


