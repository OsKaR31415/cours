#flashcards 

----

différence [[unix liens symboliques et physiques|lien physique]] <-> [[unix liens symboliques et physiques|lien symbolique]] 
?
 - [[unix liens symboliques et physiques|lien physique]] 
     - **même fichier**
     - même inode
     - référencé dans plusieurs tables de répertoires
 - [[unix liens symboliques et physiques|lien symbolique]] 
     - **plusieurs fichiers**
     - un original
     - les autres sont des fichiers spéciaux qui ne contiennent qu'une référence (l'inode) du fichier original
<!--SR:!2022-10-15,11,270-->

