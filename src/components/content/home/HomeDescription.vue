<template>
    <div id="home-description" class="home-description">
        <div class="home-description-title">
            <div class="home-description-img">
                <img :src="images.sample" class="home-description-picture">
            </div>
            <div class="home-description-txt">
                <p>
                    3ème millénaire après la Rezerade, de grands troubles agitent le monde d'Eaternoss. Des entités anciennes et des peuples disparus depuis longtemps refont surface, et la révolte gronde.
                    Aiderez-vous à apaiser le monde et rétablir la paix, ou participerez-vous au chaos ambiant ? Ou peut-être préférez-vous simplement visiter les continents, sans vous soucier du reste ? Quel que soit votre choix, bienvenue dans les chroniques d'Eaternoss.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-description",
        data(){
            return {
                images: {
                    sample: require('@/images/header.png')
                },
                fixed : false
            }
        }
    }
</script>

<style scoped>
.home-description{
    background-color: #36393E;
    width: 100%;
    height: 100%;
    color: white;
}

h4{
    margin: 0px;
    color: whitesmoke;
}

.home-description-title{
    padding-top: 80px;
}

.home-description-picture{
    width: 500px;
}

.home-description-txt{
    color: whitesmoke;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    line-height: 32px;
    margin-right: 20px;
    margin-left: 20px;
    text-shadow: 1px 1px grey;
}
</style>