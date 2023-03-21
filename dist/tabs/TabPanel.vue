<script>export default { props:{ data:{ type:Array, default(){ return [] } }, wrapClass:{ type:String, default:"" } }, data(){ return{ labelWidth:0, moveX:0, style:"", } }, mounted(){ let domText = this.$refs.text[0]; this.labelWidth = domText.offsetWidth; }, methods:{ navigate($index){ let lineDom = this.$refs.line; lineDom.classList.add("line-transition"); let domText = this.$refs.text[0]; let marginRight = Number(document.defaultView.getComputedStyle(domText)["margin-right"].split("px")[0]); this.moveX = $index * (marginRight + this.labelWidth); this.$emit("tabClick",$index) } }
}</script><template><div id="panel"><div :class="['wrap',wrapClass]"><p :class="[item.isActive ? 'activeClass' : '']" :key="item.key" @click="navigate(index)" ref="text" v-for="(item,index) in data"> {{item.name}} </p><div :style="{width:labelWidth + 'px',left:moveX + 'px'}" class="line" ref="line"></div></div></div></template><style lang="css" scoped>*{ margin:0; padding: 0;
}
.wrap{ display: flex; position: relative; margin-bottom: 15px;
}
.line{ position: absolute; left: 0; width: 10px; height: 3px; background: red; bottom: 0px; z-index:2;
}
.line-transition{ transition: left 0.2s ease-out;
}
.wrap:after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height:3px; background-color: #e4e7ed; z-index: 1
}
.wrap p{ margin-right: 20px; cursor: pointer; padding: 15px 0; color:#303133;
}
p.activeClass{ color:red;
}</style>