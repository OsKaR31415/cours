#maths/algèbre #flashcards/maths/algèbre

# Structures 

propriétés d'un semi groupe
??
une loi de composition **interne**
et **associative**
<!--SR:!2023-01-17,92,192!2023-05-16,156,292-->

propriétés d'un groupe
??
une loi de composition **interne**
et **associative**
Il existe un **élément neutre**
Tous les éléments ont un **symétrique**
<!--SR:!2023-05-31,254,310!2023-07-22,223,312-->

propriétés d'un monoïde
??
une loi de composition **interne**
et **associative**
Il existe un **élément neutre**
<!--SR:!2022-12-22,11,192!2023-01-31,75,272-->

l'**ordre d'un groupe** est...
??
le _nombre d'éléments_ de son ensemble sous-jacent 
<!--SR:!2023-10-28,365,312!2022-12-09,53,292-->

l'**ordre** d'un **élément** $a$ d'un groupe est...
??
le plus petit nombre $n$ tel que $a^{*n}=a$
<!--SR:!2022-12-17,133,292!2023-03-16,119,292-->

propriétés d'un [[espace vectoriel]] 
??
$(E, +, \cdot)$ tel que :
 - $(E, +)$ est un [[groupe abélien]] 
     - [[loi de composition interne]] 
     - [[commutativité|commutative]] 
     - un [[élément neutre]] 
     - tous les éléments sont [[éléments symétrisables|symétrisables]] 
 - $\cdot$ est [[distributivité|distributive]] sur $+$
<!--SR:!2023-03-14,117,272!2023-05-22,162,292-->


sous espace vectoriel
?
 - $0_{E} \in F$
 - $\forall (u, v) \in E^{2}, \forall \lambda \in \mathbb{R}, \lambda u + v \in F$ (stable par combinaison linéaire)
<!--SR:!2022-12-02,35,302-->

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


espace affine engendré par La famille de points $(\mathcal{A}_{i})$
$Aff(\mathcal{A})$
?
Plus petits espace affine contenant tout les points d'une famille de points $(\mathcal{A}_{i})$
$\begin{align} Aff(\mathcal{A}) &= \mathcal{A}_0+Vect(\{ \overrightarrow{\mathcal{A}_0M} \mid M \in \mathcal{A} \}) \\ &= \mathcal{A}_0 + Vect(\{ \overrightarrow{\mathcal{A}_0\mathcal{A}_1}, \overrightarrow{\mathcal{A}_0\mathcal{A}_2}, \dots, \overrightarrow{\mathcal{A}_0\mathcal{A}_{k}} \}) \end{align}$
$Aff(\mathcal{A})$ se construit avec une origine dans $\mathcal{A}$, et avec toutes les translations engendrées par la famille des vecteurs $\{ \overrightarrow{\mathcal{A}_{0}M} \mid M \in \mathcal{A} \}$

direction d'un espace affine $\mathcal{E}$
??
Soit $\mathcal{E}$ un espace affine
l'ensemble $\{ \overrightarrow{AB} \mid (A, B) \in \mathcal{E}^{2} \}$

[[théorème du rang]] 
??
Soient $E$ et $F$ deux espaces vectoriels de dimension finie
Soit $f : E \to F$
on a :
$\boxed{\dim(\mathrm{Im}(f)) + \dim(\ker(f)) = \dim(E)}$


Montrer que $F$ est un [[sous espace vectoriel]] de $E$
?
 - $F \subset E$
 - $\vec{0}_{E} \in F$
 - $F$ est stable par combinaisons linéaires

Somme d'espaces vectoriels $E+F$
?
$E + F = \{ e + f \mid e \in E \wedge f \in F \}$


# Applications

application bilinéaire 
?
Application $f: E^{2} \to \mathbf{K}$ telle que :
 - $f(( \textcolor{green}{a_{1}}\textcolor{royalblue}{u_{1}} + \textcolor{orange}{a_{2}}\textcolor{royalblue}{u_{2}}; v )) = \textcolor{green}{a_{1}}f((\textcolor{royalblue}{u_{1}}; v)) + \textcolor{orange}{a_{2}}f((\textcolor{royalblue}{u_{2}}; v))$
 - $f(( u; \textcolor{green}{a_{1}}\textcolor{royalblue}{v_{1}} + \textcolor{orange}{a_{2}}\textcolor{royalblue}{v_{2}} )) = \textcolor{green}{a_{1}}f((u;\textcolor{royalblue}{v_{1}})) + \textcolor{orange}{a_{2}}f((u;\textcolor{royalblue}{v_{2}}))$
<!--SR:!2023-01-18,62,283-->

application symétrique 
??
Application $f : E^{2} \to \mathbf{K}$ telle que 
$\forall  (u, v) \in E^{2}, \quad f((u;v)) = f((v;u))$
<!--SR:!2023-06-14,185,323!2022-12-01,34,283-->



# Matrices 


Matrice de rotation en 2D (angle $\theta$) ::: $\large\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}$
<!--SR:!2022-11-30,3,224!2023-01-06,43,284-->

Matrice de symétrie en 2D (angle $\theta$) ::: $\large \begin{pmatrix}\cos \theta & \sin \theta \\ \sin \theta & -\cos \theta\end{pmatrix}$
<!--SR:!2022-11-26,1,250!2023-01-05,25,270-->

[[direction d'un espace affine]] ::: Ensemble des vecteurs formés par deux points d'un [[espace affine]] 

espace affine engendré par une famille de points $\mathcal{A}$
?
plus petit espace affine contenant tous les points de $\mathcal{A}$
C'est l'intersection de tous les espaces affines contenant $\mathcal{A}$

valeur propre d'une matrice $M$
??
Soit $M$ une matrice
un **scalaire $\lambda$ tel que** :
il existe un vecteur $u \neq \vec{0}$ tel que $Mu = \lambda u$

valeur propre d'une application linéaire $\varphi$
??
Soit $\varphi$ une application linéaire
un **scalaire $\lambda$ tel que** :
il existe un vecteur $u \neq \vec{0}$ tel que $\varphi(u) = \lambda u$

vecteur propre d'une application linéaire $\varphi$
??
Soit $\varphi$ une application linéaire
un **vecteur $u \neq \vec{0}$ tel que** :
il existe un scalaire $\lambda$ tel que $\varphi(u) = \lambda u$

vecteur propre d'une matrice $M$
??
Soit $M$ une matrice
un **vecteur $u \neq \vec{0}$ tel que** :
il existe un scalaire $\lambda$ tel que $Mu = \lambda u$

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

trace d'une matrice $M$ ($\mathrm{Tr}(M)$)
??
soit M une matrice $n\times n$
la somme des coefficients diagonaux de $M$
$\displaystyle\sum\limits_{k=1}^{n} M_{k,k}$


[[matrice orthogonale]] 
??
Matrice $M$ telle que $^TM = M^{-1}$
(on montre qu'elle est composée de vecteurs unitaires)

[[matrice symétrique]] 
??
Matrice $M$ telle que $M = \,^T M$

[[matrice antisymétrique]] 
??
Matrice $M$ telle que $M = - \,^TM$

Formule pour l'inverse d'une matrice 
?
$M^{-1} = \dfrac{1}{\det M} \times \,^T \mathrm{comat}(M)$

[[matrice diagonale]] 
??
Matrice $M$ telle que $i \neq j \implies M_{i,j} = 0$
Seules la diagonale est non-nulle




- [ ] #todo: pour l'algèbre linéaire


