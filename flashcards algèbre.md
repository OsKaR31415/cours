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
<!--SR:!2023-02-05,35,192!2023-01-31,75,272-->

l'**ordre d'un groupe** est...
??
le _nombre d'éléments_ de son ensemble sous-jacent 
<!--SR:!2023-10-28,365,312!2023-07-08,188,292-->

l'**ordre** d'un **élément** $a$ d'un groupe est...
??
le plus petit nombre $n$ tel que $a^{*n}=a$
<!--SR:!2024-01-01,365,312!2023-03-16,119,292-->

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
<!--SR:!2023-02-11,2,233-->


espace affine engendré par La famille de points $(\mathcal{A}_{i})$
$Aff(\mathcal{A})$
?
Plus petits espace affine contenant tout les points d'une famille de points $(\mathcal{A}_{i})$
$\begin{align} Aff(\mathcal{A}) &= \mathcal{A}_0+Vect(\{ \overrightarrow{\mathcal{A}_0M} \mid M \in \mathcal{A} \}) \\ &= \mathcal{A}_0 + Vect(\{ \overrightarrow{\mathcal{A}_0\mathcal{A}_1}, \overrightarrow{\mathcal{A}_0\mathcal{A}_2}, \dots, \overrightarrow{\mathcal{A}_0\mathcal{A}_{k}} \}) \end{align}$
$Aff(\mathcal{A})$ se construit avec une origine dans $\mathcal{A}$, et avec toutes les translations engendrées par la famille des vecteurs $\{ \overrightarrow{\mathcal{A}_{0}M} \mid M \in \mathcal{A} \}$
<!--SR:!2023-01-15,9,293-->

direction d'un espace affine $\mathcal{E}$
??
Soit $\mathcal{E}$ un espace affine
l'ensemble $\{ \overrightarrow{AB} \mid (A, B) \in \mathcal{E}^{2} \}$
<!--SR:!2023-01-07,4,293!2023-01-26,15,273-->

[[théorème du rang]] 
??
Soient $E$ et $F$ deux espaces vectoriels de dimension finie
Soit $f : E \to F$
on a :
$\boxed{\dim(\mathrm{Im}(f)) + \dim(\ker(f)) = \dim(E)}$
<!--SR:!2023-06-01,112,253!2023-01-19,13,293-->


Montrer que $F$ est un [[sous espace vectoriel]] de $E$
?
 - $F \subset E$
 - $\vec{0}_{E} \in F$
 - $F$ est stable par combinaisons linéaires
<!--SR:!2023-01-07,4,293-->

Somme d'espaces vectoriels $E+F$
?
$E + F = \{ e + f \mid e \in E \wedge f \in F \}$
<!--SR:!2023-01-12,6,273-->


Théorème des bases incomplètes
??
Soit $E$ un [[espace vectoriel]] de [[dimension d'un espace vectoriel|dimension]] finie
Soit $\mathcal{F}$ une [[famille de vecteurs libre|famille libre]] de vecteurs de $E$.
On peut toujours ajouter un nombre fini de vecteurs à $\mathcal{F}$ pour qu'elle devienne une base de $E$
(Ces vecteurs ajoutés rendent $\mathcal{F}$ [[famille de vecteurs génératrice|génératrice]] )
<!--SR:!2023-01-29,18,293!2023-01-25,14,273-->

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
<!--SR:!2023-06-14,185,323!2023-09-14,256,303-->



# Matrices 


Matrice de rotation en 2D (angle $\theta$) ::: $\large\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}$
<!--SR:!2023-02-17,47,224!2023-06-25,170,304-->

Matrice de symétrie en 2D (angle $\theta$) ::: $\large \begin{pmatrix}\cos \theta & \sin \theta \\ \sin \theta & -\cos \theta\end{pmatrix}$
<!--SR:!2023-02-18,48,250!2023-01-05,25,270-->

[[direction d'un espace affine]] ::: Ensemble des vecteurs formés par deux points d'un [[espace affine]] 
<!--SR:!2023-01-07,4,293!2023-01-04,1,253-->
$\{ \overrightarrow{AB} \mid (A, B) \in \mathcal{E}^{2} \}$


espace affine engendré par une famille de points $\mathcal{A}$
?
plus petit espace affine contenant tous les points de $\mathcal{A}$
C'est l'intersection de tous les espaces affines contenant $\mathcal{A}$
<!--SR:!2023-01-07,4,293-->


valeur propre d'une matrice $M$
??
Soit $M$ une matrice
un **scalaire $\lambda$ tel que** :
il existe un vecteur $u \neq \vec{0}$ tel que $Mu = \lambda u$
<!--SR:!2023-01-06,3,273!2023-01-07,4,293-->

valeur propre d'une application linéaire $\varphi$
??
Soit $\varphi$ une application linéaire
un **scalaire $\lambda$ tel que** :
il existe un vecteur $u \neq \vec{0}$ tel que $\varphi(u) = \lambda u$
<!--SR:!2023-01-07,4,293!2023-01-07,4,293-->

vecteur propre d'une application linéaire $\varphi$
??
Soit $\varphi$ une application linéaire
un **vecteur $u \neq \vec{0}$ tel que** :
il existe un scalaire $\lambda$ tel que $\varphi(u) = \lambda u$
<!--SR:!2023-01-06,3,273!2023-02-09,29,313-->

vecteur propre d'une matrice $M$
??
Soit $M$ une matrice
un **vecteur $u \neq \vec{0}$ tel que** :
il existe un scalaire $\lambda$ tel que $Mu = \lambda u$
<!--SR:!2023-01-18,12,270!2023-01-12,6,273-->

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
<!--SR:!2023-01-07,4,252-->

trace d'une matrice $M$ ($\mathrm{Tr}(M)$)
??
soit M une matrice $n\times n$
la somme des coefficients diagonaux de $M$
$\displaystyle\sum\limits_{k=1}^{n} M_{k,k}$
<!--SR:!2023-01-16,10,273!2023-01-24,13,253-->


[[matrice orthogonale]] 
??
Matrice $M$ telle que $^TM = M^{-1}$
(on montre qu'elle est composée de vecteurs unitaires)
<!--SR:!2023-01-14,8,273!2023-01-07,3,253-->

[[matrice symétrique]] 
??
Matrice $M$ telle que $M = \,^T M$
<!--SR:!2023-02-22,42,312!2023-07-10,151,313-->

[[matrice antisymétrique]] 
??
Matrice $M$ telle que $\,^T M = -M$
<!--SR:!2023-02-12,32,313!2023-01-17,11,273-->

Formule pour l'inverse d'une matrice 
?
$M^{-1} = \dfrac{1}{\det M} \times \,^T \mathrm{comat}(M)$
<!--SR:!2023-01-06,3,273-->

[[matrice diagonale]] 
??
Matrice $M$ telle que $i \neq j \implies M_{i,j} = 0$
Seules la diagonale est non-nulle
<!--SR:!2023-01-20,14,292!2023-01-28,17,293-->




- [ ] #todo: pour l'algèbre linéaire


