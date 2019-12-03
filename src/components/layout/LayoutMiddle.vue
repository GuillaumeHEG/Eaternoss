<template>
    <div id="layout-middle" class="layout-middle">
        <transition name="moveInUp">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "layout-middle"
    }
</script>

<style scoped>


.layout-middle{
    float: left;
    width: 65%;
    height: 100%;
    overflow-y: scroll;
}
</style>