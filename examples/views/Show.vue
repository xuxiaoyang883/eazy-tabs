<script>
import Tabs from "dist/tabs";
export default {
    name: 'HelloWorld',
    components:{Tabs},
  data () {
    return {
      data: [
        {
        key:1,
        name:"消费",
        fadeName:"costumer",//router声明的名字
        isActive:true,
       },
       {
        key:2,
        name:"经营",
        fadeName:"trade",
        isActive:false,
       },
       {
        key:3,
        name:"金融",
        fadeName:"finicial",
        isActive:false,
       },
       {
        key:4,
        name:"教育",
        fadeName:"edu",
        isActive:false,
       },
       
     ],
     wrapClass:"yang-wrap",//组件主题颜色
    }
  },
  created(){
  },
  methods:{
    jump(){
      this.$router.push("/tabs/cont")
    }
  },
}
</script>

<template>
    <div id="tabs">
        <tabs :data="data" :wrapClass="wrapClass"/>
    </div>
</template>

<style lang="css">
.yang-wrap p.activeClass{
  color:#EE9A00 !important
}
.yang-wrap .line{
  background-color:#EE9A00 !important
}
</style>