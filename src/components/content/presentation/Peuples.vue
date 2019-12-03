<template>
    <div id="peuple">
        <ul id="flex-peuple">
            <li class="container-peuple">Elfes diurnes
                <span class="passage">Une des principales puissances du monde, les elfes de l'Empire ont une politique suprémaciste et interviennent régulièrement dans les affaires internationales
            </span></li>
            <li class="container-peuple">Elfes nocturnes
                <span class="passage">Après les conséquences de la rézérade et les millénaires de chasse par les elfes diurnes, ce qu'il reste d'elfes nocturnes vit soit rassemblé dans leur royaume soit cachés dans les lieux isolés tels que d'anciens donjons ou les forêtts sombres.
            </span></li>
            <li class="container-peuple">Elfes sylvains
                <span class="passage">N'intervenant que rarement dans les affaires internationales, les différents clans d'elfes sylvains dispersés dans les nombreuses forêts du monde se sont érigés, avec les dryades et les druides, comme les protecteurs des forêts dacrées.
            </span></li>
            <li class="container-peuple">Humains
                <span class="passage">Le peuple le plus grand en termes de population, ils entretiennent de bonnes relations avec tous les autres peuples. Bien que l'influence de l'empire ai permis la continuation de l'esclavage mulgar, les lois du royaume changent peu à peu pour
            </span></li>
            <li class="container-peuple">Erétydes
                <span class="passage">"Peuple" consitués de nombreuses espèces, bien que les élémentaires soient considérés comme les érétydes natifs.
			Ils acceptent parmis eux toutes les personnes désireuse d'approfondir et partager leurs connaissances.
			Leur statut de gardiens du savoir les rends très respectés par tous, et ils ne s'impliquent dans des événements qu'en cas de grand besoin
			Ils sont dirigés par les 5 plus grand et plus sages magiciens, appelés les bibliothécaires.
            </span></li>
            <li class="container-peuple">Nains
                <span class="passage">Peuple d'artisans et d'artistes renommés.
		Ils se tiennent généralement à l'écart des affaires politiques, mais peuvent posséder une grande influence si nécessaire.
		Malgré leur victoire, ils ont perdu beaucoup de villes lors de leur guerre contre les orcs il y a 300 ans.
		Royaume
            </span></li>
            <li class="container-peuple">Ondins
                <span class="passage">Peuple aquatique, vivant principalement dans leur archipel
		gardiens des océans, ils n'interviennent que quand celui-ci est menacé.
            </span></li>
            <li class="container-peuple">Mulgars
                <span class="passage">Peuple d'Hommes-bêtes, au apparences extrêmement variées.
			L'esclavage pratiqué par les elfes diurnes et certains humains, et les violences subis en raison de leur ressemblance aux Ush'Gyr les ont rendus très méfiants
			clans très nomades, un dirigeant existe dans le pays mulgar, mais de nombreuses caravanes existent hors du royaume, restant mobiles pour éviter l'esclavage
			ils ont peu d'influence sur les affaires politiques mondiales, malgré leur nombre.
            </span></li>
            <li class="container-peuple">Cygriks
                <span class="passage"> Selon la légende, ce seraient les descendants des dragons et des dieux.
			Leur sang divin s'est dilué depuis longtemps, mais ils conservent leur aspect draconique.
			leurs origines font que beaucoup pensent que les cygriks sont les yeux et les oreilles des dieux, laissés sur Eaternoss pour surveiller le monde en attendant le moment propice à leur retour
			ces rumeurs leur vaut beaucoup de suspicions, mais également de la crainte des autres peuples, pensant que leur mort provoquerait la colère et le retour des dieux.
            </span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'peuples',
        props: {
            msg: String
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #peuple {
        background-color: #36393E;
        width: 100%;
        color: whitesmoke;
    }

    .passage {
        position: absolute;
        display: none;
        font-size: small;
        color: whitesmoke;
    }

    #flex-peuple {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        list-style-type: none;
        align-items: flex-start;
        width: 100%;
        transition: opacity .2s, visibility .2s;

    }

    ul li {
        flex-grow: 1;
        margin: 15px;
        height: 200px;
        width: 200px;
        font-weight: bold;
        font-size: 28px;
        text-align: center;
        opacity: 1;
    }

    ul li:hover .passage {
        display: block;
        visibility: visible;
        max-height: 100%    ;
        max-width: 250px;
        padding-bottom: 20px;
        background-color: rgba(100, 97, 27, 0.8);
    }

    .container-peuple{
        border: 2px solid #7289DA;
        border-radius: 5%;
        box-shadow: 0 4px 8px 0 rgba(0, 1, 1, 0.2), 0 6px 20px 0 rgba(0, 1, 1, 0.19);
    }
</style>