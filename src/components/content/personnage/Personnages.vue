<template>
    <div id="personnages" class="personnages-content">
        <h1>Personnages</h1>
        <display-perso v-show="!form" :persos="persos" @delete:perso="deletePerso" @launchEdit:perso="launchEditPerso" @add="add"/>
        <form-perso v-show="form" :perso="editedPerso" :edit="edit" @add:perso="addPerso" @edit:perso="editPerso" @cancel="cancel"/>
    </div>
</template>

<script>
    import FormPerso from "./FormPerso";
    import DisplayPerso from "./DisplayPerso";

    export default {
        name: 'personnages',
        components: {
            FormPerso,
            DisplayPerso,
        },

        data(){
            return{
                edit: false,
                form: false,

                persos:[
                    {
                        id: 1,
                        nom: 'Poulet',
                        classe: 'Guerrier solaire',
                        race: 'Elfe diurne',
                        resume: 'Un poulet stellaire',
                        pv: 999,
                        pe: 999,
                        pm: 999,
                        atk: 500,
                        agi: 80
                    }
                ],
                editedPerso:{},
            }
        },

        methods:{
            add(){
                this.form = true;
            },
            addPerso(perso){
                const lastId =
                    this.persos.length > 0
                        ? this.persos[this.persos.length - 1].id
                        : 0;
                const id = lastId + 1;
                const newPerso = { ...perso, id };

                this.persos = [...this.persos, newPerso];

                this.form = false;

                this.editedPerso = {
                    id: '',
                    nom: '',
                    classe: '',
                    race: '',
                    resume: '',
                    pv: '',
                    pe: '',
                    pm: '',
                    atk: '',
                    agi: ''
                }
            },
            launchEditPerso(id){
                this.editedPerso = this.persos.find(perso => perso.id === id);

                this.form=true;
                this.edit = true;
            },
            editPerso(id, updatedPerso){
                this.persos = this.persos.map(perso => perso.id === id ? updatedPerso : perso);

                this.edit = false;
                this.form = false;

                this.editedPerso = {
                    id: '',
                    nom: '',
                    classe: '',
                    race: '',
                    resume: '',
                    pv: '',
                    pe: '',
                    pm: '',
                    atk: '',
                    agi: ''
                }
            },
            deletePerso(id){
                this.persos = this.persos.filter(perso => perso.id != id)
            },

            cancel(){
                this.edit = false;
                this.form = false;
                this.editedPerso = {
                    id: '',
                    nom: '',
                    classe: '',
                    race: '',
                    resume: '',
                    pv: '',
                    pe: '',
                    pm: '',
                    atk: '',
                    agi: ''
                }
            }
        },
    }
</script>

<style scoped>
    .personnages-content{
        background-color: #36393E;
        width: 100%;
        height: 100%;
    }
    h1{
        margin-top: 0;
        font-size: 2rem;
        font-weight: bold;
        color: whitesmoke;
    }
</style>
