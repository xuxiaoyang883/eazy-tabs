#####
说明:
此组件主要应用于vue2.0+vue-router3及以上运行的。
主要解决原生tab组件的内容模块不能组件化管理。
参照element-tab组件来说，
假设tab页的内容里面涵盖大量逻辑场景的情况下，那么el-tabs就不那么适用了，并且会影响前端性能，详情见下面代码
·
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first"><component1></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"><component2></el-tab-pane>
    <el-tab-pane label="角色管理" name="third"><component3></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"><component4></el-tab-pane>
  </el-tabs>
·


而这款tab插件每次切换的时候只会显示当前组件，原理是依据vue-router动态改变router-view name属性来操作的，具体配置和原理请点击下面链接了解：
https://v3.router.vuejs.org/zh/guide/essentials/named-views.html#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE


组件接受参数
data  type Array[Object]
Object:{
    key：Number ,渲染数据的用v-key
    name:String, 选项卡的标题
    fadeName:String,选项卡对应路由表里components里的字段名
    isActive：Boolean,选项卡是否选中
    }
wrapClass  type   String 组件包装的类名，用于主题颜色修改

具体代码见examples



dist目录是组件压缩过的版本

packages目录是组件原始代码



####
本地项目启动指令:
npm i  //安装依赖
npm run dev
