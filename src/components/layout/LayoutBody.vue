<template>
    <div id="layout-body" class="layout-body">
        <layout-left/>
        <layout-middle/>
        <layout-right/>
    </div>
</template>
<script>
    import LayoutMiddle from "@/components/layout/LayoutMiddle";
    import LayoutRight from "@/components/layout/LayoutRight";
    import LayoutLeft from "@/components/layout/LayoutLeft";

    export default {
        name: "layout-body",
        components: {
            'layout-left': LayoutLeft,
            'layout-right': LayoutRight,
            'layout-middle': LayoutMiddle,
        },
    }
</script>

<style scoped>
.layout-body{
    height: 88%;
}
</style>