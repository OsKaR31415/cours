#CV #PKM
# CV


> [!info]- signification des compétences
> 🤝 : travail en groupe
> 🧑‍🏫 : enseignement, pédagogie, communication
> 🗣 : expression orale, communication
> 🔍 : recherche (scientifique)
> 🧮 : mathématiques 
> 💻 : informatique
> 🎵 : musique

> [!query]- Eléments du CV
> ```dataview
> TABLE date as "début", date-end as "fin", compétences, description
> FROM ""
> WHERE contains(file.tags, "CV")
>    or contains(file.outlinks, [[CV]])
> WHERE file.name != this.file.name
> SORT date
> ```

## Par thèmes

> [!query]- **Mathématiques**
> ```dataview
> TABLE date as "début", date-end as "fin", compétences, description
> FROM ""
> WHERE contains(file.tags, "CV")
>    or contains(file.outlinks, [[CV]])
> WHERE contains(file.tags, "maths")
> WHERE file.name != this.file.name
> SORT date
> ```

> [!query]- **Informatique**
> ```dataview
> TABLE date as "début", date-end as "fin", compétences, description
> FROM ""
> WHERE contains(file.tags, "CV")
>    or contains(file.outlinks, [[CV]])
> WHERE contains(file.tags, "informatique")
> WHERE file.name != this.file.name
> SORT date
> ```

> [!query]- **Anglais**
> ```dataview
> TABLE date as "début", date-end as "fin", compétences, description
> FROM ""
> WHERE contains(file.tags, "CV")
>    or contains(file.outlinks, [[CV]])
> WHERE contains(file.tags, "anglais")
> WHERE file.name != this.file.name
> SORT date
> ```

## textes rédigés

### Profil

Les mathématiques m'ont toujours passionné, et je souhaite depuis longtemps devenir chercheur. Plus récemment, je me suis également intéressé à l'informatique.
Je suis très à l'aise à l'oral, et j'adore transmettre mes conaissances, aider mes camarades, et c'est pourquoi l'ensignement m'attire également, ainsi, le métier d'enseignant-chercheur est l'objectif que je vise.

### Engagement 

J'ai déjà, et je compte développer encore dans le futur des engagements dans des associations qui mettent en avant les mathématiques et les sciences en général, pour tous les publics, comme l'association _[[la nuit des maths]]_, ou bien le _stage Evariste Galois_

