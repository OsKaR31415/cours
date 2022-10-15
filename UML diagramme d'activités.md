up::[[diagramme UML]]

----
 - [?] Pourquoi ?
     - Accent sur les traitement
         - modélisation des flots de contrôle / de données
     - modéliser comportement d'une méthode, déroulement d'un cas d'utilisation

## Dessin

### Composants des diagrammes
 - noeud initial
     - petit cercle plein $\cdot$
     - le flot débute
     - peut avoir plusieurs noeuds initiaux
     - un arc sortant et pas d'arc entrant
 - noeud de fin d'activité
     - cercle vide contenant une petit cercle plein $\bigodot$
     - pas d'arc sortants
 - noeud de décision (*decision node*)
     - noeud de contrôle : faire un choix entre p;usieurs flots sortants
     - arc entrant et plusieurs arcs sortants accompagnés de conditions `[if]` `[else]`
     - graphiquement : ![[UML diagramme d'activités 2022-10-12 13.09.32.excalidraw|80]]
 - noeud de fusion (*merge node*)
     - rassemble plusieurs flots alternatifs entrants en un seul flot sortant
     - accepte un flot parmi plusieurs
     - Graphiquement : ![[UML diagramme d'activités 2022-10-12 13.12.42.excalidraw|80]]
 - noeud de bifurcation (*fork node*)
     - sépare un flot en plusieurs flots concurrents
     - un arc entrant et plusieurs arcs sortants
     - graphiquement : ![[UML diagramme d'activités 2022-10-12 13.14.53.excalidraw|100]]
 - noeud d'union (*join node*)
     - sychronise des flots multiples
     - plusieurs arcs entrants et un seul arc sortant
     - quand tous les arcs entrants sont activés, l'arc sortant l'est aussi
     - graphiquement : ![[UML diagramme d'activités 2022-10-12 13.17.55.excalidraw|100]]
 - Remarque :
     - on peut fusionner un noeud de bifurcation et un noeud d'union pour avoir un triant plein possédant plusieurs arcs entrants et sortants

 - Actions de type Signaux
     - Capteur
         - Action de réception de signal 
         - ![[UML diagramme d'activités 2022-10-13 00.44.20.excalidraw|100]]
     - Actionneur 
         - Action d'envoi de signal
         - ![[UML diagramme d'activités 2022-10-13 00.47.41.excalidraw|100]]
     - Timer
         - Action temporelle
         - ![[UML diagramme d'activités 2022-10-13 00.52.43.excalidraw|70]]

## Exemples

![[UML diagramme d'activités 2022-10-12 13.19.11.excalidraw|700]]



title::![[UML diagramme d'activités 2022-10-13 00.57.02.excalidraw|800]]
