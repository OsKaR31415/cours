#fac/TD 
# architecture des ordinateurs TD2 2022-09-30
![|300](markmind/1664542638114.png)
## Chemins absolus et relatifs
### a.
> Rappeler les notions de chemin absolu et de chemin relatif d'un fichier. Comment reconnaître qu'un fichier est absolu ou relatif ?

### b.
> Pour chaque fichier (ou répertoire), il existe toujours plusieurs chemins relatifs de ce fichier à partir d'un même répertoire courant. Vrai ou faux ?
Oui

> Soit l’arborescence plus haut où les lettres majuscules correspondent à des répertoires et les minuscules à des fichiers. Si D est le répertoire courant, exhiber si possible plusieurs chemins relatifs du fichier d.
`../E/d`, `../../B/E/d`, `../D/../../B/E/d`

### c.
> Pour chaque fichier (ou répertoire), il existe toujours un seul chemin absolu. Vrai ou faux ? Donner un exemple d'arborescence et de chemin(s) qui justifient la réponse
Faux
Exemples : `/B/D/c`, `/A/../B/D/c`

## 2. Liens symboliques et physiques

### a.
> Rappeler ce qu'est un inode. Quelle commande shell permet de connaître l'inode d'un fichier ou d'un répertoire ?
L'[[unix structure inode|inode]] est un identifiant qui est donné de façon unique à chaque fichier
### b.
> Rappeler la différence entre un lien symbolique et un lien physique. Quelle commande shell permet de reconnaître des liens durs et symboliques dans une arborescence de fichiers ?

 - [[unix liens symboliques et physiques|lien physique]] : même fichier (même inode) mais plusieurs entrées dans les tables de répertoires
 - [[unix liens symboliques et physiques|lien symbolique]] : un fichier spécial, qui ne contient que l'inode d'un autre fichier
On peut utiliser `ls -i` pour les reconnaître

### c.