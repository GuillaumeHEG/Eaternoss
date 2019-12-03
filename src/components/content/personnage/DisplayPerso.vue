<template>
    <div id="display-perso">
        <p v-show="persos.length<1">
            Aucun personnage
        </p>
        <div id="liste">
            <div v-for="perso in persos" :key="perso.id" class="persos">
                <p class="nom">{{perso.nom}} :</p>
                <p class="race">{{perso.race}}</p>
                <p class="classe">{{perso.classe}}</p>
                <p class="resume">{{perso.resume}}</p>

                <ul class="stats">

                    <li>PV : {{perso.pv}}</li>
                    <li>PM : {{perso.pm}}</li>
                    <li>PE : {{perso.pe}}</li>
                    <li>ATK : {{perso.atk}}</li>
                    <li>AGI : {{perso.agi}}</li>
                </ul>

                <div class="icon-row">
                    <font-awesome-icon icon="edit"  @click="$emit('launchEdit:perso', perso.id)" id="btnEdit" size="2x"/>
                    <font-awesome-icon icon="trash"   @click="$emit('delete:perso', perso.id)" id="btnDelete" size="2x"/>
                </div>

            </div>
        </div>
        <button @click="$emit('add')">Ajouter</button>
    </div>
</template>

<script>
    export default {
        name: "list-perso",

        props:{
            persos: Array,
        },
    }
</script>

<style scoped>
    #display-perso{
        color: whitesmoke;
        background-color: #36393E;
        width: 100%;
        height: 100%;
    }

    .icon-row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 3px;
    }
    #liste{
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-template-rows: auto;
        grid-auto-rows: auto;
        align-content: space-between;
        justify-content: space-between;
    }

    .persos{
        margin: 10px;
        padding-left: 15px;
        border: 2px solid #7289DA;
        border-radius: 5%;
        box-shadow: 0 4px 8px 0 rgba(0, 1, 1, 0.2), 0 6px 20px 0 rgba(0, 1, 1, 0.19);
    }

    #btnEdit{
        margin-bottom: 3px;
        margin-left: 20%;
    }

    #btnDelete{
        margin-bottom: 3px;
        margin-right: 20%;
    }

    .nom{
        font-weight: bold;
    }

    .stats{
        list-style-type: none;
        margin-right: 40px;
    }

</style>