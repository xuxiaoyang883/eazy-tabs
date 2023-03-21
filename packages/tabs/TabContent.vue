<script>
export default {
    props:{
        data:{
            type:Array,
            default(){
                return []
            }
        },
        componentData:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    created(){
    }
}
</script>

<template>
    <div id="box">
        <router-view :name="componentData.fadeName"></router-view>
    </div>
</template>

<style lang="css" scoped>
</style>