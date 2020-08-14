<template>
<div>
    

   
 <router-view></router-view>
 
   
    <div class="button">
        <ul>
            <li v-for="(item,index) in list" :key="item.id"  :class="{isActive : curIndex === index}"
            @click="fuc2(item,index)"> 
            <div>
                <i class="iconfont icon-dingdan"></i> 
                 <span>{{item.name}}</span>
            </div>
            </li> 
           
        </ul>

    </div>

</div>
</template>

<script>


export default {
  data() {
    return {
        list:[
            {id:0,name:"电影",router:"/"},
            {id:1,name:"影院",router:"/yy"},
            {id:2,name:"其他",router:"/qt"},
            {id:3,name:"我的",router:"/wd"},
        ],

     
        curIndex: 0


    }
  },
 components: {
 

 },
 props: {


 },
 watch: {


 },
 computed: { 


 },
 methods: { 
     test() {
         
     },
  

     fuc2(item,index) {
      
        console.log("curIndex = "+ this.curIndex + " index=" +index);
        if(this.curIndex == index) {
            return
        }
        this.curIndex =index;
   
        this.$router.push(item.router)
   
    
     }

 },
 created() {


},
 mounted() {


}
}
</script>

<style scoped>
.isActive {
    background: pink;
}
    .button {
        background: mintcream;
        width: 100%;
        position: fixed;
        bottom: 0;
        height: 7%;
   
        right: 0;
    }

    .button ul {
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    
    }
    .button ul li {
   
        font-size: 10px;
        text-align: center;
         height: 100%;
        width: 120px;
      
        color: lightcoral;
        display: flex;
        justify-content: center;
        align-items: center;
    }
       .button ul li  div {
           width: 100%;
           height: 60%;
       }
    .button i {
        display: block;
      
    }

</style>
