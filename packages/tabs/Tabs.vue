<script>
import TabPanel from "./TabPanel";
import tabContent from "./TabContent";
export default{
    name:"tabs",
    props:{
        data:{
            type:Array,
            default(){
                return []
            }
        },
        wrapClass:{
            type:String,
            default:""
        }
    },
    data(){
        return{
            componentData:{}
        }
    },
    components:{
        TabPanel,
        tabContent
    },
    created(){
        this.componentData = this.data[0];
    },
    methods:{
        tabClick(index){
            this.componentData = this.data[index];
            this.data.map((item,idx)=>{
                if(index === idx){
                    item.isActive = true
                }else{
                    item.isActive = false
                }
            })
        }
    }
}
</script>

<template>
    <div id="tabs" :class="[wrapClass]">
        <tab-panel :data="data" @tabClick="tabClick" :wrapClass="wrapClass"></tab-panel>
        <tab-content :componentData="componentData"></tab-content>
    </div>
</template>

<style lang="css" scoped>

</style>