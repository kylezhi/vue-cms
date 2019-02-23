
import VueRouter from 'vue-router';

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';

//news
import NewsList from './components/news/NewsList.vue';
import NewsInfo from './components/news/NewsInfo.vue';

// 3. 创建路由对象
let router = new VueRouter({
    routes : [
        { path : '/', redirect : '/home'},
        { path : '/home', component : HomeContainer},
        { path : '/member', component : MemberContainer},
        { path : '/shopcar', component : ShopCarContainer},
        { path : '/search', component : SearchContainer},
        { path : '/home/newslist', component : NewsList},
        { path : '/home/newsinfo/:id', component : NewsInfo},
      
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
});

export default router;