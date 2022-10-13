up:: [[diagramme UML]]
#informatique 
# UML diagramme de classes

 - Reprise du [[modèle entité association]]
     - Entité -> Classe
         - Clés primaire -> adresse mémoire de l'objet

![[diagramme de classe - classes 2022-10-04 08.55.49.excalidraw|700]]

 - Héritage
     - Flèche de la classe fille vers la classe mère
     - Classes abstraites
         - Entre crochets
 - Composition
     - Composition forte
         - destruction de l'objet ===> destruction du composé
         - Losange plein
     - Composition faîble
         - destruction de l'objet =/=> destructon du composé
         - Losange vid[[TD2 base de données]]e
 - Associations
     - Ligne simple
     - [[UML cardinalités|cardinalités d'UML]]
     - Naviguabilité en mettant des flèches aux deux bouts : $\longrightarrow$ 
     - Association N-aire
         - plusieurs classes reliées vers un losange central
     - Associations avec des attributs
         - Ligne pointillée qui relie la ligne d'association et le rectangle des attributs


