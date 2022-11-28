up::[[SE - page|page]]
title::"la gestion de pages (mémoire) unix"
#informatique 

---

 - page table : une table de page par processus, une entrée pour chaque page en mémoire virtuelle pour ce processus
     - bit de copy on write
         - la page sera copiée si le processus doit écrire dessus (il écrire sur une copie)


# Gestion

## Remplacement des pages

 - méthode Not Recently Used (NRU)
