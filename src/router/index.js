import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import Index from '../pages/index.vue'
import Video from '@/pages/Video'
import Project_Information from '@/pages/Project_Information'
import Major_Project from '@/pages/Major_Project'
import Open_Government from '@/pages/Open_Government'
import Article_Content from '@/pages/Article_Content'
import Question_Trends from '@/pages/Question_Trends'
import Question_fankui from '@/pages/Question_fankui'



import Itemtb from '../pages/itemtianbao.vue'
import tjsuccess from '../components/tjsuccess.vue'
import jzgs from '../pages/jzgs.vue'
import jianyanxc from '../pages/jianyanxc.vue'
import jyxcsuccess from '../components/jyxcsuccess.vue'
import dayliscen from '../pages/dayliscen.vue'
import zhengce from '../pages/zhengce.vue'


import Signup from '../pages/signup.vue'
import Login from '../components/Login.vue'
import perLogin from '../components/perLogin.vue'
import legalLogin from '../components/legalLogin.vue'
import perForgetpsw from '../components/perForgetpsw.vue'
import perResnow from '../components/perResnow.vue'
import pertxUser from '../components/pertxUser.vue'
import peryzSf from '../components/peryzSf.vue'
import perResfinish from '../components/perResfinish.vue'
import perforgetsfYz from '../components/perforgetsfYz.vue'
import pertwomethods from '../components/pertwomethods.vue'
import perfirst from '../components/perfirst.vue'
import persecond from '../components/persecond.vue'
import pernewpsw from '../components/pernewpsw.vue'
import perforfinish from '../components/perforfinish.vue'
import legalResnow from '../components/legalResnow.vue'
import legalunit from '../components/legalunit.vue'
import legalaccount from '../components/legalaccount.vue'
import lgResfinish from '../components/lgResfinish.vue'
import lgforaccount from '../components/lgforaccount.vue'
import lgforyzsf from '../components/lgforyzsf.vue'
import lgforfinish from '../components/lgforfinish.vue'
import lgpswfor from '../components/lgpswfor.vue'
import lgpswgetsfYz from '../components/lgpswgetsfYz.vue'
import lgnewpsw from '../components/lgnewpsw.vue'
import lgpswfinish from '../components/lgpswfinish.vue'



