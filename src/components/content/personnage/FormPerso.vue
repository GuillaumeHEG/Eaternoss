<template>
    <div id="form-perso">
        <form @submit.prevent="handleSubmit" id ="perso" name="perso" action="#">
            <div id="form">
                <fieldset class="field">
                    <legend>Personnage</legend>

                    <label>Nom :
                        <input v-model="perso.nom" type="text" required="required"></label>

                    <label>Classe :
                        <select v-model="perso.classe" required="required">
                            <option value="Guerrier Lunaire">Guerrier Lunaire</option>
                            <option value="Guerrier solaire">Guerrier solaire</option>
                            <option value="Mage">Mage</option>
                            <option value="Assassin">Assassin</option>
                            <option value="Edique">Edique</option>
                        </select></label>

                    <label>Race :
                        <select v-model="perso.race" required="required">
                            <option value="Humain">Humain</option>
                            <option value="Nain">Nain</option>
                            <option value="Elfe diurne">Elfe diurne</option>
                            <option value="Elfe nocturne">Elfe nocturne</option>
                            <option value="Elfe sylvain">Elfe sylvain</option>
                            <option value="Cygrik">Cygrik</option>
                            <option value="Mulgar">Mulgar</option>
                            <option value="Ondin">Ondin</option>
                        </select></label>

                    <label>Résumé du personnage :
                        <textarea v-model="perso.resume" rows="3" cols="30"></textarea></label>
                </fieldset>
                <fieldset class="field">
                    <legend>Stats</legend>

                    <label>pv :
                        <input v-model="perso.pv" type="number" required="required"></label>

                    <label>pe :
                        <input v-model="perso.pe" type="number" required="required"></label>

                    <label>pm :
                        <input v-model="perso.pm" type="number" required="required"></label>

                    <label>atk :
                        <input v-model="perso.atk" type="number" required="required"></label>

                    <label>agi :
                        <input v-model="perso.agi" type="number" required="required"></label>

                </fieldset>
            </div>
            <input v-model="perso.id" type="hidden">
            <div class="container-form-btn">
                <button type="submit" id="button" class="btn-save">Confirmer</button>
                <button @click="$emit('cancel')" class="btn-cancel">Annuler</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "form-perso",

        props:{
            perso: Object,
            edit: Boolean
        },

        data(){
            return{
                submit: false,
                error: false
            }
        },

        methods:{
            handleSubmit(){
                this.submit = true;
                this.error = false;

                if (this.edit === false){
                    this.$emit("add:perso", this.perso)
                }else {
                    this.$emit("edit:perso", this.perso.id, this.perso)
                }

                this.error=false;
                this.submit=false;
            },
        }
    }
</script>

<style scoped>
    #form-perso{
        background-color: #36393E;
        width: 100%;

    }

    #form{
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        color:whitesmoke;
        padding-left: 15%;
    }

    .field{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        color: whitesmoke;
    }

    input,
    select,
    textarea{
        color: whitesmoke;
    }

    fieldset{
        box-shadow: 0 4px 8px 0 rgba(0, 1, 1, 0.2), 0 6px 20px 0 rgba(0, 1, 1, 0.19);
    }

    .btn-save{
        margin-right: 10px;
    }
</style>