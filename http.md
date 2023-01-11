up::[[internet]]
sibling::[[https]]
#informatique

----
Voir : [[https]] : version sécurisée du protocole

Prococole permettant de transmettre des pages hypertexte (codées en [[html]]).

# Déroulement

## Requête par l'utilisateur
Ex: le client envoie: `GET https://www.univ-tours.fr/index.html HTTP/1.1`
Ce qui signifie : Je veux recevoir (`GET`), le fichier `index.html`, situé à la racine (`/`) de la machine `www` du réseau `univ-tours.fr` selon le protocole `http` version `1.1`
Le message sera envoyé à cette machine

## Renvoi du service demandé
Si tout se passe bien, le serveur renvoie la ressource demandée par le client.
