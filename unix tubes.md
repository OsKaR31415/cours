up:: [[unix]]
title::
#informatique 

---

> [!definition] Tube
>  - mécanisme de communication entre processus
>  - appartient au système de fichiers
>      - association d'un noeud du système de fichiers (type:`S_IFIFO`)
>      - association de descripteurs (application des appels `read()`, `write()`, ...)
>  - canal **unidirectionnel** (une entrée, une sortie)
>      - association de 2 entrées dans la [[table des descripteurs]] du [[processus]]
>      - association de 2 entrées dans la [[table des fichiers ouverts]]
>  - la lecture y est _destructrive_
>      - les données sont supprimées dès qu'elles sont lues
>  - flot continu de caractères
>  - entrées/sorties en mode [[FIFO]]
^definition


