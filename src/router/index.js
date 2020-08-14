import Vue from 'vue'
import VueRouter from 'vue-router'

import nowPlaying from '../views/films/nowPlaying'
import comingSoon from '../views/films/comingSoon'
import top from '../views/films/top'
import index from '../views/films/index'


import qt from '../views/buttom/qt'
import wd from '../views/buttom/wd'
import yy from '../views/buttom/yy'
import lunbo from '../views/films/lunbo'



Vue.use(VueRouter)

  const routes = [
  
    {
      path:"/",
      redirect:"/films"
    },
    {
      path:"/lunbo",
      component: lunbo
    },
    {
      path:"/films",
      component:index,
      children:[
        {
          path:"nowPlaying",
          component: top,
          children:[
            {
              path:"",
              component:nowPlaying
            }
        
        ]
        },
        {
          path:"comingSoon",
          component: top,
          children:[
            {
              path:"",
              component:comingSoon
            }
        
        ]
        },
        {
          path:"",
          redirect: "nowPlaying"
        }
      ]
    },
    
        {
          path:"/yy",
          component: index,
          children:[
              {
                path:"",
                component:yy
              }
          
          ]
        },
        {
          path:"/qt",
          component: index,
          children:[
            {
              path:"",
              component:qt
            }
        
        ]
        },
        {
          path:"/wd",
          component: index,
          children:[
            {
              path:"",
              component:wd
            }
        
        ]
        }
     
    ,
    {
      path:"*",
      redirect:"/"
    }

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const a = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('hello')
//   }, 2000)
// })
// a.then((res) => {
//   console.log(res)
// })
// 全局守卫
// router.beforeEach((to, from, next) => {
//   // ...
//   console.log("检测是否登录1")
//   next()
// })
// router.beforeEach((to, from, next) => {
//   // ...
//   console.log("检测是否登录2")
//   next()
// })
// router.afterEach((to, from) => {
//   console.log("全局后置狗子")
// })

export default router
