<template>
    <div id="menu-section" class="menu-section">
        <div class="menu-title">{{ menuTitle }}</div>
        <div class="menu-icon">
            <font-awesome-icon icon="chevron-circle-right" class="menu-fa-icon"></font-awesome-icon>
        </div>

    </div>
</template>

<script>
    export default {
        name: "menu-section",
        props: ['menuTitle']
    }
</script>

<style scoped>
.menu-section{
    border-bottom: solid #b2b2b2;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
}

.menu-icon{
    padding-top: 5%;
    text-align: center;
    padding-right: 10px;
}

.menu-title{
    padding-top: 5%;
    padding-left: 2%;
    text-align: center;
    height: 100%;
    text-decoration: none;
}

.nav-link{
    color: #36393E !important;
}

</style>