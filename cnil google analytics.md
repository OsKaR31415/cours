#conférence #informatique

---
 - Présenté par Frank Bataille
 - Par Loir et cher tech
 - Au campus CCI Blois

# La fin de google analytics ?
-> Décision de la CNIL d'interdire google analytics


# Problème de google analytics
 - Les données personelles sont stockées dans des [[cookies (informatique)|cookies]]
 - Les cookies sont envoyés en amérique 🇺🇸
 - La CNIL souhaite que les données soient stockées uniquement en europe 🇪🇺

- => Décision publiée le 10 février https://vu.fr/TaZe
    - Grandes entreprises mises en demeure

# Quelles données ?
 - Adresse IP du visiteur du site
 - ID du cookie google
 - autres métadonnées
 - ==> **identification possible par combinaison**

 - Données **individuelles**

 - 80% des sites dans le monde utilisent google analytics

 - opinion de + en + sensible aux enjeux de la privacy
     - 94% des utilisateurs consistent la _vie privée_ comme une _préoccupation importante_
     - 37% des utilisateurs font _moins confiance_ aux entreprises quant à l'_utilisation faite de leurs données_

 - Mesures RGPD : 20% à 40% de votre trafic ne remonte plus dans vos outils analytiques



# Que pourrait faire google
## Clauses de protection
 - conclues entre google et l'éditeur du site
 - rendues inopérantes par le _cloud act_
     - L'état américan peut aller chercher n'importe quelle donnée tant que c'est une entreprise américaine
  
## Mesures supplémentaires
 - intentions mais pas de preuve concrète
 - option de tronquer l'IP : pas par défaut
 - Pseudonymisation
     - devenu _profil_
     - est donc équivalent à un individu

## Dérogations (l'utilisateur accepte)
 - consentement souvent non-explicite

# Conclusion
 - sans retour du _privacy shield_ (RGPD américain), pas d'avenir
 - évolutions à court terme peu satisfaisantes
 - coordination européenne forte sur le sujet
 - sactions importantes encourues
=> en l'état actuel : il convient d'explorer les alternatives


# Impacts et perspectives

# Personalisation des pubs
Un bien ou un mal ?
Un est face à un dilemme : on peut préférer avoir une expérience personalisée

# impacts de la suppression des cookies tiers

 - moins de précision dans l'nalyse
 - forte réduction des capacités de civlage des annonceurs => publicités moins efficaces => vaisse du coût du CPM => **moins d'applicaitons et de services gratuits**
 - **Regain d'intérêt pour les données first-party** => profitera principalement aux propriétaires de données 1st party, notamment aux GAFAM...
 - Plus d'attention pour la fidélisation

**Exemple :** Apple a donné un moyen de stopper le système d'analyse de facebook sur ses appareils
=> Facebook à subi des pertes énormes (plus grande perte de l'histoire de la bourse)

# Stratégies publicitaires
## Prise d'empreinte du navigateur
 - reconstituer l'emprunte à partir d'autres données
     - taille de l'écran
     - informations sur l'OS
     - navigateur
     - $\vdots$

## L'identification unique
 - On utilise un seule compte/code/identifiant pour plusieurs services (ce qui leur permet de partager les données)


**Voir** : Site de la IABE (ou YABE ?)


# Outil analytique sans cookie
[plausible](https://plausible.io/plausible.io)

 - les UTM : communiquer en utilisant des [[URL]] enrichies
     - Exemple: `http://_nsights/?utm_source=linkedin&utm_medium=social&utm_campaign=sales-rep-data-blog`
     - Résultats de visites aggrégées


# Conclusion

 - Nouveau site
     - Choisir des alternatives EUR
 - Nouvelles campagnes
     - tester des pubs contextuelles
 - Déjà sur GA
     - paramétrer pour respecter la RGPD


Replay sur Facebook et Youtube.

# La pizza hawaienne
![[pizza hawaienne.excalidraw]]
 - certaines personnent détestent la pizza hawaienne
     - elles ne veulent pas de recommendations contenant des pizzas hawaiennes
     - d'autres personnes aiment ça et veulent des recommendations
     - sans cookies, on ne peut pas avoir de recommendations adaptées 🙁
