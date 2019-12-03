<template>
        <div id="layout-left" class="layout-left">
            <router-link class="nav-link" to="/"><menu-section menu-title="Home"></menu-section></router-link>
            <router-link class="nav-link" to="/personnages"><menu-section menu-title="Personnages"></menu-section></router-link>
            <router-link class="nav-link" to="/mondes"><menu-section menu-title="Mondes"></menu-section></router-link>
            <router-link class="nav-link" to="/peuples"><menu-section menu-title="Peuples"></menu-section></router-link>
        </div>
</template>

<script>
    import MenuSection from "../menu/MenuSection";
    export default {
        name: "layout-left",
        components: {MenuSection}
    }
</script>

<style scoped>
.layout-left{
    flex-direction: column;
    float: left;
    width: 15%;
    display: flex;
    height: 100%;
    box-shadow: inset -1px 0px 10px 1px #aaaaaa;
}
</style>