<template>

  <div class="swiper-container myswagger">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
 
    </div>

  
</template>

<script>

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  data() {
    return {
     

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


 },
 created() {


},
 mounted() {
   /* eslint-disable no-new */
    new Swiper('.myswagger', {

        loop: true,
        pagination: {
            el:'.swiper-pagination'
        },
         autoplay: {
             delay:2000,
             disableOnInteraction: false,
         }
    })
}
}
</script>

<style scoped>
    /* .swiper-container {
    width: 100%;
    height: 40%;
 
} */

</style>
