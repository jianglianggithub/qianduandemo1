<template>
<div>
 
   
    <ul>
      <li v-for="item in list" :key="item.id">
        <div>
          <img width="80px" height="108px" :src="item.poster">
        </div>
        <div>
          <h4>{{item.name}}</h4>
          <p>观众评分 <span class="fenshu">{{item.grade}}</span></p>
          <p class="hide">{{ actors(item)  }}</p>
          <p>333333</p>
        </div>
        <div>
          <button class="butt">购票</button>
        </div>
        
      </li>
    </ul>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list:[]


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

    actors(item) {
     
          let text = "";
         
            for(let i = 0 ; i < item.actors.length ;i++) {
              text += item.actors[i].name
              console.log( item.actors[i])
            }
            console.log(text)
          return text;
        
      }
 },
 created() {


},
 mounted() {
   console.log("nowPlaying")
   axios({
     url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5180497",
     headers:{
       "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"1597222025276110562557954","bc":"110100"}',
       "X-Host":'mall.film-ticket.film.list'
     }
   }).then(res => {
     this.list = res.data.data.films
   })

}
}
</script>

<style scoped>


  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  ul > li {
    width: 90%;
    display: flex;

  }

  ul > li > div:nth-of-type(1) {
    width: 25%;
  }
    ul > li > div:nth-of-type(2) {
    width: 60%;
  }

    ul > li > div:nth-of-type(3) {
    width: 15%;
    display: flex;
    align-items: center;
  }
  .hide {
    overflow: hidden;
  }
  p {
    font-size: 18px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .fenshu {
    color:lightcoral;
  }

  .butt {
    width: 60px;
    height: 30px;
    border: lightcoral 1px solid;
    background: seashell;
  }
  
</style>
