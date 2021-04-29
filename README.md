# Application Front-end React.JS avec Requetes API SWAPI
-----
Le projet de cette semaine est la mise en pratique de l'introduction au Framework React.js pour développer des applications complexes. Pour le bien de cette mise en pratique nous requêterons l'API star Wars SWAPI qui propose une liste ordonnée et complexe d'informations sur la saga star Wars.
Notre but sera de créer une application Web capable de naviguer et rechercher parmi les informations fournies dans l'API en proposant une interface agréable et fonctionnelle.
-----
### Technologies 
-----
> Pour réaliser ce projet, j'utilise :
> 
> 1. Node.js
> 2. react.js
> 3. react router dom
> 4. Bootstrap
> 5. Git-GiHub
-----
### Mises à jour
-----
> 1. création du dossier de travail via la console PowerShell, installation de Node.js, installation du dossier projet avec React.js, installation de react router dom, nettoyage des fichiers inutiles et appropriation de la base de dossiers, création du README.md.
> 2. création du README.md dans le dossier src expliquant l'architecture de mon arborescence "composents".
> 3. Étude du cahier des charges et élaboration des documents d'organisation du projet sur GitHub.
> 4. Header - nav - footer faits, accueil statique pratiquement fini.
> 5. Accueil fini en mode static, restera la hauteur de la page à fixer.
> 6. Accueil static terminée, page parcourir statique terminée, http request axios intégré.
> 7. API connectée sur la page Accueil, reste à savoir quoi faire avec les liens des catégories.
-----

##COMPONENTS
-----
Dossier d'architecture des fichiers du site, ici j'organise mes dossiers et fichiers pour une bonne pratique de React, le but étant de prendre dès le début une attitude de projets complexes.
-----
###Architecture
-----
> 1. components - est le dossier parent de tous mes éléments DOM éclatés en parents enfants suivant l'arborescence.
>   1. layout - dossier contenant mes éléments communs à toutes mes pages, header, nav et footer.
>       1. layout>header - dossier contenant les éléments du header.
>       2. layout>nav - dossier contenant l'élément du nav.
>       3. layout>footer - dossier contenant l'élément du footer.
>   2. home - dossier contenant les éléments de la page d'accueil.
>   3. search - dossier contenant les éléments de la page parcourir.
>       1. search>serachezone - dossier contenant l'élément input de saisie de l'utilisateur.
>       2. search>listzone - dossier contenant l'élément affichant la liste renvoyée lors de la saisie de l'utilisateur.
-----