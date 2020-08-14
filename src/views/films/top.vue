<template>
<div>

        <Swiper :key="imglist.length" ref="swiperte">
             <div  class="swiper-slide"  v-for="(img,index) in imglist" :key="index">
                <img class="qwe" :src="img" >
            </div>
        </Swiper>
 <ul  class="banner">
        <li v-bind:class="{isActive : currentIndex === index}" 
        v-for="(item,index) in list0" :key="item.id" @click="tiaoz(item.id,index)">{{item.name}}</li>
   
    </ul>
    <router-view></router-view>
</div>
</template>

<script>
import Swiper from "./lunbo"
export default {
  data() {
    return {
        list0:[
                    {id:0,name:"即将上映"},
                    {id:1,name:"正在热映"},
                ],
                         imglist:[
             "http://uploads.rayli.com.cn/2020/0727/1595839390706.jpg",
             "http://uploads.rayli.com.cn/2020/0515/thumb_850_500_1589527680556.jpg"
             ,"http://uploads.rayli.com.cn/2019/1127/1574848073434.jpg"
             ],
         currentIndex: 0,

    }
  },
 components: {
    Swiper

 },
 props: {


 },
 watch: {


 },
 computed: { 


 },
 methods: { 
  tiaoz(index,is) {
        this.currentIndex = is;
        if(index == 0) {
        this.$router.push(
                    {
                        path:"/films/nowPlaying"
                    }
                )
        } else {
        this.$router.push(
                    {
                        path:"/films/comingSoon"
                    }
                )
        }
    },

    scro(ev) {
        console.log(this.$refs.swiperte.$el.offsetHeight)
    }

 },
 created() {


},
 mounted() {
     window.onscroll=this.scro;

}
}
</script>

<style scoped>
       .banner {
        background: peachpuff;
     
        width: 100%;
        height: 40px;
        display: flex;
        flex-wrap: nowrap;
    }
    .banner li {
        color: orange;
        text-align: center;
        width: 50%;
        line-height: 40px;
    }
    .isActive {
    border-bottom:violet 3px solid;
}

    .qwe {
        width: 100%;
        height: 300px;
    }
</style>