import ArticleList from '@/components/ArticleList'
import T from '@/backup/Index'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/index",
    name: 'Index',
    component: Index
  },



  {
    path: '/itemtb',
    name: 'itemtb',
    component: Itemtb,
  },
  {
    path: '/tjsuccess',
    name: 'tjsuccess',
    component: tjsuccess
  },
  {
    path: '/jzgs',
    name: 'jzgs',
    component: jzgs
  },
  {
    path: '/jianyanxc',
    name: 'jianyanxc',
    component: jianyanxc
  },
  {
    path: '/jyxcsuccess',
    name: 'jyxcsuccess',
    component: jyxcsuccess                                   
  },
  {
    path:'/daylisten',
    component:dayliscen
  },





  {
    path: '/index/video',
    name: 'Video',
    component: Video
  },
  //项目资讯
  {
    path: '/index/project_information',
    name: 'Project_Information',
    component: Project_Information,
  },

  //重点项目
  {
    path: '/index/major_project',
    redirect:'/index/major_project/production_show',
    name: 'Major_Project',
    component: Major_Project,
    children:[
      {
        path:'production_show',
        component:ArticleList
      },
      {
        path:'progress_show',
        component:ArticleList
      },
      {
        path:'supervision',
        component:ArticleList
      }
    ]
  },
  //政务公开

  {
    path: '/index/open_goverment',
    redirect: '/index/open_goverment/picture_policy',
    name: 'Open_Goverment',
    component: Open_Government,
    children: [
      {
        path: 'latest_goverment_affairs',
        component: ArticleList,
      },
      {
        path: 'picture_policy',
        component: ArticleList,
      },
    ]
  },
  //搜索
  {
    path:'/index/zhengce',
    component:zhengce
  },


  //项目资讯

  {
    path: '/index/project_information/article_content',
    name: 'project_information',
    component: Article_Content
  },

  //重点项目

  {
    path: '/index/major_project/article_content',
    name: 'major_project',
    component: Article_Content
  },

  {
    path: '/index/major_project/production_show/article_content',
    name: 'major_project',
    component: Article_Content
  },
  {
    path: '/index/major_project/progress_show/article_content',
    name: 'major_project',
    component: Article_Content
  },
  {
    path: '/index/major_project/supervision/article_content',
    name: 'major_project',
    component: Article_Content
  },

  //政务公开
  {
    path: '/index/open_goverment/article_content',
    name: 'open_goverment',
    component: Article_Content,
  },

  {
    path: '/index/open_goverment/latest_goverment_affairs/article_content',
    name: 'open_goverment',
    component: Article_Content
  },
  {
    path: '/index/open_goverment/picture_policy/article_content',
    name: 'open_goverment',
    component: Article_Content
  },

  {
    path: '/index/zhengce/article_content',
    name: 'zhengce',
    component: Article_Content
  },
  // {
  //   path: '/index/open_goverment/latest_goverment_affairs/article_content',
  //   name: 'open_government2',
  //   component: Article_Content
  // },
  {
    path: '/T',
    name: 'T',
    component: T
  },


  
  //问题征解
  //征解动态
  {
    path: '/index/question_trends',
    name: 'Question_Trends',
    component: Question_Trends,
    children: [
      {
        path: 'articlelist',
        component: ArticleList,
      },
    ]
  },
  {
    path:'/index/question_trends/article_content',
    name:'question_trends',
    component:Article_Content
  },
  {
    path:'/index/question_fankui',
    name:'Question_fankui',
    component:Question_fankui
  },

















  {
    path:"/signup",
    name: 'Signup',
    component: Signup,
    redirect:'/signup/Login',
    // redirect:'/signup/perLogin',//选定默认的子组件
    children:[{
      path:'Login',
      component: Login,
      redirect:'/signup/Login/perLogin',
      children:[
        {
          path:'perLogin',//个人登录页面
          component:perLogin,
        },
        {
          path:'legalLogin',//法人登录页面
          component:legalLogin,
        }],
      },
      {
        path:'perForgetpsw',//个人忘记密码
        component:perForgetpsw,
      },
      {
        path:'perforgetsfYz',//个人密码找回，身份验证
        component:perforgetsfYz,
        redirect:'/signup/perforgetsfYz/pertwomethods',
        children:[
          {
            path:'pertwomethods',
            component:pertwomethods,
          },
          {
            path:'perfirst',
            component:perfirst,
          },
          {
            path:'persecond',
            component:persecond,
          },
        ]
      },
      {
        path:'pernewpsw',//个人密码找回，设置新密码
        component:pernewpsw,
      },
      {
        path:'perforfinish',//个人密码找回，完成
        component:perforfinish,
      },
      {
        path:'perResnow',//个人注册，验证手机号
        component:perResnow,
      },
      {
        path:'pertxUser',//个人注册，填写账号
        component:pertxUser,
      },
      {
        path:'peryzSf',//个人注册，验证身份
        component:peryzSf,
      },
      {
        path:'perResfinish',//个人注册，完成
        component:perResfinish,
      },
      {
        path:'legalResnow',
        component:legalResnow,//法人注册，法人认证
      },
      {
        path:'legalunit',
        component:legalunit,//法人注册，填写单位信息
      },
      {
        path:'legalaccount',
        component:legalaccount,//法人注册，填写账号信息
      },
      {
        path:'lgResfinish',
        component:lgResfinish,//法人注册，完成
      },
      {
        path:'lgforaccount',
        component:lgforaccount,//法人账号找回，填写信息
      },
      {
        path:'lgforyzsf',
        component:lgforyzsf,//法人账号找回，验证身份
      },
      {
        path:'lgforfinish',
        component:lgforfinish,//法人账号找回，完成
      },
      {
        path:'lgpswfor',
        component:lgpswfor,//法人忘记密码，填写登录账号
      },
      {
        path:'lgpswgetsfYz',
        component:lgpswgetsfYz,//法人忘记密码，验证身份
      },
      {
        path:'lgnewpsw',
        component:lgnewpsw,//法人忘记密码，设置新密码
      },
      {
        path:'lgpswfinish',
        component:lgpswfinish,//法人忘记密码，完成
      }
    ]
  }
]

const router = new VueRouter({
  routes,

  scrollBehavior() {
    return {x: 0, y: 0};
}
})

export default router
