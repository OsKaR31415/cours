up:: [[Logique séquentielle]] 
title:: "D: state to write", "EN: write satte to memory"
#science 

---

 - le enable peut être connecté à l'horloge pour valider une entrée seulement à chaque tick
     - [c] problème : pendant que le `CLK` est high, changer `D` changera le signal (même au milieu d'un cycle horloge)
         - solution : transfomer les ticks horloge en [[distribution de Dirac|diracs]]


description::![[D latch 2022-11-17 22.30.40.excalidraw]]

schematics:: ![[D latch 2022-11-17 22.33.04.excalidraw|100%]]