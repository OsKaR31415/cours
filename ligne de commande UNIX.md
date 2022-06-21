#informatique #no-review 
# ligne de commande UNIX

La ligne de commande UNIX est l'interface [[ligne de commande]] implémentée dans le [[système d'exploitation|système]] [[UNIX]].

## Description

### Syntaxe d'une commande

La syntaxe générale d'une commande est :
```sh
$ commande options fichiers_ou_données
```

#### Option

Une option (aussi appelée _flag_, ou _argument_), **modifie le fonctionnement** d'une commande.
Le plus souvent, les options sont introduites par `-` ou par `--`.

Souvent, on peut afficher un résumé des options d'un programme en le lancant avec une des options `?` `-?` `-h` `/?` `/h` `-help` ou `--help`.

### Redirections d'entrée sortie

Par défaut, les commandes récupèrent les données tapées par l'utilisateur au clavier en entrée (stdin).
Par défaut, la sortie des commandes (stdout) est affichée à l'écran.
Par défaut, la sortie des erreur (stderr) est également affichée à l'écran.

#### Commandes de redirection
 - `< entree` les données de la commande (stdin) seront lues dans le fichier `entree` plutôt qu'au clavier
 - `> sortie` la sortie de la command (stdout) sera écrite dans le fichier `sortie`, en l'écrasant si il existait déjà
 - `>> sortie` comme `> sortie` sauf que le fichier n'est pas écrasé (le stdout de la commande est ajouté à la fin du fichier)
 - `2> erreur` les messages d'erreur de la commande (stderr) seront écrits dans le fichier `erreur`. Son ancien contenu est effacé
 - `2>> erreur` le stderr de la commande est ajouté à la fin du fichier `erreur`
 - `2>&1` le stderr est fusionné avec le stdout
 - `1>&2` les données en sortie sont fusionnées avec les messages d'erreur (cas rare)

##### Exemples

 - `sort monfichier` affiche à l'écran les lignes du fichier classées par ordre alphabétique. Si le fichier n'existe pas, un message d'erreur apparaît à l'écran
 - `sort monfichier > resultat 2> problemes` écrit les lignes de `monfichier` triées par ordre alphabétique dans `resultat`. Si le fichier `monfichier` n'existe pas, le message d'erreur est écrit dans le fichier `problemes`

#### Enchaînement des commandes

##### Syntaxe générale
```sh
commande1 options arguments | commande2 options | commande3 ...
```

##### Exemple
 - `find / -size +1000k -mtime -7 | sort | tee trace | less`
     - la commande `find` recherche dans tous les répertoires de l'ordinateur les fichiers de plus de 1000 kilooctets modifiés durant les 7 derniers jours et affiche leur chemin d'accès
     - la commande `sort` fait un tri alphabétique des données reçues en entrée
     - la commande `tee` envoie son stdin à la fois dans le fichier `trace` et dans le stdout
     - la commande `less` permet de visualiser un texte trop long pour tenir en entier à l'écran.


### Métacaractères
Utilisés pour exprimer des noms de fichiers.
 - `?` n'importe quel caractère, une seule fois
 - `*` n'importe quel caractère, 0, une ou plusieurs fois
 - `[c1-c2]` n'importe quel caractères de l'ensemble ordonné commençant par `c1` et terminant par `c2`
 - `\` le caractère suivant de doit pas être traité comme un métacaractère (échappement)
 - `.` le caractère `.` en première position doit être précisé explicitement (car les fichiers dont le nom commence par ce caractère sont des fichiers cachés, ils ne sont dont pas considérés pas défaut)

### Résultat d'une commande comme argument d'une autre

Les \` entourant une commande permettent d'utiliser le résultat de cette commande comme argument(s) dans la line de commande

##### Exemples

```sh
$ echo "Nous sommes le" `date +%d/%m/%y` "et il est" `date +%H:%M:%S`
```

```sh
$ echo "2 + 2 =" `expr 2 + 2`
```

### Faire se suivre des commandes
 - `;` entre deux commandes pour les exécuter l'une après l'autre
 - `&&` (signifie "et") entre deux commandes pour exécuter la seconde uniquement si la première n'a pas renvoyé d'erreur
 - `||` (signifie "ou") entre deux commandes pour exécuter la seconde uniquement si la première a renvoyé une erreur
 - `&` à la fin d'une commande, lance celle-ci en tâche de fond (et renvoie son [[PID]])