<template>
        <div id="layout-header" class="layout-header">
            <div class="layout-header-img">
                <img :src="images.sample" class="layout-header-picture">
            </div>
            <div class="layout-header-icons">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }" class="icons" size="3x"/>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter-square' }" class="icons" size="3x"/>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" class="icons" size="3x"/>
            </div>
        </div>
</template>

<script>
    export default {
        name: "layout-header",
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
.layout-header{
    width: 100%;
    height: 12%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-image: linear-gradient(to right, #bdc3c7, #2c3e50) !important;
    box-shadow: 0 4px 8px 0 rgba(0, 1, 1, 0.2), 0 6px 20px 0 rgba(0, 1, 1, 0.19);
}

.icons {
    color: white;
    padding-right: 10%;
}

.layout-header-icons,
.layout-header-img{
    margin-top: 10px;
}

.layout-header-picture{
    padding-left: 10%;
    width: 170px;
}
</style>