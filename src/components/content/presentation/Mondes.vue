<template>
    <div class="monde">
    <div class="main">
        <ul>
            <li class="flex-first"><h5>Continent Ouest: Rag'Doh'Yamhnyr</h5>
                <ul class="flex-second">
                    <li class="flex-item">L'Empire, Arungdar'Waterfall</li>
                    <li class="flex-item">La Bibliothèque, Sod'Aegis</li>
                </ul>
            </li>
            <li class="flex-first"><h5>Continent Est: Merun Fortifege</h5>
                <ul class="flex-second">
                    <li class="flex-item">Ferintis - Nord</li>
                    <li class="flex-item">Planteterre - Est</li>
                    <li class="flex-item">Zenephyr - Ouest</li>
                    <li class="flex-item">Courboross - Sud</li>
                </ul>
            </li>
            <li class="flex-first"><h5>Continent Sud: Larn'Koran</h5>
                <ul class="flex-second">
                    <li class="flex-item">Herfentis</li>
                </ul>
            </li>
            <li class="flex-first"><h5>Continent Central: Eïnsfield</h5>
                <ul class="flex-second">
                    <li class="flex-item">Eïnsfield</li>
                </ul>
            </li>
            <li class="flex-first"><h5>Ner'Eht'Agarym</h5>
                <ul class="flex-second">
                    <li class="flex-item">Abnosys</li>
                </ul>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'mondes',
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

    .main {
        position: relative;
        display: inline-block;
        background-color: #36393E;
        width: 100%;
        height: 100%;
        color: whitesmoke;
    }

    h5{
        color: whitesmoke;
        padding-left: 10px;
        border-bottom: 2px solid #7289DA;


    }

    .flex-first {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 15px;
        width: 90%;
        border: 2px solid #7289DA;
        border-radius: 5%;
        box-shadow: 0 4px 8px 0 rgba(0, 1, 1, 0.2), 0 6px 20px 0 rgba(0, 1, 1, 0.19);
        justify-content: center;
    }

    .flex-second {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
        height: 100px;
        width: 100%;
        margin: 15px;
        list-style-type: none;
        text-align: center;
    }

    .flex-item{
        border-left: 2px solid whitesmoke;
        border-right: 2px solid whitesmoke;
        border-radius: 5%;
        box-shadow: 0 4px 8px 0 rgba(0, 1, 1, 0.2), 0 6px 20px 0 rgba(0, 1, 1, 0.19);
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
        padding-top: 35px;
    }

</style>
